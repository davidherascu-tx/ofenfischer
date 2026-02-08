import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // FIX: 'inlineCss' statt 'optimizeCss'.
    // Inlined CSS direkt in den Head, was bei kleinen Dateien (wie Tailwind)
    // den "Render blocking"-Fehler komplett behebt.
    inlineCss: true,

    // Optimiert die Ladezeit großer Libraries
    optimizePackageImports: [
      "lucide-react", 
      "framer-motion", 
      "date-fns"
    ],
  },
  images: {
    // Erlaubt externe Bilder (z.B. von Unsplash), falls benötigt
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;