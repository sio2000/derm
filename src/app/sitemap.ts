import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';
import {
  prosopoTreatments,
  somaTreatments,
  klinikiTreatments,
  clinics,
} from '@/data/treatments';

// Served at /sitemap.xml
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const abs = (path: string) => `${SITE_URL}${path}`;

  const staticEntries: MetadataRoute.Sitemap = [
    { url: abs('/'), priority: 1.0, changeFrequency: 'weekly' },
    { url: abs('/el/ypiresies/prosopo/'), priority: 0.9, changeFrequency: 'monthly' },
    { url: abs('/el/ypiresies/soma/'), priority: 0.9, changeFrequency: 'monthly' },
    { url: abs('/el/ypiresies/kliniki-dermatologia/'), priority: 0.9, changeFrequency: 'monthly' },
    { url: abs('/el/about-us/'), priority: 0.7, changeFrequency: 'yearly' },
    { url: abs('/el/dermatologika-iatreia/'), priority: 0.8, changeFrequency: 'yearly' },
    { url: abs('/el/booking-request/'), priority: 0.8, changeFrequency: 'yearly' },
    { url: abs('/el/blog/'), priority: 0.6, changeFrequency: 'weekly' },
    { url: abs('/el/news/'), priority: 0.5, changeFrequency: 'monthly' },
    { url: abs('/el/mythoi-and-alitheies/'), priority: 0.5, changeFrequency: 'monthly' },
    { url: abs('/el/dilosi-aporritoy-prosopikon-dedomenon/'), priority: 0.2, changeFrequency: 'yearly' },
    { url: abs('/el/politiki-cookies/'), priority: 0.2, changeFrequency: 'yearly' },
  ].map((e) => ({ ...e, lastModified: now }));

  const treatmentEntries: MetadataRoute.Sitemap = [
    ...prosopoTreatments.map((t) => `/el/ypiresies/prosopo/${t.slug}/`),
    ...somaTreatments.map((t) => `/el/ypiresies/soma/${t.slug}/`),
    ...klinikiTreatments.map((t) => `/el/ypiresies/kliniki-dermatologia/${t.slug}/`),
  ].map((path) => ({ url: abs(path), lastModified: now, changeFrequency: 'monthly', priority: 0.7 }));

  const clinicEntries: MetadataRoute.Sitemap = clinics.map((c) => ({
    url: abs(`/el/dermatologiko-iatreio/${c.slug}/`),
    lastModified: now,
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  return [...staticEntries, ...treatmentEntries, ...clinicEntries];
}
