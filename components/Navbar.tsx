"use client";

import React, { useState, useEffect } from 'react';
import { Flame, Menu, X, Phone, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Leistungen', href: '#services' },
    { name: 'Referenzen', href: '#referenzen' },
    { name: 'Über uns', href: '#ueber-uns' },
  ];

  return (
    <header className="fixed w-full z-[100] px-4 py-6 pointer-events-none">
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`max-w-6xl mx-auto pointer-events-auto transition-all duration-500 rounded-2xl overflow-hidden ${
          scrolled 
          ? "bg-[#353535]/90 backdrop-blur-xl border border-white/10 shadow-2xl py-3 px-6" 
          : "bg-transparent py-4 px-2"
        }`}
      >
        <div className="flex justify-between items-center">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-orange-500 blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="bg-orange-500 p-2 rounded-xl relative">
                <Flame size={24} className="text-[#353535] fill-current" />
              </div>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-white font-black tracking-tighter text-lg">MEISTER</span>
              <span className="text-orange-500 text-[10px] font-bold tracking-[0.3em] uppercase">Handwerk</span>
            </div>
          </Link>

          {/* DESKTOP NAV - Minimalistisch */}
          <div className="hidden md:flex items-center bg-white/5 rounded-full px-2 py-1 border border-white/10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="px-5 py-2 text-sm font-medium text-slate-200 hover:text-orange-500 transition-colors rounded-full hover:bg-white/5"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA BUTTON */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+49123456789" className="text-white/70 hover:text-white transition-colors">
              <Phone size={20} />
            </a>
            <button className="bg-orange-500 hover:bg-orange-600 text-[#353535] px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 group transition-all">
              Projekt starten
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* MOBILE TOGGLE */}
          <button 
            className="md:hidden text-white p-2" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden pt-6 pb-4"
            >
              <div className="flex flex-col gap-4 border-t border-white/10 pt-6">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-white text-lg font-medium hover:text-orange-500"
                  >
                    {link.name}
                  </Link>
                ))}
                <button className="w-full bg-orange-500 text-[#353535] py-4 rounded-xl font-bold mt-4">
                  Jetzt anrufen
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}