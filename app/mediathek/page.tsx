import type { Metadata } from "next";
import MediathekClient from "./MediathekClient";

export const metadata: Metadata = {
  title: "Mediathek – Videos zu Kaminen, Öfen & Heiztechnik",
  description:
    "Entdecken Sie unsere Projekte in bewegten Bildern: Imagefilme, Kamin-Projektvorstellungen und Heizungstechnik-Infos von Ofenfischer – jetzt ansehen und inspirieren lassen.",
  alternates: {
    canonical: "/mediathek",
  },
};

export default function MediathekPage() {
  return <MediathekClient />;
}
