"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    id: 1,
    title: "Meisterhafte Kamine",
    highlight: "Tradition & Design",
    text: "Wir vereinen handwerkliche Präzision mit modernster Technik für Ihr perfektes Feuererlebnis.",
    image: "/banner_1.webp",
  },
  {
    id: 2,
    title: "Zukunft Heiztechnik",
    highlight: "Effizienz erleben",
    text: "Nachhaltige Wärmepumpen und intelligente Systeme für ein energieeffizientes Zuhause.",
    image: "/banner_2.webp",
  },
  {
    id: 3,
    title: "Sanitär & Bad",
    highlight: "Ihre Wohlfühloase",
    text: "Exklusive Badgestaltung und moderne Wassertechnik aus einer Hand.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2000",
  }
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const next = useCallback(() => {
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setProgress(0);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) { next(); return 0; }
        return prev + 0.5;
      });
    }, 30);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-[#2D2D2D]">
      <AnimatePresence mode="wait">
        <motion.div key={index} className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.2 }}>
          <motion.img 
            src={slides[index].image} 
            alt={slides[index].title}
            className="absolute inset-0 w-full h-full object-cover" 
            initial={{ scale: 1.1 }} 
            animate={{ scale: 1 }} 
            transition={{ duration: 8 }} 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2D2D2D] via-[#2D2D2D]/40 to-transparent z-10" />
          <div className="absolute inset-0 z-20 flex items-center px-8 md:pl-48">
            <div className="max-w-2xl text-white">
              <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="flex items-center gap-4 mb-4 text-[#E67E22]">
                <div className="h-[2px] w-12 bg-[#E67E22]"></div>
                <span className="font-bold uppercase tracking-[0.3em] text-xs">{slides[index].highlight}</span>
              </motion.div>
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight uppercase italic tracking-tighter">{slides[index].title}</h1>
              <p className="text-lg md:text-xl text-slate-200 font-light leading-relaxed border-l-2 border-[#E67E22] pl-6">{slides[index].text}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-12 left-8 md:left-48 z-30 flex flex-col gap-2">
        <span className="text-white/50 font-mono text-xs tracking-widest uppercase">0{index + 1} / 0{slides.length}</span>
        <div className="w-48 md:w-64 h-[2px] bg-white/10 relative">
          <motion.div className="absolute h-full bg-[#E67E22] left-0 top-0 shadow-[0_0_8px_#E67E22]" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </section>
  );
}