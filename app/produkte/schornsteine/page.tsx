import type { Metadata } from "next";
import SchornsteineClient from "./SchornsteineClient";

export const metadata: Metadata = {
  title: "Schornsteine – Edelstahlsysteme von Jeremias",
  description:
    "Schornsteine und Abgassysteme für Neubau und Nachrüstung: doppelwandige Edelstahl-Systeme und Leichtbauschornsteine von Jeremias, fachgerecht geplant und montiert.",
  alternates: {
    canonical: "/produkte/schornsteine",
  },
};

export default function SchornsteinePage() {
  return <SchornsteineClient />;
}
