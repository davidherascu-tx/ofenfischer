import { isAdminAuthorized } from '@/lib/adminSession';
import { getReferenzenStore } from '@/lib/referenzenStore';
import LoginForm from './LoginForm';
import UploadManager, { type UploadedImage } from './UploadManager';

export const dynamic = 'force-dynamic';

async function loadUploadedImages(): Promise<UploadedImage[]> {
  try {
    const store = getReferenzenStore();
    const { blobs } = await store.list();

    const images = await Promise.all(
      blobs.map(async ({ key }) => {
        const meta = await store.getMetadata(key);
        return {
          key,
          originalName: (meta?.metadata?.originalName as string | undefined) ?? key,
          uploadedAt: (meta?.metadata?.uploadedAt as number | undefined) ?? 0,
        };
      })
    );

    return images.sort((a, b) => b.uploadedAt - a.uploadedAt);
  } catch (error) {
    console.error('Fehler beim Laden der hochgeladenen Referenzbilder:', error);
    return [];
  }
}

export default async function AdminReferenzenPage() {
  const authorized = await isAdminAuthorized();

  if (!authorized) {
    return <LoginForm />;
  }

  const images = await loadUploadedImages();

  return <UploadManager initialImages={images} />;
}
