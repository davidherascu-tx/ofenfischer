import type { Metadata } from "next";
import EuFoerderungClient from "./EuFoerderungClient";

export const metadata: Metadata = {
  title: "EU-Förderung – Investition in unseren Maschinenpark",
  description:
    "Im Rahmen der Förderung Produktive Investition von KMU erweitern wir unseren Maschinenpark am Standort Plessa – kofinanziert von der Europäischen Union und dem Land Brandenburg.",
  alternates: {
    canonical: "/eu-foerderung",
  },
};

export default function EuFoerderungPage() {
  return <EuFoerderungClient />;
}
