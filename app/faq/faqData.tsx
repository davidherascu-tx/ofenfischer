// --- FAQ DATEN STRUKTUR ---
// `answer` ist reich formatiertes JSX für die Anzeige.
// `answerText` ist eine reine Textzusammenfassung für strukturierte Daten (FAQPage Schema).

export interface FaqItem {
  question: string;
  answerText: string;
  answer: React.ReactNode;
}

export const faqData: FaqItem[] = [
  {
    question:
      "Was muss bei Feuerstellen mit einer Außenluftzuführung, in Verbindung mit Wohnraumlüftungen und Küchenablufthauben beachtet werden?",
    answerText:
      "Es gibt je nach Lüftungssystem verschiedene Lösungen: ein Abgasthermostat, eine Funk-Abluftsteuerung mit raumluftunabhängiger Feuerstätte oder ein Unterdruckwächter, der bei Bedarf die Lüftungsanlage abschaltet. Bei Küchen-Umluftanlagen genügt meist eine raumluftunabhängige Feuerstätte oder ein Unterdruckwächter.",
    answer: (
      <div className="space-y-6">
        <div>
          <h4 className="font-bold text-[#E67E22] mb-2 uppercase tracking-wide text-sm">Fall 1: Kontrollierte Wohnraumlüftung und Küchenabluft nach außen</h4>
          <ul className="space-y-3 text-slate-600 list-disc pl-5">
            <li>
              <strong>Variante Nr. 1:</strong> Ein Abgasthermostat, der im Abgasrohr eingesetzt wird. Bei einer gemessenen Abgastemperatur von 60 – 80°C schaltet dieser die Küchenabluft und den Abluftventilator der kontrollierten Wohnraumlüftung ab.
              <br/><span className="text-sm italic text-slate-500">Nachteil: Lange Nachwärmphase moderner Feuerstätten, wodurch Lüftungssysteme oft erst Stunden nach Erlöschen des Feuers wieder anlaufen.</span>
            </li>
            <li>
              <strong>Variante Nr. 2:</strong> Einsatz einer Funk-Abluftsteuerung für die Küchenabluftanlage und einer DIBt geprüften „raumluftunabhängigen" Feuerstätte.
              <br/><span className="text-sm italic text-slate-500">Nachteil: Begrenzte Auswahl an DIBt geprüften Einsätzen und Komforteinbußen bei der Funk-Steuerung.</span>
            </li>
            <li>
              <strong>Variante Nr. 3:</strong> Einsatz eines Unterdruckwächters. Dieser misst beim Betrieb des Kamins den Wohnraum- und Atmosphärendruck und schaltet bei zu hohem Unterdruck die Küchenabluft und Lüftungsanlagen ab.
            </li>
          </ul>
        </div>

        <div className="border-t border-slate-100 pt-4">
          <h4 className="font-bold text-[#E67E22] mb-2 uppercase tracking-wide text-sm">Fall 2: Kontrollierte Wohnraumlüftung und Küchen-Umluftanlage</h4>
          <ul className="space-y-3 text-slate-600 list-disc pl-5">
            <li>
              <strong>Variante 1:</strong> Einsatz einer DIBt geprüften „raumluftunabhängigen" Feuerstätte.
            </li>
            <li>
              <strong>Variante 2:</strong> Einsatz eines Unterdruckwächters, der den Differenzdruck misst und notfalls die Lüftungsanlage abschaltet.
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    question: "Was ist ein Offener Kamin?",
    answerText:
      "Ein Offener Kamin ist die ursprünglichste Feuerstätte ohne Verglasung mit direktem Kontakt zum Feuer. Der Wirkungsgrad ist sehr gering (ca. 80% Energieverlust durch den Schornstein), weshalb der Einbau in vielen Städten verboten oder stark reglementiert ist.",
    answer: (
      <p>
        Ein Offener Kamin ist die ursprünglichste Art einer Feuerstätte ohne Verglasung, wodurch man direkten Kontakt zum Feuer hat. Die Wärmeabgabe erfolgt ausschließlich über Strahlung.
        <br/><br/>
        <strong>Wichtig:</strong> Der Wirkungsgrad ist sehr gering. Ca. 80% der Energie (inklusive der durch die Zentralheizung aufgewärmten Raumluft) entweichen durch den Schornstein. In vielen Städten ist der Einbau von Offenen Kaminen mittlerweile verboten oder stark reglementiert.
      </p>
    ),
  },
  {
    question: "Was ist ein Heizkamin?",
    answerText:
      "Ein Heizkamin ist die effiziente Weiterentwicklung des offenen Kamins mit Keramikverglasung und Wirkungsgraden über 80%. Die Wärmeabgabe erfolgt über Strahlung und Konvektion, optional mit Speicherelementen.",
    answer: (
      <p>
        Ein Heizkamin ist die effiziente Weiterentwicklung des Offenen Kamins. Er verbindet hohe Heizleistung (Wirkungsgrade über 80%) mit der Sicht auf das Feuer durch eine Keramikverglasung.
        <br/><br/>
        Der Einsatz (Brennzelle) besteht aus Stahl/Guss mit Schamotte- oder Vermiculite-Auskleidung. Die Wärmeabgabe erfolgt über direkte Strahlung und über Warmluft (Konvektion), die durch Gitter in den Raum geleitet wird. Heizkamine können zudem mit Speicherelementen aufgerüstet werden.
      </p>
    ),
  },
  {
    question: "Was ist ein Kachelofen?",
    answerText:
      "Beim Kachelofen stehen Heizleistung und Wirkungsgrad (über 85%) im Vordergrund. Es gibt drei Haupttypen: Warmluftkachelofen mit schneller Wärmeabgabe, Kombikachelofen mit 10-20 Stunden Speicherung und Grundofen mit bis zu 24 Stunden Speicherung.",
    answer: (
      <div className="space-y-4">
        <p>
          Beim Kachelofen stehen Heizleistung und Energieausnutzung (Wirkungsgrad &gt; 85%) im Vordergrund. Die Feuersicht ist oft zweitrangig. Es gibt drei Hauptarten:
        </p>
        <ul className="space-y-2 list-disc pl-5">
          <li><strong>Warmluftkachelofen:</strong> Gusseiserner Einsatz mit metallischen Nachheizflächen. Schnelle Wärmeabgabe (70-80% Konvektion), aber geringe Speicherung. Ideal als reaktionsschnelle Heizung.</li>
          <li><strong>Kombikachelofen:</strong> Warmluftofen mit keramischen Nachheizflächen (Schamotte). Speichert Wärme je nach Bauart 10 bis 20 Stunden.</li>
          <li><strong>Grundofen:</strong> Individuell gemauerter Ofen aus massiver Schamotte. Gibt ca. 80% Strahlungswärme ab und speichert Hitze bis zu 24 Stunden. Dient meist als Einraumheizung.</li>
        </ul>
      </div>
    ),
  },
  {
    question: "Was ist ein Kaminofen?",
    answerText:
      "Der Kaminofen, oft 'Schwedenofen' genannt, ist eine industriell gefertigte, leicht aufzustellende und bei Umzug mitnehmbare Feuerstätte aus Stahl, Guss, Speckstein oder Keramik, oft kombinierbar mit Wärmespeichermodulen.",
    answer: (
      <p>
        Oft als „Schwedenofen" bezeichnet, ist der Kaminofen eine industriell gefertigte Feuerstätte. Er kombiniert die Tradition des Ofens mit modernem Design und großer Sichtscheibe.
        <br/><br/>
        Vorteil: Kaminöfen lassen sich leicht aufstellen und bei einem Umzug mitnehmen. Sie sind in Stahl, Guss, Speckstein oder Keramik erhältlich und oft mit Wärmespeichermodulen kombinierbar.
      </p>
    ),
  },
  {
    question: "Warum sollte man nur naturbelassenes, trockenes Holz verwenden?",
    answerText:
      "Holz ist ein nachwachsender Rohstoff. Zugelassen sind in Kaminöfen nur naturbelassenes, unbehandeltes Holz (1. BImSchV). Scheitholz sollte eine Restfeuchte von unter 25 % haben – feuchtes Holz verbrennt schlechter, erzeugt mehr Rauch und Ruß und liefert weniger Wärme.",
    answer: (
      <p>
        Holz ist ein nachwachsender Rohstoff. In Kaminöfen darf laut 1. BImSchV nur naturbelassenes, unbehandeltes Holz verbrannt werden – lackiertes, beschichtetes oder behandeltes Holz ist verboten. Scheitholz sollte eine Restfeuchte von unter 25 % haben: Feuchtes Holz verbrennt schlechter, erzeugt mehr Rauch und Ruß und liefert deutlich weniger Wärme. Lagern Sie Ihr Holz daher luftig und überdacht, idealerweise ein bis zwei Jahre.
      </p>
    ),
  },
  {
    question: "Muss eine bestehende Holzfeuerstätte mit Filtern nachgerüstet werden?",
    answerText:
      "Ja, abhängig vom Baujahr: Feuerstätten vor 1995 mussten bis Ende 2020 saniert werden, Anlagen von 1995-2010 mussten bei Überschreitung der Grenzwerte bis 31.12.2024 nachgerüstet oder ausgetauscht werden. Es gibt Ausnahmen, z.B. für Grundöfen, Badeöfen oder historische Öfen vor 1950.",
    answer: (
      <div className="space-y-4">
        <p>
          Ja, abhängig vom Baujahr. Feuerstätten vor 1995 mussten bis Ende 2020 saniert werden. Für Anlagen zwischen 1995 und 2010 gelten Grenzwerte (Staub: 150 mg/Nm³, CO: 4000 mg/Nm³). Werden diese nicht eingehalten, musste bis 31.12.2024 nachgerüstet oder ausgetauscht werden.
        </p>
        <p className="font-bold">Ausnahmen von der Nachweispflicht:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Nicht gewerblich genutzte Herde/Backöfen &lt; 15 kW</li>
          <li>Offene Kamine (nur gelegentliche Nutzung erlaubt)</li>
          <li>Grundöfen</li>
          <li>Badeöfen</li>
          <li>Historische Öfen (vor 1950 errichtet)</li>
          <li>Einzelraumfeuerungen, die die alleinige Heizquelle einer Wohneinheit sind.</li>
        </ul>
      </div>
    ),
  },
  {
    question: "Was bedeutet Bauart A 1?",
    answerText:
      "Bauart A erlaubt keine Mehrfachbelegung des Schornsteins. Bauart A1 hat eine selbstschließende Tür, wodurch bis zu 3 Geräte an einen Schornsteinzug angeschlossen werden dürfen – die meisten modernen Kaminöfen sind Bauart A1.",
    answer: (
      <ul className="space-y-3 list-disc pl-5">
        <li>
          <strong>Bauart A:</strong> Feuerungstür kann offen oder geschlossen betrieben werden. Eine Mehrfachbelegung des Schornsteins ist <u>nicht</u> erlaubt.
        </li>
        <li>
          <strong>Bauart A1:</strong> Das Gerät verfügt über eine <strong>selbstschließende Tür</strong> (z.B. per Federkraft). Hier dürfen bis zu 3 Geräte an einen Schornsteinzug angeschlossen werden. Die meisten modernen Kaminöfen sind Bauart A1.
        </li>
      </ul>
    ),
  },
  {
    question: "Was bedeutet die Anforderung der BImSchV. Stufe 1 und Stufe 2?",
    answerText:
      "Die Bundesimmissionsschutzverordnung regelt Emissionsgrenzwerte: Stufe 1 (seit 2010) erlaubt 75 mg/Nm³ Feinstaub und 2000 mg/Nm³ CO. Stufe 2 (seit Ende 2014) verschärft dies auf 40 mg/Nm³ Feinstaub und 1250 mg/Nm³ CO – alle aktuell verkauften Öfen erfüllen Stufe 2.",
    answer: (
      <div className="space-y-3">
        <p>
          Die Bundesimmissionsschutzverordnung (BImSchV) regelt Grenzwerte für Emissionen.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Stufe 1 (seit 2010):</strong> Grenzwerte Feinstaub 75 mg/Nm³, CO 2000 mg/Nm³. Anlagen, die diese erfüllen, haben Bestandsschutz.</li>
          <li><strong>Stufe 2 (seit 31.12.2014):</strong> Strengere Grenzwerte für neue Anlagen: <strong>Feinstaub 40 mg/Nm³</strong> und <strong>CO 1250 mg/Nm³</strong>. Alle von uns heute verkauften Öfen erfüllen diese Normen problemlos.</li>
        </ul>
      </div>
    ),
  },
];
