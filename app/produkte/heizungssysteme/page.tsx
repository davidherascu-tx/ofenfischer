import type { Metadata } from "next";
import HeizungssystemeClient from "./HeizungssystemeClient";

export const metadata: Metadata = {
  title: "Heizungssysteme – Wasserführende Kamine & Hybridlösungen",
  description:
    "Wasserführende Kamine, Wärmepumpen-Kombinationen und smarte Abbrandsteuerung: Nutzen Sie Kaminwärme fürs ganze Haus. CO2-neutral heizen, förderfähig durch BAFA.",
  alternates: {
    canonical: "/produkte/heizungssysteme",
  },
};

export default function HeizungssystemePage() {
  return <HeizungssystemeClient />;
}
