import type { MetadataRoute } from "next";

const BASE_URL = "https://ofenfischer.de";

const staticRoutes = [
  { path: "", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/kontakt", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/kundendienst", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/projekt-starten", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/referenzen", priority: 0.7, changeFrequency: "weekly" as const },
  { path: "/unternehmen", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/faq", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/karriere", priority: 0.5, changeFrequency: "monthly" as const },
  { path: "/mediathek", priority: 0.5, changeFrequency: "monthly" as const },
  { path: "/eu-foerderung", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/filialen/berlin", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/filialen/plessa", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/produkte/kaminoefen", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/produkte/kacheloefen", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/produkte/gaskamine", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/produkte/elektrokamine", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/produkte/feuerstellen", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/produkte/heizungssysteme", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/produkte/sanitaer", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/produkte/schornsteine", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/produkte/specksteinoefen", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/produkte/speicheroefen", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/produkte/kaminanlagen", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/impressum", priority: 0.2, changeFrequency: "yearly" as const },
  { path: "/datenschutz", priority: 0.2, changeFrequency: "yearly" as const },
  { path: "/agb", priority: 0.2, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return staticRoutes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
