import Link from "next/link";
import { Flame, ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Seite nicht gefunden",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-[#E67E22] selection:text-white">
      <Navbar />

      <section className="min-h-[70vh] flex items-center justify-center px-6 py-24">
        <div className="text-center max-w-xl mx-auto">
          <div className="w-20 h-20 bg-orange-50 text-[#E67E22] rounded-full flex items-center justify-center mx-auto mb-8">
            <Flame size={40} />
          </div>
          <p className="text-[#E67E22] font-bold uppercase tracking-[0.3em] text-xs mb-4">
            Fehler 404
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-[#1A1A1A] uppercase italic tracking-tighter mb-6">
            Seite nicht gefunden
          </h1>
          <p className="text-slate-500 text-lg mb-10 leading-relaxed">
            Die gesuchte Seite existiert leider nicht mehr oder wurde verschoben.
            Nutzen Sie einen der folgenden Links, um weiterzukommen.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-[#1A1A1A] hover:bg-[#E67E22] text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all"
            >
              <ArrowLeft size={18} />
              Zur Startseite
            </Link>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-white border border-slate-200 hover:border-[#E67E22] text-[#1A1A1A] font-bold px-8 py-4 rounded-full transition-all"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
