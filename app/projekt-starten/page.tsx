import type { Metadata } from "next";
import ProjektStartenClient from "./ProjektStartenClient";

export const metadata: Metadata = {
  title: "Projekt starten – Angebot für Ihren Kaminofen anfordern",
  description:
    "Fordern Sie unverbindlich Ihr individuelles Angebot an: persönliche Daten, Raumgegebenheiten und Wünsche einfach online übermitteln – schnell, unkompliziert und kostenlos.",
  alternates: {
    canonical: "/projekt-starten",
  },
};

export default function ProjektStartenPage() {
  return <ProjektStartenClient />;
}
