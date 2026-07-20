import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TreatmentCTA from '@/components/TreatmentCTA';
import TreatmentContent from '@/components/TreatmentContent';
import { somaTreatments } from '@/data/treatments';

export async function generateStaticParams() {
  return somaTreatments.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const treatment = somaTreatments.find((t) => t.slug === params.slug);
  if (!treatment) return {};
  return {
    title: `${treatment.name} | Θεραπείες Σώματος | Advanced Derma`,
    description: treatment.description.slice(0, 160),
  };
}

export default function SomaTreatmentPage({ params }: { params: { slug: string } }) {
  const treatment = somaTreatments.find((t) => t.slug === params.slug);
  if (!treatment) notFound();

  return (
    <>
      <Navbar />

      {/* Hero — bright treatment image at the start of the page */}
      <section
        className="derma-thero"
        style={{
          width: '100%',
          backgroundColor: 'rgb(244, 238, 224)',
          marginTop: '135px',
          overflow: 'hidden',
        }}
      >
        <div
          className="derma-thero-inner"
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'row-reverse',
            alignItems: 'center',
            gap: '48px',
            padding: '56px 64px',
            minHeight: '420px',
          }}
        >
          <div
            className="derma-thero-img"
            style={{
              flex: '0 0 46%',
              maxWidth: '46%',
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0 8px 28px rgba(110, 90, 51, 0.18)',
              lineHeight: 0,
            }}
          >
            {treatment.slug === 'riziki-apotrixosi' ? (
              <video
                src="/videos/riziki.mp4"
                autoPlay
                controls
                loop
                muted
                playsInline
                preload="metadata"
                style={{ display: 'block', width: '100%', height: 'auto' }}
              />
            ) : (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={treatment.heroImage}
                alt={treatment.name}
                style={{ display: 'block', width: '100%', height: 'auto' }}
              />
            )}
          </div>
          <div className="derma-thero-text" style={{ flex: 1 }}>
            <h1
              style={{
                fontFamily: 'HarmoniaSans, sans-serif',
                fontSize: 'clamp(30px, 4vw, 48px)',
                fontWeight: 700,
                color: 'rgb(110, 90, 51)',
                lineHeight: 1.15,
                margin: 0,
              }}
            >
              {treatment.name}
            </h1>
            <p
              style={{
                fontFamily: 'HarmoniaSans, sans-serif',
                fontSize: '16px',
                color: '#5a4a30',
                lineHeight: 1.7,
                margin: '20px 0 28px',
                maxWidth: '520px',
              }}
            >
              {treatment.description}
            </p>
            <Link
              href="/el/booking-request/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'rgb(203, 179, 121)',
                color: '#000',
                fontFamily: 'HarmoniaSans, sans-serif',
                fontSize: '16px',
                fontWeight: 500,
                padding: '12px 24px',
                borderRadius: '4px',
                textDecoration: 'none',
              }}
            >
              Κλείστε ραντεβού
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '20px 24px 0',
          display: 'flex',
          gap: '8px',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        {[
          { label: 'Αρχική', href: '/' },
          { label: 'Υπηρεσίες', href: '/el/ypiresies/soma/' },
          { label: 'Θεραπείες Σώματος', href: '/el/ypiresies/soma/' },
          { label: treatment.name, href: null },
        ].map((crumb, idx, arr) => (
          <span key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {crumb.href ? (
              <Link
                href={crumb.href}
                style={{
                  fontFamily: 'HarmoniaSans, sans-serif',
                  fontSize: '16px',
                  color: 'rgb(110, 90, 51)',
                  textDecoration: 'none',
                  opacity: 0.75,
                }}
              >
                {crumb.label}
              </Link>
            ) : (
              <span
                style={{
                  fontFamily: 'HarmoniaSans, sans-serif',
                  fontSize: '16px',
                  color: 'rgb(110, 90, 51)',
                  fontWeight: 600,
                }}
              >
                {crumb.label}
              </span>
            )}
            {idx < arr.length - 1 && (
              <span style={{ color: 'rgba(110, 90, 51,0.4)', fontSize: '16px' }}>›</span>
            )}
          </span>
        ))}
      </div>

      {/* Content — shared renderer (inline media, two-column bullet lists) */}
      <TreatmentContent treatment={treatment} />

      <TreatmentCTA />

      <Footer />
    </>
  );
}
