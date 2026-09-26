import type { Metadata } from "next";
import SpecksteinoefenClient from "./SpecksteinoefenClient";

export const metadata: Metadata = {
  title: "Specksteinöfen – NunnaUuni Naturstein aus Finnland",
  description:
    "Specksteinöfen von NunnaUuni: finnischer Naturstein speichert Feuerwärme bis zu 24 Stunden bei nur 1-3 Stunden Heizzeit. Mit patentiertem Goldenen-Feuer-Verfahren.",
  alternates: {
    canonical: "/produkte/specksteinoefen",
  },
};

export default function SpecksteinoefenPage() {
  return <SpecksteinoefenClient />;
}
