
import fs from 'fs';
import path from 'path';
import GalleryClient from './GalleryClient';

export default function ReferenzenPage() {
  // 1. Pfad zum Ordner 'public/referenzen' bestimmen
  const directoryPath = path.join(process.cwd(), 'public', 'referenzen');

  let images: string[] = [];

  try {
    // 2. Den Ordner auslesen
    const files = fs.readdirSync(directoryPath);

    // 3. Nur Bilddateien filtern und Pfade erstellen
    images = files
      .filter((file) => /\.(jpg|jpeg|png|webp|avif)$/i.test(file)) // Filtert nach Bildendungen
      .map((file) => `/referenzen/${file}`); // Erstellt den Pfad für den Browser
      
  } catch (error) {
    console.error("Fehler beim Lesen des Referenzen-Ordners:", error);
    // Falls der Ordner nicht existiert, bleibt das Array leer
  }

  // 4. Daten an die Client-Komponente übergeben
  return <GalleryClient images={images} />;
}