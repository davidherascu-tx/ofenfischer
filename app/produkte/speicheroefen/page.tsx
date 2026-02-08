"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, Flame, Hourglass, Leaf, Plus, X, ThermometerSun } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Link from 'next/link';

export default function SpeicherofenPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // --- GALERIE BILDER (Nur die 2 vorhandenen Bilder) ---
  const galleryImages = [
    {
      src: "/speicheroefen/speicherofen_1.webp",
      alt: "Moderner Speicherofen in Betonoptik"
    },
    {
      src: "/speicheroefen/speicherofen_2.webp",
      alt: "Weißer Speicherofen im Wohnraum"
    }
  ];

  // --- HERSTELLER DATEN ---
  const manufacturers = [
    {
      name: "Hoxter",
      logoSrc: "/logos/hoxter_logo.webp",
      description: "Seit 2009 werden die Hoxter Produkte in 23 Ländern Europas vertrieben. Hoxter arbeitet ausschließlich mit Fachbetrieben, sprich den Ofenbauern zusammen. Die Produkte sind robust und aus hochwertigen Materialien hergestellt. Das Ziel ist dauerhafter Wert. Hoxter Produkte müssen im intensiven Betrieb bestehen. Für den wasserführenden Kamineinsatz-Korpus wird Kesselstahl P265GH benutzt.",
      link: "https://www.hoxter.eu/de/holz/produkte/speicherofen-blox"
    },
    {
      name: "Nordpeis",
      logoSrc: "/logos/nordpeis_logo.webp", 
      description: "Die Manufaktur von Kaufmann überzeugt durch Leidenschaft an das keramische Handwerk. Die handgemachte Qualität, der Ofen- und Wandkeramiken, mit der Ausstrahlung und Individualität begeistern nicht nur das Handwerk sondern auch den Menschen.",
      link: "https://www.nordpeis.com/de/kamine/speicherofen"
    }
  ];

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-[#E67E22] selection:text-white">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative h-[60vh] bg-[#1A1A1A] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/speicheroefen/speicherofen_2.webp" 
            alt="Speicherofen Hero" 
            className="w-full h-full object-cover opacity-40"
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
              <span className="text-[#E67E22] font-bold uppercase tracking-[0.3em] text-xs">Gesunde Wärme</span>
              <div className="h-[2px] w-12 bg-[#E67E22]"></div>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-6">
              Speicheröfen
            </h1>
            <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
              Einmal heizen, stundenlang genießen. Erleben Sie die sanfte Kraft der Strahlungswärme.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- INTRO (Split Layout) --- */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Linke Seite: Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 text-[#E67E22] font-bold uppercase tracking-widest text-xs mb-6">
                <ThermometerSun size={18} />
                <span>Effizienz & Wohlfühlen</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] uppercase italic tracking-tighter mb-8 leading-none">
                Wärme, die <br/> lange bleibt
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Ein Speicherofen ist ein Meister der Effizienz. Durch seine hohe Speichermasse nimmt er die Hitze des Feuers schnell auf und gibt sie über viele Stunden als milde, gesunde Strahlungswärme an den Raum ab.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Das Prinzip ähnelt der Sonne: Die Wärme erwärmt nicht primär die Luft, sondern Körper und Gegenstände im Raum. Das sorgt für ein unvergleichliches Raumklima ohne Staubaufwirbelung.
              </p>
            </motion.div>

            {/* Rechte Seite: Feature Cards */}
            <div className="grid gap-6">
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-start gap-4 p-6 bg-[#F8FAFC] rounded-2xl border border-slate-100 hover:border-[#E67E22]/30 hover:shadow-lg transition-all"
              >
                <div className="bg-white p-3 rounded-full shadow-sm text-[#E67E22]">
                  <Hourglass size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A1A1A] text-lg">Lange Wärmeabgabe</h4>
                  <p className="text-slate-500 text-sm mt-1">Genießen Sie bis zu 12 Stunden Wärme mit nur einer Holzladung.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-4 p-6 bg-[#F8FAFC] rounded-2xl border border-slate-100 hover:border-[#E67E22]/30 hover:shadow-lg transition-all"
              >
                <div className="bg-white p-3 rounded-full shadow-sm text-[#E67E22]">
                  <Leaf size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A1A1A] text-lg">Maximale Effizienz</h4>
                  <p className="text-slate-500 text-sm mt-1">Ressourcenschonend durch optimale Energieausnutzung.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-4 p-6 bg-[#F8FAFC] rounded-2xl border border-slate-100 hover:border-[#E67E22]/30 hover:shadow-lg transition-all"
              >
                <div className="bg-white p-3 rounded-full shadow-sm text-[#E67E22]">
                  <Flame size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A1A1A] text-lg">Gesundes Raumklima</h4>
                  <p className="text-slate-500 text-sm mt-1">Angenehme Strahlungswärme ohne trockene Heizungsluft.</p>
                </div>
              </motion.div>
              
            </div>

          </div>
        </div>
      </section>

      {/* --- BILDER GALERIE --- */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#E67E22] font-bold uppercase tracking-[0.2em] text-xs">Portfolio</span>
            <h3 className="text-3xl font-black uppercase italic text-[#1A1A1A] mt-2">Inspiration</h3>
          </div>
          
          {/* Da es nur 2 Bilder sind, zentrieren wir sie am besten im Grid oder nutzen 2 Spalten */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {galleryImages.map((img, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative h-80 rounded-2xl overflow-hidden shadow-lg cursor-pointer bg-slate-100"
                onClick={() => setSelectedImage(img.src)}
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#1A1A1A]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-14 h-14 bg-[#E67E22] rounded-full flex items-center justify-center text-white transform scale-50 group-hover:scale-100 transition-all duration-300 shadow-xl">
                    <Plus size={28} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- HERSTELLER SEKTION --- */}
      <section className="py-24 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center mb-16">
            <span className="text-[#E67E22] font-bold uppercase tracking-[0.2em] text-xs">Marken</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mt-2">
              Unsere Speicherofen Partner
            </h2>
            <div className="h-1 w-24 bg-[#E67E22] mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {manufacturers.map((brand, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                // Dunkler Hintergrund für die Karte
                className="bg-white/5 border border-white/10 p-12 rounded-3xl flex flex-col items-center text-center hover:bg-white/10 transition-colors group"
              >
                {/* LOGO CONTAINER: Transparent, Logos sitzen direkt auf dem dunklen Grund */}
                <div className="h-32 mb-8 flex items-center justify-center w-full p-4 rounded-xl">
                  <img 
                    src={brand.logoSrc} 
                    alt={`${brand.name} Logo`}
                    className="max-h-full max-w-full object-contain transition-all duration-500" 
                  />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-[#E67E22]">{brand.name}</h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow font-light max-w-xl whitespace-pre-wrap">
                  {brand.description}
                </p>

                <a 
                  href={brand.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white bg-[#E67E22] hover:bg-orange-600 px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 transition-all mt-auto"
                >
                  Zum Hersteller <ExternalLink size={14} />
                </a>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-20 bg-white text-center border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-6">
          <h3 className="text-3xl font-black text-[#1A1A1A] mb-6 uppercase italic">
            Interesse an langanhaltender Wärme?
          </h3>
          <p className="text-slate-600 mb-8">
            Lassen Sie sich beraten, ob ein Speicherofen die richtige Lösung für Ihr Zuhause ist.
          </p>
          <Link 
            href="/kontakt" 
            className="inline-flex items-center gap-2 bg-[#E67E22] hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-orange-500/30 transition-all transform hover:-translate-y-1"
          >
            Beratungstermin vereinbaren <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* --- LIGHTBOX MODAL --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 z-10 w-12 h-12 bg-white/10 hover:bg-[#E67E22] text-white rounded-full flex items-center justify-center transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={28} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage} 
              alt="Großansicht"
              className="w-auto h-auto max-w-full max-h-[90vh] object-contain rounded shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}