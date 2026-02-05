"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowRight, ChevronDown, Flame, Settings, Info, MapPin, Briefcase, ChevronRight, Droplets, Building2, FileText, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // States
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [mobileSubExpanded, setMobileSubExpanded] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Schließt alles
  const closeMenu = () => {
    setIsOpen(false);
    setActiveMegaMenu(null);
    setMobileExpanded(null);
    setMobileSubExpanded(null);
  };

  // Hilfsfunktion: Prüft, ob wir gerade über dem Nav-Bereich schweben
  const handleMouseLeaveNav = () => {
    setActiveMegaMenu(null);
  };

  const navLinks = [
    { name: 'Startseite', href: '/' },
    { 
      name: 'Produkte', 
      href: '#',
      isMega: true, // Markiert dies als MegaMenu
      columns: [
        {
          title: 'Kamine & Öfen',
          icon: <Flame className="text-orange-500" size={18} />,
          items: [
            { name: 'Individuelle Kaminanlagen', href: '#kaminanlagen' },
            { name: 'Kaminöfen', href: '#kaminoefen' },
            { name: 'Gaskamine', href: '#gaskamine' },
            { name: 'Speicheröfen', href: '#speicheroefen' },
          ]
        },
        {
          // Titel leer gelassen, damit er nicht angezeigt wird, Items bleiben aber
          title: '', 
          icon: <Flame className="text-transparent" size={18} />,
          items: [
            { name: 'Kachelöfen', href: '#kachelofen' },
            { name: 'Specksteinöfen', href: '#specksteinoefen' },
            { name: 'Elektrokamine', href: '#elektrokamine' },
            { name: 'Schornsteine', href: '#schornsteine' },
          ]
        },
        {
          title: 'Haustechnik',
          icon: <Settings className="text-slate-400" size={18} />,
          items: [
            { name: 'Heizungssysteme', href: '#heizung' },
            { name: 'Sanitärinstallation', href: '#sanitaer' },
            // Wärmepumpen entfernt
          ]
        }
      ]
    },
    { 
      name: 'Service', 
      href: '#',
      submenu: [
        { name: 'Kundendienst', href: '#kundendienst', icon: <Settings size={16}/> },
        { name: 'FAQ\'s', href: '#faq', icon: <Info size={16}/> },
        { name: 'Mediathek', href: '#mediathek', icon: <Briefcase size={16}/> },
      ]
    },
    { 
      name: 'Filialen', 
      href: '#',
      submenu: [
        { name: 'Berlin', href: '#berlin', icon: <MapPin size={16}/> },
        { name: 'Dresden', href: '#dresden', icon: <MapPin size={16}/> },
        { name: 'Plessa', href: '#plessa', icon: <MapPin size={16}/> },
      ]
    },
    { 
      name: 'Über uns', 
      href: '#',
      submenu: [
        { name: 'Unternehmen', href: '#unternehmen', icon: <Building2 size={16}/> },
        { name: 'AGB\'s', href: '#agb', icon: <FileText size={16}/> },
        { name: 'Referenzen', href: '#referenzen', icon: <Users size={16}/> },
        { name: 'Karriere', href: '#karriere', icon: <Briefcase size={16}/> },
      ]
    },
    { name: 'EU-Förderung', href: '#eu-foerderung' },
  ];

  return (
    <header 
      className="fixed w-full z-[999] px-4 py-6 text-left font-sans"
      onMouseLeave={handleMouseLeaveNav} // Schließt Menü, wenn Maus den Header verlässt
    >
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`max-w-7xl mx-auto transition-all duration-500 rounded-2xl relative ${
          scrolled || isOpen || activeMegaMenu
          ? "bg-[#1A1A1A]/95 backdrop-blur-xl border border-white/10 shadow-2xl py-3 px-6" 
          : "bg-transparent py-4 px-2"
        }`}
      >
        <div className="flex justify-between items-center relative z-[1002]">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center group transition-all duration-500">
            <div className={`relative transition-all duration-500 ${
              scrolled ? "h-8 w-28 md:h-10 md:w-40" : "h-10 w-40 md:h-12 md:w-52"
            }`}>
              {/* Logo Bild hier einfügen */}
              <img src="/ofenfischer_logo_2023.png" alt="Logo" className="h-full w-full object-contain" />
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center bg-white/5 rounded-full px-6 py-1 border border-white/10 mx-4">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative px-4 py-2 group/item"
                onMouseEnter={() => {
                  if (link.isMega) setActiveMegaMenu(link.name);
                  else setActiveMegaMenu(null);
                }}
              >
                <Link href={link.href} className="flex items-center gap-1 text-sm font-bold text-slate-200 hover:text-orange-500 transition-colors">
                  {link.name}
                  {(link.submenu || link.isMega) && (
                    <ChevronDown size={14} className={`opacity-50 transition-transform ${activeMegaMenu === link.name ? 'rotate-180' : ''}`} />
                  )}
                </Link>
                
                {/* STANDARD DROPDOWN (für Service, Filialen etc.) */}
                {link.submenu && !link.isMega && (
                  <div className="absolute top-full left-0 pt-6 w-56 opacity-0 translate-y-2 pointer-events-none group-hover/item:opacity-100 group-hover/item:translate-y-0 group-hover/item:pointer-events-auto transition-all duration-200">
                    <div className="bg-[#252525] border border-white/10 rounded-xl shadow-2xl p-2 backdrop-blur-xl">
                      {link.submenu.map((sub, idx) => (
                        <Link key={idx} href={sub.href} className="flex items-center gap-3 px-3 py-2.5 text-sm text-slate-300 hover:bg-orange-500/10 hover:text-orange-500 rounded-lg transition-all">
                          {sub.icon}
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA BUTTONS */}
          <div className="flex items-center gap-4">
            <a href="tel:+49353348120" className="hidden xl:flex text-white/70 hover:text-orange-500 transition-colors items-center gap-2 text-xs font-bold">
              <Phone size={16} /> <span className="hidden 2xl:inline">+49 3533 48120</span>
            </a>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-xl font-bold transition-all shadow-lg shadow-orange-500/20 flex items-center gap-2 text-sm">
              <span>Kontakt</span>
              <ArrowRight size={16} />
            </button>
            
            {/* MOBILE HAMBURGER */}
            <button className="lg:hidden text-white ml-2" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* --- MEGA MENU PANEL (Desktop) --- */}
        <AnimatePresence>
          {activeMegaMenu === 'Produkte' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="hidden lg:block absolute left-0 right-0 top-full pt-4 z-[998]"
              onMouseEnter={() => setActiveMegaMenu('Produkte')} // Hält Menü offen
              onMouseLeave={() => setActiveMegaMenu(null)} // Schließt Menü
            >
              <div className="bg-[#1A1A1A] border border-white/10 rounded-3xl shadow-2xl overflow-hidden p-8 backdrop-blur-2xl mx-4">
                <div className="grid grid-cols-4 gap-8">
                  {/* Wir holen die Spalten aus dem navLinks Array */}
                  {navLinks.find(l => l.name === 'Produkte')?.columns?.map((col, i) => (
                    <div key={i} className="space-y-4 border-r border-white/5 last:border-0 pr-4">
                      <div className="flex items-center gap-2 font-bold text-orange-500 uppercase tracking-widest text-xs border-b border-white/5 pb-2">
                        {/* Wenn Title leer ist, Platzhalter rendern damit Layout stimmt */}
                        {col.title ? (
                          <>
                            {col.icon}
                            {col.title}
                          </>
                        ) : (
                          <span className="text-transparent select-none">.</span>
                        )}
                      </div>
                      <div className="flex flex-col gap-2">
                        {col.items.map((item, j) => (
                          <Link key={j} href={item.href} className="text-slate-300 hover:text-white hover:translate-x-1 transition-all text-sm py-1.5 flex items-center gap-2">
                            {/* Bullets entfernt */}
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}

                  {/* Promo Box rechts */}
                  <div className="bg-gradient-to-br from-orange-500/10 to-orange-500/0 rounded-2xl p-6 border border-orange-500/20 flex flex-col justify-between h-full">
                    <div>
                      <h4 className="text-white font-bold mb-2 italic text-lg">Projekt starten</h4>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        Vereinbaren Sie einen Termin in einer unserer Ausstellungen. Wir nehmen uns Zeit für Ihr Projekt.
                      </p>
                    </div>
                    <Link href="#kontakt" className="text-orange-500 text-sm font-bold flex items-center gap-2 group mt-4 bg-orange-500/10 p-3 rounded-lg justify-center hover:bg-orange-500 hover:text-white transition-all">
                      Jetzt anfragen <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- MOBILE MENU --- */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }} 
              animate={{ height: 'auto', opacity: 1 }} 
              exit={{ height: 0, opacity: 0 }} 
              className="lg:hidden overflow-hidden bg-[#1A1A1A] mt-4 rounded-xl border border-white/5"
            >
              <div className="flex flex-col p-4">
                {navLinks.map((link) => (
                  <div key={link.name} className="border-b border-white/5 last:border-0">
                    <div 
                      onClick={() => (link.submenu || link.isMega) ? setMobileExpanded(mobileExpanded === link.name ? null : link.name) : closeMenu()}
                      className="flex items-center justify-between text-white font-bold py-4 px-2 cursor-pointer hover:bg-white/5 rounded-lg"
                    >
                      <span className="text-lg">{link.name}</span>
                      {(link.submenu || link.isMega) && <ChevronDown size={20} className={`transition-transform duration-300 ${mobileExpanded === link.name ? 'rotate-180 text-orange-500' : 'opacity-40'}`} />}
                    </div>

                    {/* Mobile Dropdown Inhalt */}
                    <AnimatePresence>
                      {(link.submenu || link.isMega) && mobileExpanded === link.name && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden bg-black/20 rounded-lg mb-2"
                        >
                          <div className="p-3 space-y-1">
                            {/* Logik für MegaMenu (Columns) vs Normales Submenu */}
                            {link.isMega 
                              ? link.columns?.flatMap((col, idx) => [
                                  // Optional: Spalten-Titel anzeigen (Nur wenn vorhanden)
                                  col.title && <div key={`title-${idx}`} className="text-orange-500 text-xs uppercase font-bold mt-3 mb-1 px-2">{col.title}</div>,
                                  ...col.items.map((item, i) => (
                                    <Link key={`${idx}-${i}`} href={item.href} onClick={closeMenu} className="block text-slate-400 py-2 px-2 hover:text-white pl-4 text-sm">
                                      {item.name}
                                    </Link>
                                  ))
                                ])
                              : link.submenu?.map((sub: any, idx) => (
                                  <div key={idx} className="flex flex-col">
                                     {/* Mobile Sub-Sub Menu Logic */}
                                     <div 
                                        onClick={() => sub.subSubmenu ? setMobileSubExpanded(mobileSubExpanded === sub.name ? null : sub.name) : closeMenu()}
                                        className="flex items-center justify-between py-3 px-2 text-slate-300 hover:text-white cursor-pointer"
                                     >
                                        <div className="flex items-center gap-3">
                                            {sub.icon} {sub.subSubmenu ? sub.name : <Link href={sub.href || '#'} onClick={closeMenu}>{sub.name}</Link>}
                                        </div>
                                        {sub.subSubmenu && <ChevronDown size={16} className={`transition-transform ${mobileSubExpanded === sub.name ? 'rotate-180 text-orange-500' : 'opacity-40'}`} />}
                                     </div>
                                     
                                     {/* Sub-Submenu Items */}
                                     <AnimatePresence>
                                        {sub.subSubmenu && mobileSubExpanded === sub.name && (
                                            <motion.div 
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="bg-white/5 rounded-lg ml-4 mb-2"
                                            >
                                                {sub.subSubmenu.map((ssub: any, sidx: number) => (
                                                    <Link key={sidx} href={ssub.href || '#'} onClick={closeMenu} className="block py-2 px-4 text-sm text-slate-400 hover:text-orange-500">
                                                        {ssub.name}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                     </AnimatePresence>
                                  </div>
                                ))
                            }
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}

                {/* HIER HABE ICH DIE FEHLENDEN BUTTONS EINGEFÜGT */}
                <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-white/10">
                   <a href="tel:+49353348120" className="w-full bg-white/5 hover:bg-white/10 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-3 border border-white/10 transition-colors">
                      <Phone size={20} className="text-orange-500" />
                      +49 3533 48120
                   </a>
                   <button className="w-full bg-orange-500 hover:bg-orange-600 text-[#353535] py-3 rounded-xl font-bold shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2 transition-all">
                      <span>Projekt starten</span>
                      <ArrowRight size={20} />
                   </button>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}