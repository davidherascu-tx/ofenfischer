"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
    // Seite neu laden, damit YouTube-Embeds die Zustimmung direkt erkennen
    window.location.reload();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[100] md:left-auto md:max-w-sm animate-in fade-in slide-in-from-bottom-10 duration-700">
      <div className="bg-[#1a1a1a] border border-orange-500/30 rounded-2xl shadow-2xl p-6 backdrop-blur-md bg-opacity-95">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">🍪</span>
          <h3 className="text-white font-bold text-lg">Cookie-Einstellungen</h3>
        </div>
        
        <p className="text-gray-300 text-sm mb-6 leading-relaxed">
          Wir nutzen Cookies, um Inhalte zu personalisieren und YouTube-Videos zu ermöglichen. 
          Diese helfen uns, die Seite für dich zu verbessern.
        </p>

        <div className="flex flex-col gap-3">
          <button
            onClick={acceptCookies}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2.5 rounded-xl transition-all active:scale-95 shadow-lg shadow-orange-900/20"
          >
            Einverstanden & Schließen
          </button>
          
          <Link
            href="/datenschutz"
            className="w-full text-center bg-transparent border border-white/5 hover:border-white/10 text-gray-500 text-xs py-2 rounded-xl transition-all"
          >
            Datenschutzerklärung & Details
          </Link>
        </div>
      </div>
    </div>
  );
}