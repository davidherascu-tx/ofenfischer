import type { Metadata } from "next";
import KacheloefenClient from "./KacheloefenClient";

export const metadata: Metadata = {
  title: "Kachelöfen – Individuelle Keramiköfen mit Strahlungswärme",
  description:
    "Individuell geplante Kachelöfen mit milder Strahlungswärme, gefertigt von Cerampiu, Gabriel und Kaufmann. Traditionelles Ofenbau-Handwerk aus Berlin und Plessa.",
  alternates: {
    canonical: "/produkte/kacheloefen",
  },
};

export default function KacheloefenPage() {
  return <KacheloefenClient />;
}
