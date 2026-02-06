"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, Clock, Phone, Mail, Navigation, 
  CheckCircle2, Car, Calendar, Star, Camera, X, ZoomIn
} from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

// --- MOCK-DATEN FÜR DIE GALERIE ---
// Ersetze diese URLs später durch echte Fotos deiner Berliner Filiale.
const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
    alt: "Moderne Kaminofen Ausstellung Berlin"
  },
  {
    src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200",
    alt: "Gaskamin Studio Schönefeld"
  },
  {
    src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200",
    alt: "Beratungsbereich und Materialmuster"
  },
  {
    src: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1200",
    alt: "Exklusive Designkamine"
  },
  {
    src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200",
    alt: "Live befeuerte Anlagen"
  },
  {
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200",
    alt: "Großzügige Ausstellungsfläche"
  }
];

export default function BerlinPage() {
  // State für die Lightbox
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const features = [
    "Über 400m² Ausstellungsfläche",
    "Live befeuerte Kaminöfen",
    "Exklusive Gaskamin-Studios",
    "Umfangreiche Materialbibliothek (Naturstein, Keramik)",
    "Persönliche Fachberatung",
    "Großer Kundenparkplatz"
  ];

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-[#E67E22] selection:text-white">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative h-[60vh] bg-[#1A1A1A] overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/kamine.jpg" // Nutzt eines deiner hochgeladenen Bilder
            alt="Ofenfischer Ausstellung Berlin" 
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
              <span className="text-[#E67E22] font-bold uppercase tracking-[0.3em] text-xs">Hauptstadt</span>
              <div className="h-[2px] w-12 bg-[#E67E22]"></div>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter mb-6">
              Filiale Berlin
            </h1>
            <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
              Erleben Sie Feuer in seiner schönsten Form. Besuchen Sie unsere große Ausstellung in Schönefeld.
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
            <p className="text-slate-600 mb-1">Lilienthalstraße 1a</p>
            <p className="text-slate-600 font-bold mb-6">12529 Schönefeld bei Berlin</p>
            
            <a 
              href="https://maps.google.com/?q=Lilienthalstraße+1a+12529+Schönefeld" 
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
            <div className="space-y-2 text-slate-300">
              <p className="flex justify-between w-full gap-8 border-b border-white/10 pb-2">
                <span>Mo - Fr:</span> <span className="text-white font-bold">10:00 - 18:00 Uhr</span>
              </p>
              <p className="flex justify-between w-full gap-8 border-b border-white/10 pb-2">
                <span>Samstag:</span> <span className="text-white font-bold">10:00 - 14:00 Uhr</span>
              </p>
              <p className="text-xs text-slate-500 pt-2">Sowie nach individueller Vereinbarung</p>
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
            <a href="tel:+4930633112380" className="text-xl font-black text-[#1A1A1A] hover:text-[#E67E22] transition-colors mb-2">
              +49 30 633 11 23 80
            </a>
            <a href="mailto:berlin@ofenfischer.de" className="text-slate-600 hover:text-[#E67E22] transition-colors flex items-center gap-2 mb-6">
              <Mail size={16} /> berlin@ofenfischer.de
            </a>
            
            <button className="mt-auto bg-[#E67E22] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg hover:bg-orange-600 transition-all flex items-center gap-2">
              <Calendar size={16} /> Termin anfragen
            </button>
          </motion.div>

        </div>
      </section>

      {/* --- SHOWROOM DETAILS (Text) --- */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="flex items-center gap-2 text-[#E67E22] font-bold uppercase tracking-widest text-xs mb-4">
              <Star size={16} />
              <span>Die Ausstellung</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] uppercase italic tracking-tighter mb-6">
              Erleben Sie Vielfalt
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              In unserer Berliner Filiale präsentieren wir Ihnen auf über 400qm eine kuratierte Auswahl der besten Kamine und Öfen Europas. 
              Fassen Sie Materialien an, erleben Sie echte Flammen und lassen Sie sich von unseren Einrichtungsideen inspirieren.
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
                <h4 className="font-bold text-[#1A1A1A]">Bequeme Anreise</h4>
                <p className="text-sm text-slate-500 mt-1">
                  Direkt an der B96a gelegen, erreichen Sie uns einfach aus dem Berliner Zentrum oder dem Umland. 
                  Kostenlose Kundenparkplätze finden Sie direkt vor der Tür.
                </p>
              </div>
            </div>
          </div>

          {/* Kleiner Teaser (die großen Bilder sind jetzt unten in der Galerie) */}
          <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={galleryImages[0].src} 
                className="w-full h-full object-cover" 
                alt="Ausstellung Teaser"
              />
            {/* Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1A1A1A]/90 backdrop-blur-md text-white p-6 rounded-full shadow-2xl border-4 border-[#E67E22] text-center w-36 h-36 flex flex-col items-center justify-center">
              <span className="text-3xl font-black italic">400</span>
              <span className="text-[10px] uppercase tracking-widest">m² Fläche</span>
            </div>
          </div>

        </div>
      </section>

      {/* --- NEUE BILDER GALERIE --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 text-[#E67E22] font-bold uppercase tracking-widest text-xs mb-4">
              <Camera size={16} />
              <span>Einblicke</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] uppercase italic tracking-tighter">
              Impressionen aus Berlin
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

      {/* --- CTA / MAP PLACEHOLDER --- */}
      <section className="h-[400px] bg-slate-200 relative group overflow-hidden">
        {/* Placeholder Map Image */}
        <img 
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000" 
          className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-40 transition-all duration-700" 
          alt="Karte Umgebung" 
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <a 
            href="https://maps.google.com/?q=Lilienthalstraße+1a+12529+Schönefeld"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#E67E22] hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold shadow-2xl transform hover:scale-105 transition-all flex items-center gap-3"
          >
            <MapPin size={20} />
            Auf Google Maps anzeigen
          </a>
        </div>
      </section>

      {/* --- LIGHTBOX MODAL (Für Großansicht) --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-[#1A1A1A]/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImage(null)} // Schließen beim Klick auf Hintergrund
          >
            {/* Schließen Button */}
            <button 
              className="absolute top-6 right-6 z-10 w-12 h-12 bg-black/50 hover:bg-[#E67E22] text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-md"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>

            {/* Das große Bild */}
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage} 
              alt="Großansicht"
              className="w-auto h-auto max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Verhindert Schließen beim Klick auf das Bild selbst
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}