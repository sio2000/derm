import { NextResponse } from 'next/server';
import { SESSION_COOKIE, adminConfigured, checkCredentials, createSessionToken } from '@/lib/admin/auth';

export const dynamic = 'force-dynamic';

// Slows down password guessing: a few attempts per IP, then a cool-down.
const MAX_ATTEMPTS = 6;
const WINDOW_MS = 10 * 60 * 1000;
const attempts = new Map<string, { count: number; first: number }>();

export async function POST(request: Request) {
  if (!adminConfigured()) {
    return NextResponse.json(
      { error: 'Δεν έχουν οριστεί ADMIN_EMAIL και ADMIN_PASSWORD στο περιβάλλον.' },
      { status: 503 },
    );
  }

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  const now = Date.now();
  const entry = attempts.get(ip);
  if (entry && now - entry.first > WINDOW_MS) attempts.delete(ip);
  if ((attempts.get(ip)?.count ?? 0) >= MAX_ATTEMPTS) {
    return NextResponse.json({ error: 'Πολλές προσπάθειες. Δοκιμάστε ξανά σε 10 λεπτά.' }, { status: 429 });
  }

  const body = (await request.json().catch(() => null)) as { email?: unknown; password?: unknown } | null;
  const email = typeof body?.email === 'string' ? body.email : '';
  const password = typeof body?.password === 'string' ? body.password : '';

  if (!checkCredentials(email, password)) {
    const current = attempts.get(ip) ?? { count: 0, first: now };
    attempts.set(ip, { count: current.count + 1, first: current.first });
    await new Promise((resolve) => setTimeout(resolve, 600));
    return NextResponse.json({ error: 'Λάθος email ή κωδικός.' }, { status: 401 });
  }

  attempts.delete(ip);
  const session = createSessionToken();
  const response = NextResponse.json({ ok: true });
  response.cookies.set(SESSION_COOKIE, session.value, {
    httpOnly: true,
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: session.maxAge,
  });
  return response;
}
