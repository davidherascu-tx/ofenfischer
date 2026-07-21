import type { Metadata } from "next";
import ImpressumClient from "./ImpressumClient";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum und rechtliche Angaben der Ofenfischer GmbH gemäß § 5 TMG: Firmensitz, Handelsregister, Kontakt und Umsatzsteuer-ID.",
  alternates: {
    canonical: "/impressum",
  },
};

export default function ImpressumPage() {
  return <ImpressumClient />;
}
