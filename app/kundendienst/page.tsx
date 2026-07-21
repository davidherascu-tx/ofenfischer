import type { Metadata } from "next";
import KundendienstClient from "./KundendienstClient";

export const metadata: Metadata = {
  title: "Kundendienst – Wartung, Reparatur, Ersatzteile & Notdienst",
  description:
    "Wartung, Reparatur, Ersatzteil-Service und Schornstein-Sanierung für Kamine, Öfen und Heizungen. Mit Winter-Notdienst – unser Meister-Team ist persönlich für Sie da.",
  alternates: {
    canonical: "/kundendienst",
  },
};

export default function KundendienstPage() {
  return <KundendienstClient />;
}
