import type { MetadataRoute } from 'next';

// Served at /manifest.webmanifest
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Advanced Derma | Δερματολογία & Αισθητική Ιατρική',
    short_name: 'Advanced Derma',
    description:
      'Δερματολογία & αισθητική ιατρική με τη Δρ. Χρυσούλα Ζήσιμου σε Αθήνα (Ζωγράφου) και Πειραιά.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#6E5A33',
    lang: 'el',
    icons: [
      {
        src: '/images/newlogo.png',
        sizes: '1597x985',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  };
}
