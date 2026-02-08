"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Droplets, Zap, Thermometer, ArrowRight, CheckCircle2 } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Link from 'next/link';

export default function HeizungssystemePage() {
  
  const systems = [
    {
      icon: <Droplets size={32} />,
      title: "Wasserführende Kamine",
      description: "Nutzen Sie die Kraft des Feuers doppelt: Genießen Sie das Flammenspiel im Wohnzimmer, während der Großteil der Wärme in Ihren Pufferspeicher gespeist wird, um das ganze Haus zu heizen und Brauchwasser zu erwärmen."
    },
    {
      icon: <Zap size={32} />,
      title: "Hybrid-Lösungen",
      description: "Die perfekte Kombination aus Tradition und Moderne. Verbinden Sie Ihren Kamin oder Kachelofen intelligent mit einer Wärmepumpe oder Solaranlage. Das spart Energiekosten und macht Sie unabhängiger."
    },
    {
      icon: <Flame size={32} />,
      title: "Ganzhausheizung",
      description: "Moderne Speicheröfen können so dimensioniert werden, dass sie als primäre Wärmequelle für Niedrigenergiehäuser dienen. Strahlungswärme, die über viele Stunden anhält."
    },
    {
      icon: <Thermometer size={32} />,
      title: "Smarte Regelung",
      description: "Mit elektronischen Abbrandsteuerungen (EAS) wird die Luftzufuhr automatisch geregelt. Das garantiert maximale Effizienz, geringste Emissionen und verlängert die Glutphase."
    }
  ];

  const benefits = [
    "Reduzierung der Heizkosten durch Holznutzung",
    "Entlastung der primären Heizanlage (z.B. Öl/Gas/Wärmepumpe)",
    "Unabhängigkeit von fossilen Brennstoffen",
    "CO2-neutrale Verbrennung",
    "Wertsteigerung Ihrer Immobilie",
    "Förderfähig durch staatliche Programme (BAFA)"
  ];

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-[#E67E22] selection:text-white">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative h-[60vh] bg-[#1A1A1A] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          {/* Platzhalterbild - Bitte 'heizung_banner.webp' in public ordner legen */}
          <img 
            src="/heizung_banner.webp" 
            alt="Moderne Heizungssysteme" 
            className="w-full h-full object-cover object-center opacity-40"
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
              <span className="text-[#E67E22] font-bold uppercase tracking-[0.3em] text-xs">Energie & Wärme</span>
              <div className="h-[2px] w-12 bg-[#E67E22]"></div>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-6">
              Intelligente <br/> Heizungssysteme
            </h1>
            <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
              Verbinden Sie die Atmosphäre eines Kamins mit modernster Heiztechnik. Effizient, nachhaltig und zukunftssicher.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- INTRO (Split Layout) --- */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="flex items-center gap-2 text-[#E67E22] font-bold uppercase tracking-widest text-xs mb-6">
                <Flame size={18} />
                <span>Wärme neu gedacht</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] uppercase italic tracking-tighter mb-8 leading-none">
                Mehr als nur <br/> Feuer schauen
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Ein Kamin ist heute nicht mehr nur ein Romantik-Faktor. Mit der richtigen Technik wird er zum leistungsstarken Bestandteil Ihres Energiekonzepts. 
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Insbesondere in Kombination mit wasserführender Technik können Sie die erzeugte Energie speichern und im ganzen Haus verteilen – ideal für die Übergangszeit oder zur Unterstützung Ihrer Wärmepumpe an kalten Wintertagen.
              </p>
            </motion.div>

            {/* Benefit List */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#F8FAFC] p-8 md:p-10 rounded-3xl border border-slate-100 relative"
            >
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6">Ihre Vorteile auf einen Blick</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#E67E22] shrink-0 mt-1" size={20} />
                    <span className="text-slate-600 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- SYSTEMS GRID --- */}
      <section className="py-24 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#E67E22] font-bold uppercase tracking-[0.2em] text-xs">Technologie</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mt-2">
              Unsere Lösungen
            </h2>
            <div className="h-1 w-24 bg-[#E67E22] mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {systems.map((sys, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group"
              >
                <div className="w-16 h-16 bg-[#E67E22]/10 rounded-full flex items-center justify-center text-[#E67E22] mb-6 group-hover:bg-[#E67E22] group-hover:text-white transition-all duration-300">
                  {sys.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{sys.title}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {sys.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-24 bg-white text-center border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-6">
          <h3 className="text-3xl font-black text-[#1A1A1A] mb-6 uppercase italic">
            Planen Sie Ihre Energiewende
          </h3>
          <p className="text-slate-600 mb-8 text-lg">
            Lassen Sie uns gemeinsam berechnen, wie viel Energie Sie mit einem modernen Heizkamin sparen können. Wir beraten Sie zu Technik und Förderung.
          </p>
          <Link 
            href="/kontakt" 
            className="inline-flex items-center gap-2 bg-[#E67E22] hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-orange-500/30 transition-all transform hover:-translate-y-1"
          >
            Beratungstermin vereinbaren <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}