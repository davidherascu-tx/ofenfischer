import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSlider from '@/components/HeroSlider';
import dynamic from 'next/dynamic';

// Lazy Load für den restlichen Inhalt, der nicht sofort sichtbar ist.
// Dies reduziert das initiale JavaScript-Bundle erheblich.
const HomeContent = dynamic(() => import('@/components/HomeContent'), {
  // ssr: true ist standard und gut für SEO. Next.js splittet das Bundle automatisch.
});

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-[#E67E22] selection:text-white">
      <Navbar />
      
      {/* HeroSlider muss sofort geladen werden (LCP), daher normaler Import */}
      <HeroSlider />
      
      {/* Der Rest der Seite wird dynamisch nachgeladen */}
      <HomeContent />
      
      <Footer />
    </main>
  );
}