"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus, MessageCircle } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { faqData } from './faqData';

export default function FaqClient() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] font-sans selection:bg-[#E67E22] selection:text-white">
      <Navbar />

{/* --- HERO SECTION FAQ --- */}
      <section className="relative h-[60vh] bg-[#1A1A1A] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/faq_banner.webp"
            alt="Häufig gestellte Fragen - Kaminfeuer"
            className="w-full h-full object-cover object-center opacity-40 grayscale"
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
              <span className="text-[#E67E22] font-bold uppercase tracking-[0.3em] text-xs">Wissen & Hilfe</span>
              <div className="h-[2px] w-12 bg-[#E67E22]"></div>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-6">
              Häufig gestellte <br/> Fragen (FAQ)
            </h1>
            <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
              Hier finden Sie schnelle Antworten auf die wichtigsten Fragen rund um die Planung, Installation und Pflege Ihres Kamins.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- FAQ LISTE --- */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">

          <div className="space-y-4">
            {faqData.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isActive
                    ? "bg-white border-[#E67E22] shadow-lg shadow-orange-500/10"
                    : "bg-white border-slate-200 hover:border-slate-300"
                  }`}
                >
                  {/* Header / Frage */}
                  <h2 className="m-0">
                    <button
                      onClick={() => toggleAccordion(index)}
                      aria-expanded={isActive}
                      className="w-full text-left p-6 md:p-8 flex items-start justify-between gap-4 focus:outline-none"
                    >
                      <span className={`font-bold text-lg md:text-xl pr-4 ${isActive ? "text-[#E67E22]" : "text-[#1A1A1A]"}`}>
                        {item.question}
                      </span>
                      <div className={`shrink-0 mt-1 transition-transform duration-300 ${isActive ? "rotate-180" : ""}`}>
                        {isActive ? (
                          <Minus className="text-[#E67E22]" />
                        ) : (
                          <Plus className="text-slate-400" />
                        )}
                      </div>
                    </button>
                  </h2>

                  {/* Body / Antwort - bleibt immer im DOM (SEO), wird nur visuell ein-/ausgeblendet */}
                  <motion.div
                    initial={false}
                    animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="px-6 pb-8 md:px-8 md:pb-8 text-slate-600 leading-relaxed border-t border-slate-50 pt-4">
                      {item.answer}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Kontakt Hinweis */}
          <div className="mt-16 text-center bg-white p-8 rounded-3xl border border-slate-100 shadow-lg">
            <MessageCircle size={48} className="text-[#E67E22] mx-auto mb-4 opacity-80" />
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-2">Noch Fragen offen?</h2>
            <p className="text-slate-600 mb-6">
              Unsere Experten beraten Sie gerne persönlich zu Ihrem individuellen Projekt.
            </p>
            <a
              href="/kontakt"
              className="inline-block bg-[#1A1A1A] text-white px-8 py-3 rounded-full font-bold hover:bg-[#E67E22] transition-colors"
            >
              Kontakt aufnehmen
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
