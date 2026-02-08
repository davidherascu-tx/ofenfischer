"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, Flame, Zap, ShieldCheck, Plus, X, Wind } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Link from 'next/link';

export default function KaminoefenPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // --- GALERIE BILDER (Ihre neuen Kaminofen-Bilder) ---
  const galleryImages = [
    {
      src: "/kaminoefen/kamine_1.webp",
      alt: "Moderner Speicherofen Grau"
    },
    {
      src: "/kaminoefen/kamine_2.webp",
      alt: "Runder weißer Kaminofen"
    },
    {
      src: "/kaminoefen/kamine_3.webp",
      alt: "Kaminofen mit Backfach und Speckstein"
    },
    {
      src: "/kaminoefen/kamine_4.webp",
      alt: "Klassischer Guss-Kaminofen"
    }
  ];

  // --- HERSTELLER DATEN ---
  const manufacturers = [
    {
      name: "Austroflamm",
      logoSrc: "/logos/austroflamm-logo.webp",
      description: "Modernste Kamineinsätze und Kaminöfen benötigen neben Designideen auch enorme Entwicklungsarbeit im Bereich der Verbrennungstechnik. Bei allen Austroflamm-Kamineinsätzen und Kaminöfen bestehen diese wichtigen Teile aus Keramott. Das Material zeichnet sich durch ein besonderes Verhältnis zwischen Wärmedämmung und Wärmeleitung aus, wodurch schneller hohe Brennraumtemperaturen erreicht werden. Erst dadurch wird eine „saubere“, schadstoffarme Verbrennung möglich.",
      link: "https://www.austroflamm.com/de/oefen/kaminoefen"
    },
    {
      name: "Cera",
      logoSrc: "/logos/cera_logo.webp",
      description: "Von Beginn an hat CERA DESIGN es sich daher zur Aufgabe gemacht, Menschen ein gutes Gefühl zu geben. Die effiziente Nutzung des Feuers als faszinierendes Element ist hierbei Mittelpunkt unserer Bemühungen – im Sinne menschlicher Bedürfnisse und stets im Einklang mit unserer Umwelt. So bietet CERA DESIGN Öfen auf neuestem Entwicklungsstand, die sich durch Qualität, Nachhaltigkeit und edles Design auszeichnen – Werte, die wir seit jeher pflegen. Individuelle Beratung gehört bei CERA DESIGN selbstverständlich dazu.",
      link: "https://www.cera.de/kaminoefen/"
    },
    {
      name: "Contura",
      logoSrc: "/logos/contura_logo.webp",
      description: "Kaminöfen aus Schweden\n\nContura-Produkte werden von NIBE in Markaryd in der schwedischen Provinz Småland hergestellt.\nDen sparsamen Umgang mit den natürlichen Ressourcen haben wir seit jeher als Selbstverständlichkeit betrachtet. Daher legen wir Wert auf eine moderne, sparsame und effektive Produktion. Unser Qualitätsbewusstsein zieht sich wie ein roter Faden durch alle Glieder der Herstellungskette in unserer Fabrik – der größten ihrer Art in Europa und dem modernsten Fertigungsort für Kaminöfen. Unsere Produkte werden europaweit verkauft und genießen wegen ihres zeitlosen Designs, ihres hohen Wirkungsgrads und der kompromisslosen Qualität ein hohes Ansehen.",
      link: "https://www.contura.eu/de-de/kaminofen-sortiment/kaminofen"
    },
    {
      name: "Ganz",
      logoSrc: "/logos/ganz_logo.webp",
      description: "Mit Begeisterung und Engagement entwickelt Ganz eigene Holzöfen, die höchsten Ansprüchen genügen. So entstehen aus ausgewählten Materialien und modernster Technik immer wieder überraschende Neuheiten in unterschiedlichen Designs. Die langjährige Erfahrung und Handwerkskunst mit Liebe zum Detail verleiht dem Ofen das unverkennbare Gesicht des Kaminofens. Mit der großen Auswahl an Keramikfarben bei Ganz – übrigens alle in der Werkstatt unserer Manufaktur selbst entwickelt – können Sie Ganz-Kaminöfen perfekt auf Ihr Farbkonzept abstimmen. Der angenehme Nebeneffekt der Speicherwärme von Keramik ist sofort spürbar.",
      link: "https://www.ganz-baukeramik.ch/"
    },
    {
      name: "Hase",
      logoSrc: "/logos/hase_logo.webp",
      description: "An einem einzigen Standort, an dem wir von Hand und mit Unterstützung modernster Fertigungsverfahren Öfen herstellen, die von höchster Qualität sind. Mit 170 Mitarbeiter arbeiten wir Hand in Hand an einem Ziel: Den besten Kaminofen für Ihr Zuhause zu bauen. Die Hase Kaminöfen sind so gestaltet, dass sie zeitlos und schön einen Raum bereichern. Jede einzelne Keramikkachel an einem Hase-Kaminofen wird von Hand ausgeformt, sorgfältig lasiert und dann gebrannt. Hase Kaminöfen entstehen zu 100 Prozent in Deutschland. Mit einem Wirkungsgrad von über 80 Prozent sind sie vorbildlich und haben einen sehr geringen Holzverbrauch. Hase-Kaminöfen brauchen dank ihrer guten Brenntechnik keine Feinstaubfilter. Sie verbrennen Holz so effizient, dass ihre Feinstaub- und CO-Werte weit unter den geforderten Grenzwerten liegen.",
      link: "https://www.hase.de/kaminoefen"
    },
    {
      name: "Lotus",
      logoSrc: "/logos/lotus_logo.webp",
      description: "Bei Lotus haben Qualität und Funktionalität in Design und Werkstoffwahl einen hohen Stellenwert. Lotus stellt die Technik in den Dienst der Funktionalität. Das bedeutet, dass alle Lotus-Öfen besonders im Hinblick auf problemlose Bedienungen und Wartung konstruiert werden. Ein Kaminofen soll einfach und schnell zu bedienen sein Deshalb sind alle Lotus-Öfen im Hinblick auf Benutzerfreundlichkeit konstruiert. Lotus Kaminöfen und Kamineinsätze werden gemäß den strengsten Umweltvorschriften hergestellt.",
      link: "https://www.lotusstoves.com/de/produkte/alle-kaminofen"
    },
    {
      name: "Max Blank",
      logoSrc: "/logos/max-blank_logo.webp",
      description: "Eine Kaminofen – und Kamine- Manufaktur von moderner Ofentechnik verschiedener Art: Alle Kaminöfen und Kamine (bis auf Ausnahmen) sind wahlweise mit Pellet oder Scheitholz zu bestücken. Das Besondere daran: Stromlos, also ein Pelletofen- System, Stromlos im klassischen Kaminofen. Diesen bequemen Vorzug, der meist standardmäßig ausgestatteten Kaminöfen oder Heizkaminen ist speziell für die klassische Scheitholzfeuerung konzipiert.",
      link: "https://www.maxblank.com/produktkategorie/kaminoefen/"
    },
    {
      name: "Nordpeis",
      logoSrc: "/logos/nordpeis_logo.webp", 
      description: "Nordpeis verbindet stilvolle und praktische Kaminöfen mit langjähriger Tradition, verschmolzen in ein modernes und robustes Design. Nordpeis bietet bei Kaminöfen die perfekte Kombination aus Funktionalität und Ästhetik.",
      link: "https://www.nordpeis.com/de/kaminofen"
    },
    {
      name: "Olsberg",
      logoSrc: "/logos/olsberg_logo.webp",
      description: "Olsbergs langjährige Erfahrung und Kreativität bilden den Kern des Erfolgs. Olsberg sind die Pioniere der modernen Feuerungstechnologie. In den letzten Jahren gelangen uns zahlreiche Innovationen, die unsere Feuerstätten heute maßgeblich prägen. Olsbergs innovative Wirbelbrennkammer ist die Antwort auf strengere Feinstaub-Grenzwerte (2. Stufe BImSchV). Sie sorgt für einen besseren Wirkungsgrad und senkt die Staub- und Kohlenmonoxid-Anteile im Rauchgas sowie den Brennstoffverbrauch. Und für ein Plus an Komfort und Sicherheit sorgt unser Compact- Türschließsystem. Damit schließt die Tür geräuscharm und bleibt dauerhaft dicht – nahezu ohne Verschleiß. Natürlich gibt’s die bauaufsichtliche Zulassung (DIBt) für raumluftunabhängigen Betrieb dazu!",
      link: "https://www.olsberg-ofen.com/kaminoefen/"
    },
    {
      name: "Oranier",
      logoSrc: "/logos/oranier_logo.webp",
      description: "Kaminofen-Kultur, das ist ORANIER. – Dieses klare Statement begleitet den namhaften deutschen Hersteller von Kaminöfen. In Sachen saubere Verbrennung und hoher Anspruch an Design und Gestaltung steht ORANIER Heiztechnik schon immer in der ersten Reihe. Oranier arbeitet weiter an den zukunftsweisenden Technologien und bringen die CO2-neutrale Verbrennung von Scheitholz und Pellets in Kaminöfen voran.",
      link: "https://oranier.com/heiztechnik/produkte/kaminoefen/"
    },
    {
      name: "Rika",
      logoSrc: "/logos/rika_logo.webp",
      description: "Höchste Qualität, marktführende Technologie und herausragendes Design. Überzeugen Sie sich selbst, was einen Kaminofen von RIKA so besonders macht! Vom natürlichen Flammenbild bis hin zum typischen Knistern und Knacken der Holzscheite: ein Kaminofen spricht alle Sinne an. Er spendet nicht nur angenehme Wärme, sondern schafft auch eine ganz besondere Atmosphäre. Forschung und Entwicklung, erfolgen bei RIKA stets auch unter dem Aspekt der Nachhaltigkeit. Der effiziente Umgang mit der wertvollen Ressource Holz zählt ebenso dazu, wie die ständige Entwicklungsarbeit in Richtung Emissionsreduktion.",
      link: "https://www.rika.at/stoves/woodburning"
    },
    {
      name: "skantherm",
      logoSrc: "/logos/skantherm_logo.webp",
      description: "Bei skantherm entstehen durch Leidenschaft, höchste Ansprüche an Produktqualität, Produktdesign und höchster technischer Ausführung, hochqualitative Feuermöbel.\n\nWENN QUALITÄT, FORM UND FUNKTION VERSCHMELZEN.\n\nWenn ein skantherm Gemütlichkeit, Formschönheit und Eleganz im Raum versprühen. All diese Erwartungen erfüllt ein skantherm Kaminofen dank seines hochwertigen Designs, das in einem umfangreichen Entwicklungsprozess auf jedes Kaminmodell abgestimmt wird. Dabei gilt die oberste Maxime: Erlaubt ist, was Form, technische Funktionalität und absolut gute Gestaltung in perfekte Symbiose versetzt. Skantherm Kaminöfen sind dafür gebaut, Sie ein Leben lang zu begleiten.",
      link: "https://www.skantherm.de/modelle/produktuebersich"
    },
    {
      name: "Spartherm",
      logoSrc: "/logos/spartherm-logo.webp",
      description: "Spartherm Kaminöfen vereinen schlichtes und zeitloses Design mit innovativer Technik. Ganz egal ob Sie einen wasserführenden, klassischen oder doch Extravaganten Kaminofen wünschen. Ob Raumluftabhängig oder Raumluftunabhängig betrieben, gerade, zweiseitig und von drei Seiten einsehbarer Feuerraums für die Ausrichtung des Feuers zu Ihrem Aufenthaltsbereich, dies sind nur einige Merkmale zwischen denen Sie wählen können.",
      link: "https://www.spartherm.com/de/produkte/kaminoefen/"
    },
    {
      name: "TermaTech",
      logoSrc: "/logos/termatech_logo.webp", 
      description: "Termatech produziert Kaminöfen, bei denen Ihnen auf mehrere Arten warm ums Herz wird: sowohl in Bezug auf das Design als auch auf den Preis und auf die Umwelt. Wer sagt, dass ein Kamin nicht genauso schön sein kann, wie er effizient und umweltschonend ist? Wenn die TermaTech- Architekten beginnen, einen Kamin zu zeichnen, setzen Sie darauf, ein Zusammenspiel aus Ästhetik, Qualität und Wirkungsgrad zu kreieren. Ihr neuer Kamin ist ja etwas, das Sie viele Jahre lang haben werden: Er muss eine Freude für Auge, Umwelt und die Wirtschaftlichkeit sein.",
      link: "https://termatech.com/de/kaminoefen/"
    },
    {
      name: "Westbo of Sweden",
      logoSrc: "/logos/westbo_logo.webp",
      description: "Westbo bezeichnet seine Öfen als warme, rustikale und charaktervolle Gussöfen, die Ihrem Zuhause einen zeitlosen Charme verleihen. Die klassischen Gussöfen von Westbo sind langlebig und überstehen Generationen.",
      link: "https://www.westbo.net/produkte"
    }
  ];

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-[#E67E22] selection:text-white">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative h-[60vh] bg-[#1A1A1A] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/kaminoefen/kamine_2.webp" // Nutzt eines der neuen Bilder als Hero (Beispiel)
            alt="Moderne Kaminöfen" 
            className="w-full h-full object-cover opacity-40"
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
              <span className="text-[#E67E22] font-bold uppercase tracking-[0.3em] text-xs">Wärme & Design</span>
              <div className="h-[2px] w-12 bg-[#E67E22]"></div>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-6">
              Kaminöfen
            </h1>
            <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
              Flexibel, effizient und stilvoll. Entdecken Sie unsere große Auswahl an Premium-Kaminöfen für jeden Wohnstil.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- INTRO (Split Layout) --- */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Linke Seite: Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 text-[#E67E22] font-bold uppercase tracking-widest text-xs mb-6">
                <Flame size={18} />
                <span>Feuer in Bestform</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] uppercase italic tracking-tighter mb-8 leading-none">
                Das Feuer <br/> im Mittelpunkt
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Ein Kaminofen ist die ideale Lösung für alle, die sich das Erlebnis Feuer schnell und unkompliziert in die eigenen vier Wände holen möchten. 
                Dank modernster Verbrennungstechnik heizen Sie nicht nur effizient, sondern auch umweltschonend.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Ob aus Stahl, Keramik oder Speckstein, drehbar oder speichernd – wir führen die renommiertesten Marken Europas und finden gemeinsam das Modell, das perfekt zu Ihnen passt.
              </p>
            </motion.div>

            {/* Rechte Seite: Feature Cards */}
            <div className="grid gap-6">
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-start gap-4 p-6 bg-[#F8FAFC] rounded-2xl border border-slate-100 hover:border-[#E67E22]/30 hover:shadow-lg transition-all"
              >
                <div className="bg-white p-3 rounded-full shadow-sm text-[#E67E22]">
                  <Zap size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A1A1A] text-lg">Effiziente Wärme</h4>
                  <p className="text-slate-500 text-sm mt-1">Hohe Wirkungsgrade und geringer Holzverbrauch für nachhaltiges Heizen.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-4 p-6 bg-[#F8FAFC] rounded-2xl border border-slate-100 hover:border-[#E67E22]/30 hover:shadow-lg transition-all"
              >
                <div className="bg-white p-3 rounded-full shadow-sm text-[#E67E22]">
                  <Wind size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A1A1A] text-lg">Saubere Scheiben</h4>
                  <p className="text-slate-500 text-sm mt-1">Dank ausgeklügelter Scheibenspülung genießen Sie immer freie Sicht aufs Feuer.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-4 p-6 bg-[#F8FAFC] rounded-2xl border border-slate-100 hover:border-[#E67E22]/30 hover:shadow-lg transition-all"
              >
                <div className="bg-white p-3 rounded-full shadow-sm text-[#E67E22]">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A1A1A] text-lg">Langlebigkeit</h4>
                  <p className="text-slate-500 text-sm mt-1">Wir setzen auf Premium-Hersteller mit höchstem Qualitätsanspruch.</p>
                </div>
              </motion.div>
              
            </div>

          </div>
        </div>
      </section>

      {/* --- BILDER GALERIE --- */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#E67E22] font-bold uppercase tracking-[0.2em] text-xs">Portfolio</span>
            <h3 className="text-3xl font-black uppercase italic text-[#1A1A1A] mt-2">Inspiration</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative h-64 lg:h-80 rounded-2xl overflow-hidden shadow-lg cursor-pointer bg-slate-100"
                onClick={() => setSelectedImage(img.src)}
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#1A1A1A]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-14 h-14 bg-[#E67E22] rounded-full flex items-center justify-center text-white transform scale-50 group-hover:scale-100 transition-all duration-300 shadow-xl">
                    <Plus size={28} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- HERSTELLER SEKTION (GROSSE KACHELN & LOGOS OHNE HINTERGRUND) --- */}
      <section className="py-24 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center mb-16">
            <span className="text-[#E67E22] font-bold uppercase tracking-[0.2em] text-xs">Marken</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mt-2">
              Unsere Kaminofen Partner
            </h2>
            <div className="h-1 w-24 bg-[#E67E22] mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {manufacturers.map((brand, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                // Dunkler Hintergrund für die Karte (bg-white/5)
                className="bg-white/5 border border-white/10 p-12 rounded-3xl flex flex-col items-center text-center hover:bg-white/10 transition-colors group"
              >
                {/* LOGO CONTAINER */}
                {/* Transparenter Hintergrund, damit weiße Logos auf dem dunklen Karten-Hintergrund sichtbar sind */}
                <div className="h-32 mb-8 flex items-center justify-center w-full p-4">
                  <img 
                    src={brand.logoSrc} 
                    alt={`${brand.name} Logo`}
                    className="max-h-full max-w-full object-contain transition-all duration-500" 
                  />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-[#E67E22]">{brand.name}</h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow font-light max-w-xl whitespace-pre-wrap">
                  {brand.description}
                </p>

                <a 
                  href={brand.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white bg-[#E67E22] hover:bg-orange-600 px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 transition-all mt-auto"
                >
                  Zum Hersteller <ExternalLink size={14} />
                </a>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-20 bg-white text-center border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-6">
          <h3 className="text-3xl font-black text-[#1A1A1A] mb-6 uppercase italic">
            Finden Sie Ihren Lieblingsplatz
          </h3>
          <p className="text-slate-600 mb-8">
            Besuchen Sie unsere Ausstellungen in Berlin, Dresden oder Plessa und erleben Sie die Kaminöfen live.
          </p>
          <Link 
            href="/kontakt" 
            className="inline-flex items-center gap-2 bg-[#E67E22] hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-orange-500/30 transition-all transform hover:-translate-y-1"
          >
            Beratungstermin vereinbaren <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* --- LIGHTBOX MODAL --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 z-10 w-12 h-12 bg-white/10 hover:bg-[#E67E22] text-white rounded-full flex items-center justify-center transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={28} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage} 
              alt="Großansicht"
              className="w-auto h-auto max-w-full max-h-[90vh] object-contain rounded shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}