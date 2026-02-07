"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { 
  Send, Upload, X, CheckCircle2, User, MapPin, Phone, Mail, 
  Home, Ruler, FileText, Check, AlertCircle, Calendar 
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function ProjektStartenPage() {
  // --- STATE ---
  const [formData, setFormData] = useState({
    vorname: '',
    nachname: '',
    strasse: '',
    plz: '',
    stadt: '',
    bundesland: '',
    telefon: '',
    email: '',
    einbauzeitraum: '', // Wird jetzt ein Datum-String sein (YYYY-MM-DD)
    
    // Ja/Nein Optionen
    lueftungsanlage: '',
    dunstabzugAussen: '',
    anbauwandMassiv: '',
    zuluftVorhanden: '',
    fussbodenBrennbar: '',
    schornstein: '',

    // Raumdaten
    etage: '',
    deckenhoehe: '',
    aufstellraum: '',
    flaeche: '',
    
    bemerkung: '',
    privacyAccepted: false
  });

  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // --- HANDLER ---
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
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

    // API Simulation
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Reset
    setFile(null);
  };

  // Helper für Radio Buttons
  const YesNoField = ({ label, name, value }: { label: string, name: string, value: string }) => (
    <div className="mb-6">
      <label className="block text-sm font-bold text-[#1A1A1A] mb-3">
        {label} <span className="text-[#E67E22]">*</span>
      </label>
      <div className="flex gap-4">
        <label className={`flex-1 flex items-center justify-center border rounded-xl p-3 cursor-pointer transition-all ${value === 'ja' ? 'bg-[#E67E22] text-white border-[#E67E22]' : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-[#E67E22]'}`}>
          <input 
            type="radio" 
            name={name} 
            value="ja" 
            checked={value === 'ja'} 
            onChange={() => handleRadioChange(name, 'ja')}
            className="hidden" 
            required
          />
          <span className="font-bold text-sm">Ja</span>
        </label>
        <label className={`flex-1 flex items-center justify-center border rounded-xl p-3 cursor-pointer transition-all ${value === 'nein' ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]' : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-[#1A1A1A]'}`}>
          <input 
            type="radio" 
            name={name} 
            value="nein" 
            checked={value === 'nein'} 
            onChange={() => handleRadioChange(name, 'nein')}
            className="hidden" 
            required
          />
          <span className="font-bold text-sm">Nein</span>
        </label>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-[#F8FAFC] font-sans selection:bg-[#E67E22] selection:text-white">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative h-[40vh] bg-[#1A1A1A] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=2000" 
            alt="Projekt starten Ofenfischer" 
            className="w-full h-full object-cover opacity-30 grayscale"
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
              <span className="text-[#E67E22] font-bold uppercase tracking-[0.3em] text-xs">Angebotsanfrage</span>
              <div className="h-[2px] w-12 bg-[#E67E22]"></div>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-4">
              Projekt starten
            </h1>
            <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
              Fordern Sie Ihr maßgeschneidertes Angebot an – schnell und unkompliziert.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- ANFRAGE FORMULAR --- */}
      <section className="py-24 px-6 relative -mt-20 z-20">
        <div className="max-w-4xl mx-auto">
          
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
                <h3 className="text-3xl font-black text-[#1A1A1A] mb-4">Anfrage erhalten!</h3>
                <p className="text-slate-600 text-lg mb-8">
                  Wir haben Ihre Projektdaten erfolgreich erhalten und werden uns umgehend an die Planung machen.
                </p>
                <a href="/" className="bg-[#1A1A1A] text-white px-8 py-3 rounded-full font-bold hover:bg-[#E67E22] transition-colors">
                  Zurück zur Startseite
                </a>
              </div>
            ) : (
              // --- FORMULAR ---
              <form onSubmit={handleSubmit} className="p-8 md:p-12">
                
                <div className="mb-8 border-b border-slate-100 pb-8">
                  <h3 className="text-xl font-black text-[#1A1A1A] uppercase italic mb-6 flex items-center gap-2">
                    <User className="text-[#E67E22]" size={24} /> 1. Persönliche Daten
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Vorname *</label>
                      <input type="text" name="vorname" required value={formData.vorname} onChange={handleInputChange} 
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-[#1A1A1A] font-medium focus:outline-none focus:border-[#E67E22]" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Nachname *</label>
                      <input type="text" name="nachname" required value={formData.nachname} onChange={handleInputChange} 
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-[#1A1A1A] font-medium focus:outline-none focus:border-[#E67E22]" 
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Straße und Hausnummer *</label>
                      <input type="text" name="strasse" required value={formData.strasse} onChange={handleInputChange} 
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-[#1A1A1A] font-medium focus:outline-none focus:border-[#E67E22]" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Postleitzahl *</label>
                      <input type="text" name="plz" required value={formData.plz} onChange={handleInputChange} 
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-[#1A1A1A] font-medium focus:outline-none focus:border-[#E67E22]" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Stadt *</label>
                      <input type="text" name="stadt" required value={formData.stadt} onChange={handleInputChange} 
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-[#1A1A1A] font-medium focus:outline-none focus:border-[#E67E22]" 
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Bundesland *</label>
                      <input type="text" name="bundesland" required value={formData.bundesland} onChange={handleInputChange} 
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-[#1A1A1A] font-medium focus:outline-none focus:border-[#E67E22]" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Telefonnummer *</label>
                      <input type="tel" name="telefon" required value={formData.telefon} onChange={handleInputChange} 
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-[#1A1A1A] font-medium focus:outline-none focus:border-[#E67E22]" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">E-Mail-Adresse *</label>
                      <input type="email" name="email" required value={formData.email} onChange={handleInputChange} 
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-[#1A1A1A] font-medium focus:outline-none focus:border-[#E67E22]" 
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-8 border-b border-slate-100 pb-8">
                  <h3 className="text-xl font-black text-[#1A1A1A] uppercase italic mb-6 flex items-center gap-2">
                    <Home className="text-[#E67E22]" size={24} /> 2. Technische Gegebenheiten
                  </h3>
                  <div className="grid md:grid-cols-2 gap-x-8">
                    <YesNoField label="Lüftungsanlage vorhanden?" name="lueftungsanlage" value={formData.lueftungsanlage} />
                    <YesNoField label="Dunstabzug nach Außen?" name="dunstabzugAussen" value={formData.dunstabzugAussen} />
                    <YesNoField label="Anbauwand massiv?" name="anbauwandMassiv" value={formData.anbauwandMassiv} />
                    <YesNoField label="Externe Zuluft vorhanden?" name="zuluftVorhanden" value={formData.zuluftVorhanden} />
                    <YesNoField label="Fußboden brennbar (z.B. Parkett)?" name="fussbodenBrennbar" value={formData.fussbodenBrennbar} />
                    <YesNoField label="Schornstein vorhanden?" name="schornstein" value={formData.schornstein} />
                  </div>
                </div>

                <div className="mb-8 border-b border-slate-100 pb-8">
                  <h3 className="text-xl font-black text-[#1A1A1A] uppercase italic mb-6 flex items-center gap-2">
                    <Ruler className="text-[#E67E22]" size={24} /> 3. Raum & Planung
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      {/* HIER GEÄNDERT: type="date" für Kalender-Auswahl */}
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Gewünschtes Einbaudatum *</label>
                      <input 
                        type="date" 
                        name="einbauzeitraum" 
                        required 
                        value={formData.einbauzeitraum} 
                        onChange={handleInputChange} 
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-[#1A1A1A] font-medium focus:outline-none focus:border-[#E67E22]" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Etage *</label>
                      <input type="text" name="etage" required placeholder="z.B. Erdgeschoss" value={formData.etage} onChange={handleInputChange} 
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-[#1A1A1A] font-medium focus:outline-none focus:border-[#E67E22]" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Deckenhöhe (cm) *</label>
                      <input type="text" name="deckenhoehe" required placeholder="z.B. 250" value={formData.deckenhoehe} onChange={handleInputChange} 
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-[#1A1A1A] font-medium focus:outline-none focus:border-[#E67E22]" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Fläche in m² *</label>
                      <input type="number" name="flaeche" required placeholder="z.B. 35" value={formData.flaeche} onChange={handleInputChange} 
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-[#1A1A1A] font-medium focus:outline-none focus:border-[#E67E22]" 
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Aufstellraum *</label>
                      <input type="text" name="aufstellraum" required placeholder="z.B. Wohnzimmer" value={formData.aufstellraum} onChange={handleInputChange} 
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-[#1A1A1A] font-medium focus:outline-none focus:border-[#E67E22]" 
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-10">
                  <h3 className="text-xl font-black text-[#1A1A1A] uppercase italic mb-6 flex items-center gap-2">
                    <FileText className="text-[#E67E22]" size={24} /> 4. Details & Dateien
                  </h3>
                  
                  <div className="mb-6">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Bemerkung / Wünsche (Optional)</label>
                    <textarea 
                      name="bemerkung"
                      rows={4}
                      value={formData.bemerkung}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-[#1A1A1A] font-medium focus:outline-none focus:border-[#E67E22] resize-none"
                    ></textarea>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-bold text-[#1A1A1A] mb-2 ml-1 flex items-center gap-2">
                      Fotos oder Skizzen hochladen <span className="text-slate-400 text-xs font-normal border border-slate-200 px-2 py-0.5 rounded ml-2">Optional</span>
                    </label>
                    
                    {!file ? (
                      <div className="relative group border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:border-[#E67E22] hover:bg-orange-50/30 transition-all cursor-pointer bg-slate-50">
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
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex items-center justify-between bg-orange-50 border border-[#E67E22]/30 rounded-xl p-4"
                      >
                        <div className="flex items-center gap-3 overflow-hidden">
                          <div className="w-10 h-10 bg-[#E67E22] rounded-lg flex items-center justify-center text-white shrink-0">
                            <FileText size={20} />
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
                      Ich habe die <a href="/datenschutz" target="_blank" className="text-[#E67E22] underline hover:text-orange-600 font-bold decoration-2 decoration-orange-200 hover:decoration-orange-600 transition-all">Datenschutzerklärung</a> zur Kenntnis genommen.
                    </span>
                  </label>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting || !formData.privacyAccepted}
                  className="w-full bg-[#E67E22] hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-500/20 transition-all transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Wird verarbeitet...</span>
                    </>
                  ) : (
                    <>
                      <span>Angebot anfordern</span>
                      <Send size={20} />
                    </>
                  )}
                </button>

                <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400">
                  <AlertCircle size={14} />
                  <span>Alle mit * markierten Felder sind Pflichtfelder</span>
                </div>

              </form>
            )}
          </motion.div>

        </div>
      </section>

      <Footer />
    </main>
  );
}