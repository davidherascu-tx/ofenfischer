"use client";

import React from 'react';
import { Instagram, Facebook, ArrowUpRight, MapPin, Phone, Mail, Clock, Printer } from 'lucide-react';

const Footer = () => {
  const branches = [
    {
      city: "Filiale Berlin",
      street: "Lilienthalstraße 1a",
      zipCity: "12529 Schönefeld bei Berlin",
      phone: "+49 (0) 30 / 6 33 11 23 80",
      fax: "+49 (0) 30 / 6 33 11 23 81",
      mail: "berlin@ofenfischer.de",
      hours: ["Mo - Fr: 10 - 18 Uhr", "Sa: 10 - 14 Uhr", "sowie nach Vereinbarung"]
    },
    {
      city: "Filiale Dresden",
      street: "Großenhainer Str. 197",
      zipCity: "01129 Dresden",
      phone: "+49 (0) 351 / 843 59 602",
      fax: "+49 (0) 351 / 847 55 490",
      mail: "dresden@ofenfischer.de",
      hours: ["Mo, Di, Do, Fr: 10 - 18 Uhr", "Mi: geschlossen", "Sa: nach Vereinbarung"]
    },
    {
      city: "Filiale Plessa",
      street: "Glück-Auf-Ring 1",
      zipCity: "04928 Plessa",
      phone: "+49 (0) 3533 / 4812 0",
      fax: "+49 (0) 3533 / 4812 16",
      mail: "info@ofenfischer.de",
      hours: ["Ostern - Oktober: Mo - Fr 7 - 16 Uhr", "Oktober - Ostern: Mo - Fr 7 - 18 Uhr"]
    }
  ];

  return (
    <footer className="bg-[#1A1A1A] text-white border-t border-white/5 font-sans">
      <div className="max-w-[1440px] mx-auto px-6 pt-24 pb-12">
        
        {/* 5-Spalten Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-24">
          
          {/* 1. Branding mit Logo & Social Media */}
          <div className="space-y-6">
            <div className="mb-6">
              <img 
                src="/ofenfischer_logo_2023.png" 
                alt="Ofenfischer Logo" 
                className="h-12 w-auto object-contain mb-4"
              />
              <h4 className="text-[#E67E22] font-black text-xl uppercase italic tracking-tighter">
                Meisterbetrieb
              </h4>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Handwerkliche Perfektion und innovative Technik seit über 25 Jahren.
            </p>
            <div className="flex gap-4 pt-2">
              {/* Instagram Link */}
              <a 
                href="https://www.instagram.com/ofenfischer/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#E67E22] transition-all cursor-pointer"
              >
                <Instagram size={18} />
              </a>
              {/* Houzz Link - Custom Icon/Text da kein Standard-Icon */}
              <a 
                href="https://www.houzz.de/experten/kamine/ofen-fischer-gmbh-pfvwde-pf~2082523877" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-3 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#E67E22] transition-all cursor-pointer font-black text-xs"
              >
                HOUZZ
              </a>
            </div>
          </div>

          {/* 2, 3 & 4: Filialen */}
          {branches.map((branch, i) => (
            <div key={i} className="space-y-6 text-sm text-left">
              <h5 className="font-bold uppercase tracking-[0.2em] text-[10px] text-[#E67E22]">
                {branch.city}
              </h5>
              
              <div className="text-slate-400 space-y-1">
                <div className="flex gap-3 items-start">
                  <MapPin size={16} className="text-[#E67E22] shrink-0 mt-0.5" />
                  <div>
                    <p className="block">{branch.street}</p>
                    <p className="block">{branch.zipCity}</p>
                  </div>
                </div>
              </div>

              <div className="text-slate-400 space-y-2">
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-[#E67E22] shrink-0" />
                  <p>{branch.phone}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Printer size={16} className="text-[#E67E22] shrink-0" />
                  <p>{branch.fax}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-[#E67E22] shrink-0" />
                  <p className="text-[#E67E22]/80">{branch.mail}</p>
                </div>
              </div>

              <div className="space-y-3 border-t border-white/5 pt-4">
                <div className="flex items-center gap-3 text-slate-500 mb-1">
                  <Clock size={16} className="text-[#E67E22] shrink-0" />
                  <p className="text-[10px] uppercase tracking-widest">Öffnungszeiten</p>
                </div>
                <div className="pl-7 space-y-1">
                  {branch.hours.map((line, idx) => (
                    <p key={idx} className="text-slate-400 block text-[13px] leading-snug">{line}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* 5. Wir Unterstützen (Eisbären Berlin) */}
          <div className="lg:text-right flex flex-col lg:items-end">
            <h5 className="font-bold uppercase tracking-[0.2em] text-[10px] text-[#E67E22] mb-6">
              Wir Unterstützen
            </h5>
            <a 
              href="https://www.eisbaeren.de/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group cursor-pointer block"
            >
              <img 
                src="/Eisbaeren_Berlin_Logo_150.png" 
                alt="Eisbären Berlin Logo" 
                className="h-24 w-auto object-contain opacity-50 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="mt-4 flex lg:justify-end items-center gap-2 text-[10px] text-slate-600 uppercase tracking-widest">
                <span>Eisbären Berlin</span>
                <ArrowUpRight size={12} className="text-[#E67E22]" />
              </div>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-600 text-[9px] uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} Ofenfischer Meisterbetrieb. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-8 text-[9px] uppercase tracking-[0.3em] text-slate-600 font-medium">
            <a href="#" className="hover:text-[#E67E22] transition-colors">IMPRESSUM</a>
            <a href="#" className="hover:text-[#E67E22] transition-colors">DATENSCHUTZ</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;