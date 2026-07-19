'use client';

import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Trash2, Upload, LogOut, Camera } from 'lucide-react';

export interface UploadedImage {
  key: string;
  originalName: string;
  uploadedAt: number;
}

const MAX_DIMENSION = 2000;
const JPEG_QUALITY = 0.8;

async function downscaleImage(file: File): Promise<File> {
  if (file.type === 'image/avif' || file.type === 'image/svg+xml') {
    // Canvas kann AVIF nicht zuverlässig re-encodieren, Original beibehalten
    return file;
  }

  const bitmap = await createImageBitmap(file);
  const scale = Math.min(1, MAX_DIMENSION / Math.max(bitmap.width, bitmap.height));

  if (scale === 1 && file.size < 3 * 1024 * 1024) {
    return file;
  }

  const canvas = document.createElement('canvas');
  canvas.width = Math.round(bitmap.width * scale);
  canvas.height = Math.round(bitmap.height * scale);

  const ctx = canvas.getContext('2d');
  if (!ctx) return file;

  ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);

  const blob = await new Promise<Blob | null>((resolve) =>
    canvas.toBlob(resolve, 'image/jpeg', JPEG_QUALITY)
  );

  if (!blob) return file;

  const newName = file.name.replace(/\.[^.]+$/, '') + '.jpg';
  return new File([blob], newName, { type: 'image/jpeg' });
}

export default function UploadManager({ initialImages }: { initialImages: UploadedImage[] }) {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [images, setImages] = useState(initialImages);
  const [uploading, setUploading] = useState(false);
  const [deletingKey, setDeletingKey] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    if (files.length === 0) return;

    setError(null);
    setUploading(true);

    try {
      const processed = await Promise.all(files.map(downscaleImage));

      const formData = new FormData();
      processed.forEach((file) => formData.append('files', file));

      const res = await fetch('/api/admin/referenzen', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error ?? 'Upload fehlgeschlagen');
        return;
      }

      router.refresh();
    } catch {
      setError('Upload fehlgeschlagen');
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const handleDelete = async (key: string) => {
    setError(null);
    setDeletingKey(key);

    try {
      const res = await fetch(`/api/admin/referenzen?key=${encodeURIComponent(key)}`, {
        method: 'DELETE',
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error ?? 'Löschen fehlgeschlagen');
        return;
      }

      setImages((prev) => prev.filter((img) => img.key !== key));
    } catch {
      setError('Löschen fehlgeschlagen');
    } finally {
      setDeletingKey(null);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.refresh();
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-black text-[#1A1A1A] uppercase italic">
            Referenzbilder verwalten
          </h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-slate-500 hover:text-[#1A1A1A] text-sm font-medium"
          >
            <LogOut size={16} />
            Abmelden
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6 mb-8">
          <label className="flex flex-col items-center justify-center gap-3 border-2 border-dashed border-slate-300 rounded-xl py-10 cursor-pointer hover:border-[#E67E22] transition-colors">
            <Upload size={32} className="text-[#E67E22]" />
            <span className="font-medium text-slate-600">
              {uploading ? 'Bilder werden hochgeladen...' : 'Bilder auswählen zum Hochladen'}
            </span>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/png,image/webp,image/avif"
              multiple
              className="hidden"
              disabled={uploading}
              onChange={handleFileSelect}
            />
          </label>

          {error && <p className="text-red-600 text-sm mt-4">{error}</p>}
        </div>

        <h2 className="text-lg font-bold text-[#1A1A1A] mb-4">
          Hochgeladene Bilder ({images.length})
        </h2>

        {images.length === 0 ? (
          <div className="text-center text-slate-500 py-16 bg-white rounded-2xl border border-slate-100">
            <Camera size={40} className="mx-auto mb-3 opacity-50" />
            <p>Noch keine eigenen Bilder hochgeladen.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {images.map((img) => (
              <div
                key={img.key}
                className="relative group rounded-xl overflow-hidden border border-slate-200 bg-white shadow"
              >
                <img
                  src={`/referenzen-bild/${img.key}`}
                  alt={img.originalName}
                  className="w-full h-32 object-cover"
                />
                <button
                  onClick={() => handleDelete(img.key)}
                  disabled={deletingKey === img.key}
                  className="absolute top-2 right-2 w-8 h-8 bg-black/60 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors disabled:opacity-60"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
