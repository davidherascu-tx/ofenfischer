"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Building2, Scale, Mail, Phone, Printer } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-[#E67E22] selection:text-white">
      {/* Navbar beim Drucken ausblenden */}
      <div className="print:hidden">
        <Navbar />
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative h-[60vh] bg-[#1A1A1A] overflow-hidden flex items-center justify-center print:h-auto print:py-8 print:bg-white print:text-black">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0 opacity-20 print:hidden">
           {/* Wir nutzen hier das gleiche dezente Hintergrundbild wie bei den AGB oder ein passendes Office-Bild */}
           <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000')] bg-cover bg-center grayscale" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent z-10 print:hidden" />

        <div className="relative z-20 text-center px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6 print:hidden">
              <Building2 className="text-[#E67E22]" size={32} />
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-4 print:text-black print:text-4xl">
              Impressum
            </h1>
            <p className="text-slate-400 text-lg font-light tracking-wide uppercase print:text-slate-600">
              Rechtliche Hinweise
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section className="py-24 bg-[#F8FAFC] print:bg-white print:py-0">
        <div className="max-w-4xl mx-auto px-6 md:px-12 print:px-0 print:max-w-none">
          
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 print:shadow-none print:border-0 print:p-0">
            
            <div className="flex justify-between items-center mb-12 border-b border-slate-100 pb-6 print:hidden">
              <h2 className="text-2xl font-black text-[#1A1A1A] uppercase italic flex items-center gap-3">
                <Scale className="text-[#E67E22]" size={24} />
                Angaben gemäß § 5 TMG
              </h2>
              <div className="flex gap-2">
                <button 
                  onClick={() => window.print()}
                  className="bg-[#E67E22] hover:bg-orange-600 text-white px-6 py-3 rounded-full font-bold shadow-lg transition-all flex items-center gap-2 text-sm"
                  title="Seite drucken"
                >
                  <Printer size={18} />
                  <span>Drucken</span>
                </button>
              </div>
            </div>

            <div className="space-y-10 text-slate-600 leading-relaxed text-sm md:text-base">
              
              {/* FIRMENANGABEN */}
              <div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Betreiber & Kontakt</h3>
                <p className="font-bold text-[#1A1A1A] text-lg mb-1">Ofen-Fischer GmbH</p>
                <p>Glück-Auf-Ring 1</p>
                <p className="mb-4">04928 Plessa</p>
                
                <p><strong>Handelsregister:</strong> HRB 3218</p>
                <p><strong>Registergericht:</strong> Amtsgericht Cottbus</p>
                
                <div className="mt-4">
                  <p><strong>Vertreten durch:</strong></p>
                  <p>Andreas Krüger, Sven Richter, Peter Sähring</p>
                </div>
              </div>

              {/* KONTAKT */}
              <div className="grid md:grid-cols-2 gap-6 bg-[#F8FAFC] p-6 rounded-xl border border-slate-100">
                <div>
                  <h4 className="font-bold text-[#1A1A1A] mb-2 flex items-center gap-2">
                    <Phone size={16} className="text-[#E67E22]" /> Telefon & Fax
                  </h4>
                  <p>Tel: +49 (0) 3533 / 48 12 0</p>
                  <p>Fax: +49 (0) 3533 / 48 12 16</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#1A1A1A] mb-2 flex items-center gap-2">
                    <Mail size={16} className="text-[#E67E22]" /> E-Mail
                  </h4>
                  <a href="mailto:info@ofenfischer.de" className="hover:text-[#E67E22] transition-colors">
                    info@ofenfischer.de
                  </a>
                </div>
              </div>

              {/* UMSATZSTEUER */}
              <div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Umsatzsteuer-ID</h3>
                <p className="mb-1">Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
                <p className="font-mono bg-slate-100 inline-block px-2 py-1 rounded text-[#1A1A1A]">DE 138939966</p>
                <p className="mt-1 text-sm text-slate-500">Steuer-Nr.: 057-115-00989</p>
              </div>

              {/* STREITSCHLICHTUNG */}
              <div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Streitschlichtung</h3>
                <p className="text-justify">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-[#E67E22] hover:underline">https://ec.europa.eu/consumers/odr/</a>.<br />
                  Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
                <p className="mt-2 text-justify">
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>

              <hr className="border-slate-100 my-8" />

              {/* HAFTUNGSAUSSCHLUSS */}
              <div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Haftungsausschluss (Disclaimer)</h3>
                
                <h4 className="font-bold text-[#1A1A1A] mt-4 mb-2">Haftung für Inhalte</h4>
                <p className="text-justify mb-4">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                </p>

                <h4 className="font-bold text-[#1A1A1A] mt-4 mb-2">Haftung für Links</h4>
                <p className="text-justify mb-4">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                </p>

                <h4 className="font-bold text-[#1A1A1A] mt-4 mb-2">Urheberrecht</h4>
                <p className="text-justify mb-4">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                </p>
              </div>

              <div className="mt-8 text-sm text-slate-400">
                Quelle: <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer" className="hover:text-[#E67E22]">e-recht24.de</a>
              </div>

            </div>
          </div>
        </div>
      </section>

      <div className="print:hidden">
        <Footer />
      </div>
    </main>
  );
}