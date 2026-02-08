"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Droplets, Home, Settings, ArrowUpRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

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

export default function HomeContent() {
  return (
    <>
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
                    <Image 
                      src="/kamine_homepage_v1.webp" 
                      alt="Ofenfischer Kamin Design"
                      width={800} 
                      height={1000} 
                      className="w-full h-auto object-cover"
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 80vw, 600px"
                    />
                  </div>

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
              <Link href={cat.link} key={i}>
                <motion.div whileHover={{ scale: 1.05 }} className="group flex flex-col items-center cursor-pointer">
                  <div className="relative w-36 h-36 md:w-52 md:h-52 rounded-full bg-[#0A0A0A] overflow-hidden shadow-2xl border-2 border-white/5 transition-all group-hover:border-orange-500/50">
                    <Image 
                      src={cat.img} 
                      alt={cat.name}
                      fill
                      className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                      sizes="(max-width: 768px) 144px, 208px"
                    />
                  </div>
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
              <span className="text-orange-700 font-bold tracking-[0.2em] uppercase text-xs">Innovation</span>
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
                    <p className="text-slate-600 text-xs mt-1 italic">Maximale Effizienz durch Umweltwärme.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start group">
                  <div className="bg-[#1A1A1A] p-3 rounded-xl text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-lg">
                    <Droplets size={22}/>
                  </div>
                  <div>
                    <h3 className="font-black uppercase text-sm tracking-widest">Bad-Wellness</h3>
                    <p className="text-slate-600 text-xs mt-1 italic">Individuelle Planung für höchste Ansprüche.</p>
                  </div>
                </div>
              </div>

              {/* NEUE BUTTONS */}
              <div className="flex flex-wrap gap-4 pt-6">
                <Link 
                  href="/produkte/heizungssysteme" 
                  className="bg-[#1A1A1A] hover:bg-[#E67E22] text-white px-8 py-4 rounded-full font-bold uppercase text-xs tracking-widest transition-all duration-300 flex items-center gap-2 shadow-lg"
                >
                  Heizung <ArrowRight size={16} />
                </Link>
                <Link 
                  href="/produkte/sanitaer" 
                  className="bg-white border-2 border-[#1A1A1A] hover:border-[#E67E22] hover:text-[#E67E22] text-[#1A1A1A] px-8 py-4 rounded-full font-bold uppercase text-xs tracking-widest transition-all duration-300 flex items-center gap-2 shadow-md"
                >
                  Sanitär <ArrowRight size={16} />
                </Link>
              </div>

            </div>
            <div className="relative">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-700 border-8 border-slate-50 relative h-[600px] w-full">
                <Image 
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000" 
                  alt="Sanitär Design"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 600px"
                />
              </div>
              {/* NEUES BADGE: Smart */}
              <div className="absolute -bottom-6 -left-6 bg-orange-500 p-8 rounded-2xl shadow-xl hidden xl:block font-black text-4xl italic tracking-tighter leading-none text-[#1A1A1A]">Smart</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}