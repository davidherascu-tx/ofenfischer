import type { Metadata } from "next";
import SpeicheroefenClient from "./SpeicheroefenClient";

export const metadata: Metadata = {
  title: "Speicheröfen – Bis zu 12 Stunden Wärme von Hoxter",
  description:
    "Speicheröfen von Hoxter und Nordpeis speichern die Hitze des Feuers und geben sie bis zu 12 Stunden als milde Strahlungswärme ab – effizient und gesund fürs Raumklima.",
  alternates: {
    canonical: "/produkte/speicheroefen",
  },
};

export default function SpeicheroefenPage() {
  return <SpeicheroefenClient />;
}
