import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Inlined das CSS für den sichtbaren Bereich (Critical CSS).
    // Behebt "Render blocking requests" für CSS-Dateien.
    // Erfordert: npm install -D critters
    optimizeCss: true,

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