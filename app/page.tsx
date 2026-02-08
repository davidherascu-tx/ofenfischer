"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Flame, Droplets, Home, Settings, ArrowUpRight 
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

// --- DATEN ---
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

// Aktualisierte Links für die Kategorien
const categories = [
  { name: "Individuelle Kamine", img: "/kamine.webp", link: "/produkte/kaminanlagen" },
  { name: "Kaminöfen", img: "/kaminofen.webp", link: "/produkte/kaminoefen" },
  { name: "Gaskamine", img: "/gaskamin.webp", link: "/produkte/gaskamine" },
  { name: "Speicheröfen", img: "/specksteinofen.webp", link: "/produkte/speicheroefen" }, 
  { name: "Kachelöfen", img: "/kachelofen.webp", link: "/produkte/kacheloefen" },
  { name: "Specksteinöfen", img: "/specksteinofen.webp", link: "/produkte/specksteinoefen" },
  { name: "Elektrokamine", img: "/elektrokamin.webp", link: "/produkte/elektrokamine" },
  { name: "Schornsteine", img: "/schornstein.webp", link: "/produkte/schornsteine" },
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
          {/* FIX: alt-Attribut hinzugefügt */}
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
};

// --- MEISTERHAND KACHEL ---
const MeisterhandCard = ({ icon, title, num, delay }: { icon: React.ReactNode, title: string, num: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    viewport={{ once: true }}
    className="group relative bg-[#F8FAFC] p-8 h-64 flex flex-col justify-between overflow-hidden border border-slate-200 hover:bg-white hover:shadow-2xl transition-all duration-500 z-10 cursor-pointer"
  >
    <div className="absolute top-0 right-0 p-4 text-slate-200 font-black text-7xl transition-all duration-500 group-hover:text-orange-500/20 group-hover:scale-110 select-none leading-none italic">
      {num}
    </div>
    
    <div className="relative z-10 text-[#1A1A1A] group-hover:text-[#E67E22] mb-4 transition-colors duration-300">
      {icon}
    </div>

    <h4 className="relative z-10 font-black text-[#1A1A1A] uppercase tracking-wider text-xl md:text-2xl leading-tight italic">
      {title}
    </h4>

    <div className="relative z-10 flex justify-end">
      <div className="w-10 h-10 bg-[#1A1A1A] text-white flex items-center justify-center rounded-full group-hover:bg-[#E67E22] group-hover:rotate-45 transition-all duration-300 shadow-lg">
        <ArrowUpRight size={20} />
      </div>
    </div>

    <div className="absolute bottom-0 left-0 h-1.5 w-0 bg-[#E67E22] group-hover:w-full transition-all duration-500 shadow-[0_0_15px_#E67E22]" />
  </motion.div>
);

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-[#E67E22] selection:text-white">
      <Navbar />
      <HeroSlider />

      {/* 1. QUALITÄT AUS MEISTERHAND */}
      <section className="relative py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center text-left">
            
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Flame className="text-[#E67E22] animate-pulse" size={18} />
                  {/* CONTRAST FIX: text-orange-700 statt #E67E22 */}
                  <h2 className="text-orange-700 font-black tracking-[0.2em] uppercase text-xs">Expertise & Leidenschaft</h2>
                </div>
                <h3 className="text-5xl md:text-7xl font-black text-[#2D2D2D] leading-[0.85] uppercase tracking-tighter italic mb-8">
                  Qualität aus <br/> Meisterhand
                </h3>
                <div className="h-1.5 w-24 bg-gradient-to-r from-[#E67E22] to-orange-400 mb-8 rounded-full shadow-[0_0_10px_rgba(230,126,34,0.3)]" />
                <p className="text-slate-600 font-medium italic text-lg leading-relaxed max-w-xl">
                  Seit über zwei Jahrzehnten steht Ofenfischer für die perfekte Symbiose aus traditionellem Handwerk und modernster Wohnkultur.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <MeisterhandCard icon={<Flame size={40} />} title="Kaminbau & Design" num="01" delay={0.1} />
                <MeisterhandCard icon={<Home size={40} />} title="Schornstein Technik" num="02" delay={0.2} />
                <MeisterhandCard icon={<Settings size={40} />} title="Heizungs Systeme" num="03" delay={0.3} />
                <MeisterhandCard icon={<Droplets size={40} />} title="Sanitär & Wellness" num="04" delay={0.4} />
              </div>
            </div>

            <div className="lg:col-span-5 relative h-full">
              <div className="relative h-full flex items-center justify-center">
                <div className="absolute -inset-10 bg-orange-500/10 blur-[100px] rounded-full animate-pulse" />
                
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative z-10"
                >
                  <div className="rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                    <img 
                      src="/kamine_homepage_v1.webp" 
                      alt="Ofenfischer Kamin Design" 
                      className="w-full h-auto object-cover"
                    />
                  </div>

                  {/* Pulsierendes Badge */}
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.05, 1],
                      boxShadow: [
                        "0 20px 25px -5px rgb(0 0 0 / 0.1)", 
                        "0 0 30px 5px rgba(230, 126, 34, 0.4)", 
                        "0 20px 25px -5px rgb(0 0 0 / 0.1)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-6 -right-6 bg-[#1A1A1A] p-6 rounded-2xl shadow-2xl border border-white/10 hidden md:block text-center"
                  >
                    <Flame className="text-[#E67E22] mx-auto mb-1" size={24} />
                    <p className="text-[#E67E22] font-black text-3xl leading-none italic">100%</p>
                    <p className="text-white text-[10px] font-bold uppercase tracking-widest mt-1">Meister-Garantie</p>
                  </motion.div>
                </motion.div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. PRODUKTWELTEN */}
      <section className="py-32 bg-[#1A1A1A] relative overflow-hidden text-white text-center">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-24">
            <span className="text-[#E67E22] font-black tracking-[0.4em] uppercase text-xs">Exklusive Auswahl</span>
            <h2 className="text-5xl md:text-7xl font-black uppercase italic mt-4 tracking-tighter">Produktwelten</h2>
            <div className="h-1 w-24 bg-[#E67E22] mx-auto mt-8"></div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {categories.map((cat, i) => (
              // HIER: Das gesamte Element ist jetzt ein Link
              <Link href={cat.link} key={i}>
                <motion.div whileHover={{ scale: 1.05 }} className="group flex flex-col items-center cursor-pointer">
                  <div className="relative w-36 h-36 md:w-52 md:h-52 rounded-full bg-[#0A0A0A] overflow-hidden shadow-2xl border-2 border-white/5 transition-all group-hover:border-orange-500/50">
                    <img src={cat.img} alt={cat.name} className="w-full h-full rounded-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" />
                  </div>
                  {/* FIX: h4 -> h3 für korrekte Hierarchie (h2 -> h3) */}
                  <h3 className="mt-8 font-bold text-sm uppercase tracking-widest group-hover:text-orange-500 transition-colors">{cat.name}</h3>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HEIZUNG & SANITÄR */}
      <section className="py-32 bg-white overflow-hidden text-[#2D2D2D]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center text-left">
            <div className="space-y-8">
              {/* CONTRAST FIX: text-orange-700 statt #E67E22 */}
              <span className="text-orange-700 font-bold tracking-[0.2em] uppercase text-xs">Innovation</span>
              {/* FIX: h3 -> h2 für Konsistenz mit anderen Sektionen */}
              <h2 className="text-5xl md:text-7xl font-black leading-tight uppercase italic tracking-tighter">Heizung <br/> & Sanitär</h2>
              <p className="text-slate-500 text-lg leading-relaxed border-l-2 border-[#E67E22] pl-6 italic">
                Wir verbinden moderne Ästhetik mit hocheffizienter Haustechnik. Sauberkeit und Präzision sind unser Maßstab.
              </p>
              <div className="grid sm:grid-cols-2 gap-8 pt-4">
                <div className="flex gap-4 items-start group">
                  <div className="bg-[#1A1A1A] p-3 rounded-xl text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-lg">
                    <Settings size={22}/>
                  </div>
                  <div>
                    <h3 className="font-black uppercase text-sm tracking-widest">Wärmepumpen</h3>
                    {/* CONTRAST FIX: text-slate-600 statt text-slate-400 */}
                    <p className="text-slate-600 text-xs mt-1 italic">Maximale Effizienz durch Umweltwärme.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start group">
                  <div className="bg-[#1A1A1A] p-3 rounded-xl text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-lg">
                    <Droplets size={22}/>
                  </div>
                  <div>
                    <h3 className="font-black uppercase text-sm tracking-widest">Bad-Wellness</h3>
                    {/* CONTRAST FIX: text-slate-600 statt text-slate-400 */}
                    <p className="text-slate-600 text-xs mt-1 italic">Individuelle Planung für höchste Ansprüche.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-700 border-8 border-slate-50">
                <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000" className="w-full h-[600px] object-cover" alt="Sanitär Design" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-orange-500 p-8 rounded-2xl shadow-xl hidden xl:block font-black text-4xl italic tracking-tighter leading-none text-[#1A1A1A]">100%</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}