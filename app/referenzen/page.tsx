
import fs from 'fs';
import path from 'path';
import { getStore } from '@netlify/blobs';
import GalleryClient from './GalleryClient';

// Damit vom Kunden hochgeladene Bilder ohne Redeploy sofort erscheinen
export const dynamic = 'force-dynamic';

async function loadUploadedImagePaths(): Promise<string[]> {
  try {
    const store = getStore('referenzen-uploads');
    const { blobs } = await store.list();

    const withTimestamp = await Promise.all(
      blobs.map(async ({ key }) => {
        const meta = await store.getMetadata(key);
        const uploadedAt = (meta?.metadata?.uploadedAt as number | undefined) ?? 0;
        return { key, uploadedAt };
      })
    );

    return withTimestamp
      .sort((a, b) => b.uploadedAt - a.uploadedAt)
      .map(({ key }) => `/referenzen-bild/${key}`);
  } catch (error) {
    console.error('Fehler beim Lesen der hochgeladenen Referenzbilder:', error);
    return [];
  }
}

export default async function ReferenzenPage() {
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

  // 4. Vom Kunden hochgeladene Bilder ergänzen (neueste zuerst)
  const uploadedImages = await loadUploadedImagePaths();
  const allImages = [...uploadedImages, ...images];

  // 5. Daten an die Client-Komponente übergeben
  return <GalleryClient images={allImages} />;
}