"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, MessageCircle } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// --- FAQ DATEN STRUKTUR ---
// Da einige Antworten komplexe Formatierungen benötigen (Listen, Fettgedrucktes),
// speichern wir die Antwort als JSX-Element (React Node) und nicht nur als String.

const faqData = [
  {
    question: "Was muss bei Feuerstellen mit einer Außenluftzuführung, in Verbindung mit Wohnraumlüftungen und Küchenablufthauben beachtet werden?",
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
              <strong>Variante Nr. 2:</strong> Einsatz einer Funk-Abluftsteuerung für die Küchenabluftanlage und einer DIBt geprüften „raumluftunabhängigen“ Feuerstätte.
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
              <strong>Variante 1:</strong> Einsatz einer DIBt geprüften „raumluftunabhängigen“ Feuerstätte.
            </li>
            <li>
              <strong>Variante 2:</strong> Einsatz eines Unterdruckwächters, der den Differenzdruck misst und notfalls die Lüftungsanlage abschaltet.
            </li>
          </ul>
        </div>
      </div>
    )
  },
  {
    question: "Was ist ein Offener Kamin?",
    answer: (
      <p>
        Ein Offener Kamin ist die ursprünglichste Art einer Feuerstätte ohne Verglasung, wodurch man direkten Kontakt zum Feuer hat. Die Wärmeabgabe erfolgt ausschließlich über Strahlung. 
        <br/><br/>
        <strong>Wichtig:</strong> Der Wirkungsgrad ist sehr gering. Ca. 80% der Energie (inklusive der durch die Zentralheizung aufgewärmten Raumluft) entweichen durch den Schornstein. In vielen Städten ist der Einbau von Offenen Kaminen mittlerweile verboten oder stark reglementiert.
      </p>
    )
  },
  {
    question: "Was ist ein Heizkamin?",
    answer: (
      <p>
        Ein Heizkamin ist die effiziente Weiterentwicklung des Offenen Kamins. Er verbindet hohe Heizleistung (Wirkungsgrade über 80%) mit der Sicht auf das Feuer durch eine Keramikverglasung.
        <br/><br/>
        Der Einsatz (Brennzelle) besteht aus Stahl/Guss mit Schamotte- oder Vermiculite-Auskleidung. Die Wärmeabgabe erfolgt über direkte Strahlung und über Warmluft (Konvektion), die durch Gitter in den Raum geleitet wird. Heizkamine können zudem mit Speicherelementen aufgerüstet werden.
      </p>
    )
  },
  {
    question: "Was ist ein Kachelofen?",
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
    )
  },
  {
    question: "Was ist ein Kaminofen?",
    answer: (
      <p>
        Oft als „Schwedenofen“ bezeichnet, ist der Kaminofen eine industriell gefertigte Feuerstätte. Er kombiniert die Tradition des Ofens mit modernem Design und großer Sichtscheibe. 
        <br/><br/>
        Vorteil: Kaminöfen lassen sich leicht aufstellen und bei einem Umzug mitnehmen. Sie sind in Stahl, Guss, Speckstein oder Keramik erhältlich und oft mit Wärmespeichermodulen kombinierbar.
      </p>
    )
  },
  {
    question: "Warum ist naturbelassenes Holz ein ökologischer Brennstoff?",
    answer: (
      <p>
        Holz ist ein regenerativer Brennstoff und CO₂-neutral. Ein Baum nimmt während seines Wachstums exakt die Menge an CO₂ auf, die er später bei der Verbrennung (oder beim natürlichen Verrotten) wieder abgibt. Damit belastet Heizen mit Holz das Klima nicht zusätzlich, im Gegensatz zu fossilen Brennstoffen wie Öl, Gas oder Kohle.
      </p>
    )
  },
  {
    question: "Muss eine bestehende Holzfeuerstätte mit Filtern nachgerüstet werden?",
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
    )
  },
  {
    question: "Was bedeutet Bauart A 1?",
    answer: (
      <ul className="space-y-3 list-disc pl-5">
        <li>
          <strong>Bauart A:</strong> Feuerungstür kann offen oder geschlossen betrieben werden. Eine Mehrfachbelegung des Schornsteins ist <u>nicht</u> erlaubt.
        </li>
        <li>
          <strong>Bauart A1:</strong> Das Gerät verfügt über eine <strong>selbstschließende Tür</strong> (z.B. per Federkraft). Hier dürfen bis zu 3 Geräte an einen Schornsteinzug angeschlossen werden. Die meisten modernen Kaminöfen sind Bauart A1.
        </li>
      </ul>
    )
  },
  {
    question: "Was bedeutet die Anforderung der BImSchV. Stufe 1 und Stufe 2?",
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
    )
  }
];

export default function FaqPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] font-sans selection:bg-[#E67E22] selection:text-white">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative h-[40vh] bg-[#1A1A1A] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
           {/* Platzhalterbild - idealerweise ein Bild von Beratung oder Kaminfeuer */}
          <div className="w-full h-full bg-gradient-to-br from-slate-900 to-slate-800" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <HelpCircle className="text-[#E67E22]" size={32} />
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-4">
              Häufige Fragen
            </h1>
            <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
              Wissenswertes rund um Kamine, Öfen und gesetzliche Vorschriften.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- FAQ LISTE --- */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  activeIndex === index 
                  ? "bg-white border-[#E67E22] shadow-lg shadow-orange-500/10" 
                  : "bg-white border-slate-200 hover:border-slate-300"
                }`}
              >
                {/* Header / Frage */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-6 md:p-8 flex items-start justify-between gap-4 focus:outline-none"
                >
                  <span className={`font-bold text-lg md:text-xl pr-4 ${activeIndex === index ? "text-[#E67E22]" : "text-[#1A1A1A]"}`}>
                    {item.question}
                  </span>
                  <div className={`shrink-0 mt-1 transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""}`}>
                    {activeIndex === index ? (
                      <Minus className="text-[#E67E22]" />
                    ) : (
                      <Plus className="text-slate-400" />
                    )}
                  </div>
                </button>

                {/* Body / Antwort */}
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-8 md:px-8 md:pb-8 text-slate-600 leading-relaxed border-t border-slate-50 pt-4">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Kontakt Hinweis */}
          <div className="mt-16 text-center bg-white p-8 rounded-3xl border border-slate-100 shadow-lg">
            <MessageCircle size={48} className="text-[#E67E22] mx-auto mb-4 opacity-80" />
            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">Noch Fragen offen?</h3>
            <p className="text-slate-600 mb-6">
              Unsere Experten beraten Sie gerne persönlich zu Ihrem individuellen Projekt.
            </p>
            <a 
              href="/#kontakt" 
              className="inline-block bg-[#1A1A1A] text-white px-8 py-3 rounded-full font-bold hover:bg-[#E67E22] transition-colors"
            >
              Kontakt aufnehmen
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}