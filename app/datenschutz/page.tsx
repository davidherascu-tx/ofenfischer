import type { Metadata } from "next";
import DatenschutzClient from "./DatenschutzClient";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung der Ofenfischer GmbH: Informationen zur Verarbeitung Ihrer personenbezogenen Daten beim Besuch unserer Website.",
  alternates: {
    canonical: "/datenschutz",
  },
};

export default function DatenschutzPage() {
  return <DatenschutzClient />;
}
