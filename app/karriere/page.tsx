"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, ArrowRight, Mail, Wrench, Flame, Send, CheckCircle2 } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function KarrierePage() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-[#E67E22] selection:text-white">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative h-[50vh] bg-[#1A1A1A] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          {/* HIER WURDE DAS BILD GEÄNDERT */}
          <img 
            src="/karriere.jpg" 
            alt="Karriere bei Ofenfischer" 
            className="w-full h-full object-cover opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-[2px] w-12 bg-[#E67E22]"></div>
              <span className="text-[#E67E22] font-bold uppercase tracking-[0.3em] text-xs">Zukunft gestalten</span>
              <div className="h-[2px] w-12 bg-[#E67E22]"></div>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-4">
              Karriere & <br/> Ausbildung
            </h1>
            <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
              Werde Teil unseres Teams und lerne das Handwerk von den Besten.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- STELLENANGEBOTE (Aktuell keine) --- */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center p-4 bg-white rounded-full mb-6 text-slate-400 shadow-sm border border-slate-200">
              <Briefcase size={32} />
            </div>
            <h2 className="text-3xl font-black text-[#1A1A1A] uppercase italic mb-6">
              Stellenangebote
            </h2>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg max-w-2xl mx-auto">
              <p className="text-lg text-slate-600 mb-4">
                Zurzeit haben wir leider <strong>keine offenen Stellen</strong> zu besetzen.
              </p>
              <p className="text-sm text-slate-400">
                Sie sind dennoch überzeugt, dass Sie perfekt in unser Team passen? 
                Dann freuen wir uns über Ihre Initiativbewerbung!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- AUSBILDUNG (Wir suchen Dich!) --- */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Deko Hintergrund */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-50/50 -skew-x-12 translate-x-20 z-0 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-[#E67E22] font-bold uppercase tracking-widest text-xs mb-4 border border-[#E67E22]/20 px-3 py-1 rounded-full bg-orange-50">
              <GraduationCap size={16} />
              <span>Azubis gesucht</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] uppercase italic tracking-tighter">
              Wir suchen Dich!
            </h2>
            <div className="h-1 w-24 bg-[#E67E22] mx-auto mt-6 mb-6"></div>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Starte deine berufliche Zukunft in einem familiären Umfeld mit spannenden Projekten und echter Handwerkskunst. Bewirb dich jetzt für eine Ausbildung bei Ofenfischer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Ausbildung 1: Anlagenmechaniker */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col h-full bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-xl hover:border-[#E67E22] hover:shadow-2xl transition-all group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 bg-[#F8FAFC] rounded-2xl flex items-center justify-center text-[#E67E22] group-hover:bg-[#E67E22] group-hover:text-white transition-colors">
                  <Wrench size={32} />
                </div>
                <span className="bg-slate-100 text-slate-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  3,5 Jahre
                </span>
              </div>
              
              {/* Titel Block - (m/w/d) kleiner */}
              <div className="mb-6">
                <h3 className="text-2xl font-black text-[#1A1A1A] uppercase italic leading-tight mb-2 group-hover:text-[#E67E22] transition-colors">
                  Anlagenmechaniker für Sanitär-, Heizungs- und Klimatechnik <span className="text-lg text-slate-400 font-bold normal-case not-italic ml-1">(m/w/d)</span>
                </h3>
              </div>

              <p className="text-slate-600 mb-8 leading-relaxed flex-grow">
                Du interessierst dich für moderne Technik, Wasser und Wärme? Lerne, wie man komplexe Heizsysteme plant, installiert und wartet. Von der Wärmepumpe bis zum Design-Bad.
              </p>
              
              <div className="border-t border-slate-100 pt-6 mt-auto">
                <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                  <CheckCircle2 size={16} className="text-[#E67E22]" />
                  <span>Duale Ausbildung (Betrieb & Berufsschule)</span>
                </div>
              </div>
            </motion.div>

            {/* Ausbildung 2: Kachelofenbauer */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col h-full bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-xl hover:border-[#E67E22] hover:shadow-2xl transition-all group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 bg-[#F8FAFC] rounded-2xl flex items-center justify-center text-[#E67E22] group-hover:bg-[#E67E22] group-hover:text-white transition-colors">
                  <Flame size={32} />
                </div>
                <span className="bg-slate-100 text-slate-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  3 Jahre
                </span>
              </div>
              
              {/* Titel Block - (m/w/d) kleiner */}
              <div className="mb-6">
                <h3 className="text-2xl font-black text-[#1A1A1A] uppercase italic leading-tight mb-2 group-hover:text-[#E67E22] transition-colors">
                  Kachelofen- und Luftheizungsbauer <span className="text-lg text-slate-400 font-bold normal-case not-italic ml-1">(m/w/d)</span>
                </h3>
              </div>

              <p className="text-slate-600 mb-8 leading-relaxed flex-grow">
                Feuer ist dein Element? Werde Spezialist für Wohlfühlwärme. Du lernst den Bau von individuellen Kaminanlagen, Kachelöfen und Schornsteinen – Stein auf Stein.
              </p>
              
              <div className="border-t border-slate-100 pt-6 mt-auto">
                <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                  <CheckCircle2 size={16} className="text-[#E67E22]" />
                  <span>Kreatives Handwerk mit Zukunft</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- CTA / BEWERBUNG --- */}
      <section className="py-24 bg-[#1A1A1A] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
            <Send className="w-12 h-12 text-[#E67E22] mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-6">
              Jetzt Bewerben
            </h2>
            <p className="text-xl text-slate-300 font-light mb-10 max-w-2xl mx-auto">
              Bitte sende deine Bewerbung mit Lebenslauf über unser Kontaktformular oder direkt per E-Mail. <br/>
              <span className="text-white font-bold mt-2 block">Wir freuen uns auf Dich!</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:karriere@ofenfischer.de" 
                className="group bg-[#E67E22] hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2 transition-all"
              >
                <Mail size={20} />
                <span>karriere@ofenfischer.de</span>
              </a>
              
              <a 
                href="/#kontakt" 
                className="group bg-white/10 hover:bg-white/20 border border-white/10 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all"
              >
                <span>Zum Kontaktformular</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}