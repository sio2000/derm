import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';
import { clinics } from '@/data/treatments';
import { getTreatments } from '@/lib/content/treatments';

type Entry = MetadataRoute.Sitemap[number];

export const dynamic = 'force-dynamic';

// Served at /sitemap.xml
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [prosopoTreatments, somaTreatments, klinikiTreatments] = await Promise.all([
    getTreatments('prosopo'),
    getTreatments('soma'),
    getTreatments('kliniki-dermatologia'),
  ]);
  const now = new Date();
  const abs = (path: string) => `${SITE_URL}${path}`;

  const staticEntries: Entry[] = [
    { url: abs('/'), lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: abs('/el/ypiresies/prosopo/'), lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: abs('/el/ypiresies/soma/'), lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: abs('/el/ypiresies/kliniki-dermatologia/'), lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: abs('/el/about-us/'), lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
    { url: abs('/el/dermatologika-iatreia/'), lastModified: now, changeFrequency: 'yearly', priority: 0.8 },
    { url: abs('/el/booking-request/'), lastModified: now, changeFrequency: 'yearly', priority: 0.8 },
    { url: abs('/el/blog/'), lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
    { url: abs('/el/news/'), lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: abs('/el/mythoi-and-alitheies/'), lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: abs('/el/dilosi-aporritoy-prosopikon-dedomenon/'), lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    { url: abs('/el/politiki-cookies/'), lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
  ];

  const treatmentPaths = [
    ...prosopoTreatments.map((t) => `/el/ypiresies/prosopo/${t.slug}/`),
    ...somaTreatments.map((t) => `/el/ypiresies/soma/${t.slug}/`),
    ...klinikiTreatments.map((t) => `/el/ypiresies/kliniki-dermatologia/${t.slug}/`),
  ];
  const treatmentEntries: Entry[] = treatmentPaths.map((path): Entry => ({
    url: abs(path),
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const clinicEntries: Entry[] = clinics.map((c): Entry => ({
    url: abs(`/el/dermatologiko-iatreio/${c.slug}/`),
    lastModified: now,
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  return [...staticEntries, ...treatmentEntries, ...clinicEntries];
}
