import { getStore } from '@netlify/blobs';

export const REFERENZEN_STORE_NAME = 'referenzen-uploads';

export function getReferenzenStore() {
  return getStore(REFERENZEN_STORE_NAME, { consistency: 'strong' });
}
