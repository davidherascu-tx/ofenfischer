"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn, X, Camera, ArrowDown, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// --- HELPER FÜR SWIPE GESTEN ---
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

interface GalleryClientProps {
  images: string[];
}

export default function GalleryClient({ images }: GalleryClientProps) {
  // State für Lightbox: Wir speichern den INDEX statt der URL
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  
  // State für "Mehr laden" Funktion (Startwert 24 Bilder)
  const [visibleCount, setVisibleCount] = useState(24);

  const showMoreImages = () => {
    setVisibleCount(prev => prev + 24);
  };

  // --- NAVIGATION IM LIGHTBOX ---
  
  // Nächstes Bild
  const showNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => {
      if (prev === null) return null;
      // Loop: Wenn am Ende, gehe zum ersten Bild
      return prev === images.length - 1 ? 0 : prev + 1;
    });
  }, [images.length]);

  // Vorheriges Bild
  const showPrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => {
      if (prev === null) return null;
      // Loop: Wenn am Anfang, gehe zum letzten Bild
      return prev === 0 ? images.length - 1 : prev - 1;
    });
  }, [images.length]);

  // Tastatur-Steuerung (Pfeiltasten & ESC)
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'Escape') setSelectedIndex(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, showNext, showPrev]);

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-[#E67E22] selection:text-white">
      
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative h-[50vh] bg-[#1A1A1A] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          {/* Wir nehmen das erste Bild aus dem Ordner als Hintergrund */}
          {images.length > 0 ? (
            <img 
              src={images[0]} 
              alt="Referenz Header" 
              className="w-full h-full object-cover opacity-30 grayscale"
            />
          ) : (
            <div className="w-full h-full bg-[#1A1A1A]" />
          )}
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
              <span className="text-[#E67E22] font-bold uppercase tracking-[0.3em] text-xs">Meisterwerke</span>
              <div className="h-[2px] w-12 bg-[#E67E22]"></div>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-4">
              Referenzen
            </h1>
            <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
              Von der Idee bis zur Umsetzung – unsere Projekte. <br/>
              Lassen Sie sich von unseren <strong>zahlreichen realisierten Träumen</strong> inspirieren.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- GALERIE GRID --- */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-[1600px] mx-auto px-6">
          
          {images.length === 0 ? (
            <div className="text-center text-slate-500 py-20">
              <Camera size={48} className="mx-auto mb-4 opacity-50" />
              <p>Aktuell sind noch keine Referenzbilder hochgeladen.</p>
              <p className="text-sm mt-2">Bitte legen Sie Bilder in den Ordner <code className="bg-slate-200 px-2 py-1 rounded">public/referenzen</code></p>
            </div>
          ) : (
            <>
              {/* Masonry-ähnliches Grid */}
              <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                {images.slice(0, visibleCount).map((src, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="break-inside-avoid group cursor-pointer relative rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-white"
                    onClick={() => setSelectedIndex(index)} // Hier wird jetzt der Index gesetzt
                  >
                    <img 
                      src={src} 
                      alt={`Referenzprojekt ${index + 1}`} 
                      className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 bg-[#E67E22] rounded-full flex items-center justify-center text-white shadow-xl transform scale-50 group-hover:scale-100 transition-transform duration-300">
                        <ZoomIn size={24} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Load More Button */}
              {visibleCount < images.length && (
                <div className="mt-16 text-center">
                  <button 
                    onClick={showMoreImages}
                    className="bg-white hover:bg-[#E67E22] text-[#1A1A1A] hover:text-white border border-slate-200 hover:border-[#E67E22] px-8 py-4 rounded-full font-bold shadow-lg transition-all flex items-center gap-2 mx-auto group"
                  >
                    <span>Mehr Projekte anzeigen</span>
                    <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform" />
                  </button>
                  <p className="text-slate-400 text-sm mt-4">
                    Zeige {Math.min(visibleCount, images.length)} von {images.length} Bildern
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* --- LIGHTBOX (Mit Navigation & Swipe) --- */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // 'touch-none' verhindert das Scrollen der Hintergrundseite auf Mobile beim Wischen
            className="fixed inset-0 z-[9999] bg-[#1A1A1A]/95 backdrop-blur-xl flex items-center justify-center p-4 touch-none"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Schließen Button */}
            <button 
              className="absolute top-6 right-6 z-20 w-12 h-12 bg-black/50 hover:bg-[#E67E22] text-white rounded-full flex items-center justify-center transition-colors"
              onClick={() => setSelectedIndex(null)}
            >
              <X size={24} />
            </button>

            {/* Linker Pfeil (Zurück) - Jetzt immer sichtbar (auch Mobile) */}
            {images.length > 1 && (
              <button 
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-black/50 hover:bg-[#E67E22] text-white rounded-full flex items-center justify-center transition-colors"
                onClick={showPrev}
              >
                <ChevronLeft size={24} className="md:w-8 md:h-8" />
              </button>
            )}

            {/* Rechter Pfeil (Weiter) - Jetzt immer sichtbar (auch Mobile) */}
            {images.length > 1 && (
              <button 
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-black/50 hover:bg-[#E67E22] text-white rounded-full flex items-center justify-center transition-colors"
                onClick={showNext}
              >
                <ChevronRight size={24} className="md:w-8 md:h-8" />
              </button>
            )}

            {/* Bild Container mit Swipe-Logik */}
            <motion.img 
              key={selectedIndex} // Key sorgt für Animation beim Wechsel
              src={images[selectedIndex]} 
              alt="Referenz Großansicht"
              className="w-auto h-auto max-w-full max-h-[85vh] object-contain rounded shadow-2xl z-10 cursor-grab active:cursor-grabbing"
              onClick={(e) => e.stopPropagation()} // Verhindert Schließen beim Klick aufs Bild
              
              // --- SWIPE PROPERTIES ---
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              
              drag="x" // Nur horizontales Ziehen erlauben
              dragConstraints={{ left: 0, right: 0 }} // Springt immer in die Mitte zurück
              dragElastic={1} // "Gummi"-Effekt
              
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  showNext(); // Wisch nach Links -> Nächstes Bild
                } else if (swipe > swipeConfidenceThreshold) {
                  showPrev(); // Wisch nach Rechts -> Vorheriges Bild
                }
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}