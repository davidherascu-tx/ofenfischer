import type { Metadata } from "next";
import SanitaerClient from "./SanitaerClient";

export const metadata: Metadata = {
  title: "Sanitär & Badgestaltung – Komplettbäder vom Fachbetrieb",
  description:
    "Von der 3D-Badplanung bis zur fertigen Installation: Komplettbäder, Trinkwasserhygiene und barrierefreie Lösungen nach DIN-Normen, inklusive Beratung zu KfW-Förderungen.",
  alternates: {
    canonical: "/produkte/sanitaer",
  },
};

export default function SanitaerPage() {
  return <SanitaerClient />;
}
