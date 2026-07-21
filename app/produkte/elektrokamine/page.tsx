import type { Metadata } from "next";
import ElektrokamineClient from "./ElektrokamineClient";

export const metadata: Metadata = {
  title: "Elektrokamine – Realistische Flammen ohne Schornstein",
  description:
    "Elektrokamine von Faber, Dimplex und Planika mit täuschend echten 3D-Flammen aus Licht und Wasserdampf. Einfache Steckdosen-Installation ohne Schornstein oder Genehmigung.",
  alternates: {
    canonical: "/produkte/elektrokamine",
  },
};

export default function ElektrokaminePage() {
  return <ElektrokamineClient />;
}
