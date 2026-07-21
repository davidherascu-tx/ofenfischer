import type { Metadata } from "next";
import KarriereClient from "./KarriereClient";

export const metadata: Metadata = {
  title: "Karriere & Ausbildung – Werde Teil unseres Teams",
  description:
    "Ausbildung zum Anlagenmechaniker (m/w/d) oder Kachelofen- und Luftheizungsbauer (m/w/d) bei Ofenfischer. Lerne das Handwerk von den Besten – jetzt initiativ bewerben.",
  alternates: {
    canonical: "/karriere",
  },
};

export default function KarrierePage() {
  return <KarriereClient />;
}
