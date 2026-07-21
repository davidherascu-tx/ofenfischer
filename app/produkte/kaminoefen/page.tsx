import type { Metadata } from "next";
import KaminoefenClient from "./KaminoefenClient";

export const metadata: Metadata = {
  title: "Kaminöfen kaufen: Premium-Marken wie Austroflamm & Hase",
  description:
    "Kaminöfen aus Stahl, Keramik und Speckstein von Marken wie Austroflamm, Hase, Spartherm und Skantherm. Beratung, Verkauf und Montage bei Ofenfischer in Berlin und Plessa.",
  alternates: {
    canonical: "/produkte/kaminoefen",
  },
};

export default function KaminoefenPage() {
  return <KaminoefenClient />;
}
