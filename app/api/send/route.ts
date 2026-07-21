import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { HONEYPOT_FIELD_NAME, TIMESTAMP_FIELD_NAME, isLikelySpam } from '@/lib/antiSpam';

const resend = new Resend(process.env.RESEND_API_KEY);

const labelMapping: Record<string, string> = {
  phone: "Telefonnummer",
  subject: "Betreff",
  vorname: "Vorname",
  nachname: "Nachname",
  strasse: "Straße",
  plz: "PLZ",
  stadt: "Stadt",
  bundesland: "Bundesland",
  telefon: "Telefon",
  einbauzeitraum: "Gewünschtes Einbaudatum",
  lueftungsanlage: "Lüftungsanlage vorhanden?",
  dunstabzugAussen: "Dunstabzug nach Außen?",
  anbauwandMassiv: "Anbauwand massiv?",
  zuluftVorhanden: "Externe Zuluft vorhanden?",
  fussbodenBrennbar: "Fußboden brennbar?",
  schornstein: "Schornstein vorhanden?",
  etage: "Etage",
  deckenhoehe: "Deckenhöhe (cm)",
  aufstellraum: "Aufstellraum",
  flaeche: "Fläche (m²)"
};

// Mapping für Dropdown-Werte aus dem Kontaktformular
const valueMapping: Record<string, Record<string, string>> = {
  subject: {
    "allgemein": "Allgemeine Anfrage",
    "beratung": "Beratungswunsch",
    "service": "Service / Wartung",
    "sonstiges": "Sonstiges"
  }
};

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    if (isLikelySpam(formData)) {
      // Bot erkannt (Honeypot ausgefüllt oder zu schnell abgeschickt):
      // so tun als wäre der Versand erfolgreich, aber nichts verschicken.
      return NextResponse.json({ success: true });
    }

    const type = formData.get('type') as string;
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    const file = formData.get('file') as File | null;

    // Tabelle mit Details erstellen
    const detailsHtml = Array.from(formData.entries())
      .filter(([key]) => ![
        'type', 'name', 'email', 'message', 'file', 'privacyAccepted',
        HONEYPOT_FIELD_NAME, TIMESTAMP_FIELD_NAME,
      ].includes(key))
      .map(([key, rawValue]) => {
        const valueStr = rawValue.toString();
        const label = labelMapping[key] || key.charAt(0).toUpperCase() + key.slice(1);

        let displayValue = valueStr;
        if (valueMapping[key] && valueMapping[key][valueStr]) {
          displayValue = valueMapping[key][valueStr];
        } else if (key === 'subject') {
          // Erster Buchstabe groß für sonstige Betreffzeilen
          displayValue = valueStr.charAt(0).toUpperCase() + valueStr.slice(1);
        } else {
          if (valueStr.length < 10 && !valueStr.includes(' ')) {
             displayValue = valueStr.charAt(0).toUpperCase() + valueStr.slice(1);
          }
        }

        return `
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold; width: 40%; color: #555;">${label}:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${displayValue}</td>
          </tr>`;
      }).join('');

    // --- BETREFF LOGIK ---
    let emailSubject = "";
    let emailHeader = "";
    
    if (type === 'project') {
        // PROJEKT STARTEN
        emailSubject = `🚀 Neue Projektanfrage: ${name}`;
        emailHeader = "Neue Projektanfrage";
    } else if (type === 'service') {
        // KUNDENDIENST (mit eigenem Icon)
        const rawSubject = formData.get('subject') as string; // z.B. "Heizung & Sanitär"
        emailSubject = `🛠️ Service-Auftrag (${rawSubject}): ${name}`;
        emailHeader = "Neuer Service-Auftrag";
    } else {
        // KONTAKT
        let rawSubject = formData.get('subject') as string;
        let cleanSubject = "Allgemein";
        if (rawSubject && valueMapping['subject'] && valueMapping['subject'][rawSubject]) {
            cleanSubject = valueMapping['subject'][rawSubject];
        }
        emailSubject = `✉️ Neue Kontaktanfrage (${cleanSubject}): ${name}`;
        emailHeader = "Neue Kontaktanfrage";
    }

    // Anhänge
    const attachments = [];
    if (file && file.size > 0) {
      const buffer = Buffer.from(await file.arrayBuffer());
      attachments.push({ filename: file.name, content: buffer });
    }

    // Senden
    const { data, error } = await resend.emails.send({
      from: 'Ofenfischer Webseite <onboarding@resend.dev>',
      to: [process.env.CONTACT_RECEIVER_EMAIL || 'info@ofenfischer.de'],
      subject: emailSubject,
      attachments: attachments,
      html: `
        <div style="font-family: Helvetica, Arial, sans-serif; max-width: 600px; color: #333; line-height: 1.6;">
          <h2 style="color: #E67E22; border-bottom: 2px solid #E67E22; padding-bottom: 10px;">
            ${emailHeader}
          </h2>
          
          <p style="font-size: 16px;"><strong>Von:</strong> ${name} (<a href="mailto:${email}" style="color: #E67E22;">${email}</a>)</p>
          
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #E67E22;">
            <p style="margin-top: 0; font-weight: bold; color: #555;">Nachricht / Bemerkung:</p>
            <p style="white-space: pre-wrap; margin-bottom: 0;">${message || 'Keine Nachricht hinterlassen.'}</p>
          </div>

          ${detailsHtml ? `
            <h3 style="margin-top: 30px; color: #333;">📋 Details:</h3>
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              ${detailsHtml}
            </table>
          ` : ''}
          
          <hr style="margin-top: 40px; border: none; border-top: 1px solid #eee;" />
          <p style="font-size: 12px; color: #999; text-align: center;">
            Gesendet am ${new Date().toLocaleDateString('de-DE')} über ofenfischer.de
          </p>
        </div>`
    });

    if (error) return NextResponse.json({ error }, { status: 400 });
    return NextResponse.json({ success: true, data });

  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}