"use client";

import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { 
  Send, Upload, X, CheckCircle2, User, Home, Ruler, FileText, Check, AlertCircle 
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// --- HELFER KOMPONENTEN (Jetzt außerhalb definiert) ---

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  width?: "full" | "full_col_2";
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const InputField = ({ label, name, type = "text", placeholder, width = "full", value, onChange, error }: InputFieldProps) => (
  <div className={width === "full" ? "" : "md:col-span-2"}>
    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">{label}</label>
    <input 
      type={type} 
      name={name} 
      placeholder={placeholder} 
      value={value} 
      onChange={onChange} 
      className={`w-full bg-slate-50 border rounded-xl p-3 text-[#1A1A1A] font-medium focus:outline-none focus:border-[#E67E22] transition-all ${error ? 'border-red-500 bg-red-50 focus:border-red-500' : 'border-slate-200'}`} 
    />
    {error && <p className="text-red-500 text-xs mt-1 font-medium">{error}</p>}
  </div>
);

interface YesNoFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
  error?: string;
}

const YesNoField = ({ label, name, value, onChange, error }: YesNoFieldProps) => (
  <div className="mb-6">
    <label className="block text-sm font-bold text-[#1A1A1A] mb-3">
      {label} <span className="text-[#E67E22]">*</span>
    </label>
    <div className="flex gap-4">
      <label className={`flex-1 flex items-center justify-center border rounded-xl p-3 cursor-pointer transition-all ${value === 'ja' ? 'bg-[#E67E22] text-white border-[#E67E22]' : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-[#E67E22]'} ${error ? 'border-red-500 bg-red-50' : ''}`}>
        <input 
          type="radio" 
          name={name} 
          value="ja" 
          checked={value === 'ja'} 
          onChange={() => onChange(name, 'ja')}
          className="hidden" 
        />
        <span className="font-bold text-sm">Ja</span>
      </label>
      <label className={`flex-1 flex items-center justify-center border rounded-xl p-3 cursor-pointer transition-all ${value === 'nein' ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]' : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-[#1A1A1A]'} ${error ? 'border-red-500 bg-red-50' : ''}`}>
        <input 
          type="radio" 
          name={name} 
          value="nein" 
          checked={value === 'nein'} 
          onChange={() => onChange(name, 'nein')}
          className="hidden" 
        />
        <span className="font-bold text-sm">Nein</span>
      </label>
    </div>
    {error && (
      <p className="text-red-500 text-xs mt-2 font-medium flex items-center gap-1">
        <AlertCircle size={12} /> {error}
      </p>
    )}
  </div>
);

// --- HAUPTKOMPONENTE ---

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
    einbauzeitraum: '', 
    
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

  const handleRadioChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const removeFile = () => {
    setFile(null);
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    const requiredFields = [
      'vorname', 'nachname', 'strasse', 'plz', 'stadt', 'bundesland', 
      'telefon', 'email', 'einbauzeitraum', 'etage', 'deckenhoehe', 'flaeche', 'aufstellraum'
    ];
    
    requiredFields.forEach(field => {
      // @ts-ignore
      if (!formData[field]) {
        errors[field] = "Bitte füllen Sie dieses Feld aus.";
      }
    });

    const radioGroups = [
      'lueftungsanlage', 'dunstabzugAussen', 'anbauwandMassiv', 
      'zuluftVorhanden', 'fussbodenBrennbar', 'schornstein'
    ];

    radioGroups.forEach(group => {
      // @ts-ignore
      if (!formData[group]) {
        errors[group] = "Bitte wählen Sie eine Option.";
      }
    });

    if (!formData.privacyAccepted) {
      errors['privacyAccepted'] = "Bitte akzeptieren Sie den Datenschutz.";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setError("Bitte überprüfen Sie Ihre Eingaben. Es fehlen Pflichtfelder.");
      window.scrollTo({ top: 300, behavior: 'smooth' });
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const data = new FormData();
      data.append('type', 'project');
      data.append('name', `${formData.vorname} ${formData.nachname}`);
      data.append('email', formData.email);
      data.append('message', formData.bemerkung);
      
      if (file) {
        data.append('file', file);
      }

      Object.entries(formData).forEach(([key, value]) => {
        if (!['vorname', 'nachname', 'email', 'bemerkung', 'privacyAccepted'].includes(key)) {
          data.append(key, value.toString());
        }
      });

      const response = await fetch('/api/send', {
        method: 'POST',
        body: data,
      });

      if (!response.ok) {
        throw new Error('Versand fehlgeschlagen');
      }

      setIsSuccess(true);
      setFile(null);
      setFieldErrors({});
    } catch (err) {
      setError("Es gab ein Problem beim Senden. Bitte versuchen Sie es später erneut.");
      window.scrollTo({ top: 300, behavior: 'smooth' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] font-sans selection:bg-[#E67E22] selection:text-white">
      <Navbar />

      <section className="relative h-[40vh] bg-[#1A1A1A] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=2000" alt="Projekt starten Ofenfischer" className="w-full h-full object-cover opacity-30 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-[2px] w-12 bg-[#E67E22]"></div>
              <span className="text-[#E67E22] font-bold uppercase tracking-[0.3em] text-xs">Angebotsanfrage</span>
              <div className="h-[2px] w-12 bg-[#E67E22]"></div>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-4">Projekt starten</h1>
            <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">Fordern Sie Ihr maßgeschneidertes Angebot an – schnell und unkompliziert.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 relative -mt-20 z-20">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
            {isSuccess ? (
              <div className="p-16 text-center">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={48} />
                </motion.div>
                <h3 className="text-3xl font-black text-[#1A1A1A] mb-4">Anfrage erhalten!</h3>
                <p className="text-slate-600 text-lg mb-8">Wir haben Ihre Projektdaten erfolgreich erhalten und werden uns umgehend an die Planung machen.</p>
                <a href="/" className="bg-[#1A1A1A] text-white px-8 py-3 rounded-full font-bold hover:bg-[#E67E22] transition-colors">Zurück zur Startseite</a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 md:p-12" noValidate>
                {error && <div className="mb-8 p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl flex items-center gap-2 animate-pulse"><AlertCircle size={20} /><span className="font-medium">{error}</span></div>}

                <div className="mb-8 border-b border-slate-100 pb-8">
                  <h3 className="text-xl font-black text-[#1A1A1A] uppercase italic mb-6 flex items-center gap-2"><User className="text-[#E67E22]" size={24} /> 1. Persönliche Daten</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <InputField label="Vorname *" name="vorname" value={formData.vorname} onChange={handleInputChange} error={fieldErrors.vorname} />
                    <InputField label="Nachname *" name="nachname" value={formData.nachname} onChange={handleInputChange} error={fieldErrors.nachname} />
                    <InputField label="Straße und Hausnummer *" name="strasse" width="full_col_2" value={formData.strasse} onChange={handleInputChange} error={fieldErrors.strasse} />
                    <InputField label="Postleitzahl *" name="plz" value={formData.plz} onChange={handleInputChange} error={fieldErrors.plz} />
                    <InputField label="Stadt *" name="stadt" value={formData.stadt} onChange={handleInputChange} error={fieldErrors.stadt} />
                    <InputField label="Bundesland *" name="bundesland" width="full_col_2" value={formData.bundesland} onChange={handleInputChange} error={fieldErrors.bundesland} />
                    <InputField label="Telefonnummer *" name="telefon" type="tel" value={formData.telefon} onChange={handleInputChange} error={fieldErrors.telefon} />
                    <InputField label="E-Mail-Adresse *" name="email" type="email" value={formData.email} onChange={handleInputChange} error={fieldErrors.email} />
                  </div>
                </div>

                <div className="mb-8 border-b border-slate-100 pb-8">
                  <h3 className="text-xl font-black text-[#1A1A1A] uppercase italic mb-6 flex items-center gap-2"><Home className="text-[#E67E22]" size={24} /> 2. Technische Gegebenheiten</h3>
                  <div className="grid md:grid-cols-2 gap-x-8">
                    <YesNoField label="Lüftungsanlage vorhanden?" name="lueftungsanlage" value={formData.lueftungsanlage} onChange={handleRadioChange} error={fieldErrors.lueftungsanlage} />
                    <YesNoField label="Dunstabzug nach Außen?" name="dunstabzugAussen" value={formData.dunstabzugAussen} onChange={handleRadioChange} error={fieldErrors.dunstabzugAussen} />
                    <YesNoField label="Anbauwand massiv?" name="anbauwandMassiv" value={formData.anbauwandMassiv} onChange={handleRadioChange} error={fieldErrors.anbauwandMassiv} />
                    <YesNoField label="Externe Zuluft vorhanden?" name="zuluftVorhanden" value={formData.zuluftVorhanden} onChange={handleRadioChange} error={fieldErrors.zuluftVorhanden} />
                    <YesNoField label="Fußboden brennbar (z.B. Parkett)?" name="fussbodenBrennbar" value={formData.fussbodenBrennbar} onChange={handleRadioChange} error={fieldErrors.fussbodenBrennbar} />
                    <YesNoField label="Schornstein vorhanden?" name="schornstein" value={formData.schornstein} onChange={handleRadioChange} error={fieldErrors.schornstein} />
                  </div>
                </div>

                <div className="mb-8 border-b border-slate-100 pb-8">
                  <h3 className="text-xl font-black text-[#1A1A1A] uppercase italic mb-6 flex items-center gap-2"><Ruler className="text-[#E67E22]" size={24} /> 3. Raum & Planung</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <InputField label="Gewünschtes Einbaudatum *" name="einbauzeitraum" type="date" value={formData.einbauzeitraum} onChange={handleInputChange} error={fieldErrors.einbauzeitraum} />
                    <InputField label="Etage *" name="etage" placeholder="z.B. Erdgeschoss" value={formData.etage} onChange={handleInputChange} error={fieldErrors.etage} />
                    <InputField label="Deckenhöhe (cm) *" name="deckenhoehe" placeholder="z.B. 250" value={formData.deckenhoehe} onChange={handleInputChange} error={fieldErrors.deckenhoehe} />
                    <InputField label="Fläche in m² *" name="flaeche" type="text" placeholder="z.B. 35" value={formData.flaeche} onChange={handleInputChange} error={fieldErrors.flaeche} />
                    <InputField label="Aufstellraum *" name="aufstellraum" width="full_col_2" placeholder="z.B. Wohnzimmer" value={formData.aufstellraum} onChange={handleInputChange} error={fieldErrors.aufstellraum} />
                  </div>
                </div>

                <div className="mb-10">
                  <h3 className="text-xl font-black text-[#1A1A1A] uppercase italic mb-6 flex items-center gap-2"><FileText className="text-[#E67E22]" size={24} /> 4. Details & Dateien</h3>
                  <div className="mb-6">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Bemerkung / Wünsche (Optional)</label>
                    <textarea name="bemerkung" rows={4} value={formData.bemerkung} onChange={handleInputChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-[#1A1A1A] font-medium focus:outline-none focus:border-[#E67E22] resize-none"></textarea>
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-bold text-[#1A1A1A] mb-2 ml-1 flex items-center gap-2">Fotos oder Skizzen hochladen <span className="text-slate-400 text-xs font-normal border border-slate-200 px-2 py-0.5 rounded ml-2">Optional</span></label>
                    {!file ? (
                      <div className="relative group border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:border-[#E67E22] hover:bg-orange-50/30 transition-all cursor-pointer bg-slate-50">
                        <input type="file" onChange={handleFileChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" accept=".pdf,.jpg,.jpeg,.png" />
                        <div className="pointer-events-none"><Upload size={32} className="mx-auto text-slate-400 mb-3 group-hover:text-[#E67E22] group-hover:scale-110 transition-all" /><p className="text-[#1A1A1A] font-bold text-sm">Datei auswählen oder hierher ziehen</p><p className="text-slate-400 text-xs mt-1">PDF, JPG, PNG (max. 10MB)</p></div>
                      </div>
                    ) : (
                      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center justify-between bg-orange-50 border border-[#E67E22]/30 rounded-xl p-4">
                        <div className="flex items-center gap-3 overflow-hidden"><div className="w-10 h-10 bg-[#E67E22] rounded-lg flex items-center justify-center text-white shrink-0"><FileText size={20} /></div><div className="truncate"><p className="text-sm font-bold text-[#1A1A1A] truncate">{file.name}</p><p className="text-xs text-slate-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p></div></div>
                        <button type="button" onClick={removeFile} className="p-2 hover:bg-red-100 text-slate-400 hover:text-red-500 rounded-full transition-colors"><X size={20} /></button>
                      </motion.div>
                    )}
                  </div>
                </div>

                <div className="mb-8">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="relative flex items-center mt-0.5">
                      <input type="checkbox" name="privacyAccepted" checked={formData.privacyAccepted} onChange={handleInputChange} className={`peer h-5 w-5 cursor-pointer appearance-none rounded border shadow-sm transition-all checked:border-[#E67E22] checked:bg-[#E67E22] hover:border-[#E67E22] ${fieldErrors['privacyAccepted'] ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-300'}`} />
                      <Check size={14} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" strokeWidth={3} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-slate-600 leading-tight group-hover:text-slate-800 transition-colors">Ich habe die <a href="/datenschutz" target="_blank" className="text-[#E67E22] underline hover:text-orange-600 font-bold decoration-2 decoration-orange-200 hover:decoration-orange-600 transition-all">Datenschutzerklärung</a> zur Kenntnis genommen.</span>
                      {fieldErrors['privacyAccepted'] && <span className="text-red-500 text-xs font-bold mt-1">{fieldErrors['privacyAccepted']}</span>}
                    </div>
                  </label>
                </div>

                <button type="submit" disabled={isSubmitting} className="w-full bg-[#E67E22] hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-500/20 transition-all transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                  {isSubmitting ? (<><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /><span>Wird verarbeitet...</span></>) : (<><span>Angebot anfordern</span><Send size={20} /></>)}
                </button>
                <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400"><AlertCircle size={14} /><span>Alle mit * markierten Felder sind Pflichtfelder</span></div>
              </form>
            )}
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
}