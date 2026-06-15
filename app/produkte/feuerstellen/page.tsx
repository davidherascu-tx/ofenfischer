"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Flame, Sun, Sparkles, Award, Plus } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Lightbox from '../../../components/Lightbox';
import Link from 'next/link';

export default function FeuerstellenPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // --- GALERIE BILDER ---
  const galleryImages = [
    {
      src: "/in_outdoor/in_out_feuer_1.webp",
      alt: "Feuerstelle für drinnen und draußen"
    },
    {
      src: "/in_outdoor/in_out_feuer_2.webp",
      alt: "Design-Feuerschale im Outdoor-Bereich"
    },
    {
      src: "/in_outdoor/in_out_feuer_3.webp",
      alt: "Feuerstelle als Blickfang"
    },
    {
      src: "/in_outdoor/in_out_feuer_4.webp",
      alt: "Stimmungsvolles Feuererlebnis"
    }
  ];

  // --- HERSTELLER DATEN ---
  const manufacturers = [
    {
      name: "Höfats",
      logoSrc: "/logos/hoefats_logo.webp",
      description: "Höfats ist nicht nur ein Feuer! Die Verbindung von Form und Funktion in Kunst und Technik, welche in höfats steckt, ist Keimzelle und Kopf von höfats und eine unverwechselbare DNA. Das Magazin „WirtschaftsWoche“ titelte einen Artikel über höfats wie folgt: „Funktionales Design trifft Liebe zum Detail“. Höfats Produkte vereinen einzigartiges Design mit begeisternder Funktionalität und haben den Anspruch, die Besten ihrer Gattung zu sein. Dieser DNA ist höfats seit ihrer Gründung im Jahr 2015 immer treu geblieben, was vielfach belohnt wurde: In den letzten fünf Jahren wurde höfats mit weit mehr als 50 Designpreisen ausgezeichnet.",
      link: "https://hofats.com"
    }
  ];

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-[#E67E22] selection:text-white">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative h-[60vh] bg-[#1A1A1A] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/in_outdoor/in_out_feuer_1.webp"
            alt="Outdoor- und Indoor-Feuerstellen"
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
              <span className="text-[#E67E22] font-bold uppercase tracking-[0.3em] text-xs">Drinnen & Draußen</span>
              <div className="h-[2px] w-12 bg-[#E67E22]"></div>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-6">
              Outdoor- & Indoor-Feuerstellen
            </h1>
            <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
              Lebendiges Feuer als Design-Objekt – ob auf der Terrasse, im Garten oder im Wohnraum. Funktionales Design trifft auf echtes Flammenerlebnis.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- INTRO (Split Layout) --- */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Linke Seite: Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 text-[#E67E22] font-bold uppercase tracking-widest text-xs mb-6">
                <Flame size={18} />
                <span>Feuer erleben</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] uppercase italic tracking-tighter mb-8 leading-none">
                Feuer als <br/> Erlebnis
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Feuerstellen bringen Wärme und Atmosphäre genau dorthin, wo Sie sich am wohlsten fühlen – auf die Terrasse, in den Garten oder mitten in den Wohnraum. Sie verbinden faszinierendes Flammenspiel mit durchdachtem Design.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Ob als gemütlicher Mittelpunkt eines Sommerabends im Freien oder als stilvolles Objekt für drinnen: Moderne Feuerstellen sind flexibel, langlebig und ein echter Blickfang.
              </p>
            </motion.div>

            {/* Rechte Seite: Feature Cards */}
            <div className="grid gap-6">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-start gap-4 p-6 bg-[#F8FAFC] rounded-2xl border border-slate-100 hover:border-[#E67E22]/30 hover:shadow-lg transition-all"
              >
                <div className="bg-white p-3 rounded-full shadow-sm text-[#E67E22]">
                  <Sun size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A1A1A] text-lg">Drinnen & Draußen</h4>
                  <p className="text-slate-500 text-sm mt-1">Flexibel einsetzbar – auf der Terrasse, im Garten oder im Wohnbereich.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-4 p-6 bg-[#F8FAFC] rounded-2xl border border-slate-100 hover:border-[#E67E22]/30 hover:shadow-lg transition-all"
              >
                <div className="bg-white p-3 rounded-full shadow-sm text-[#E67E22]">
                  <Sparkles size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A1A1A] text-lg">Design-Objekte</h4>
                  <p className="text-slate-500 text-sm mt-1">Preisgekröntes Design, das Funktion und Ästhetik vereint.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-4 p-6 bg-[#F8FAFC] rounded-2xl border border-slate-100 hover:border-[#E67E22]/30 hover:shadow-lg transition-all"
              >
                <div className="bg-white p-3 rounded-full shadow-sm text-[#E67E22]">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A1A1A] text-lg">Höchste Qualität</h4>
                  <p className="text-slate-500 text-sm mt-1">Robuste Materialien und Verarbeitung für ein langlebiges Feuererlebnis.</p>
                </div>
              </motion.div>

            </div>

          </div>
        </div>
      </section>

      {/* --- BILDER GALERIE --- */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#E67E22] font-bold uppercase tracking-[0.2em] text-xs">Portfolio</span>
            <h3 className="text-3xl font-black uppercase italic text-[#1A1A1A] mt-2">Inspiration</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative h-64 lg:h-80 rounded-2xl overflow-hidden shadow-lg cursor-pointer bg-slate-100"
                onClick={() => setSelectedImage(img.src)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#1A1A1A]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-14 h-14 bg-[#E67E22] rounded-full flex items-center justify-center text-white transform scale-50 group-hover:scale-100 transition-all duration-300 shadow-xl">
                    <Plus size={28} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- HERSTELLER SEKTION (GROSSE KACHELN) --- */}
      <section className="py-24 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <span className="text-[#E67E22] font-bold uppercase tracking-[0.2em] text-xs">Marken</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mt-2">
              Unsere Premium Partner
            </h2>
            <div className="h-1 w-24 bg-[#E67E22] mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 gap-10 max-w-2xl mx-auto">
            {manufacturers.map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 p-12 rounded-3xl flex flex-col items-center text-center hover:bg-white/10 transition-colors group w-full"
              >
                {/* LOGO CONTAINER */}
                <div className="h-32 mb-8 flex items-center justify-center w-full p-4">
                  <img
                    src={brand.logoSrc}
                    alt={`${brand.name} Logo`}
                    className="max-h-full max-w-full object-contain transition-all duration-500"
                  />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-[#E67E22]">{brand.name}</h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow font-light max-w-xl whitespace-pre-wrap">
                  {brand.description}
                </p>

                <a
                  href={brand.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-[#E67E22] hover:bg-orange-600 px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 transition-all mt-auto"
                >
                  Zum Hersteller <ExternalLink size={14} />
                </a>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-20 bg-white text-center border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-6">
          <h3 className="text-3xl font-black text-[#1A1A1A] mb-6 uppercase italic">
            Bereit für Ihr eigenes Feuer?
          </h3>
          <p className="text-slate-600 mb-8">
            Lassen Sie sich von uns beraten. Wir finden die passende Feuerstelle für drinnen und draußen.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 bg-[#E67E22] hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-orange-500/30 transition-all transform hover:-translate-y-1"
          >
            Beratungstermin vereinbaren <ArrowRight size={20} />
          </Link>
        </div>
      </section>

            {/* --- LIGHTBOX MODAL --- */}
      <Lightbox
        images={galleryImages}
        selected={selectedImage}
        onSelect={setSelectedImage}
        onClose={() => setSelectedImage(null)}
      />

      <Footer />
    </main>
  );
}
