"use client";

import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Wrench, Phone, CheckCircle2, Clock, ShieldCheck, 
  Hammer, ArrowRight, Mail, AlertCircle 
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function KundendienstPage() {
  // --- STATE ---
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Heizung & Sanitär',
    message: '',
    privacyAccepted: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  // --- SCROLL FIX ---
  useEffect(() => {
    if (isSuccess) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [isSuccess]);

  // --- HANDLER ---
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));

    if (fieldErrors[name]) {
      setFieldErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // --- VALIDIERUNG ---
  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = "Bitte geben Sie Ihren Namen ein.";
    if (!formData.phone.trim()) errors.phone = "Bitte geben Sie eine Telefonnummer ein.";
    if (!formData.email.trim()) errors.email = "Bitte geben Sie eine E-Mail-Adresse ein.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Bitte geben Sie eine gültige E-Mail ein.";
    if (!formData.message.trim()) errors.message = "Bitte beschreiben Sie Ihr Anliegen.";
    if (!formData.privacyAccepted) errors.privacyAccepted = "Bitte akzeptieren Sie die Datenschutzerklärung.";
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      setError("Bitte überprüfen Sie Ihre Eingaben.");
      const formElement = document.getElementById('kontaktformular');
      if (formElement) formElement.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const data = new FormData();
      // HIER GEÄNDERT: Typ ist jetzt explizit 'service'
      data.append('type', 'service');
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('phone', formData.phone);
      // HIER GEÄNDERT: Wir senden nur den Bereich, die API baut den Betreff
      data.append('subject', formData.subject); 
      data.append('message', formData.message);

      const response = await fetch('/api/send', {
        method: 'POST',
        body: data,
      });

      if (!response.ok) throw new Error('Versand fehlgeschlagen');

      setIsSuccess(true);
      setFormData({
        name: '', phone: '', email: '', subject: 'Heizung & Sanitär', message: '', privacyAccepted: false
      });
      setFieldErrors({});
    } catch (err) {
      setError("Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- RENDER (Design unverändert) ---
  const services = [
    { title: "Wartung & Inspektion", desc: "Regelmäßige Prüfung Ihrer Kaminanlage für maximale Sicherheit, Effizienz und Langlebigkeit.", icon: <ShieldCheck size={32} /> },
    { title: "Reparatur-Service", desc: "Schnelle Hilfe bei Defekten. Unsere Meisterwerkstatt repariert Öfen, Kamine und Schornsteine.", icon: <Wrench size={32} /> },
    { title: "Ersatzteil-Service", desc: "Beschaffung originaler Ersatzteile wie Dichtungen, Scheiben oder Schamottsteine für fast alle Marken.", icon: <Hammer size={32} /> },
    { title: "Schornstein-Sanierung", desc: "Professionelle Querschnittsberechnung und Sanierung für optimalen Zug und Brandschutz.", icon: <CheckCircle2 size={32} /> }
  ];

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-[#E67E22] selection:text-white">
      <Navbar />
      <section className="relative h-[60vh] bg-[#1A1A1A] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img src="/unternehmen_banner.webp" alt="Ofenfischer Kundendienst" className="w-full h-full object-cover opacity-30 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-[2px] w-12 bg-[#E67E22]"></div><span className="text-[#E67E22] font-bold uppercase tracking-[0.3em] text-xs">Service & Support</span><div className="h-[2px] w-12 bg-[#E67E22]"></div>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter mb-6">Wir kümmern <br/> uns darum.</h1>
            <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">Ihr Feuer in besten Händen. Ob Wartung, Reparatur oder Ersatzteile – unser Meister-Team ist für Sie da.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }} className="group p-8 bg-[#F8FAFC] border border-slate-100 hover:border-[#E67E22]/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 rounded-2xl">
                <div className="text-[#E67E22] mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-black text-[#1A1A1A] uppercase italic mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#1A1A1A] text-white relative overflow-hidden" id="kontaktformular">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#E67E22]/5 skew-x-12 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="space-y-10">
              <div><span className="text-[#E67E22] font-bold tracking-[0.2em] uppercase text-xs">Direkter Draht</span><h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter mt-4 mb-6">Unsere Abteilungen</h2><p className="text-slate-400 text-lg leading-relaxed">Wählen Sie den passenden Ansprechpartner für Ihr Anliegen. Wir sind persönlich für Sie da.</p></div>
              <div className="grid gap-6">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-[#E67E22]/50 transition-colors"><h4 className="font-black text-xl text-white border-b border-white/10 pb-3 mb-4 uppercase italic flex justify-between items-center">Heizung / Sanitär<Wrench className="text-[#E67E22] opacity-50" size={24} /></h4><div className="space-y-3 text-sm"><div className="flex items-center gap-3 text-slate-300"><Clock size={16} className="text-[#E67E22] shrink-0" /><span>Mo – Fr 7-18 Uhr</span></div><div className="flex items-center gap-3"><Phone size={16} className="text-[#E67E22] shrink-0" /><a href="tel:03533481210" className="text-white hover:text-[#E67E22] transition-colors font-bold text-lg">03533-481210</a></div><div className="flex items-center gap-3"><Mail size={16} className="text-[#E67E22] shrink-0" /><a href="mailto:info@ofenfischer.de" className="text-slate-300 hover:text-white transition-colors">info@ofenfischer.de</a></div></div><div className="mt-5 p-4 bg-[#E67E22]/10 rounded-xl border border-[#E67E22]/20 relative overflow-hidden"><div className="absolute top-0 right-0 p-2 opacity-10"><AlertCircle size={60} /></div><div className="flex items-center gap-2 mb-1 text-[#E67E22] font-bold text-xs uppercase tracking-wider"><AlertCircle size={14} /><span>Notdienst (Okt - Ostern)</span></div><p className="text-[11px] text-slate-400 mb-2 uppercase tracking-wide">Täglich 08:00 - 20:00 Uhr</p><a href="tel:01727922010" className="text-xl font-black text-white hover:text-[#E67E22] block tracking-tight">0172-7922010</a></div></div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-[#E67E22]/50 transition-colors"><h4 className="font-black text-xl text-white border-b border-white/10 pb-3 mb-4 uppercase italic flex justify-between items-center">Kaminbau<Hammer className="text-[#E67E22] opacity-50" size={24} /></h4><div className="space-y-3 text-sm"><div className="flex items-center gap-3 text-slate-300"><Clock size={16} className="text-[#E67E22] shrink-0" /><span>Mo – Fr 7-18 Uhr</span></div><div className="flex items-center gap-3"><Phone size={16} className="text-[#E67E22] shrink-0" /><a href="tel:03533481220" className="text-white hover:text-[#E67E22] transition-colors font-bold text-lg">03533-481220</a></div><div className="flex items-center gap-3"><Mail size={16} className="text-[#E67E22] shrink-0" /><a href="mailto:support@ofenfischer.de" className="text-slate-300 hover:text-white transition-colors">support@ofenfischer.de</a></div></div></div>
              </div>
            </div>

            <div className="bg-white text-[#1A1A1A] p-8 md:p-10 rounded-3xl shadow-2xl h-fit sticky top-24">
              {isSuccess ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6"><CheckCircle2 size={40} /></div>
                  <h3 className="text-2xl font-black uppercase italic mb-4">Anfrage gesendet!</h3>
                  <p className="text-slate-600">Vielen Dank. Die zuständige Abteilung wird sich in Kürze bei Ihnen melden.</p>
                  <button onClick={() => setIsSuccess(false)} className="mt-8 text-[#E67E22] font-bold text-sm hover:underline">Neue Anfrage stellen</button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="mb-6">
                    <h3 className="text-2xl font-black uppercase italic">Schreiben Sie uns</h3>
                    <p className="text-slate-500 text-sm mt-1">Wir leiten Ihre Nachricht direkt an den richtigen Ansprechpartner weiter.</p>
                    {error && <div className="mt-4 p-3 bg-red-50 text-red-600 rounded-lg inline-flex items-center gap-2"><AlertCircle size={18} /><span className="font-bold text-sm">{error}</span></div>}
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2"><label className="text-xs font-bold uppercase tracking-wider text-slate-500">Name</label><input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Max Mustermann" className={`w-full bg-[#F8FAFC] border rounded-lg px-4 py-3 focus:outline-none focus:border-[#E67E22] focus:ring-1 focus:ring-[#E67E22] transition-all ${fieldErrors.name ? 'border-red-500 focus:border-red-500' : 'border-slate-200'}`} />{fieldErrors.name && <p className="text-red-500 text-xs font-bold">{fieldErrors.name}</p>}</div>
                    <div className="space-y-2"><label className="text-xs font-bold uppercase tracking-wider text-slate-500">Telefon</label><input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+49 ..." className={`w-full bg-[#F8FAFC] border rounded-lg px-4 py-3 focus:outline-none focus:border-[#E67E22] focus:ring-1 focus:ring-[#E67E22] transition-all ${fieldErrors.phone ? 'border-red-500 focus:border-red-500' : 'border-slate-200'}`} />{fieldErrors.phone && <p className="text-red-500 text-xs font-bold">{fieldErrors.phone}</p>}</div>
                  </div>
                  <div className="space-y-2"><label className="text-xs font-bold uppercase tracking-wider text-slate-500">E-Mail Adresse</label><input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="max@beispiel.de" className={`w-full bg-[#F8FAFC] border rounded-lg px-4 py-3 focus:outline-none focus:border-[#E67E22] focus:ring-1 focus:ring-[#E67E22] transition-all ${fieldErrors.email ? 'border-red-500 focus:border-red-500' : 'border-slate-200'}`} />{fieldErrors.email && <p className="text-red-500 text-xs font-bold">{fieldErrors.email}</p>}</div>
                  <div className="space-y-2"><label className="text-xs font-bold uppercase tracking-wider text-slate-500">Bereich</label><select name="subject" value={formData.subject} onChange={handleInputChange} className="w-full bg-[#F8FAFC] border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#E67E22] focus:ring-1 focus:ring-[#E67E22] transition-all appearance-none cursor-pointer"><option>Heizung & Sanitär</option><option>Kaminbau</option><option>Wartung & Service</option><option>Sonstiges</option></select></div>
                  <div className="space-y-2"><label className="text-xs font-bold uppercase tracking-wider text-slate-500">Ihre Nachricht</label><textarea rows={4} name="message" value={formData.message} onChange={handleInputChange} placeholder="Bitte beschreiben Sie Ihr Anliegen..." className={`w-full bg-[#F8FAFC] border rounded-lg px-4 py-3 focus:outline-none focus:border-[#E67E22] focus:ring-1 focus:ring-[#E67E22] transition-all resize-none ${fieldErrors.message ? 'border-red-500 focus:border-red-500' : 'border-slate-200'}`}></textarea>{fieldErrors.message && <p className="text-red-500 text-xs font-bold">{fieldErrors.message}</p>}</div>
                  <div className="flex flex-col mt-4"><div className="flex items-start gap-3"><input type="checkbox" id="privacy" name="privacyAccepted" checked={formData.privacyAccepted} onChange={handleInputChange} className={`mt-1 h-4 w-4 rounded border-gray-300 text-[#E67E22] focus:ring-[#E67E22] cursor-pointer ${fieldErrors.privacyAccepted ? 'border-red-500 ring-1 ring-red-500' : ''}`} /><label htmlFor="privacy" className="text-xs text-slate-500 cursor-pointer">Ich habe die <a href="/datenschutz" target="_blank" className="text-[#E67E22] hover:underline font-bold">Datenschutzerklärung</a> gelesen und stimme der Verarbeitung meiner Daten zu.</label></div>{fieldErrors.privacyAccepted && <p className="text-red-500 text-xs font-bold mt-1 ml-7">{fieldErrors.privacyAccepted}</p>}</div>
                  <button type="submit" disabled={isSubmitting} className="w-full bg-[#E67E22] hover:bg-[#d35400] text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-orange-500/30 transition-all flex items-center justify-center gap-2">{isSubmitting ? <span className="animate-pulse">Wird gesendet...</span> : <><span>Absenden</span><ArrowRight size={20} /></>}</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}