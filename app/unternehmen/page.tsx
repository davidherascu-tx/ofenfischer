"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, MapPin, Hammer, Award, ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// --- ECHTE ZERTIFIKATE ---
const certificateImages = [
  { 
    src: "/zertifikate/Meisterbrief_kachelofen_und_luftheizungsbauer.jpg", 
    alt: "Meisterbrief Kachelofen- & Luftheizungsbauer" 
  },
  { 
    src: "/zertifikate/meisterbrief_zentralheizungs_und_lueftungsbauer.jpg", 
    alt: "Meisterbrief Zentralheizungs- & Lüftungsbauer" 
  },
  { 
    src: "/zertifikate/technischer_fachwirt_1.jpg", 
    alt: "Staatlich gepr. Technischer Fachwirt" 
  },
  { 
    src: "/zertifikate/Zertifikat_Fachbetrieb_Wasserhaushalt.jpg", 
    alt: "Fachbetrieb nach Wasserhaushaltsgesetz" 
  },
  { 
    src: "/zertifikate/vdi-qualifizierungsnachweis.jpg", 
    alt: "Sachkundiger Wärmepumpensysteme VDI 4645" 
  },
  { 
    src: "/zertifikate/zertifikat2019_deutsches_pelletsinstitug.jpg", 
    alt: "Zertifizierter Pelletfachbetrieb (DEPI)" 
  },
  { 
    src: "/zertifikate/zertifikat2019_windhager.jpg", 
    alt: "Biomasse- & Pelletsfachbetrieb (Windhager)" 
  },
  { 
    src: "/zertifikate/hoxter_technisches_training.jpg", 
    alt: "Hoxter Technisches Training" 
  },
  { 
    src: "/zertifikate/fachbetrieb_gemaess_wasserhaushaltgesetz.jpg", 
    alt: "Fachbetrieb WHG (TÜV Rheinland)" 
  }
];

// Wir verdoppeln die Liste für den Endlos-Effekt
const infiniteCertificates = [...certificateImages, ...certificateImages];

export default function UnternehmenPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Verbesserte Endlos-Scroll-Funktion
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = 320; // Breite einer Karte + Gap
      
      // Die Hälfte der Gesamtbreite entspricht einem kompletten Satz Zertifikate
      const oneSetWidth = current.scrollWidth / 2;
      
      if (direction === 'left') {
        // Wenn wir ganz am Anfang sind (0), springen wir unsichtbar in die Mitte
        if (current.scrollLeft <= 10) {
          current.scrollLeft = oneSetWidth;
        }
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        // Wenn wir bereits im zweiten Satz (der Kopie) sind, 
        // springen wir unsichtbar zurück in den ersten Satz an die gleiche relative Stelle
        if (current.scrollLeft >= oneSetWidth) {
          current.scrollLeft = current.scrollLeft - oneSetWidth;
        }
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  // Autoplay Effekt
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        scroll('right');
      }
    }, 3000); 

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-[#E67E22] selection:text-white">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative h-[60vh] bg-[#1A1A1A] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          {/* ANPASSUNG: 'grayscale' hinzugefügt für Schwarz-Weiß-Effekt */}
          <img 
            src="/unternehmen_banner.webp" 
            alt="Ofenfischer Tradition" 
            className="w-full h-full object-cover object-center opacity-40 grayscale"
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
              <span className="text-[#E67E22] font-bold uppercase tracking-[0.3em] text-xs">Seit über 25 Jahren</span>
              <div className="h-[2px] w-12 bg-[#E67E22]"></div>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-4">
              Tradition & Handwerk <br/> in der 3. Generation!
            </h1>
            <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
              Ofen Fischer GmbH – Qualität, die wärmt.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- WER WIR SIND --- */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Linke Spalte: Bild mit Badge */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/kaminofen.webp" 
                  alt="Ofenfischer Handwerkskunst" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Badge */}
                <div className="absolute bottom-8 left-8 right-8 md:right-auto bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl text-white shadow-lg">
                  <p className="text-[#E67E22] font-bold uppercase tracking-widest text-[10px] mb-2">Familienunternehmen</p>
                  <p className="font-serif text-2xl md:text-3xl leading-tight">Handwerk in der <br/> 3. Generation</p>
                </div>
              </div>
              
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#F8FAFC] rounded-full z-[-1] hidden md:block" />
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#E67E22]/5 rounded-full z-[-1]" />
            </motion.div>

            {/* Rechte Spalte: Text & Fakten */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 text-[#E67E22] font-bold uppercase tracking-widest text-xs mb-6">
                <Users size={18} />
                <span>Über uns</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] uppercase italic tracking-tighter mb-8 leading-none">
                Leidenschaft <br/> für Wärme
              </h2>
              
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed mb-10 text-justify">
                <p>
                  Wir, die <strong>Ofen-Fischer GmbH</strong>, sind ein familiengeführtes, mittelständisches Handwerksunternehmen mit 35 Mitarbeitern und Kunden in ganz Europa.
                </p>
                <p>
                  Neben der Herstellung und dem Einbau von individuell gestalteten Kaminen und Öfen, sowohl mit Holz als auch mit Gas befeuert, zählt zu unserem Spezialgebiet die Kombination von wassergeführten Kaminen / Öfen mit modernen Zentralheizungen.
                </p>
                <p>
                  Unsere Firmenzentrale ist im Gewerbegebiet des Südbrandenburgischen Ortes <strong>“Plessa“</strong> beheimatet. Zwei weitere Standorte mit großzügigen Schauräumen befinden sich, jeweils auch verkehrsgünstig gelegen, in <strong>Dresden</strong> und <strong>Berlin</strong>.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 bg-[#F8FAFC] rounded-2xl border border-slate-100 flex items-center gap-4 hover:border-[#E67E22]/20 hover:shadow-md transition-all group">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#E67E22] shadow-sm group-hover:scale-110 transition-transform">
                    <Users size={22} />
                  </div>
                  <div>
                    <span className="block font-black text-lg text-[#1A1A1A] leading-tight">35 Mitarbeiter</span>
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Starkes Team</span>
                  </div>
                </div>

                <div className="p-5 bg-[#F8FAFC] rounded-2xl border border-slate-100 flex items-center gap-4 hover:border-[#E67E22]/20 hover:shadow-md transition-all group">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#E67E22] shadow-sm group-hover:scale-110 transition-transform">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <span className="block font-black text-lg text-[#1A1A1A] leading-tight">3 Standorte</span>
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Plessa, Berlin, Dresden</span>
                  </div>
                </div>

                <div className="p-5 bg-[#F8FAFC] rounded-2xl border border-slate-100 flex items-center gap-4 hover:border-[#E67E22]/20 hover:shadow-md transition-all group">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#E67E22] shadow-sm group-hover:scale-110 transition-transform">
                    <Hammer size={22} />
                  </div>
                  <div>
                    <span className="block font-black text-lg text-[#1A1A1A] leading-tight">Meisterbetrieb</span>
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Handwerkskunst</span>
                  </div>
                </div>

                <div className="p-5 bg-[#F8FAFC] rounded-2xl border border-slate-100 flex items-center gap-4 hover:border-[#E67E22]/20 hover:shadow-md transition-all group">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#E67E22] shadow-sm group-hover:scale-110 transition-transform">
                    <Award size={22} />
                  </div>
                  <div>
                    <span className="block font-black text-lg text-[#1A1A1A] leading-tight">Europaweit</span>
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Zufriedene Kunden</span>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* --- ZERTIFIKATE KARUSSELL (ENDLOS) --- */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#E67E22] font-bold uppercase tracking-[0.2em] text-xs">Qualität & Sicherheit</span>
            <h2 className="text-3xl md:text-5xl font-black text-[#1A1A1A] uppercase italic tracking-tighter mt-2">
              Unsere Zertifizierungen
            </h2>
            <div className="h-1 w-24 bg-[#E67E22] mx-auto mt-6 mb-6"></div>
          </div>

          <div 
            className="relative group/carousel px-4"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Pfeil Links */}
            <button 
              onClick={() => scroll('left')} 
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full flex items-center justify-center text-[#1A1A1A] shadow-lg hover:bg-[#E67E22] hover:text-white hover:border-[#E67E22] transition-all transform hover:scale-110 -ml-2 md:-ml-6"
              aria-label="Zurück"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Scroll Container */}
            <div 
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto py-8 scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {infiniteCertificates.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 }}
                  className="flex-none w-[280px] md:w-[320px] group cursor-pointer"
                  onClick={() => setSelectedImage(cert.src)}
                >
                  <div className="relative aspect-[3/4] bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden transform group-hover:-translate-y-2 transition-transform duration-300">
                    <img 
                      src={cert.src} 
                      alt={cert.alt} 
                      className="w-full h-full object-contain p-4 bg-white"
                    />
                    <div className="absolute inset-0 bg-[#1A1A1A]/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <div className="w-14 h-14 bg-[#E67E22] rounded-full flex items-center justify-center text-white transform scale-50 group-hover:scale-100 transition-all duration-300 shadow-xl">
                        <ZoomIn size={24} />
                      </div>
                    </div>
                  </div>
                  <p className="text-center mt-4 font-bold text-[#1A1A1A] group-hover:text-[#E67E22] transition-colors text-sm px-4">
                    {cert.alt}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Pfeil Rechts */}
            <button 
              onClick={() => scroll('right')} 
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full flex items-center justify-center text-[#1A1A1A] shadow-lg hover:bg-[#E67E22] hover:text-white hover:border-[#E67E22] transition-all transform hover:scale-110 -mr-2 md:-mr-6"
              aria-label="Weiter"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* --- VIDEO SECTION --- */}
      <section className="py-24 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#E67E22] font-bold uppercase tracking-[0.2em] text-xs">Einblicke</span>
            <h2 className="text-4xl font-black uppercase italic tracking-tighter mt-2">
              Ofenfischer Erleben
            </h2>
            <div className="h-1 w-24 bg-[#E67E22] mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Video 1 */}
            <div className="bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <div className="aspect-video relative">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/5EGvKcMd2jU?modestbranding=1&rel=0" 
                  title="Ofenfischer Video 1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#E67E22] transition-colors">Unternehmensvorstellung</h3>
                <p className="text-slate-400 text-sm">Ein kurzer Einblick in unsere Philosophie und Arbeitsweise.</p>
              </div>
            </div>

            {/* Video 2 */}
            <div className="bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <div className="aspect-video relative">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/RuvYxY5AO84?modestbranding=1&rel=0" 
                  title="Ofenfischer Video 2"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#E67E22] transition-colors">Handwerk & Leidenschaft</h3>
                <p className="text-slate-400 text-sm">Sehen Sie unserem Team bei der Arbeit über die Schulter.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- LIGHTBOX --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-[#1A1A1A]/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
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
              alt="Zertifikat Großansicht"
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