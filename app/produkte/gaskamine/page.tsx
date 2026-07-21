import type { Metadata } from "next";
import GaskamineClient from "./GaskamineClient";

export const metadata: Metadata = {
  title: "Gaskamine – Echtes Flammenbild auf Knopfdruck",
  description:
    "Gaskamine von Camina & Schmid, DRU und Hoxter: täuschend echtes Flammenbild per Fernbedienung, hohe Effizienz und saubere Verbrennung ohne Holzlager oder Asche.",
  alternates: {
    canonical: "/produkte/gaskamine",
  },
};

export default function GaskaminePage() {
  return <GaskamineClient />;
}
