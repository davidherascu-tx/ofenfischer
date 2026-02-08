"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { 
  Send, Upload, X, CheckCircle2, User, Mail, Phone, MessageSquare, FileText, Paperclip, Check 
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function KontaktPage() {
  // --- STATE MANAGEMENT ---
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    privacyAccepted: false
  });
  
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // --- HANDLER ---
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    const val = type === 'checkbox' 
      ? (e.target as HTMLInputElement).checked 
      : value;

    setFormData(prev => ({ ...prev, [name]: val }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const removeFile = () => {
    setFile(null);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!formData.privacyAccepted) {
      alert("Bitte akzeptieren Sie die Datenschutzerklärung.");
      return;
    }

    setIsSubmitting(true);

    // Simulation eines API-Calls
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Reset nach Erfolg
    setFormData({ 
      name: '', email: '', phone: '', subject: '', message: '', privacyAccepted: false 
    });
    setFile(null);
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] font-sans selection:bg-[#E67E22] selection:text-white">
      <Navbar />

    {/* --- HERO SECTION --- */}
      <section className="relative h-[60vh] bg-[#1A1A1A] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/kontakt_banner.webp" 
            alt="Kontakt Ofenfischer" 
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
              <span className="text-[#E67E22] font-bold uppercase tracking-[0.3em] text-xs">Wir sind für Sie da</span>
              <div className="h-[2px] w-12 bg-[#E67E22]"></div>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-6">
              Kontakt
            </h1>
            <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
              Planung, Beratung oder Service – schreiben Sie uns oder rufen Sie an. Wir freuen uns auf Ihr Projekt.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- KONTAKT FORMULAR --- */}
      <section className="py-24 px-6 relative -mt-20 z-20">
        <div className="max-w-3xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden"
          >
            {isSuccess ? (
              // --- SUCCESS STATE ---
              <div className="p-16 text-center">
                <motion.div 
                  initial={{ scale: 0 }} 
                  animate={{ scale: 1 }} 
                  className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle2 size={48} />
                </motion.div>
                <h3 className="text-3xl font-black text-[#1A1A1A] mb-4">Nachricht gesendet!</h3>
                <p className="text-slate-600 text-lg mb-8">
                  Vielen Dank für Ihre Anfrage. Wir werden uns schnellstmöglich bei Ihnen melden.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="bg-[#1A1A1A] text-white px-8 py-3 rounded-full font-bold hover:bg-[#E67E22] transition-colors"
                >
                  Neue Nachricht schreiben
                </button>
              </div>
            ) : (
              // --- FORMULAR STATE ---
              <form onSubmit={handleSubmit} className="p-8 md:p-12">
                
                {/* HIER WURDEN DIE TEXTE GEÄNDERT */}
                <div className="mb-10 text-center">
                  <h2 className="text-2xl md:text-3xl font-black text-[#1A1A1A] uppercase italic mb-2">
                    Ihre Nachricht an uns
                  </h2>
                  <p className="text-slate-500">
                    Haben Sie Fragen, Wünsche oder Anregungen? Wir helfen Ihnen gerne weiter.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {/* Name */}
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#E67E22] transition-colors">
                      <User size={20} />
                    </div>
                    <input 
                      type="text" 
                      name="name"
                      required
                      placeholder="Ihr Name" 
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-4 text-[#1A1A1A] font-medium focus:outline-none focus:border-[#E67E22] focus:ring-1 focus:ring-[#E67E22] transition-all placeholder:text-slate-400"
                    />
                  </div>

                  {/* Email */}
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#E67E22] transition-colors">
                      <Mail size={20} />
                    </div>
                    <input 
                      type="email" 
                      name="email"
                      required
                      placeholder="Ihre E-Mail Adresse" 
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-4 text-[#1A1A1A] font-medium focus:outline-none focus:border-[#E67E22] focus:ring-1 focus:ring-[#E67E22] transition-all placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {/* Telefon */}
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#E67E22] transition-colors">
                      <Phone size={20} />
                    </div>
                    <input 
                      type="tel" 
                      name="phone"
                      placeholder="Telefonnummer (Optional)" 
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-4 text-[#1A1A1A] font-medium focus:outline-none focus:border-[#E67E22] focus:ring-1 focus:ring-[#E67E22] transition-all placeholder:text-slate-400"
                    />
                  </div>

                  {/* Betreff */}
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#E67E22] transition-colors">
                      <FileText size={20} />
                    </div>
                    <select 
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-4 text-[#1A1A1A] font-medium focus:outline-none focus:border-[#E67E22] focus:ring-1 focus:ring-[#E67E22] transition-all appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Bitte Thema wählen...</option>
                      <option value="allgemein">Allgemeine Anfrage</option>
                      <option value="beratung">Beratungswunsch</option>
                      <option value="service">Service / Wartung</option>
                      <option value="sonstiges">Sonstiges</option>
                    </select>
                  </div>
                </div>

                {/* Nachricht */}
                <div className="relative group mb-8">
                  <div className="absolute left-4 top-6 text-slate-400 group-focus-within:text-[#E67E22] transition-colors">
                    <MessageSquare size={20} />
                  </div>
                  <textarea 
                    name="message"
                    required
                    rows={5}
                    placeholder="Ihre Nachricht an uns..." 
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-4 text-[#1A1A1A] font-medium focus:outline-none focus:border-[#E67E22] focus:ring-1 focus:ring-[#E67E22] transition-all placeholder:text-slate-400 resize-none"
                  ></textarea>
                </div>

                {/* FILE UPLOAD AREA */}
                <div className="mb-8">
                  <label className="block text-sm font-bold text-[#1A1A1A] mb-2 ml-1">
                    Datei-Anhang (Optional)
                  </label>
                  
                  {!file ? (
                    <div className="relative group border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:border-[#E67E22] hover:bg-orange-50/30 transition-all cursor-pointer">
                      <input 
                        type="file" 
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        accept=".pdf,.jpg,.jpeg,.png"
                      />
                      <div className="pointer-events-none">
                        <Upload size={32} className="mx-auto text-slate-400 mb-3 group-hover:text-[#E67E22] group-hover:scale-110 transition-all" />
                        <p className="text-[#1A1A1A] font-bold text-sm">Datei auswählen oder hierher ziehen</p>
                        <p className="text-slate-400 text-xs mt-1">PDF, JPG, PNG (max. 10MB)</p>
                      </div>
                    </div>
                  ) : (
                    // File Selected View
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center justify-between bg-orange-50 border border-[#E67E22]/30 rounded-xl p-4"
                    >
                      <div className="flex items-center gap-3 overflow-hidden">
                        <div className="w-10 h-10 bg-[#E67E22] rounded-lg flex items-center justify-center text-white shrink-0">
                          <Paperclip size={20} />
                        </div>
                        <div className="truncate">
                          <p className="text-sm font-bold text-[#1A1A1A] truncate">{file.name}</p>
                          <p className="text-xs text-slate-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                        </div>
                      </div>
                      <button 
                        type="button"
                        onClick={removeFile}
                        className="p-2 hover:bg-red-100 text-slate-400 hover:text-red-500 rounded-full transition-colors"
                      >
                        <X size={20} />
                      </button>
                    </motion.div>
                  )}
                </div>

                {/* --- DATENSCHUTZ CHECKBOX --- */}
                <div className="mb-8">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="relative flex items-center mt-0.5">
                      <input 
                        type="checkbox" 
                        name="privacyAccepted"
                        checked={formData.privacyAccepted}
                        onChange={handleInputChange}
                        required
                        className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-slate-300 shadow-sm transition-all checked:border-[#E67E22] checked:bg-[#E67E22] hover:border-[#E67E22]"
                      />
                      <Check size={14} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" strokeWidth={3} />
                    </div>
                    <span className="text-sm text-slate-600 leading-tight group-hover:text-slate-800 transition-colors">
                      Ich habe die <a href="/datenschutz" target="_blank" className="text-[#E67E22] underline hover:text-orange-600 font-bold decoration-2 decoration-orange-200 hover:decoration-orange-600 transition-all">Datenschutzerklärung</a> zur Kenntnis genommen. Ich stimme zu, dass meine Angaben zur Kontaktaufnahme und für Rückfragen dauerhaft gespeichert werden.
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={isSubmitting || !formData.privacyAccepted}
                  className="w-full bg-[#1A1A1A] hover:bg-[#E67E22] text-white font-bold py-4 rounded-xl shadow-lg shadow-black/5 hover:shadow-orange-500/20 transition-all transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Wird gesendet...</span>
                    </>
                  ) : (
                    <>
                      <span>Nachricht absenden</span>
                      <Send size={20} />
                    </>
                  )}
                </button>

              </form>
            )}
          </motion.div>

        </div>
      </section>

      <Footer />
    </main>
  );
}