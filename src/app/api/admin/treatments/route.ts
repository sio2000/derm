import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { isAdmin } from '@/lib/admin/auth';
import {
  deleteTreatment,
  getAdminTreatments,
  restoreTreatment,
  saveTreatment,
} from '@/lib/content/treatments';
import { TREATMENT_GROUPS, type TreatmentGroup } from '@/lib/content/types';
import type { MediaItem, TherapySection, Treatment } from '@/data/treatments';

export const dynamic = 'force-dynamic';

const unauthorized = () => NextResponse.json({ error: 'Απαιτείται σύνδεση.' }, { status: 401 });
const bad = (error: string) => NextResponse.json({ error }, { status: 400 });

const text = (value: unknown, max: number) => (typeof value === 'string' ? value.trim().slice(0, max) : '');
const lines = (value: unknown, max: number) =>
  Array.isArray(value) ? value.map((v) => text(v, max)).filter(Boolean) : [];

// Images are served from the site itself (next/image only allows local paths).
const localPath = (value: unknown) => {
  const path = text(value, 300);
  return path.startsWith('/') && !path.startsWith('//') ? path : '';
};

const media = (value: unknown): MediaItem[] | undefined => {
  if (!Array.isArray(value)) return undefined;
  const items = (value as Record<string, unknown>[])
    .map((m): MediaItem | null => {
      const src = localPath(m?.src);
      if (!src || (m?.type !== 'image' && m?.type !== 'video')) return null;
      return {
        type: m.type,
        src,
        ...(localPath(m.poster) ? { poster: localPath(m.poster) } : {}),
        ...(text(m.alt, 200) ? { alt: text(m.alt, 200) } : {}),
      };
    })
    .filter((m): m is MediaItem => m !== null);
  return items.length ? items : undefined;
};

function parse(raw: unknown): Treatment | string {
  const input = raw as Record<string, unknown> | null;
  if (!input) return 'Μη έγκυρα δεδομένα.';

  const slug = text(input.slug, 80).toLowerCase();
  const name = text(input.name, 160);
  const category = input.category as TreatmentGroup;
  const heroImage = localPath(input.heroImage);
  const thumb = localPath(input.thumb);

  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) return 'Το slug δέχεται μόνο λατινικά πεζά, αριθμούς και παύλες.';
  if (!name) return 'Συμπληρώστε όνομα θεραπείας.';
  if (!TREATMENT_GROUPS.includes(category)) return 'Επιλέξτε κατηγορία.';
  if (!heroImage) return 'Η κύρια εικόνα πρέπει να είναι διαδρομή του site, π.χ. /images/botox.png';

  const sections: TherapySection[] = (Array.isArray(input.sections) ? input.sections : [])
    .map((s: Record<string, unknown>): TherapySection => {
      const sectionMedia = media(s?.media);
      return {
        heading: text(s?.heading, 200),
        body: lines(s?.body, 5000),
        ...(sectionMedia ? { media: sectionMedia } : {}),
        ...(text(s?.anchor, 80) ? { anchor: text(s?.anchor, 80) } : {}),
        ...(s?.tint === true ? { tint: true } : {}),
      };
    })
    .filter((s: TherapySection) => s.heading || s.body.length);

  const toc = (Array.isArray(input.toc) ? (input.toc as Record<string, unknown>[]) : [])
    .map((t) => ({ label: text(t?.label, 120), anchor: text(t?.anchor, 80) }))
    .filter((t) => t.label && t.anchor);
  const treatmentMedia = media(input.media);

  return {
    slug,
    name,
    category,
    tagline: text(input.tagline, 400),
    description: text(input.description, 3000),
    heroImage,
    ...(thumb ? { thumb } : {}),
    sections,
    bullets: lines(input.bullets, 300),
    ...(treatmentMedia ? { media: treatmentMedia } : {}),
    ...(toc.length ? { toc } : {}),
    ...(input.hidden === true ? { hidden: true } : {}),
  };
}

export async function GET() {
  if (!isAdmin()) return unauthorized();
  return NextResponse.json({ treatments: await getAdminTreatments() });
}

export async function PUT(request: Request) {
  if (!isAdmin()) return unauthorized();
  const body = (await request.json().catch(() => null)) as { treatment?: unknown; originalKey?: unknown } | null;
  const parsed = parse(body?.treatment);
  if (typeof parsed === 'string') return bad(parsed);

  try {
    await saveTreatment(parsed, text(body?.originalKey, 200) || undefined);
  } catch (error) {
    return bad(error instanceof Error ? error.message : 'Η αποθήκευση απέτυχε.');
  }
  revalidatePath('/', 'layout');
  return NextResponse.json({ treatments: await getAdminTreatments() });
}

// DELETE removes a treatment; with `restore: true` it brings a deleted one back.
export async function DELETE(request: Request) {
  if (!isAdmin()) return unauthorized();
  const body = (await request.json().catch(() => null)) as { key?: unknown; restore?: unknown } | null;
  const key = text(body?.key, 200);
  if (!key) return bad('Λείπει η θεραπεία.');

  if (body?.restore === true) await restoreTreatment(key);
  else await deleteTreatment(key);
  revalidatePath('/', 'layout');
  return NextResponse.json({ treatments: await getAdminTreatments() });
}
