import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Inlined kritisches CSS, um den "Critical Request Chain" zu durchbrechen
    // Erfordert: npm install -D critters
    optimizeCss: true, 
    
    // Optimiert die Imports großer Libraries, um die Bundle-Größe zu reduzieren
    optimizePackageImports: ["lucide-react", "framer-motion", "date-fns"],
  },
};

export default nextConfig;