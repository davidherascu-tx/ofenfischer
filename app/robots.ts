import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/", // Optional: Ordner, die nicht indexiert werden sollen
    },
    // Passe die URL an deine Domain an (basierend auf deiner layout.tsx)
    sitemap: "https://ofenfischer-demo.vercel.app/sitemap.xml",
  };
}