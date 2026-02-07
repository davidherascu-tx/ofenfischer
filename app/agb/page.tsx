"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Scale, Printer } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function AGBPage() {
  
  const agbSections = [
    {
      title: "1. Geltung der Bedingungen",
      content: "Alle unsere Lieferungen, Leistungen und Angebote erfolgen ausschließlich aufgrund dieser Geschäftsbedingungen. Diese gelten auch für künftige Geschäfte, auch wenn sie nicht nochmals ausdrücklich vereinbart werden. Andere Bedingungen haben keine Gültigkeit. Insbesondere werden abweichende Bedingungen und Gegenbestätigungen des Kunden auch dann nicht anerkannt, wenn wir ihnen nicht ausdrücklich widersprechen. Abweichungen von unseren Bedingungen sind nur verbindlich, wenn und soweit sie für jedes einzelne Geschäft schriftlich von uns bestätigt werden."
    },
    {
      title: "2. Vertragserklärungen",
      content: "Ein Vertrag kommt erst mit unserer Auftragsbestätigung zu Stande. Leisten wir ohne vorherige Auftragsbestätigung, gilt unsere Rechnung als Auftragsbestätigung. Sämtliche rechtsgeschäftlichen Erklärungen in Bezug auf diesen Vertrag und die damit zusammenhängenden Geschäfte bedürfen im Übrigen der Textform (elektronische Datenübermittlung mit qualifizierter Signatur, Telefax mit rechtsgültiger Unterschrift oder Schriftform) so weit diese allgemeinen Geschäftsbedingungen nichts anderes bestimmen. Ein Verzicht auf die Einhaltung der Formvorschriften ist nur durch schriftliche Vereinbarung möglich."
    },
    {
      title: "3. Leistungsumfang",
      content: "Für den Umfang unserer Leistungen ist ausschließlich unsere Auftragsbestätigung maßgebend. Angaben zum Leistungsgegenstand beruhen auf den Angaben des Herstellers. Sie dienen lediglich der Bequemlichkeit des Kunden. Für die Richtigkeit dieser Angaben haften wir nur nach den Regelungen in diesen allgemeinen Geschäftsbedingungen und nur, wenn wir im Zeitpunkt des Vertragsschlusses eine etwaige fehlerhafte Angabe kannten oder grob fahrlässig nicht kannten und wenn die Angabe nicht vor Vertragsschluss richtig gestellt bzw. widerrufen war. Teillieferungen sind uns gestattet."
    },
    {
      title: "4. Bauliche Beschaffenheit des Aufstellungsortes",
      content: "Der Kunde ist für seine Angaben zur baulichen Beschaffenheit des Aufstellungsortes sowie der dort vorhandenen Installationen verantwortlich. Mehraufwand, der durch eine Abweichung der Angaben des Kunden von der tatsächlichen Beschaffenheit entsteht, wird gesondert berechnet. Gleiches gilt für solchen Mehraufwand, wer durch nachträglich bekannt gewordene unzureichende statische Belastung oder sonstiger Unzulänglichkeiten des Gebäudes des Kunden bzw. des Aufstellungsortes (z. B. fehlerhafte oder nicht ausreichend dimensionierte Kaminzüge, fehlende oder falsch verlegte Anschlüsse u.ä.) bedingt ist. Wir werden im Rahmen angemessener Sorgfalt den Kunden beraten, inwieweit ggf. bauliche Veränderungen am Gebäude bzw. am Aufstellungsort vorgenommen werden müssen. Unter keinen Umständen sind wir verpflichtet die vorhandene statische Belastbarkeit am Aufstellungsort zu prüfen. Der Kunde ist verpflichtet, an dem mitgeteilten Aufbautag für die freie Zufahrt zu seinem Grundstück und den freien Zugang zum Aufstellungsort zu gewährleisten. Die für unserer Arbeiten notwendigen Betriebsmittel wie Strom und Wasser hat der Kunde kostenfrei zur Verfügung zu stellen. Eine aus der Verletzung dieser Pflichten resultierender Mehraufwand wird gesondert berechnet."
    },
    {
      title: "5. Leistungszeit",
      content: "Leistungszeitangaben sind für uns unverbindlich, es sei denn, wir bestätigten den Leistungstermin ausdrücklich als verbindlich. Eine vereinbarte Leistungsfrist beginnt mit Zugang der Auftragsbestätigung, jedoch nicht bevor die vereinbarte Anzahlung/Sicherheit geleistet ist. Jede Änderung der Bestellung nach Auftragserteilung bewirkt die Aufhebung eventuell verbindlich vereinbarter Fristen, Termine oder Vertragsstrafen. Die Leistungszeit ist eingehalten, wenn bis zu ihrem Ablauf der Liefergegenstand das Lager verlassen hat oder die Versandbereitschaft dem Kunden mitgeteilt worden ist. Verzögert sich die Lieferung auf Wunsch oder Veranlassung des Kunden, so trägt der Kunde nach Ablauf eines Monats ab der Anzeige der Versandbereitschaft die durch die Lagerung entstehenden Kosten. Für die Lagerung berechnen wir 0,5% des Rechnungsbetrages für jeden angefangenen Monat. Erklärt der Kunde innerhalb einer angemessenen Frist nicht seine Bereitschaft zur Entgegennahme der Leistung oder gerät er mit der Zahlung der Lagergebühren in Verzug, dürfen wir über den Liefergegenstand anderweitig verfügen und den Kunden mit angemessener Fristverlängerung beliefern oder die Leistung verweigern und Schadensersatz statt Erfüllung verlangen. Ereignisse höherer Gewalt und Betriebsstörungen, auch Streik und Aussperrung sowie sonstige Ereignisse, die die Fertigung oder die Ablieferung erschweren, insbesondere Schwierigkeiten bei der Materialbeschaffung, geben uns das Recht, die Leistungszeit entsprechend der Beeinträchtigung durch unverzügliche Anzeige an den Kunden zu verlängern oder vom Vertrag zurückzutreten. Dies gilt auch, wenn derartige Umstände bei unseren Zulieferern eintreten. Die genannten Umstände sind von uns auch dann nicht zu vertreten, wenn sie während eines bereits eingetretenen Verzuges entstehen. Im Fall der von uns verschuldeten Verzögerung der Leistung ist der Kunde berechtigt, nach Ablauf einer angemessenen Nachfrist vom Vertrag zurückzutreten. Die Nachfrist muss schriftlich gesetzt werden und ausdrücklich als solche bezeichnet sein. Hat die verzögerte Leistung für den Kunden kein Interesse, kann er ohne Nachfristsetzung vom Vertrag zurücktreten. Die Ausübung des Rücktrittsrechts ist unverzüglich in Textform anzuzeigen. Für den Fall, dass wir vom Vertrag zurücktreten, werden wir eine etwa vom Kunden geleistete Anzahlung unverzüglich erstatten, wenn wir die zum Rücktritt führenden Gründe verschuldet haben. Neben dem Rücktrittsrecht stehen dem Kunden Schadensersatzansprüche nur zu, wenn uns oder unseren Erfüllungsgehilfen Vorsatz oder grobe Fahrlässigkeit zur Last fällt."
    },
    {
      title: "6. Preise und Zahlungsbedingungen",
      content: "Maßgebend sind die in unserer Auftragsbestätigung genannten Preise. Die Preise gelten ab Werk, ausschließlich Verladung im Lager. Zölle, Steuern und sonstige Nebenkosten werden wir zu Selbstkosten berechnen. Unsere Rechnungen sind sofort nach Erhalt zur Zahlung fällig. Zahlungen haben in bar an unserem Geschäftssitz zu erfolgen. Andere Zahlungsmittel als Bargeld (Schecks, Wechsel u.ä.) nehmen wir lediglich erfüllungshalber an. Die Einziehungs- und Diskontspesen gehen zu Lasten des Kunden und sind sofort in bar fällig. Zur Entgegennahme von Geld oder anderen Zahlungsmitteln ist nur berechtigt, wer durch ausdrückliche schriftliche Vollmacht von uns dazu ermächtigt ist. Bei Zahlungsverzug sind wir berechtigt, Verzugszinsen in Höhe von 10% über dem jeweiligen Basiszins der Europäischen Zentralbank zu berechnen. Dem Kunden und uns bleibt das Recht vorbehalten, einen geringen bzw. höheren Schaden nachzuweisen. Hält der Kunde die Zahlungsbedingungen nicht ein oder nimmt er die von uns vertragsgemäß angebotene Leistung nicht an, so gilt bei gesondert vereinbarter Hereinnahme von Wechseln die mit der Wechselannahme gewährte Stundung als widerrufen. In diesem Fall sind wir berechtigt, noch ausstehende Lieferungen und Leistungen nur noch gegen Vorauszahlung bzw. Sicherheitsleistung (§§ 648 oder 648a BGB) auszuführen oder vom Vertrag zurückzutreten. Außerdem werden unsere sämtlichen noch offenen Forderungen sofort zur Zahlung fällig. Das Gleiche gilt, wenn uns nach Vertragsabschluß Umstände bekannt werden, die die Kreditwürdigkeit des Kunden erheblich mindern, insbesondere, wenn in das Vermögen des Kunden die Zwangsvollstreckung betrieben oder über das Vermögen des Kunden das Insolvenz- oder Vergleichsverfahren eröffnet wird. Der Kunde ist nur berechtigt, gegen unsere Forderung aufzurechnen oder ein Zurückbehaltungsrecht auszuüben, wenn seine Forderung unbestritten oder rechtskräftig festgestellt ist."
    },
    {
      title: "7. Sicherungsrechte",
      content: "Wir behalten uns das Eigentum an von uns gelieferter Ware einschließlich Zubehör bis zur vollständigen Bezahlung aller – auch der künftigen – Forderungen einschließlich Nebenforderungen aus der Geschäftsverbindung vor. Haben wir dem Kunden Kontokorrent eingeräumt, dient der Eigentumsvorbehalt auch der Sicherung eines etwa offenen Saldos. Der Kunde darf über unter Eigentumsvorbehalt stehende Gegenstände nicht verfügen, insbesondere sie weder verpfänden noch (auch nicht zur Sicherung) übereignen. Bei Pfändung sowie Beschlagnahme oder sonstiger Verfügung durch Dritte hat der Kunde uns unverzüglich zu benachrichtigen. Bevor wir durch Einbau, Verarbeitung oder Umbildung, Verbindung oder Vermischung Eigentum an unserem Leistungsgegenstand verlieren, hat der Kunde Sicherheit nach § 648a BGB zu leisten. Alternativ haben wir das Recht, die Eintragung einer Sicherungshypothek nach § 648 BGB zu beanspruchen."
    },
    {
      title: "8. Gefahrübergang",
      content: "Die Gefahr des zufälligen Untergangs oder der zufälligen Verschlechterung des Leistungsgegenstandes (Kaufsache) geht auf den Kunden über, sobald der Leistungsgegenstand dem Spediteur, Frachtführer oder der sonst zur Ausführung der Versendung bestimmten Person oder Anstalt übergeben wird oder zwecks Versendung unser Lager verlassen hat. Dies gilt auch, wenn wir die Versendungskosten oder die Anlieferung übernommen haben, oder wenn Teillieferungen erfolgen. Hat der Kunde den Transport des Leistungsgegenstandes übernommen oder verzögert sich der Versand des Leistungsgegenstandes durch Umstände, die wir nicht zu vertreten haben, so gehen die vorstehend genannten Gefahren mit unserer schriftlichen Mitteilung der Versandbereitschaft auf den Kunden über. Auf Anweisung des Kunden werden wir auf seine Kosten den Leistungsgegenstand in branchenüblichem Umfang für die Dauer einer etwaigen Aufbewahrung bei uns und/oder für den Transport gegen Beschädigung und Untergang versichern. Der Kunde ist unbeschadet seiner Rechte verpflichtet, angelieferte Ware in Empfang zu nehmen, auch wenn sie offensichtliche Mängel aufweist und diese unentgeltlich für uns zu verwahren. Verweigert der Kunde die Annahme, so sind wir berechtigt, bei Serienprodukten 30 % des vereinbarten Netto-Vertragswerts, bei Individualanfertigungen 80% des vereinbarten Netto-Vertragswerts zuzüglich gesetzlicher Umsatzsteuer als Schadensersatz zu verlangen. Dem Kunden und uns bleibt der Nachweis eines geringeren bzw. höheren Schadens vorbehalten. Für den Gefahrübergang hinsichtlich des von uns zu erbringenden Auf- bzw. Einbaus des Leistungsgegenstandes (Werkleistung) gelten die gesetzlichen Bestimmungen, soweit hier nichts anderes vereinbart ist."
    },
    {
      title: "9. Leistungsstörungen",
      content: "Der Kunde hat Lieferungen unverzüglich nach dem Aufbau auf optische Mangelfreiheit zu untersuchen. Zu diesem Zweck verpflichtet sich der Kunde, an einem mit angemessener Frist angekündigten Aufbautermin persönlich anwesend zu sein oder einen schriftlich bevollmächtigten Vertreter zu entsenden. Nach dem Aufbau ist über die optische Beschaffenheit des Leistungsgegenstandes ein Protokoll anzufertigen. An die optische Abnahme schließt sich – ggf. nach einer notwendigen Trocknungsphase – die Funktionsprüfung an. Der Kunde verpflichtet sich, vor Ablauf einer ihm mitgeteilten Wartefrist, den Leistungsgegenstand nicht in Betrieb zu nehmen. Wir stehen nach Maßgabe dieser allgemeinen Geschäftsbedingungen dafür ein, dass der Leistungsgegenstand nach erfolgter Funktionsprüfung mangelfrei ist. Abweichungen von Angaben oder Vereinbarungen hinsichtlich Qualität und Menge von bis zu +/- 10% stellen keinen Mangel oder das Fehlen zugesicherter Eigenschaften des Leistungsgegenstandes dar, der den Kunden zum Rücktritt vom Vertrag oder zur Forderung von Schadensersatz berechtigt. Optische Abweichungen bei Ofen-Anlagen oder Teilen davon, in denen Naturprodukte und/oder handgefertigte Produkte verarbeitet wurden und die keinen Einfluss auf die Funktionalität haben (Farbe, Fissuren, Einschlüsse, Maserung u.s.w.) stellen keinen Fehler des Leistungsgegenstandes dar. Bei handgefertigten Produkten (z.B. Fliesen) sind die üblichen herstellungsbedingten Unregelmäßigkeiten Oberfläche und Farbgebung hinzunehmen. Elektrotechnisches Material gilt als vertragsgemäß, wenn es den Vorschriften des Verbandes Deutscher Elektroingenieure (VDE) entspricht. Der Anspruch des Kunden auf Nacherfüllung verjährt nach zwei Jahren ab Entstehen des Anspruchs, bei Leistungen an gewerbliche Kunden nach einem Jahr."
    },
    {
      title: "10. Nacherfüllung",
      content: "Vom Hersteller (mit) zu vertretende Mängeln am Leistungsgegenstand hat der Kunde unbeschadet seines Rechts auf Nacherfüllung zunächst beim Hersteller geltend zu machen. Wir werden in angemessenem Umfang dabei behilflich sein und treten etwaige Ansprüche wegen Mängeln gegen den Hersteller sowie etwaige Garantieansprüche an den Kunden ab. Bleibt die Geltendmachung dieser Ansprüche erfolglos, haften wir auf Nacherfüllung nach diesen Bedingungen. Im Fall eines Mangels erfolgt die Nacherfüllung nach unserer Wahl durch Beseitigung des Mangels oder durch Nachlieferung. Schlägt die Nacherfüllung endgültig fehl oder bleiben zwei Versuche der Nacherfüllung erfolglos, kann der Kunde die vertragliche Vergütung hinsichtlich des mangelbehafteten Teils des Leistungsgegenstandes entsprechend reduzieren und/oder insoweit vom Vertrag zurücktreten. Das Recht auf Rücktritt vom gesamten Vertrag kommt nur in Betracht, wenn durch den Mangel des Leistungsgegenstandes unsere Gesamtleistung den gewöhnlichen oder vertraglich vorausgesetzten Zweck erheblich beeinträchtigt oder sonst für den Kunden kein Interesse hat. Der Kunde hat uns die zur Nacherfüllung erforderliche Zeit und Gelegenheit zu gewähren. Verweigert er dies, werden wir von der Pflicht zur Nacherfüllung befreit. Für die Nacherfüllung wird nur in gleicher Weise Gewähr geleistet wie für den ursprünglichen Leistungsgegenstand. Befindet sich der Kunde mit fälligen Zahlungsverpflichtungen in Verzug, sind wir berechtigt, bis zur Höhe eines dem mangelfreien Anteil der Leistung entsprechenden Teils unserer noch offenen Forderungen die Nacherfüllung zu verweigern."
    },
    {
      title: "11. Haftungsbegrenzungen",
      content: "Keine Haftung wird für Schäden oder Mängel übernommen, die durch die unzureichende bauliche Beschaffenheit des Aufstellungsortes (Ziff. 4) bedingt sind. Keine Haftung wird für Schäden oder Mängel übernommen, die durch ungeeignete Betriebsmittel oder unsachgemäßen Gebrauch des Leistungsgegenstandes (insbesondere Nichtbeachtung der Bedienungsanleitung des Herstellers, Verwendung ungeeigneten Brennmaterials oder Überhitzung des Ofens und ähnliches), fehlerhafte Montage bzw. Inbetriebsetzung durch den Kunden oder Dritte, fehlerhafte oder nachlässige Behandlung (insbesondere verfrühte oder übermäßige Beanspruchung), ungeeignete Austauschwerkstoffe, chemische, elektrochemische oder elektrische Einflüsse entstanden sind. Unsere Haftung ist ferner ausgeschlossen, wenn der Kunde Änderungen am betreffenden Leistungsgegenstand und/oder Instandsetzungsarbeiten ohne unsere Zustimmung durchgeführt, veranlasst oder zugelassen hat, es sei denn, der Kunde führt den Nachweis, dass diese Änderungen nicht (mit-) ursächlich für den Schaden waren. Weitere Ansprüche des Kunden, insbesondere ein Anspruch auf Ersatz von Schäden, die nicht an dem Leistungsgegenstand selbst entstanden, sind ausgeschlossen. Dieser Haftungsausschluss gilt nicht in den Fällen, in denen bei Fehlern des Leistungsgegenstandes für Personen- oder Sachschäden an privat genutzten Gegenständen gehaftet wird. Er gilt auch nicht beim Fehlen von Eigenschaften, die ausdrücklich zugesichert sind, wenn die Zusicherung gerade bezweckt hat, den Kunde gegen nicht am Liefergegenstand selbst entstandene Schäden abzusichern. In jedem Fall ist unsere Haftung auf den Schadenshöchstbetrag begrenzt, den wir bei einer inländischen Versicherung zu taxmäßigen, vom Bundesaufsichtsamt für das Versicherungswesen genehmigten Bedingungen versichert haben oder hätte versichern können. Diese Haftungsbegrenzungen gelten nicht, wenn uns oder unseren Erfüllungsgehilfen Vorsatz oder grobe Fahrlässigkeit zur Last fällt."
    },
    {
      title: "12. Salvatorische Klausel",
      content: "Sollte eine Bestimmung in diesen Geschäftsbedingungen nichtig sein oder werden, wird hiervon die Gültigkeit der anderen Bestimmungen nicht berührt. Unangemessene Vorschriften sind mit demjenigen Teilgehalt aufrechtzuerhalten, der sich als selbstständiger Bestandteil aus der unangemessenen Gesamtregelung lösen lässt."
    }
  ];

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-[#E67E22] selection:text-white">
      {/* Navbar beim Drucken ausblenden */}
      <div className="print:hidden">
        <Navbar />
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative h-[40vh] bg-[#1A1A1A] overflow-hidden flex items-center justify-center print:h-auto print:py-8 print:bg-white print:text-black">
        {/* Background Overlay - beim Drucken ausblenden */}
        <div className="absolute inset-0 z-0 opacity-20 print:hidden">
           <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2000')] bg-cover bg-center grayscale" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent z-10 print:hidden" />

        <div className="relative z-20 text-center px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6 print:hidden">
              <Scale className="text-[#E67E22]" size={32} />
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-4 print:text-black print:text-4xl">
              Allgemeine <br className="print:hidden" /> Geschäftsbedingungen
            </h1>
            <p className="text-slate-400 text-lg font-light tracking-wide uppercase print:text-slate-600">
              Stand: Februar 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section className="py-24 bg-[#F8FAFC] print:bg-white print:py-0">
        <div className="max-w-4xl mx-auto px-6 md:px-12 print:px-0 print:max-w-none">
          
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 print:shadow-none print:border-0 print:p-0">
            
            <div className="flex justify-between items-center mb-12 border-b border-slate-100 pb-6 print:hidden">
              <h2 className="text-2xl font-black text-[#1A1A1A] uppercase italic flex items-center gap-3">
                <FileText className="text-[#E67E22]" size={24} />
                AGB
              </h2>
              <div className="flex gap-2">
                <button 
                  onClick={() => window.print()}
                  className="bg-[#E67E22] hover:bg-orange-600 text-white px-6 py-3 rounded-full font-bold shadow-lg transition-all flex items-center gap-2 text-sm"
                  title="Seite drucken"
                >
                  <Printer size={18} />
                  <span>AGB drucken</span>
                </button>
              </div>
            </div>

            <div className="space-y-12 print:space-y-6">
              {agbSections.map((section, index) => (
                <div key={index} id={`section-${index + 1}`} className="break-inside-avoid">
                  <h3 className="text-lg md:text-xl font-bold text-[#1A1A1A] mb-4 print:text-base print:mb-2">
                    {section.title}
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed text-justify print:text-black print:text-sm">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 pt-8 border-t border-slate-100 text-center print:mt-8">
              <p className="text-slate-400 text-xs uppercase tracking-widest print:text-black">
                Ofenfischer GmbH • Amtsgericht Cottbus HRB 12345
              </p>
            </div>

          </div>

        </div>
      </section>

      <div className="print:hidden">
        <Footer />
      </div>
    </main>
  );
}