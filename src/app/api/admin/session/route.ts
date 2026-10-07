import { NextResponse } from 'next/server';
import { adminConfigured, isAdmin } from '@/lib/admin/auth';

export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json({ authenticated: isAdmin(), configured: adminConfigured() });
}
