"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn, X, Camera, ArrowDown } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

interface GalleryClientProps {
  images: string[];
}

export default function GalleryClient({ images }: GalleryClientProps) {
  // State für Lightbox
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // State für "Mehr laden" Funktion (Startwert 24 Bilder)
  const [visibleCount, setVisibleCount] = useState(24);

  const showMoreImages = () => {
    setVisibleCount(prev => prev + 24);
  };

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
            {/* HIER WURDE DIE ZAHL ENTFERNT */}
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
                    onClick={() => setSelectedImage(src)}
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
                  {/* Dieser Zähler ist hilfreich für den User, bleibt also drin */}
                  <p className="text-slate-400 text-sm mt-4">
                    Zeige {Math.min(visibleCount, images.length)} von {images.length} Bildern
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* --- LIGHTBOX --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-[#1A1A1A]/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 z-10 w-12 h-12 bg-black/50 hover:bg-[#E67E22] text-white rounded-full flex items-center justify-center transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage} 
              alt="Referenz Großansicht"
              className="w-auto h-auto max-w-full max-h-[95vh] object-contain rounded shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}