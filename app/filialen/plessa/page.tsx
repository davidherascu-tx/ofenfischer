import type { Metadata } from "next";
import PlessaClient from "./PlessaClient";

export const metadata: Metadata = {
  title: "Filiale Plessa | Unser Stammsitz in der Lausitz",
  description:
    "Unser Stammsitz in Plessa: große Ausstellung auf 2 Etagen, direkter Werksverkauf, Ersatzteil-Service vor Ort und technische Fachberatung.",
  alternates: {
    canonical: "/filialen/plessa",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Ofenfischer GmbH - Hauptsitz Plessa",
  image: "https://ofenfischer.de/filialen/plessa/plessa_2021_web.jpg",
  telephone: "+49-3533-48120",
  email: "info@ofenfischer.de",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Glück-Auf-Ring 1",
    postalCode: "04928",
    addressLocality: "Plessa",
    addressCountry: "DE",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
  ],
  parentOrganization: {
    "@type": "Organization",
    name: "Ofenfischer GmbH",
    url: "https://ofenfischer.de",
  },
};

export default function PlessaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <PlessaClient />
    </>
  );
}
