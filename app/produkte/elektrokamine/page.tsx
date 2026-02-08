"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, Zap, Droplets, MonitorPlay, Plus, X, Power } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Link from 'next/link';

export default function ElektrokaminePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // --- GALERIE BILDER (Platzhalter) ---
  const galleryImages = [
    {
      src: "/elektrokamine/elektro_1.webp",
      alt: "Moderner Einbau-Elektrokamin mit Holzdekoration"
    },
    {
      src: "/elektrokamine/elektro_2.webp",
      alt: "Freistehender Elektrokamin in Weiß"
    },
    {
      src: "/elektrokamine/elektro_3.webp",
      alt: "Wandhängender Elektrokamin, flaches Design"
    },
    {
      src: "/elektrokamine/elektro_4.webp",
      alt: "Elektrokamin mit Wasserdampf-Technik als Raumteiler"
    }
  ];

  // --- HERSTELLER DATEN (Vorformulierte Texte) ---
  const manufacturers = [
    {
      name: "Faber",
      logoSrc: "/logos/faber-logo.webp", 
      description: "Faber ist Pionier in der Entwicklung revolutionärer Flammeneffekte. Mit der patentierten e-MatriX-Technologie erzeugt Faber Feuer aus Licht und Wassernebel, das von echten Flammen kaum zu unterscheiden ist. Ideal für alle, die keine Kompromisse bei der Atmosphäre eingehen wollen, aber auf einen Gas- oder Holzanschluss verzichten müssen. 'Future Proof' genießen ohne Emissionen.",
      link: "https://www.faberfires.com/de-de"
    },
    {
      name: "Dimplex",
      logoSrc: "/logos/dimplex-logo.webp", 
      description: "Als Weltmarktführer für elektrische Kamine bietet Dimplex mit Technologien wie Opti-V®, Opti-myst® und Optiflame® für jeden Anspruch die perfekte Illusion. Ob als Einsatz für bestehende Kamine oder als komplette Wandlösung – Dimplex steht für einfache Installation 'Plug & Play' und täuschend echte 3D-Flammenbilder, die jeden Raum sofort aufwerten.",
      link: "https://www.dimplexfires.com/de-de"
    },
    {
      name: "Planika",
      logoSrc: "/logos/planika-logo.webp", 
      description: "Planika steht für modernes Design und technologische Innovation. Die 'Astro' Serie bietet modernste LED-Technologie mit mehrfarbigen Flammen-Effekten und integrierten Heizmodulen. Besonders hervorzuheben ist die Vielseitigkeit im Einbau: Planika-Lösungen lassen sich oft modular als 1-, 2- oder 3-seitige Kamine konfigurieren und passen sich so perfekt Ihrer Innenarchitektur an.",
      link: "https://www.planikafires.com/de/"
    }
  ];

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-[#E67E22] selection:text-white">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative h-[60vh] bg-[#1A1A1A] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/elektrokamine/elektro_1.webp" 
            alt="Elektrokamin Hero" 
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
              <span className="text-[#E67E22] font-bold uppercase tracking-[0.3em] text-xs">Plug & Play</span>
              <div className="h-[2px] w-12 bg-[#E67E22]"></div>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-6">
              Elektrokamine
            </h1>
            <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
              Feuer aus Licht und Wasser. Die moderne Alternative für jedes Zuhause – ohne Schornstein, ohne Emissionen, aber mit voller Atmosphäre.
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
                <Zap size={18} />
                <span>Innovation Pur</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] uppercase italic tracking-tighter mb-8 leading-none">
                Die Illusion <br/> wird Realität
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Moderne Elektrokamine haben nichts mehr mit den einfachen Lichteffekten vergangener Tage zu tun. Dank ausgefeilter 3D-Technik, Wasserdampfvernebelung und LED-Projektion entsteht ein Flammenbild, das täuschend echt wirkt.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Der größte Vorteil: Sie benötigen keinen Schornstein und keine Genehmigung. Eine Steckdose genügt, um in Mietwohnungen, Hotels oder Schlafzimmern echte Kaminromantik zu erzeugen – auf Wunsch sogar mit Heizleistung.
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
                  <Droplets size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A1A1A] text-lg">Wasserdampf-Technik</h4>
                  <p className="text-slate-500 text-sm mt-1">Feiner Nebel wird beleuchtet und erzeugt einen dreidimensionalen Rauch- und Flammeneffekt (z.B. Opti-myst).</p>
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
                  <Power size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A1A1A] text-lg">Einfache Installation</h4>
                  <p className="text-slate-500 text-sm mt-1">Kein Rauchabzug nötig. Einstecken, einschalten und entspannen. Ideal auch für Mietobjekte.</p>
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
                  <MonitorPlay size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A1A1A] text-lg">Smart Home Ready</h4>
                  <p className="text-slate-500 text-sm mt-1">Viele Modelle lassen sich bequem per App steuern und in Ihr Smart Home integrieren.</p>
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
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative h-64 lg:h-80 rounded-2xl overflow-hidden shadow-lg cursor-pointer bg-slate-100"
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
              Unsere E-Kamin Partner
            </h2>
            <div className="h-1 w-24 bg-[#E67E22] mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {manufacturers.map((brand, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 p-12 rounded-3xl flex flex-col items-center text-center hover:bg-white/10 transition-colors group"
              >
                {/* LOGO CONTAINER: Transparent für weiße Logos */}
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
            Feuer ohne Kompromisse?
          </h3>
          <p className="text-slate-600 mb-8">
            Erleben Sie die neueste Generation von Elektrokaminen live in unserer Ausstellung. Sie werden staunen!
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