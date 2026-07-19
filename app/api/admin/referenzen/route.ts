import crypto from 'crypto';
import { NextResponse } from 'next/server';
import { getStore } from '@netlify/blobs';
import { isAdminAuthorized } from '@/lib/adminSession';

const STORE_NAME = 'referenzen-uploads';
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/avif'];
const MAX_FILE_SIZE = 6 * 1024 * 1024; // 6MB, Netlify Function Body-Limit

const EXTENSION_BY_TYPE: Record<string, string> = {
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
  'image/avif': 'avif',
};

export async function POST(request: Request) {
  if (!(await isAdminAuthorized())) {
    return NextResponse.json({ error: 'Nicht angemeldet' }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const files = formData.getAll('files').filter((f): f is File => f instanceof File);

    if (files.length === 0) {
      return NextResponse.json({ error: 'Keine Dateien übermittelt' }, { status: 400 });
    }

    const store = getStore(STORE_NAME);
    const uploaded: string[] = [];

    for (const file of files) {
      if (!ALLOWED_TYPES.includes(file.type)) {
        return NextResponse.json(
          { error: `Nicht unterstützter Dateityp: ${file.type || 'unbekannt'}` },
          { status: 400 }
        );
      }
      if (file.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          { error: `Datei "${file.name}" ist zu groß (max. 6MB)` },
          { status: 400 }
        );
      }

      const extension = EXTENSION_BY_TYPE[file.type] ?? 'jpg';
      const key = `${crypto.randomUUID()}.${extension}`;
      const buffer = await file.arrayBuffer();

      await store.set(key, buffer, {
        metadata: {
          contentType: file.type,
          originalName: file.name,
          uploadedAt: Date.now(),
        },
      });

      uploaded.push(key);
    }

    return NextResponse.json({ success: true, uploaded });
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  if (!(await isAdminAuthorized())) {
    return NextResponse.json({ error: 'Nicht angemeldet' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const key = searchParams.get('key');

    if (!key || key.includes('/') || key.includes('..')) {
      return NextResponse.json({ error: 'Ungültiger Key' }, { status: 400 });
    }

    const store = getStore(STORE_NAME);
    await store.delete(key);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
