import type { Metadata } from "next";
import KontaktClient from "./KontaktClient";

export const metadata: Metadata = {
  title: "Kontakt – Beratung, Anfrage & Terminvereinbarung",
  description:
    "Kontaktieren Sie Ofenfischer für Beratung zu Kaminöfen, Kachelöfen und Heiztechnik. Schreiben Sie uns über unser Formular oder rufen Sie an – wir melden uns schnellstmöglich.",
  alternates: {
    canonical: "/kontakt",
  },
};

export default function KontaktPage() {
  return <KontaktClient />;
}
