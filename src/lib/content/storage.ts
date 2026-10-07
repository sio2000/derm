import { promises as fs } from 'fs';
import path from 'path';

// Persistence for content edited from the admin panel (server only).
// On Netlify the data lives in a site-wide Netlify Blobs store (survives deploys).
// Anywhere else (local dev / local build) it falls back to JSON files in `.data/`.

const STORE_NAME = 'site-content';
const LOCAL_DIR = path.join(process.cwd(), '.data');
const onNetlify = () => Boolean(process.env.NETLIFY_BLOBS_CONTEXT || process.env.NETLIFY);

async function blobStore() {
  const { getStore } = await import('@netlify/blobs');
  return getStore({ name: STORE_NAME, consistency: 'strong' });
}

// Always read fresh: an edit must be visible on the very next page load, on every
// server instance, so nothing is kept in memory between requests.
async function load(key: string): Promise<unknown> {
  try {
    if (onNetlify()) {
      return (await (await blobStore()).get(key, { type: 'json' })) ?? null;
    }
    return JSON.parse(await fs.readFile(path.join(LOCAL_DIR, `${key}.json`), 'utf8'));
  } catch {
    // Missing key/file, or the store is unreachable (e.g. during the build):
    // callers fall back to the content bundled with the site.
    return null;
  }
}

export async function readContent<T>(key: string): Promise<T | null> {
  return (await load(key)) as T | null;
}

export async function writeContent<T>(key: string, value: T): Promise<void> {
  if (onNetlify()) {
    await (await blobStore()).setJSON(key, value);
  } else {
    await fs.mkdir(LOCAL_DIR, { recursive: true });
    await fs.writeFile(path.join(LOCAL_DIR, `${key}.json`), JSON.stringify(value, null, 2), 'utf8');
  }
}
