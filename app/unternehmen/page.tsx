import type { Metadata } from "next";
import UnternehmenClient from "./UnternehmenClient";

export const metadata: Metadata = {
  title: "Unternehmen – Tradition & Handwerk seit 3 Generationen",
  description:
    "Ofen-Fischer GmbH: familiengeführter Meisterbetrieb mit 35 Mitarbeitern in Plessa und Berlin. Erfahren Sie mehr über unsere Geschichte, Zertifizierungen und Werte.",
  alternates: {
    canonical: "/unternehmen",
  },
};

export default function UnternehmenPage() {
  return <UnternehmenClient />;
}
