import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import {
  verifyPassword,
  createSessionCookieValue,
  ADMIN_SESSION_COOKIE_NAME,
  ADMIN_SESSION_MAX_AGE_SECONDS,
} from '@/lib/adminSession';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const password = formData.get('password');

    if (typeof password !== 'string' || !verifyPassword(password)) {
      return NextResponse.json({ error: 'Falsches Passwort' }, { status: 401 });
    }

    const cookieStore = await cookies();
    cookieStore.set(ADMIN_SESSION_COOKIE_NAME, createSessionCookieValue(), {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/',
      maxAge: ADMIN_SESSION_MAX_AGE_SECONDS,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
