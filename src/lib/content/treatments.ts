import {
  allProsopoTreatments,
  somaTreatments as baseSoma,
  klinikiTreatments as baseKliniki,
  type Treatment,
} from '@/data/treatments';
import { readContent, writeContent } from './storage';
import type { TreatmentGroup } from './types';

// Admin edits are stored as a diff on top of the treatments bundled with the
// site: `upserts` replaces or adds a treatment, `deleted` removes a bundled one.
interface TreatmentOverrides {
  upserts: Record<string, Treatment>;
  deleted: string[];
}

export type TreatmentStatus = 'original' | 'edited' | 'new' | 'deleted';
export interface AdminTreatment extends Treatment {
  status: TreatmentStatus;
}

const KEY = 'treatments';
const keyOf = (t: Pick<Treatment, 'category' | 'slug'>) => `${t.category}/${t.slug}`;
const baseTreatments = (): Treatment[] => [...allProsopoTreatments, ...baseSoma, ...baseKliniki];

async function getOverrides(): Promise<TreatmentOverrides> {
  const stored = await readContent<TreatmentOverrides>(KEY);
  return { upserts: { ...(stored?.upserts ?? {}) }, deleted: [...(stored?.deleted ?? [])] };
}

/** Every treatment including hidden and deleted ones, for the admin panel. */
export async function getAdminTreatments(): Promise<AdminTreatment[]> {
  const { upserts, deleted } = await getOverrides();
  const base = baseTreatments();
  const baseKeys = new Set(base.map(keyOf));
  const merged: AdminTreatment[] = base.map((t) => {
    const key = keyOf(t);
    if (deleted.includes(key)) return { ...t, status: 'deleted' };
    return upserts[key] ? { ...upserts[key], status: 'edited' } : { ...t, status: 'original' };
  });
  const added: AdminTreatment[] = Object.entries(upserts)
    .filter(([key]) => !baseKeys.has(key))
    .map(([, t]) => ({ ...t, status: 'new' }));
  return [...merged, ...added];
}

/** Treatments visible on the public site for one category. */
export async function getTreatments(group: TreatmentGroup): Promise<Treatment[]> {
  const all = await getAdminTreatments();
  return all
    .filter((t) => t.category === group && t.status !== 'deleted' && !t.hidden)
    .map(({ status: _status, ...t }) => t);
}

export async function getTreatment(group: TreatmentGroup, slug: string): Promise<Treatment | undefined> {
  return (await getTreatments(group)).find((t) => t.slug === slug);
}

/** Creates or updates a treatment. `originalKey` is set when an existing one is edited. */
export async function saveTreatment(treatment: Treatment, originalKey?: string): Promise<void> {
  const overrides = await getOverrides();
  const key = keyOf(treatment);
  const baseKeys = new Set(baseTreatments().map(keyOf));

  if (originalKey !== key) {
    const taken = (await getAdminTreatments()).some((t) => keyOf(t) === key && t.status !== 'deleted');
    if (taken) throw new Error('Υπάρχει ήδη θεραπεία με αυτό το slug σε αυτή την κατηγορία.');
    // Slug or category changed: retire the old address.
    if (originalKey) {
      delete overrides.upserts[originalKey];
      if (baseKeys.has(originalKey) && !overrides.deleted.includes(originalKey)) {
        overrides.deleted.push(originalKey);
      }
    }
  }

  overrides.upserts[key] = treatment;
  overrides.deleted = overrides.deleted.filter((k) => k !== key);
  await writeContent(KEY, overrides);
}

export async function deleteTreatment(key: string): Promise<void> {
  const overrides = await getOverrides();
  delete overrides.upserts[key];
  const isBase = baseTreatments().some((t) => keyOf(t) === key);
  if (isBase && !overrides.deleted.includes(key)) overrides.deleted.push(key);
  await writeContent(KEY, overrides);
}

/** Brings back a deleted bundled treatment in its original form. */
export async function restoreTreatment(key: string): Promise<void> {
  const overrides = await getOverrides();
  overrides.deleted = overrides.deleted.filter((k) => k !== key);
  await writeContent(KEY, overrides);
}
