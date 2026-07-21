import type { Metadata } from "next";
import BerlinClient from "./BerlinClient";

export const metadata: Metadata = {
  title: "Filiale Berlin | Kamin-Ausstellung in Schönefeld",
  description:
    "Besuchen Sie unsere Kamin-Ausstellung in Schönefeld bei Berlin: über 400m² Ausstellungsfläche, live befeuerte Kaminöfen, Gaskamin-Studios und persönliche Fachberatung.",
  alternates: {
    canonical: "/filialen/berlin",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Ofenfischer GmbH - Filiale Berlin",
  image: "https://ofenfischer.de/filialen/berlin/berlin.jpg",
  telephone: "+49-30-633112380",
  email: "berlin@ofenfischer.de",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Lilienthalstraße 1a",
    postalCode: "12529",
    addressLocality: "Schönefeld bei Berlin",
    addressCountry: "DE",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "14:00",
    },
  ],
  parentOrganization: {
    "@type": "Organization",
    name: "Ofenfischer GmbH",
    url: "https://ofenfischer.de",
  },
};

export default function BerlinPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <BerlinClient />
    </>
  );
}
