"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Flame, Droplets, Home, Settings, ChevronRight, ArrowUpRight 
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// --- DATEN ---
const slides = [
  {
    id: 1,
    title: "Meisterhafte Kamine",
    highlight: "Tradition & Design",
    text: "Wir vereinen handwerkliche Präzision mit modernster Technik für Ihr perfektes Feuererlebnis.",
    image: "https://images.unsplash.com/photo-1542013936693-884638324212?q=80&w=2000",
  },
  {
    id: 2,
    title: "Zukunft Heiztechnik",
    highlight: "Effizienz erleben",
    text: "Nachhaltige Wärmepumpen und intelligente Systeme für ein energieeffizientes Zuhause.",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecb?q=80&w=2000",
  },
  {
    id: 3,
    title: "Sanitär & Bad",
    highlight: "Ihre Wohlfühloase",
    text: "Exklusive Badgestaltung und moderne Wassertechnik aus einer Hand.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2000",
  }
];

const categories = [
  { name: "Individuelle Kamine", img: "https://images.unsplash.com/photo-1574359411659-15573a27f812?q=80&w=500" },
  { name: "Kaminöfen", img: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=500" },
  { name: "Gaskamine", img: "https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?q=80&w=500" },
  { name: "Speicheröfen", img: "https://images.unsplash.com/photo-1595841055318-47db99306853?q=80&w=500" },
  { name: "Kachelöfen", img: "https://images.unsplash.com/photo-1545042157-dbf36711bb4a?q=80&w=500" },
  { name: "Specksteinöfen", img: "https://images.unsplash.com/photo-1619593226079-63a2985336f3?q=80&w=500" },
  { name: "Elektrokamine", img: "https://images.unsplash.com/photo-1602010830491-a18206240228?q=80&w=500" },
  { name: "Schornsteine", img: "https://images.unsplash.com/photo-1626242515694-870343467bf7?q=80&w=500" },
];

// --- HERO SLIDER ---
const HeroSlider = () => {
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
          <motion.img src={slides[index].image} className="absolute inset-0 w-full h-full object-cover" initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 8 }} />
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
};

// --- MEISTERHAND KACHEL ---
const MeisterhandCard = ({ icon, title, num, delay }: { icon: React.ReactNode, title: string, num: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    viewport={{ once: true }}
    className="group relative bg-slate-50 p-10 h-72 flex flex-col justify-between overflow-hidden border border-slate-200 hover:bg-white hover:shadow-2xl transition-all duration-500"
  >
    <div className="absolute top-0 right-0 p-6 text-slate-200 font-black text-7xl transition-all duration-500 group-hover:text-orange-500/20 group-hover:scale-110 select-none leading-none">
      {num}
    </div>
    <div className="relative z-10 text-[#2D2D2D] group-hover:text-[#E67E22] mb-6 transition-colors duration-300">
      {icon}
    </div>
    <h4 className="relative z-10 font-black text-[#2D2D2D] uppercase tracking-wider text-lg md:text-xl leading-tight italic">
      {title}
    </h4>
    <div className="relative z-10 flex justify-end">
      <div className="w-10 h-10 bg-[#2D2D2D] text-white flex items-center justify-center rounded-full group-hover:bg-[#E67E22] group-hover:rotate-45 transition-all duration-300">
        <ArrowUpRight size={18} />
      </div>
    </div>
    <div className="absolute bottom-0 left-0 h-1.5 w-0 bg-[#E67E22] group-hover:w-full transition-all duration-500" />
  </motion.div>
);

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-[#E67E22] selection:text-white">
      <Navbar />
      <HeroSlider />

      {/* 1. QUALITÄT AUS MEISTERHAND (Kacheln auf einer Linie) */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 mb-20 items-end text-left">
          <div className="lg:col-span-2">
            <h2 className="text-[#E67E22] font-black tracking-[0.2em] mb-4 uppercase text-xs">Expertise</h2>
            <h3 className="text-5xl md:text-7xl font-black text-[#2D2D2D] leading-[0.85] uppercase tracking-tighter italic">Qualität aus <br/> Meisterhand</h3>
          </div>
          <p className="text-slate-500 border-l-4 border-[#E67E22] pl-6 font-light italic text-lg leading-snug">
            Traditionelles Handwerk trifft auf innovative Gebäudetechnik.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          <MeisterhandCard icon={<Flame size={44}/>} title="Kaminbau & Design" num="01" delay={0.1} />
          <MeisterhandCard icon={<Home size={44}/>} title="Schornstein Technik" num="02" delay={0.2} />
          <MeisterhandCard icon={<Settings size={44}/>} title="Heizungs Systeme" num="03" delay={0.3} />
          <MeisterhandCard icon={<Droplets size={44}/>} title="Sanitär & Wellness" num="04" delay={0.4} />
        </div>
      </section>

      {/* 2. PRODUKTWELTEN (Dunkles Design, runder Border entfernt) */}
      <section className="py-32 bg-[#1A1A1A] relative overflow-hidden text-white text-center">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-24">
            <span className="text-[#E67E22] font-black tracking-[0.4em] uppercase text-xs">Exklusive Auswahl</span>
            <h2 className="text-5xl md:text-7xl font-black uppercase italic mt-4 tracking-tighter">Produktwelten</h2>
            <div className="h-1 w-24 bg-[#E67E22] mx-auto mt-8"></div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {categories.map((cat, i) => (
              <motion.div key={i} whileHover={{ scale: 1.05 }} className="group flex flex-col items-center cursor-pointer">
                <div className="relative">
                  <div className="absolute -inset-1 bg-[#E67E22] rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-xl"></div>
                  <div className="relative w-36 h-36 md:w-52 md:h-52 rounded-full bg-[#0A0A0A] overflow-hidden shadow-2xl transition-all duration-500">
                    <img src={cat.img} alt={cat.name} className="w-full h-full rounded-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" />
                  </div>
                </div>
                <h4 className="mt-8 font-bold text-sm uppercase tracking-widest group-hover:text-[#E67E22] transition-colors">{cat.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HEIZUNG & SANITÄR (Wiederhergestellt: Icons links, Bilder rechts) */}
      <section className="py-32 bg-white overflow-hidden text-[#2D2D2D]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-[#E67E22] font-bold tracking-[0.2em] uppercase text-xs">Innovation & Technik</span>
              <h3 className="text-5xl md:text-7xl font-black leading-[0.85] uppercase italic mt-4 tracking-tighter text-left">Heizung <br/> & Sanitär</h3>
              <p className="text-slate-500 mt-8 text-lg leading-relaxed max-w-md italic border-l-2 border-[#E67E22] pl-6 text-left">
                Wir verbinden moderne Ästhetik mit hocheffizienter Haustechnik. Sauberkeit und Präzision sind unser Maßstab.
              </p>
              
              <div className="mt-12 space-y-8 text-left">
                <div className="flex gap-6 items-start group">
                  <div className="w-12 h-12 bg-[#2D2D2D] text-[#E67E22] flex items-center justify-center rounded-full group-hover:bg-[#E67E22] group-hover:text-white transition-all duration-300">
                    <Settings size={22}/>
                  </div>
                  <div>
                    <h5 className="font-black uppercase text-sm tracking-widest">Wärmepumpen</h5>
                    <p className="text-slate-400 text-sm mt-1">Maximale Effizienz durch intelligente Umweltwärme.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start group">
                  <div className="w-12 h-12 bg-[#2D2D2D] text-[#E67E22] flex items-center justify-center rounded-full group-hover:bg-[#E67E22] group-hover:text-white transition-all duration-300">
                    <Droplets size={22}/>
                  </div>
                  <div>
                    <h5 className="font-black uppercase text-sm tracking-widest">Bad-Architektur</h5>
                    <p className="text-slate-400 text-sm mt-1">Individuelle Planung für höchste Ansprüche.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-700">
                <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000" className="w-full h-[600px] object-cover" alt="Sanitär Design" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#E67E22] p-8 text-[#2D2D2D] rounded-2xl shadow-xl hidden xl:block">
                <p className="text-4xl font-black italic tracking-tighter leading-none">100%</p>
                <p className="text-xs font-bold uppercase tracking-widest">Meisterqualität</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}