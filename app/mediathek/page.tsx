"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Filter, Clock, Tag, Film, Youtube, Video } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Typ-Definition für unsere Videos
interface VideoItem {
  id: number;
  title: string;
  category: "Kamine" | "Heizung";
  platform: "youtube" | "vimeo";
  videoId: string; // Die ID von Youtube oder Vimeo
  thumbnail: string;
}

// --- DATEN: VIDEOS ---
const videos: VideoItem[] = [
  // --- KATEGORIE: KAMINE ---
  {
    id: 1,
    title: "Ofenfischer Imagefilm",
    category: "Kamine",
    platform: "youtube",
    videoId: "5EGvKcMd2jU",
    thumbnail: "https://img.youtube.com/vi/5EGvKcMd2jU/maxresdefault.jpg"
  },
  {
    id: 2,
    title: "Handwerk & Leidenschaft",
    category: "Kamine",
    platform: "youtube",
    videoId: "RuvYxY5AO84",
    thumbnail: "https://img.youtube.com/vi/RuvYxY5AO84/maxresdefault.jpg"
  },
  {
    id: 3,
    title: "Kamin Projektvorstellung 1",
    category: "Kamine",
    platform: "youtube",
    videoId: "xJ8_-GjngCY",
    thumbnail: "https://img.youtube.com/vi/xJ8_-GjngCY/maxresdefault.jpg"
  },
  {
    id: 4,
    title: "Kamin Projektvorstellung 2",
    category: "Kamine",
    platform: "youtube",
    videoId: "J6hg0P8-CkM",
    thumbnail: "https://img.youtube.com/vi/J6hg0P8-CkM/maxresdefault.jpg"
  },
  {
    id: 5,
    title: "Kamin Projektvorstellung 3",
    category: "Kamine",
    platform: "youtube",
    videoId: "JX2QpbA0o1w",
    thumbnail: "https://img.youtube.com/vi/JX2QpbA0o1w/maxresdefault.jpg"
  },
  {
    id: 6,
    title: "Kamin Projektvorstellung 4",
    category: "Kamine",
    platform: "youtube",
    videoId: "kqzzdLZ9NDU",
    thumbnail: "https://img.youtube.com/vi/kqzzdLZ9NDU/maxresdefault.jpg"
  },
  {
    id: 7,
    title: "Kamin Projektvorstellung 5",
    category: "Kamine",
    platform: "youtube",
    videoId: "vVhkyP71aBY",
    thumbnail: "https://img.youtube.com/vi/vVhkyP71aBY/maxresdefault.jpg"
  },
  {
    id: 8,
    title: "Kamin Projektvorstellung 6",
    category: "Kamine",
    platform: "youtube",
    videoId: "XuB_1VdWuMQ",
    thumbnail: "https://img.youtube.com/vi/XuB_1VdWuMQ/maxresdefault.jpg"
  },
  {
    id: 9,
    title: "Kamin Projektvorstellung 7",
    category: "Kamine",
    platform: "youtube",
    videoId: "eHMXFRSlZuk",
    thumbnail: "https://img.youtube.com/vi/eHMXFRSlZuk/maxresdefault.jpg"
  },
  {
    id: 10,
    title: "Kamin Projektvorstellung 8",
    category: "Kamine",
    platform: "youtube",
    videoId: "drtws9Z6cc4",
    thumbnail: "https://img.youtube.com/vi/drtws9Z6cc4/maxresdefault.jpg"
  },
  // Vimeo Videos (Da Vimeo keine einfachen statischen Thumbnails hat, nutzen wir hier Platzhalterbilder, die thematisch passen)
  {
    id: 11,
    title: "Exklusive Einblicke (Vimeo)",
    category: "Kamine",
    platform: "vimeo",
    videoId: "164693972",
    thumbnail: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200" 
  },
  {
    id: 12,
    title: "Ofenbau Kunst (Vimeo)",
    category: "Kamine",
    platform: "vimeo",
    videoId: "164228281",
    thumbnail: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1200"
  },

  // --- KATEGORIE: HEIZUNG ---
  {
    id: 13,
    title: "Heizungstechnik Info 1",
    category: "Heizung",
    platform: "youtube",
    videoId: "HdDKYMtz4Ng",
    thumbnail: "https://img.youtube.com/vi/HdDKYMtz4Ng/maxresdefault.jpg"
  },
  {
    id: 14,
    title: "Heizungstechnik Info 2",
    category: "Heizung",
    platform: "youtube",
    videoId: "qVh9exM49kI",
    thumbnail: "https://img.youtube.com/vi/qVh9exM49kI/maxresdefault.jpg"
  },
  {
    id: 15,
    title: "Heizungstechnik Info 3",
    category: "Heizung",
    platform: "youtube",
    videoId: "cBEiKrRlxTc",
    thumbnail: "https://img.youtube.com/vi/cBEiKrRlxTc/maxresdefault.jpg"
  },
  {
    id: 16,
    title: "Heizungstechnik Info 4",
    category: "Heizung",
    platform: "youtube",
    videoId: "rkJgswzwKSA",
    thumbnail: "https://img.youtube.com/vi/rkJgswzwKSA/maxresdefault.jpg"
  },
  {
    id: 17,
    title: "Heizungstechnik Info 5",
    category: "Heizung",
    platform: "youtube",
    videoId: "SAhR7TYED1o",
    thumbnail: "https://img.youtube.com/vi/SAhR7TYED1o/maxresdefault.jpg"
  },
];

// Kategorien extrahieren
const categories = ["Alle", "Kamine", "Heizung"];

export default function MediathekPage() {
  const [activeCategory, setActiveCategory] = useState("Alle");
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  // Filter Logik
  const filteredVideos = activeCategory === "Alle" 
    ? videos 
    : videos.filter(v => v.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#F8FAFC] font-sans selection:bg-[#E67E22] selection:text-white">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative h-[50vh] bg-[#1A1A1A] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          {/* HIER WURDE DAS BILD GEÄNDERT */}
          <img 
            src="/mediathek.jpg" 
            alt="Ofenfischer Mediathek" 
            className="w-full h-full object-cover opacity-40 grayscale"
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
              <Film className="text-[#E67E22]" size={32} />
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-4">
              Mediathek
            </h1>
            <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
              Lassen Sie sich inspirieren. Erleben Sie unsere Projekte und erfahren Sie mehr über unsere Technik in bewegten Bildern.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- FILTER & GALLERY SECTION --- */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full font-bold text-sm transition-all flex items-center gap-2 border ${
                  activeCategory === cat 
                  ? "bg-[#E67E22] text-white border-[#E67E22] shadow-lg shadow-orange-500/20" 
                  : "bg-white text-slate-600 border-slate-200 hover:border-[#E67E22] hover:text-[#E67E22]"
                }`}
              >
                {activeCategory === cat && <Filter size={14} />}
                {cat}
              </button>
            ))}
          </div>

          {/* Video Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode='popLayout'>
              {filteredVideos.map((video) => (
                <motion.div
                  key={video.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedVideo(video)}
                >
                  {/* Card Container */}
                  <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-100 hover:shadow-2xl hover:border-[#E67E22]/30 transition-all duration-300 h-full flex flex-col">
                    
                    {/* Thumbnail mit Overlay */}
                    <div className="relative aspect-video overflow-hidden bg-slate-100">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      
                      {/* Dark Overlay & Play Button */}
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 group-hover:bg-[#E67E22] group-hover:border-[#E67E22] transition-all duration-300">
                           <Play size={28} className="text-white fill-white translate-x-1" />
                        </div>
                      </div>

                      {/* Platform Badge */}
                      <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                        {video.platform === 'youtube' ? <Youtube size={12} /> : <Video size={12} />}
                        {video.platform === 'youtube' ? 'YouTube' : 'Vimeo'}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-2 text-[#E67E22] text-xs font-bold uppercase tracking-wider mb-2">
                        <Tag size={12} />
                        {video.category}
                      </div>
                      <h3 className="text-lg font-bold text-[#1A1A1A] group-hover:text-[#E67E22] transition-colors mb-2 line-clamp-2">
                        {video.title}
                      </h3>
                    </div>
                    
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* --- LIGHTBOX (VIDEO OVERLAY) --- */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-[#1A1A1A]/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedVideo(null)}
          >
            {/* Schließen Button */}
            <button 
              className="absolute top-6 right-6 z-10 w-12 h-12 bg-white/10 hover:bg-[#E67E22] text-white rounded-full flex items-center justify-center transition-colors"
              onClick={() => setSelectedVideo(null)}
            >
              <X size={28} />
            </button>

            {/* Video Container */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
               {selectedVideo.platform === 'youtube' ? (
                 <iframe 
                    width="100%" 
                    height="100%" 
                    src={`https://www.youtube-nocookie.com/embed/${selectedVideo.videoId}?autoplay=1&modestbranding=1&rel=0`}
                    title={selectedVideo.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
               ) : (
                 <iframe 
                    src={`https://player.vimeo.com/video/${selectedVideo.videoId}?autoplay=1&color=E67E22&title=0&byline=0&portrait=0`} 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    allow="autoplay; fullscreen; picture-in-picture" 
                    allowFullScreen
                 ></iframe>
               )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}