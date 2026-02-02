"use client";

import React from 'react';
import { Instagram, Facebook, ArrowUpRight, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  const branches = [
    {
      city: "Zentrale Musterstadt",
      street: "Hauptstraße 1",
      zipCity: "12345 Stadt",
      phone: "+49 123 456 0",
      mail: "office@meister.de",
      hours: ["Mo - Fr: 08:00 - 17:00", "Sa: 09:00 - 13:00"]
    },
    {
      city: "Showroom Berlin",
      street: "Designmeile 42",
      zipCity: "10115 Berlin",
      phone: "+49 30 987 654",
      mail: "berlin@meister.de",
      hours: ["Mo - Fr: 10:00 - 19:00", "Sa: 10:00 - 16:00"]
    },
    {
      city: "Atelier München",
      street: "Isarweg 7",
      zipCity: "80331 München",
      phone: "+49 89 123 456",
      mail: "muenchen@meister.de",
      hours: ["Mo - Fr: 09:00 - 18:00", "Sa: Geschlossen"]
    }
  ];

  return (
    <footer className="bg-[#1A1A1A] text-white border-t border-white/5 font-sans">
      <div className="max-w-[1440px] mx-auto px-6 pt-24 pb-12">
        
        {/* 5-Spalten Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-24">
          
          {/* 1. Branding */}
          <div className="space-y-6">
            <h4 className="text-[#E67E22] font-black text-2xl uppercase italic tracking-tighter">
              Meisterbetrieb
            </h4>
            <p className="text-slate-500 text-sm leading-relaxed">
              Handwerkliche Perfektion und innovative Technik seit über 25 Jahren.
            </p>
            <div className="flex gap-4 pt-2">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#E67E22] transition-all cursor-pointer">
                <Instagram size={18} />
              </div>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#E67E22] transition-all cursor-pointer">
                <Facebook size={18} />
              </div>
            </div>
          </div>

          {/* 2, 3 & 4: Filialen - Ohne Bullets, mit Icons */}
          {branches.map((branch, i) => (
            <div key={i} className="space-y-8 text-sm text-left">
              <h5 className="font-bold uppercase tracking-[0.2em] text-[10px] text-[#E67E22]">
                {branch.city}
              </h5>
              
              {/* Adresse */}
              <div className="text-slate-400 space-y-1">
                <div className="flex gap-3 items-start">
                  <MapPin size={16} className="text-[#E67E22] shrink-0 mt-0.5" />
                  <div>
                    <p className="block">{branch.street}</p>
                    <p className="block">{branch.zipCity}</p>
                  </div>
                </div>
              </div>

              {/* Kontakt */}
              <div className="text-slate-400 space-y-2">
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-[#E67E22] shrink-0" />
                  <p>{branch.phone}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-[#E67E22] shrink-0" />
                  <p className="text-[#E67E22]/80">{branch.mail}</p>
                </div>
              </div>

              {/* Öffnungszeiten */}
              <div className="space-y-3 border-t border-white/5 pt-4">
                <div className="flex items-center gap-3 text-slate-500 mb-1">
                  <Clock size={16} className="text-[#E67E22] shrink-0" />
                  <p className="text-[10px] uppercase tracking-widest">Servicezeiten</p>
                </div>
                <div className="pl-7 space-y-1">
                  {branch.hours.map((line, idx) => (
                    <p key={idx} className="text-slate-400 block">{line}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* 5. Sponsor */}
          <div className="lg:text-right flex flex-col lg:items-end">
            <h5 className="font-bold uppercase tracking-[0.2em] text-[10px] text-[#E67E22] mb-6">
              Hauptpartner
            </h5>
            <div className="group cursor-pointer">
              <span className="text-3xl font-black uppercase tracking-tighter text-white opacity-30 group-hover:opacity-100 transition-opacity duration-500 leading-none">
                BUDERUS
              </span>
              <div className="mt-2 flex lg:justify-end items-center gap-2 text-[10px] text-slate-600 uppercase tracking-widest">
                <span>Wärmesysteme</span>
                <ArrowUpRight size={12} className="text-[#E67E22]" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-600 text-[9px] uppercase tracking-[0.3em]">
            © 2026 Meisterbetrieb. Alle Rechte vorbehalten.
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