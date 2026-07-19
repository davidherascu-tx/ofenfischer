import crypto from 'crypto';
import { cookies } from 'next/headers';

const COOKIE_NAME = 'referenzen_admin_session';
const SESSION_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 Tage

function getSessionSecret(): string {
  const secret = process.env.SESSION_SECRET;
  if (!secret) throw new Error('SESSION_SECRET ist nicht gesetzt');
  return secret;
}

function sign(payload: string): string {
  return crypto.createHmac('sha256', getSessionSecret()).update(payload).digest('hex');
}

export function verifyPassword(candidate: string): boolean {
  const expected = process.env.REFERENZEN_ADMIN_PASSWORD;
  if (!expected) return false;

  const candidateHash = crypto.createHash('sha256').update(candidate).digest();
  const expectedHash = crypto.createHash('sha256').update(expected).digest();

  return crypto.timingSafeEqual(candidateHash, expectedHash);
}

export function createSessionCookieValue(): string {
  const expiry = Date.now() + SESSION_TTL_MS;
  const payload = String(expiry);
  const signature = sign(payload);
  return Buffer.from(`${payload}.${signature}`).toString('base64url');
}

export function verifySessionCookieValue(value: string | undefined | null): boolean {
  if (!value) return false;

  let decoded: string;
  try {
    decoded = Buffer.from(value, 'base64url').toString('utf8');
  } catch {
    return false;
  }

  const separatorIndex = decoded.lastIndexOf('.');
  if (separatorIndex === -1) return false;

  const payload = decoded.slice(0, separatorIndex);
  const signature = decoded.slice(separatorIndex + 1);

  const expectedSignature = sign(payload);
  const signatureBuffer = Buffer.from(signature, 'hex');
  const expectedBuffer = Buffer.from(expectedSignature, 'hex');

  if (signatureBuffer.length !== expectedBuffer.length) return false;
  if (!crypto.timingSafeEqual(signatureBuffer, expectedBuffer)) return false;

  const expiry = Number(payload);
  if (!Number.isFinite(expiry)) return false;

  return Date.now() < expiry;
}

export const ADMIN_SESSION_COOKIE_NAME = COOKIE_NAME;
export const ADMIN_SESSION_MAX_AGE_SECONDS = Math.floor(SESSION_TTL_MS / 1000);

export async function isAdminAuthorized(): Promise<boolean> {
  const cookieStore = await cookies();
  return verifySessionCookieValue(cookieStore.get(COOKIE_NAME)?.value);
}
