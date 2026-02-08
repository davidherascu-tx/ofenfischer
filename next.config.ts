import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Inlined kritisches CSS, um Render-Blocking zu verhindern
    optimizeCss: true,
    
    // Verbessert Tree-Shaking für diese großen Bibliotheken
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;