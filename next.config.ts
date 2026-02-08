import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Erlaubt Bilder von externen Quellen (wie Unsplash)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  experimental: {
    optimizeCss: true, // Für die vorherige Optimierung
    optimizePackageImports: ["lucide-react", "framer-motion", "date-fns"],
  },
};

export default nextConfig;