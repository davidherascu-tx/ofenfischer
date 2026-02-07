"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, Minus, MessageCircle, Phone, ArrowRight 
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// --- FAQ DATEN (9 Fragen) ---
const faqData = [
  {
    id: 1,
    category: "Planung & Beratung",
    question: "Wie lange dauert die Planung und Montage eines Kamins?",
    answer: "Die Planungsphase hängt stark von Ihren individuellen Wünschen ab. Nach dem ersten Beratungsgespräch und dem Aufmaß vor Ort erhalten Sie in der Regel innerhalb von 1-2 Wochen ein Angebot inkl. 3D-Entwurf. Die Montage selbst dauert bei Standard-Kaminöfen oft nur einen Tag, bei komplexen Kaminanlagen ca. 2 bis 5 Tage."
  },
  {
    id: 2,
    category: "Voraussetzungen",
    question: "Welche Voraussetzungen muss mein Schornstein erfüllen?",
    answer: "Der Schornstein muss für die geplante Feuerstätte geeignet sein (Querschnitt, wirksame Höhe). Wir prüfen dies vorab mittels einer Querschnittsberechnung. Sollte kein Schornstein vorhanden sein, können wir oft einen doppelwandigen Edelstahl-Außenschornstein nachrüsten oder einen Leichtbauschornstein im Haus einziehen."
  },
  {
    id: 3,
    category: "Kosten",
    question: "Mit welchen Kosten muss ich für einen Kamin rechnen?",
    answer: "Ein hochwertiger Kaminofen beginnt inkl. Montage bei ca. 3.000 €. Individuell geplante Heizkamine starten meist ab ca. 8.000 - 10.000 €, sind aber nach oben hin offen, je nach Material (Naturstein, Keramik), Größe und Technik (Wasserführend, Speicher). Ein genaues Angebot erstellen wir gerne nach einem persönlichen Gespräch."
  },
  {
    id: 4,
    category: "Umwelt & Recht",
    question: "Sind Kamine heute noch umweltfreundlich (BImSchV)?",
    answer: "Ja. Moderne Feuerstätten erfüllen die strengen Grenzwerte der 2. Stufe der Bundes-Immissionsschutzverordnung (BImSchV). Durch effiziente Verbrennungstechnik und Filter sind die Feinstaub-Emissionen minimal. Wir verbauen ausschließlich Geräte, die zukunftssicher und genehmigungsfähig sind."
  },
  {
    id: 5,
    category: "Betrieb",
    question: "Welches Holz darf ich verbrennen?",
    answer: "Verwenden Sie nur naturbelassenes, trockenes Scheitholz mit einer Restfeuchte von unter 20%. Harthölzer wie Buche oder Eiche haben einen hohen Brennwert. Nadelhölzer brennen schneller ab, eignen sich aber gut zum Anfeuern. Behandeltes Holz, Müll oder Papierbriketts sind verboten!"
  },
  {
    id: 6,
    category: "Wartung",
    question: "Wie oft muss eine Kaminanlage gewartet werden?",
    answer: "Der Schornsteinfeger kommt gesetzlich vorgeschrieben 1-2 Mal pro Jahr zum Kehren. Wir empfehlen zusätzlich eine jährliche Wartung durch unseren Kundendienst (Prüfung der Dichtungen, Schamottsteine, Mechanik und Reinigung des Innenraums), idealerweise im Frühjahr nach der Heizsaison."
  },
  {
    id: 7,
    category: "Heiztechnik",
    question: "Lohnt sich ein wasserführender Kamin?",
    answer: "Ein wasserführender Kamin unterstützt Ihre Zentralheizung und entlastet den Hauptwärmeerzeuger (z.B. Wärmepumpe oder Gastherme). Das lohnt sich besonders in gut gedämmten Häusern, da die Wärme nicht nur im Aufstellraum bleibt, sondern im ganzen Haus genutzt wird und Brauchwasser erwärmt."
  },
  {
    id: 8,
    category: "Gaskamine",
    question: "Benötige ich für einen Gaskamin einen Gasanschluss?",
    answer: "Ein Erdgasanschluss ist komfortabel, aber nicht zwingend notwendig. Viele unserer Gaskamine lassen sich auch mit Flüssiggas (Flaschengas) betreiben. Wir beraten Sie gerne zu den Möglichkeiten und der Lagerung der Gasflaschen."
  },
  {
    id: 9,
    category: "Service",
    question: "Bieten Sie auch Ersatzteile für ältere Öfen an?",
    answer: "Ja, unser Ersatzteil-Service kann für viele Marken (z.B. Spartherm, Brunner, Schmid) auch nach Jahren noch Dichtungen, Sichtscheiben oder Feuerraumauskleidungen beschaffen. Senden Sie uns einfach ein Foto des Typenschilds über unser Kundendienst-Formular."
  }
];

export default function FAQPage() {
  const [openId, setOpenId] = useState<number | null>(1); // Erstes Item standardmäßig offen

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-[#E67E22] selection:text-white">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative h-[50vh] bg-[#1A1A1A] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/kaminofen.jpg" // Placeholder Bild
            alt="FAQ Hintergrund" 
            className="w-full h-full object-cover opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-[2px] w-12 bg-[#E67E22]"></div>
              <span className="text-[#E67E22] font-bold uppercase tracking-[0.3em] text-xs">Wissen & Hilfe</span>
              <div className="h-[2px] w-12 bg-[#E67E22]"></div>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter mb-6">
              Häufige Fragen
            </h1>
            <p className="text-xl text-slate-300 font-light leading-relaxed">
              Hier finden Sie Antworten auf die wichtigsten Fragen rund um Kamine, Technik und unseren Service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Accordion List */}
          <div className="space-y-4">
            <AnimatePresence>
              {faqData.map((item) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${openId === item.id ? 'border-[#E67E22] shadow-lg' : 'border-slate-200 hover:border-[#E67E22]/50'}`}
                >
                  <button 
                    onClick={() => toggleFAQ(item.id)}
                    className="w-full flex items-start justify-between p-6 text-left"
                  >
                    <div className="pr-4">
                      <span className="text-[#E67E22] text-xs font-bold uppercase tracking-wider mb-1 block">
                        {item.category}
                      </span>
                      <h3 className={`text-lg font-bold transition-colors ${openId === item.id ? 'text-[#1A1A1A]' : 'text-slate-700'}`}>
                        {item.question}
                      </h3>
                    </div>
                    <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${openId === item.id ? 'bg-[#E67E22] text-white' : 'bg-slate-100 text-slate-400'}`}>
                      {openId === item.id ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </button>

                  <motion.div 
                    initial={false}
                    animate={{ height: openId === item.id ? "auto" : 0, opacity: openId === item.id ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed">
                      <div className="h-[1px] w-full bg-slate-100 mb-4" /> {/* Divider */}
                      {item.answer}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* --- STILL QUESTIONS CTA --- */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-orange-50 rounded-full mb-6 text-[#E67E22]">
            <MessageCircle size={32} />
          </div>
          <h2 className="text-3xl font-black text-[#1A1A1A] uppercase italic mb-4">
            Noch Fragen offen?
          </h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            Unser Team steht Ihnen gerne persönlich zur Verfügung. Rufen Sie uns an oder schreiben Sie uns eine Nachricht.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/kundendienst" 
              className="inline-flex items-center justify-center gap-2 bg-[#1A1A1A] hover:bg-[#333] text-white px-8 py-4 rounded-full font-bold shadow-lg transition-all"
            >
              Zum Kontaktformular <ArrowRight size={18} />
            </a>
            <a 
              href="tel:+49353348120" 
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-[#E67E22] text-[#E67E22] hover:bg-[#E67E22] hover:text-white px-8 py-4 rounded-full font-bold transition-all"
            >
              <Phone size={18} /> 03533 / 4812 0
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}