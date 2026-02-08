import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Aktiviert Critical CSS: Inlined das CSS für den sichtbaren Bereich direkt ins HTML.
    // Dies eliminiert den blockierenden Netzwerk-Request für die CSS-Datei.
    // WICHTIG: Erfordert 'npm install critters'
    optimizeCss: true,

    // Optimiert Imports für große Libraries, um JavaScript-Bundle-Größen zu reduzieren.
    optimizePackageImports: [
      "lucide-react", 
      "framer-motion", 
      "date-fns"
    ],
  },
};

export default nextConfig;