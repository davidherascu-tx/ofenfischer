"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Film, Flame, Settings, ChevronRight } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// --- TYPEN ---
type Category = 'alle' | 'kamine' | 'heizung';

interface Video {
  id: string; // YouTube Video ID
  title: string;
  category: 'kamine' | 'heizung';
  duration: string;
}

// --- VIDEODATEN (12 Kamine, 5 Heizung) ---
// HINWEIS: Hier müssen die echten YouTube-IDs ("dQw4w9WgXcQ") eingetragen werden.
const videoData: Video[] = [
  // 12x Kamine
  { id: "video_id_k1", title: "Traumkamin Planung & Aufbau", category: "kamine", duration: "03:45" },
  { id: "video_id_k2", title: "Das erste Anfeuern: Anleitung", category: "kamine", duration: "02:10" },
  { id: "video_id_k3", title: "Moderne Gaskamine im Test", category: "kamine", duration: "05:30" },
  { id: "video_id_k4", title: "Speicheröfen Funktionsweise", category: "kamine", duration: "04:15" },
  { id: "video_id_k5", title: "Kaminofen Design Trends 2025", category: "kamine", duration: "03:00" },
  { id: "video_id_k6", title: "Reinigung & Wartung Tipps", category: "kamine", duration: "06:20" },
  { id: "video_id_k7", title: "Panorama-Kamine Referenz", category: "kamine", duration: "01:50" },
  { id: "video_id_k8", title: "Holz richtig lagern", category: "kamine", duration: "02:45" },
  { id: "video_id_k9", title: "Elektrokamine: Täuschend echt", category: "kamine", duration: "03:10" },
  { id: "video_id_k10", title: "Outdoor Kamine & Feuerstellen", category: "kamine", duration: "02:30" },
  { id: "video_id_k11", title: "Der Tunnelkamin: Raumteiler", category: "kamine", duration: "03:55" },
  { id: "video_id_k12", title: "Ofenfischer Imagefilm Kamine", category: "kamine", duration: "04:00" },

  // 5x Heizung
  { id: "video_id_h1", title: "Wärmepumpen einfach erklärt", category: "heizung", duration: "05:10" },
  { id: "video_id_h2", title: "Fussbodenheizung Vorteile", category: "heizung", duration: "03:20" },
  { id: "video_id_h3", title: "Hydraulischer Abgleich", category: "heizung", duration: "04:45" },
  { id: "video_id_h4", title: "Bad-Sanierung Vorher/Nachher", category: "heizung", duration: "02:15" },
  { id: "video_id_h5", title: "Smart Home Heizungssteuerung", category: "heizung", duration: "03:50" },
];

export default function MediathekPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('alle');
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  // Filter Logik
  const filteredVideos = videoData.filter(
    (v) => activeCategory === 'alle' || v.category === activeCategory
  );

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-[#E67E22] selection:text-white">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative h-[50vh] bg-[#1A1A1A] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0 opacity-20">
           {/* Platzhalter für Hintergrundbild */}
           <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1492619877527-42777176a928?q=80&w=2000')] bg-cover bg-center" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent z-10" />

        <div className="relative z-20 text-center px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-[2px] w-12 bg-[#E67E22]"></div>
              <span className="text-[#E67E22] font-bold uppercase tracking-[0.3em] text-xs">Inspiration & Wissen</span>
              <div className="h-[2px] w-12 bg-[#E67E22]"></div>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter mb-4">
              Mediathek
            </h1>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Tauchen Sie ein in die Welt von Ofenfischer. Erleben Sie unsere Projekte und Technik in Bewegung.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- FILTER TABS --- */}
      <section className="sticky top-20 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100 py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-center gap-4">
          <FilterButton 
            active={activeCategory === 'alle'} 
            onClick={() => setActiveCategory('alle')} 
            icon={<Film size={18} />} 
            label="Alle Videos" 
          />
          <FilterButton 
            active={activeCategory === 'kamine'} 
            onClick={() => setActiveCategory('kamine')} 
            icon={<Flame size={18} />} 
            label="Kamine & Öfen" 
          />
          <FilterButton 
            active={activeCategory === 'heizung'} 
            onClick={() => setActiveCategory('heizung')} 
            icon={<Settings size={18} />} 
            label="Heizung & Sanitär" 
          />
        </div>
      </section>

      {/* --- VIDEO GRID --- */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode='popLayout'>
              {filteredVideos.map((video) => (
                <motion.div
                  layout
                  key={video.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedVideo(video)}
                >
                  {/* Thumbnail Card */}
                  <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg bg-black">
                    {/* YouTube Thumbnail Image Fetcher */}
                    <img 
                      src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`} 
                      // Fallback, falls maxresdefault nicht existiert (passiert bei manchen Videos)
                      onError={(e) => { e.currentTarget.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg` }}
                      alt={video.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                    />
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center group-hover:bg-[#E67E22] group-hover:border-[#E67E22] transition-all duration-300 shadow-2xl">
                        <Play fill="white" className="text-white ml-1" size={24} />
                      </div>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded-md backdrop-blur-sm">
                      {video.duration}
                    </div>
                  </div>

                  {/* Text Info */}
                  <div className="mt-4 px-2">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        video.category === 'kamine' ? 'bg-orange-100 text-orange-600' : 'bg-blue-100 text-blue-600'
                      }`}>
                        {video.category === 'kamine' ? 'Kamine' : 'Heizung'}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[#1A1A1A] group-hover:text-[#E67E22] transition-colors leading-tight">
                      {video.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredVideos.length === 0 && (
            <div className="text-center py-20 text-slate-400">
              Keine Videos in dieser Kategorie gefunden.
            </div>
          )}
        </div>
      </section>

      {/* --- VIDEO MODAL (Overlay) --- */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedVideo(null)} // Close on backdrop click
          >
            <div className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <button 
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-[#E67E22] text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-md"
              >
                <X size={20} />
              </button>
              
              <iframe 
                className="w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${selectedVideo.id}?autoplay=1&rel=0&modestbranding=1`} 
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            
            <div className="absolute bottom-10 left-0 w-full text-center pointer-events-none">
              <h2 className="text-white text-xl font-bold">{selectedVideo.title}</h2>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}

// --- HELPER COMPONENT: FILTER BUTTON ---
const FilterButton = ({ active, onClick, icon, label }: { active: boolean, onClick: () => void, icon: React.ReactNode, label: string }) => (
  <button 
    onClick={onClick}
    className={`
      flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300
      ${active 
        ? 'bg-[#1A1A1A] text-white shadow-lg scale-105' 
        : 'bg-white text-slate-500 hover:bg-slate-100 hover:text-[#1A1A1A] border border-slate-200'
      }
    `}
  >
    {icon}
    <span>{label}</span>
  </button>
);