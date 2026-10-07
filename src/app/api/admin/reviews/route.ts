import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { isAdmin } from '@/lib/admin/auth';
import { getReviewsContent, saveReviewsContent } from '@/lib/content/reviews';
import type { Review, ReviewsContent } from '@/lib/content/types';

export const dynamic = 'force-dynamic';

const unauthorized = () => NextResponse.json({ error: 'Απαιτείται σύνδεση.' }, { status: 401 });

const text = (value: unknown, max: number) => (typeof value === 'string' ? value.trim().slice(0, max) : '');

function parse(body: unknown): ReviewsContent | string {
  const input = body as { rating?: unknown; count?: unknown; reviews?: unknown } | null;
  if (!input || !Array.isArray(input.reviews)) return 'Μη έγκυρα δεδομένα.';

  const rating = text(input.rating, 10);
  const count = text(input.count, 10);
  if (!rating || !count) return 'Συμπληρώστε βαθμολογία και πλήθος κριτικών.';

  const seen = new Set<string>();
  const reviews: Review[] = [];
  for (const raw of input.reviews as Record<string, unknown>[]) {
    const name = text(raw?.name, 120);
    const body = text(raw?.text, 6000);
    const stars = Math.round(Number(raw?.stars));
    let id = text(raw?.id, 60);
    if (!name || !body) return 'Κάθε αξιολόγηση χρειάζεται όνομα και κείμενο.';
    if (!(stars >= 1 && stars <= 5)) return 'Τα αστέρια πρέπει να είναι από 1 έως 5.';
    if (!id || seen.has(id)) id = `r-${Date.now().toString(36)}-${reviews.length}`;
    seen.add(id);
    reviews.push({ id, name, stars, text: body });
  }
  return { rating, count, reviews };
}

export async function GET() {
  if (!isAdmin()) return unauthorized();
  return NextResponse.json(await getReviewsContent());
}

export async function PUT(request: Request) {
  if (!isAdmin()) return unauthorized();
  const parsed = parse(await request.json().catch(() => null));
  if (typeof parsed === 'string') return NextResponse.json({ error: parsed }, { status: 400 });

  await saveReviewsContent(parsed);
  revalidatePath('/', 'layout');
  return NextResponse.json(parsed);
}
