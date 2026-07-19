import { getStore } from '@netlify/blobs';

const STORE_NAME = 'referenzen-uploads';

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ key: string }> }
) {
  const { key } = await params;

  if (!key || key.includes('/') || key.includes('..')) {
    return new Response('Not found', { status: 404 });
  }

  try {
    const store = getStore(STORE_NAME);
    const result = await store.getWithMetadata(key, { type: 'arrayBuffer' });

    if (!result) {
      return new Response('Not found', { status: 404 });
    }

    const contentType =
      (result.metadata?.contentType as string | undefined) ?? 'application/octet-stream';

    return new Response(result.data, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch {
    return new Response('Not found', { status: 404 });
  }
}
