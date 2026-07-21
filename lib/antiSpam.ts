export const HONEYPOT_FIELD_NAME = 'website';
export const TIMESTAMP_FIELD_NAME = 'formRenderedAt';
const MIN_SUBMIT_SECONDS = 3;

export function isLikelySpam(formData: FormData): boolean {
  const honeypot = formData.get(HONEYPOT_FIELD_NAME);
  if (typeof honeypot === 'string' && honeypot.trim() !== '') {
    return true;
  }

  const renderedAtRaw = formData.get(TIMESTAMP_FIELD_NAME);
  const renderedAt = Number(renderedAtRaw);
  if (!renderedAtRaw || Number.isNaN(renderedAt)) {
    return true;
  }

  const elapsedSeconds = (Date.now() - renderedAt) / 1000;
  return elapsedSeconds < MIN_SUBMIT_SECONDS;
}
