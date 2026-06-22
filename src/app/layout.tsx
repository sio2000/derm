import type { Metadata, Viewport } from 'next';
import './globals.css';
import LoadingScreen from '@/components/LoadingScreen';
import LightboxProvider from '@/components/LightboxProvider';
import { SITE_URL, SITE_NAME } from '@/lib/site';

const SITE_TITLE = 'Advanced Derma | Δερματολογία & Αισθητική Ιατρική — Δρ. Χρυσούλα Ζήσιμου';
const SITE_DESCRIPTION =
  'Advanced Derma — Δερματολογία και αισθητική ιατρική με τη Δρ. Χρυσούλα Ζήσιμου. Εξατομικευμένες θεραπείες προσώπου & σώματος, Laser Hair Removal, ενέσιμα και κλινική δερματολογία σε Αθήνα (Ζωγράφου) και Πειραιά.';
const LOGO = '/images/newlogo.png';
const OG_IMAGE = {
  // Absolute URL (built from SITE_URL) so the share image always resolves to the
  // production domain — relative paths can fall back to the dev host and won't
  // render when the link is shared on social platforms.
  url: `${SITE_URL}${LOGO}`,
  width: 1597,
  height: 985,
  alt: 'Advanced Derma — Δερματολογία & Αισθητική Ιατρική, Δρ. Χρυσούλα Ζήσιμου',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  '@id': `${SITE_URL}/#clinic`,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  logo: `${SITE_URL}${LOGO}`,
  image: `${SITE_URL}${LOGO}`,
  medicalSpecialty: 'Dermatology',
  priceRange: '€€',
  currenciesAccepted: 'EUR',
  email: 'advaderma@gmail.com',
  telephone: '+30 697 510 5858',
  areaServed: ['Αθήνα', 'Ζωγράφου', 'Πειραιάς', 'Αττική'],
  founder: {
    '@type': 'Physician',
    name: 'Δρ. Χρυσούλα Ζήσιμου',
    medicalSpecialty: 'Dermatology',
    jobTitle: 'Δερματολόγος – Αφροδισιολόγος',
  },
  location: [
    {
      '@type': 'MedicalClinic',
      name: 'Advanced Derma Αθήνα',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Στρατάρχου Παπάγου Αλεξάνδρου 50, 2ος όροφος',
        addressLocality: 'Ζωγράφου',
        postalCode: '157 71',
        addressRegion: 'Αττική',
        addressCountry: 'GR',
      },
      telephone: '+30 697 510 5858',
    },
    {
      '@type': 'MedicalClinic',
      name: 'Advanced Derma Πειραιάς',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Γρηγορίου Λαμπράκη 109, 1ος όροφος',
        addressLocality: 'Πειραιάς',
        postalCode: '185 34',
        addressRegion: 'Αττική',
        addressCountry: 'GR',
      },
      telephone: '+30 693 671 7377',
    },
  ],
  openingHours: ['Mo-Fr 11:00-20:00', 'Sa 10:00-18:00'],
  sameAs: [
    'https://www.facebook.com/advancedermaa/',
    'https://www.instagram.com/advanced_derma/',
    'https://www.instagram.com/advanced_laser_/',
    'https://www.instagram.com/advanced_peiraias/',
    'https://www.instagram.com/chrysoula_zisimou/',
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // Plain default title; section pages already provide their own full titles
  // (e.g. "Θεραπείες Προσώπου | Advanced Derma"), so no template is used here to
  // avoid a doubled "… | Advanced Derma · Advanced Derma" suffix.
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: 'Δρ. Χρυσούλα Ζήσιμου' }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: 'health',
  keywords: [
    'Advanced Derma',
    'δερματολόγος Αθήνα',
    'δερματολόγος Πειραιάς',
    'δερματολόγος Ζωγράφου',
    'Δρ. Χρυσούλα Ζήσιμου',
    'αισθητική ιατρική',
    'αισθητική δερματολογία',
    'κλινική δερματολογία',
    'θεραπείες προσώπου',
    'θεραπείες σώματος',
    'Botox',
    'υαλουρονικό οξύ',
    'fillers',
    'μεσοθεραπεία',
    'laser αποτρίχωση',
    'fractional laser',
    'θεραπεία ακμής',
    'πανάδες',
    'exosomes',
  ],
  formatDetection: { telephone: true, email: true, address: true },
  icons: {
    icon: LOGO,
    shortcut: LOGO,
    apple: LOGO,
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    type: 'website',
    locale: 'el_GR',
    siteName: SITE_NAME,
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#6E5A33',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="el">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <LoadingScreen />
        <LightboxProvider />
        {children}
      </body>
    </html>
  );
}
