import type { Metadata } from "next";
import FeuerstellenClient from "./FeuerstellenClient";

export const metadata: Metadata = {
  title: "Outdoor- & Indoor-Feuerstellen von Höfats",
  description:
    "Preisgekrönte Feuerstellen von Höfats für Terrasse, Garten und Wohnraum. Funktionales Design trifft echtes Flammenerlebnis – flexibel drinnen wie draußen einsetzbar.",
  alternates: {
    canonical: "/produkte/feuerstellen",
  },
};

export default function FeuerstellenPage() {
  return <FeuerstellenClient />;
}
