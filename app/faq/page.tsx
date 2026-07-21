import type { Metadata } from "next";
import FaqClient from "./FaqClient";
import { faqData } from "./faqData";

export const metadata: Metadata = {
  title: "Häufig gestellte Fragen (FAQ)",
  description:
    "Antworten auf die wichtigsten Fragen zu Kaminöfen, Kachelöfen, Heizkaminen, Bauart A1, BImSchV-Grenzwerten und Nachrüstpflichten für Holzfeuerstätten.",
  alternates: {
    canonical: "/faq",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answerText,
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <FaqClient />
    </>
  );
}
