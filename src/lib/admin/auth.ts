import { createHmac, timingSafeEqual, createHash } from 'crypto';
import { cookies } from 'next/headers';

// Single admin account (server only). Credentials come from environment
// variables only (ADMIN_EMAIL / ADMIN_PASSWORD), never from the codebase.

export const SESSION_COOKIE = 'adx_admin';
const SESSION_HOURS = 12;

const credentials = () => ({
  email: (process.env.ADMIN_EMAIL ?? '').trim().toLowerCase(),
  password: process.env.ADMIN_PASSWORD ?? '',
});

export const adminConfigured = () => {
  const { email, password } = credentials();
  return Boolean(email && password);
};

const secret = () => {
  const { email, password } = credentials();
  return process.env.ADMIN_SESSION_SECRET || createHash('sha256').update(`${email}:${password}`).digest('hex');
};

const sign = (payload: string) => createHmac('sha256', secret()).update(payload).digest('hex');

const safeEqual = (a: string, b: string) => {
  const x = createHash('sha256').update(a).digest();
  const y = createHash('sha256').update(b).digest();
  return timingSafeEqual(x, y);
};

export function checkCredentials(email: string, password: string): boolean {
  if (!adminConfigured()) return false;
  const expected = credentials();
  const emailOk = safeEqual(email.trim().toLowerCase(), expected.email);
  const passwordOk = safeEqual(password, expected.password);
  return emailOk && passwordOk;
}

export function createSessionToken(): { value: string; maxAge: number } {
  const maxAge = SESSION_HOURS * 60 * 60;
  const expires = String(Date.now() + maxAge * 1000);
  return { value: `${expires}.${sign(expires)}`, maxAge };
}

export function isAdmin(): boolean {
  if (!adminConfigured()) return false;
  const token = cookies().get(SESSION_COOKIE)?.value;
  if (!token) return false;
  const [expires, signature] = token.split('.');
  if (!expires || !signature || !safeEqual(signature, sign(expires))) return false;
  return Number(expires) > Date.now();
}
