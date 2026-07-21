import type { Metadata } from "next";
import KaminanlagenClient from "./KaminanlagenClient";

export const metadata: Metadata = {
  title: "Individuelle Kaminanlagen – Planung von Brunner bis Spartherm",
  description:
    "Maßgeschneiderte Kaminanlagen mit CAD-Planung und Meistermontage: Tunnelkamine, Panorama-Lösungen und Naturstein-Kamine von Brunner, Spartherm und weiteren Premium-Marken.",
  alternates: {
    canonical: "/produkte/kaminanlagen",
  },
};

export default function KaminanlagenPage() {
  return <KaminanlagenClient />;
}
