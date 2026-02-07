"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Truck, TrendingUp, Users, ExternalLink, Calendar, CheckCircle2, Factory } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function EuFoerderungPage() {
  
  // Daten aus dem Bild extrahiert
  const investments = [
    "Radlader",
    "Raupenhebebühne",
    "Elektrostapler",
    "Kompaktbagger"
  ];

  const goals = [
    "Erweiterung des Maschinenparks",
    "Effizienteres und produktiveres Arbeiten",
    "Leistungssteigerung & Unabhängigkeit",
    "Erhalt von attraktiven Arbeitsplätzen in der Region",
    "Optimierung der Arbeitsprozesse"
  ];

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-[#E67E22] selection:text-white">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-16 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Linke Seite: Text */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 text-[#E67E22] font-bold uppercase tracking-widest text-xs mb-4 border border-[#E67E22]/30 px-3 py-1 rounded-full">
                <Factory size={14} />
                <span>Investition in die Zukunft</span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-6 leading-tight">
                Unser Projekt wird von der EU gefördert
              </h1>
              
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Im Rahmen der "Produktiven Investition von KMU" bauen wir die Kapazitäten unserer bestehenden Betriebsstätte in Plessa weiter aus.
              </p>

              {/* "AB SOFORT" BADGE (Pflichtfeld) */}
              <div className="bg-white/10 border-l-4 border-[#E67E22] p-4 rounded-r-lg inline-block">
                <div className="flex items-center gap-2 text-white font-bold mb-1">
                  <Calendar size={18} className="text-[#E67E22]" />
                  <span>Ab sofort im Einsatz</span>
                </div>
                <p className="text-sm text-slate-400">
                  Unser neuer Maschinenpark steht für Ihre Projekte bereit.
                </p>
              </div>
            </motion.div>

            {/* Rechte Seite: Das Originalbild */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.2, duration: 0.8 }}
               className="relative"
            >
              <div className="bg-white p-2 rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                {/* Das hochgeladene Bild */}
                <img 
                  src="/eu-foerderung.jpg" 
                  alt="EU Förderung Plakat Ofen-Fischer" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- DETAILS SECTION --- */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-[#1A1A1A] uppercase italic mb-4">
              Projektdetails
            </h2>
            <div className="h-1 w-24 bg-[#E67E22] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-16">
            
            {/* Investitionen */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100"
            >
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center text-[#E67E22] mb-6">
                <Truck size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Anschaffungen</h3>
              <p className="text-slate-600 mb-6">
                Um unseren Maschinenpark zu erweitern und effizienter zu gestalten, haben wir in folgende Technik investiert:
              </p>
              <ul className="space-y-3">
                {investments.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold text-[#1A1A1A]">
                    <CheckCircle2 size={20} className="text-[#E67E22]" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Ziele */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6">
                <TrendingUp size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Zweck der Investition</h3>
              <ul className="space-y-4">
                {goals.map((goal, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600">
                    <div className="mt-1 min-w-[6px] h-1.5 w-1.5 rounded-full bg-blue-500" />
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- FÖRDERGEBER LINKS --- */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-slate-500 mb-8 font-medium">Weiterführende Informationen zu den Förderprogrammen finden Sie hier:</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://efre.brandenburg.de" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-50 text-slate-700 hover:bg-[#E67E22] hover:text-white transition-colors font-bold border border-slate-200 hover:border-[#E67E22]"
            >
              <ExternalLink size={18} />
              efre.brandenburg.de
            </a>
            <a 
              href="https://jtf.brandenburg.de" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-50 text-slate-700 hover:bg-[#E67E22] hover:text-white transition-colors font-bold border border-slate-200 hover:border-[#E67E22]"
            >
              <ExternalLink size={18} />
              jtf.brandenburg.de
            </a>
          </div>

          <div className="mt-12 opacity-70">
             <p className="text-xs text-slate-400 uppercase tracking-widest">Kofinanziert von der Europäischen Union • Land Brandenburg</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}