"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, PenTool, Hammer, Gem, Plus, X } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

export default function KaminanlagenPageV3() {
  // State für die Lightbox
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // --- MOCK DATEN FÜR GALERIE ---
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
      alt: "Moderner Raumteiler-Kamin"
    },
    {
      src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200",
      alt: "Klassischer Kamin mit Naturstein"
    },
    {
      src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200",
      alt: "Minimalistischer Gaskamin"
    },
    {
      src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200",
      alt: "Eck-Kamin in Wohnwand integriert"
    }
  ];

  // --- MOCK DATEN FÜR HERSTELLER MIT LOGOS ---
  // BITTE BEACHTEN: Ersetze die 'logoSrc' Pfade durch deine echten Logodateien (am besten SVG oder PNG mit transparentem Hintergrund).
  // Ich nutze hier Platzhalter-Bilder zur Demonstration.
  const manufacturers = [
    {
      name: "Spartherm",
      // Beispiel für einen echten Pfad: logoSrc: "/logos/spartherm.svg",
      logoSrc: "https://placehold.co/200x80/transparent/white?text=Spartherm", 
      description: "„The Fire Company“ steht für höchste Qualität und modernes Design aus Deutschland. Bekannt für exzellente Brenntechnik.",
      link: "https://www.spartherm.com"
    },
    {
      name: "Brunner",
      logoSrc: "https://placehold.co/200x80/transparent/white?text=Brunner",
      description: "Bayerische Handwerkskunst in Perfektion. Brunner Kamineinsätze gelten als das Herzstück langlebiger Kaminanlagen.",
      link: "https://www.brunner.de"
    },
    {
      name: "Camina & Schmid",
      logoSrc: "https://placehold.co/200x80/transparent/white?text=Camina+Schmid",
      description: "Systemkamine mit vielfältigen Gestaltungsmöglichkeiten. Die perfekte Symbiose aus Technik und Stein-Design.",
      link: "https://www.camina-schmid.de"
    },
    {
      name: "Hoxter",
      logoSrc: "https://placehold.co/200x80/transparent/white?text=Hoxter",
      description: "Spezialist für wasserführende Kamine und Speichertechnik. Robuste Bauweise trifft auf innovative Verbrennungstechnologie.",
      link: "https://www.hoxter.de"
    }
  ];

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-[#E67E22] selection:text-white">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative h-[60vh] bg-[#1A1A1A] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/kamine.jpg" 
            alt="Individuelle Kaminanlagen" 
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
              <span className="text-[#E67E22] font-bold uppercase tracking-[0.3em] text-xs">Unikate</span>
              <div className="h-[2px] w-12 bg-[#E67E22]"></div>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-6">
              Individuelle <br/> Kaminanlagen
            </h1>
            <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
              Ein Kamin so einzigartig wie Ihr Zuhause. Geplant nach Ihren Wünschen, gebaut für die Ewigkeit.
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
                <PenTool size={18} />
                <span>Vision & Handwerk</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] uppercase italic tracking-tighter mb-8 leading-none">
                Maßgeschneidertes <br/> Feuererlebnis
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Eine individuelle Kaminanlage ist mehr als nur eine Wärmequelle – sie ist ein architektonisches Statement. 
                Bei Ofenfischer entwickeln wir gemeinsam mit Ihnen ein Konzept, das sich perfekt in Ihre Wohnsituation einfügt. 
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Ob als raumteilender Tunnelkamin, imposante Panorama-Lösung oder klassisch in Naturstein gefasst: 
                Wir realisieren Ihre Vision mit modernster 3D-Planung und traditioneller handwerklicher Präzision.
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
                  <PenTool size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A1A1A] text-lg">CAD-Planung</h4>
                  <p className="text-slate-500 text-sm mt-1">Visualisierung Ihres Kamins in Ihren Räumen vor Baubeginn.</p>
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
                  <Hammer size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A1A1A] text-lg">Meistermontage</h4>
                  <p className="text-slate-500 text-sm mt-1">Fachgerechter Aufbau durch unsere erfahrenen Ofenbauer.</p>
                </div>
              </motion.div>
              
              {/* ... weitere Feature Cards ... */}
            </div>

          </div>
        </div>
      </section>

      {/* --- BILDER GALERIE (4-er Reihe, kein Text, mit Lightbox) --- */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#E67E22] font-bold uppercase tracking-[0.2em] text-xs">Portfolio</span>
            <h3 className="text-3xl font-black uppercase italic text-[#1A1A1A] mt-2">Inspiration</h3>
          </div>
          
          {/* Grid: 4 Spalten auf großen Screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative h-64 lg:h-80 rounded-2xl overflow-hidden shadow-lg cursor-pointer bg-slate-100"
                onClick={() => setSelectedImage(img.src)} // Öffnet Lightbox
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay mit Plus Icon */}
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

      {/* --- HERSTELLER SEKTION (Mit Logos) --- */}
      <section className="py-24 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center mb-16">
            <span className="text-[#E67E22] font-bold uppercase tracking-[0.2em] text-xs">Qualität</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mt-2">
              Unsere Premium Partner
            </h2>
            <div className="h-1 w-24 bg-[#E67E22] mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {manufacturers.map((brand, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center hover:bg-white/10 transition-colors group"
              >
                {/* LOGO CONTAINER */}
                <div className="h-24 mb-6 flex items-center justify-center w-full p-2">
                  {/* Das Logo Bild */}
                  <img 
                    src={brand.logoSrc} 
                    alt={`${brand.name} Logo`}
                    // CSS-Klassen für den Effekt: Standardmäßig Grau & transparent, beim Hover farbig & deckend
                    className="max-h-full max-w-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  />
                </div>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow font-light">
                  {brand.description}
                </p>

                <a 
                  href={brand.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#E67E22] text-sm font-bold flex items-center gap-2 hover:underline mt-auto"
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
            Bereit für Ihren Traumkamin?
          </h3>
          <p className="text-slate-600 mb-8">
            Vereinbaren Sie jetzt einen unverbindlichen Beratungstermin in einer unserer Filialen.
          </p>
          <a 
            href="/#kontakt" 
            className="inline-flex items-center gap-2 bg-[#E67E22] hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-orange-500/30 transition-all transform hover:-translate-y-1"
          >
            Beratungstermin vereinbaren <ArrowRight size={20} />
          </a>
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