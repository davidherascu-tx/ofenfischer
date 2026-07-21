import type { Metadata } from "next";
import AGBClient from "./AGBClient";

export const metadata: Metadata = {
  title: "Allgemeine Geschäftsbedingungen (AGB)",
  description:
    "Die Allgemeinen Geschäftsbedingungen (AGB) der Ofenfischer GmbH für Lieferungen, Leistungen und die Montage von Kaminanlagen und Heiztechnik.",
  alternates: {
    canonical: "/agb",
  },
};

export default function AGBPage() {
  return <AGBClient />;
}
