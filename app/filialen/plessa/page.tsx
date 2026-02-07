"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, Clock, Phone, Mail, Navigation, 
  CheckCircle2, Car, Calendar, Star, Camera, X, ZoomIn, View, Warehouse
} from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

// --- NEUE BILDER FÜR DIE GALERIE PLESSA ---
const galleryImages = [
  {
    src: "/filialen/plessa/plessa_2021_gallery_01.jpg",
    alt: "Contura & Hoxter Studio"
  },
  {
    src: "/filialen/plessa/plessa_2021_gallery_02.jpg",
    alt: "Große Ausstellungshalle Plessa"
  },
  {
    src: "/filialen/plessa/plessa_2021_gallery_03.jpg",
    alt: "Hase Kaminofen Präsentation"
  },
  {
    src: "/filialen/plessa/plessa_2021_gallery_04.jpg",
    alt: "Kamine mit Wohnambiente"
  }
];

export default function PlessaPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const features = [
    "Hauptsitz & Zentrallager",
    "Große Ausstellung auf 2 Etagen",
    "Direkter Werksverkauf",
    "Ersatzteil-Service vor Ort",
    "Technische Fachberatung",
    "Großer Kundenparkplatz"
  ];

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-[#E67E22] selection:text-white">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative h-[60vh] bg-[#1A1A1A] overflow-hidden flex items-center justify-center">
        {/* Background Image - Außenansicht Plessa */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/filialen/plessa/plessa_2021_web.jpg" 
            alt="Ofenfischer Stammsitz Plessa Außenansicht" 
            className="w-full h-full object-cover opacity-40"
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
              <span className="text-[#E67E22] font-bold uppercase tracking-[0.3em] text-xs">Brandenburg</span>
              <div className="h-[2px] w-12 bg-[#E67E22]"></div>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter mb-6">
              Filiale Plessa
            </h1>
            <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
              Unser Stammsitz im Herzen der Lausitz. <br/> Hier laufen alle Fäden zusammen – Logistik, Handwerk und Verkauf.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- INFO GRID --- */}
      <section className="py-20 bg-white relative -mt-16 z-20 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
          
          {/* Karte 1: Adresse & Anfahrt */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 flex flex-col items-center text-center hover:border-[#E67E22]/30 transition-colors"
          >
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-[#E67E22] mb-6">
              <MapPin size={32} />
            </div>
            <h3 className="font-black text-xl text-[#1A1A1A] mb-4 uppercase italic">Anschrift</h3>
            <p className="text-slate-600 mb-1">Glück-Auf-Ring 1</p>
            <p className="text-slate-600 font-bold mb-6">04928 Plessa</p>
            
            <a 
              href="https://www.google.com/maps/embed?pb=!4v1664273361936!6m8!1m7!1sCAoSLEFGMVFpcE5WdU81RUVuX0U4ZXVUeWpOcmpDc051TzNGUER6eTAyTjgxbEVF!2m2!1d51.465368659416!2d13.608752384915!3f0!4f0!5f0.7820865974627469" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-auto flex items-center gap-2 text-[#E67E22] font-bold text-sm hover:underline"
            >
              <Navigation size={16} /> Route planen
            </a>
          </motion.div>

          {/* Karte 2: Öffnungszeiten */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#1A1A1A] p-8 rounded-3xl shadow-xl border border-white/10 flex flex-col items-center text-center text-white relative overflow-hidden"
          >
            {/* Deko Circle */}
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-[#E67E22] rounded-full blur-3xl opacity-20 pointer-events-none" />

            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-[#E67E22] mb-6">
              <Clock size={32} />
            </div>
            <h3 className="font-black text-xl mb-4 uppercase italic">Öffnungszeiten</h3>
            <div className="space-y-4 text-slate-300 w-full text-sm">
              
              <div>
                <p className="text-[#E67E22] text-xs font-bold uppercase tracking-wider mb-1">Ostern - Oktober</p>
                <p className="flex justify-between w-full border-b border-white/10 pb-1">
                  <span>Mo - Fr:</span> <span className="text-white font-bold">07:00 - 16:00 Uhr</span>
                </p>
              </div>

              <div>
                <p className="text-[#E67E22] text-xs font-bold uppercase tracking-wider mb-1">Oktober - Ostern</p>
                <p className="flex justify-between w-full border-b border-white/10 pb-1">
                  <span>Mo - Fr:</span> <span className="text-white font-bold">07:00 - 18:00 Uhr</span>
                </p>
              </div>

            </div>
          </motion.div>

          {/* Karte 3: Kontakt */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 flex flex-col items-center text-center hover:border-[#E67E22]/30 transition-colors"
          >
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-[#E67E22] mb-6">
              <Phone size={32} />
            </div>
            <h3 className="font-black text-xl text-[#1A1A1A] mb-4 uppercase italic">Kontakt</h3>
            
            <a href="tel:+49353348120" className="text-lg font-black text-[#1A1A1A] hover:text-[#E67E22] transition-colors mb-1 block">
              +49 (0) 3533 / 4812 0
            </a>
             <a href="tel:+493533481216" className="text-sm font-medium text-slate-400 hover:text-[#E67E22] transition-colors mb-4 block">
              +49 (0) 3533 / 4812 16
            </a>

            <a href="mailto:info@ofenfischer.de" className="text-slate-600 hover:text-[#E67E22] transition-colors flex items-center gap-2 mb-6">
              <Mail size={16} /> info@ofenfischer.de
            </a>
            
            {/* HIER WURDE DER LINK GEÄNDERT - DESIGN BLEIBT IDENTISCH */}
            <a 
              href="/kontakt"
              className="mt-auto bg-[#E67E22] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg hover:bg-orange-600 transition-all flex items-center gap-2"
            >
              <Calendar size={16} /> Termin anfragen
            </a>
          </motion.div>

        </div>
      </section>

      {/* --- SHOWROOM DETAILS (Text) --- */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="flex items-center gap-2 text-[#E67E22] font-bold uppercase tracking-widest text-xs mb-4">
              <Warehouse size={16} />
              <span>Der Stammsitz</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] uppercase italic tracking-tighter mb-6">
              Hier fing alles an
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              In Plessa befindet sich das Herzstück unseres Unternehmens. Neben unserer großen Ausstellung finden Sie hier unser Zentrallager, die Logistik und die Verwaltung. 
              Profitieren Sie von kurzen Wegen, direkter Verfügbarkeit vieler Produkte und dem geballten Know-how unseres Teams vor Ort.
            </p>

            <ul className="space-y-4">
              {features.map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-[#1A1A1A] font-medium">
                  <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={14} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 p-6 bg-white rounded-2xl border border-slate-200 flex items-start gap-4">
              <Car className="text-[#E67E22] shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-bold text-[#1A1A1A]">Anfahrt</h4>
                <p className="text-sm text-slate-500 mt-1">
                  Direkt an der B169 gelegen, ist unser Stammsitz leicht zu erreichen. 
                  Ausreichend Parkmöglichkeiten auch für Anhänger sind auf dem Firmengelände vorhanden.
                </p>
              </div>
            </div>
          </div>

          {/* Kleiner Teaser - Außenansicht Plessa */}
          <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/filialen/plessa/plessa_2021_web.jpg" 
                className="w-full h-full object-cover" 
                alt="Stammsitz Plessa"
              />
            {/* Badge - Rechts Oben */}
            <div className="absolute top-6 right-6 bg-[#1A1A1A]/90 backdrop-blur-md text-white p-6 rounded-full shadow-2xl border-4 border-[#E67E22] text-center w-36 h-36 flex flex-col items-center justify-center">
              <span className="text-3xl font-black italic">HQ</span>
              <span className="text-[10px] uppercase tracking-widest">Zentrale</span>
            </div>
          </div>

        </div>
      </section>

      {/* --- VIRTUELLE TOUR SECTION --- */}
      <section className="py-24 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 text-[#E67E22] font-bold uppercase tracking-widest text-xs mb-4">
              <View size={16} />
              <span>Digitaler Besuch</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter">
              Virtueller Rundgang
            </h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              Werfen Sie einen Blick in unseren Hauptsitz in Plessa.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!4v1664273361936!6m8!1m7!1sCAoSLEFGMVFpcE5WdU81RUVuX0U4ZXVUeWpOcmpDc051TzNGUER6eTAyTjgxbEVF!2m2!1d51.465368659416!2d13.608752384915!3f0!4f0!5f0.7820865974627469" 
                width="100%" 
                height="750" 
                style={{ border: 0, minHeight: '500px' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
          </div>
        </div>
      </section>

      {/* --- BILDER GALERIE --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 text-[#E67E22] font-bold uppercase tracking-widest text-xs mb-4">
              <Camera size={16} />
              <span>Einblicke</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] uppercase italic tracking-tighter">
              Impressionen aus Plessa
            </h2>
            <div className="h-1 w-24 bg-[#E67E22] mx-auto mt-6"></div>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer bg-slate-100"
                onClick={() => setSelectedImage(image.src)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay beim Hover */}
                <div className="absolute inset-0 bg-[#1A1A1A]/0 group-hover:bg-[#1A1A1A]/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 bg-[#E67E22]/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300">
                    <ZoomIn size={28} className="text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA / MAP PLACEHOLDER (Style wie Berlin) --- */}
      <section className="h-[400px] bg-slate-200 relative group overflow-hidden">
        {/* Placeholder Map Image */}
        <img 
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000" 
          className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-40 transition-all duration-700" 
          alt="Karte Plessa Umgebung" 
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <a 
            href="https://www.google.com/maps/embed?pb=!4v1664273361936!6m8!1m7!1sCAoSLEFGMVFpcE5WdU81RUVuX0U4ZXVUeWpOcmpDc051TzNGUER6eTAyTjgxbEVF!2m2!1d51.465368659416!2d13.608752384915!3f0!4f0!5f0.7820865974627469"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#E67E22] hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold shadow-2xl transform hover:scale-105 transition-all flex items-center gap-3"
          >
            <MapPin size={20} />
            Auf Google Maps anzeigen
          </a>
        </div>
      </section>

      {/* --- LIGHTBOX MODAL --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-[#1A1A1A]/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 z-10 w-12 h-12 bg-black/50 hover:bg-[#E67E22] text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-md"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>

            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage} 
              alt="Großansicht"
              className="w-auto h-auto max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}