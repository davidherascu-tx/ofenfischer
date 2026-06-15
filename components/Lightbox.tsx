"use client";

import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

type GalleryImage = { src: string; alt?: string };

interface LightboxProps {
  images: GalleryImage[];
  selected: string | null;
  onSelect: (src: string) => void;
  onClose: () => void;
}

export default function Lightbox({ images, selected, onSelect, onClose }: LightboxProps) {
  const currentIndex = selected ? images.findIndex((img) => img.src === selected) : -1;
  const isOpen = currentIndex !== -1;
  const hasMultiple = images.length > 1;
  const wheelLock = useRef(false);

  const goTo = (index: number) => {
    if (images.length === 0) return;
    const next = (index + images.length) % images.length;
    onSelect(images[next].src);
  };

  const showPrev = () => goTo(currentIndex - 1);
  const showNext = () => goTo(currentIndex + 1);

  // Tastatur-Navigation: Pfeiltasten zum Blättern, ESC zum Schließen
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft') showPrev();
      else if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, currentIndex, images.length]);

  // Mausrad-Scrollen zum Blättern (mit kurzer Sperre gegen zu schnelles Springen)
  const handleWheel = (e: React.WheelEvent) => {
    if (!hasMultiple || wheelLock.current) return;
    wheelLock.current = true;
    if (e.deltaY > 0 || e.deltaX > 0) showNext();
    else showPrev();
    setTimeout(() => {
      wheelLock.current = false;
    }, 350);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={onClose}
          onWheel={handleWheel}
        >
          {/* Schließen */}
          <button
            className="absolute top-6 right-6 z-10 w-12 h-12 bg-white/10 hover:bg-[#E67E22] text-white rounded-full flex items-center justify-center transition-colors"
            onClick={onClose}
            aria-label="Schließen"
          >
            <X size={28} />
          </button>

          {/* Vorheriges Bild */}
          {hasMultiple && (
            <button
              className="absolute left-4 md:left-8 z-10 w-12 h-12 bg-white/10 hover:bg-[#E67E22] text-white rounded-full flex items-center justify-center transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              aria-label="Vorheriges Bild"
            >
              <ChevronLeft size={28} />
            </button>
          )}

          {/* Nächstes Bild */}
          {hasMultiple && (
            <button
              className="absolute right-4 md:right-8 z-10 w-12 h-12 bg-white/10 hover:bg-[#E67E22] text-white rounded-full flex items-center justify-center transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              aria-label="Nächstes Bild"
            >
              <ChevronRight size={28} />
            </button>
          )}

          <AnimatePresence mode="wait">
            <motion.img
              key={selected}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.2 }}
              src={selected ?? undefined}
              alt={isOpen ? images[currentIndex].alt ?? 'Großansicht' : 'Großansicht'}
              className="w-auto h-auto max-w-[85vw] max-h-[85vh] object-contain rounded shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </AnimatePresence>

          {/* Zähler */}
          {hasMultiple && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm font-bold tracking-widest">
              {currentIndex + 1} / {images.length}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
