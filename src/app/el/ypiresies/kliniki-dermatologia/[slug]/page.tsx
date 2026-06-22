import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TreatmentCTA from '@/components/TreatmentCTA';
import TreatmentMedia from '@/components/TreatmentMedia';
import { klinikiTreatments } from '@/data/treatments';

export async function generateStaticParams() {
  return klinikiTreatments.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const treatment = klinikiTreatments.find((t) => t.slug === params.slug);
  if (!treatment) return {};
  return {
    title: `${treatment.name} | Κλινική Δερματολογία | Advanced Derma`,
    description: treatment.description.slice(0, 160),
  };
}

export default function KlinikiTreatmentPage({ params }: { params: { slug: string } }) {
  const treatment = klinikiTreatments.find((t) => t.slug === params.slug);
  if (!treatment) notFound();

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          height: '480px',
          backgroundColor: 'rgb(110, 90, 51)',
          overflow: 'hidden',
          marginTop: '135px',
          display: 'flex',
          alignItems: 'flex-end',
        }}
      >
        <Image
          src={treatment.heroImage}
          alt={treatment.name}
          fill
          style={{ objectFit: 'cover', opacity: 0.4 }}
          priority
        />
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            padding: '0 0 48px 64px',
            maxWidth: '800px',
          }}
        >
          <h1
            style={{
              fontFamily: 'HarmoniaSans, sans-serif',
              fontSize: 'clamp(28px, 4vw, 52px)',
              fontWeight: 700,
              color: '#fff',
              lineHeight: 1.2,
            }}
          >
            {treatment.name}
          </h1>
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
          { label: 'Υπηρεσίες', href: '/el/ypiresies/kliniki-dermatologia/' },
          { label: 'Κλινική Δερματολογία', href: '/el/ypiresies/kliniki-dermatologia/' },
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

      {/* Content */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 24px 80px' }}>
        {treatment.tagline && (
          <p
            style={{
              fontFamily: 'HarmoniaSans, sans-serif',
              fontSize: '16px',
              fontStyle: 'italic',
              color: 'rgb(147, 123, 76)',
              lineHeight: 1.5,
              marginBottom: '24px',
            }}
          >
            {treatment.tagline}
          </p>
        )}
        <p
          style={{
            fontFamily: 'HarmoniaSans, sans-serif',
            fontSize: '16px',
            lineHeight: 1.8,
            color: '#333',
            marginBottom: '32px',
          }}
        >
          {treatment.description}
        </p>

        {treatment.bullets && treatment.bullets.length > 0 && (
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: '0 0 40px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '12px 24px',
            }}
          >
            {treatment.bullets.map((b) => (
              <li
                key={b}
                style={{
                  display: 'flex',
                  gap: '10px',
                  alignItems: 'flex-start',
                  fontFamily: 'HarmoniaSans, sans-serif',
                  fontSize: '16px',
                  color: '#444',
                  lineHeight: 1.5,
                }}
              >
                <span style={{ flexShrink: 0, width: '7px', height: '7px', borderRadius: '50%', backgroundColor: 'rgb(203, 179, 121)', marginTop: '7px' }} />
                {b}
              </li>
            ))}
          </ul>
        )}

        {treatment.sections &&
          treatment.sections.map((sec) => (
            <div key={sec.heading} style={{ marginBottom: '36px' }}>
              <h2
                style={{
                  fontFamily: 'HarmoniaSans, sans-serif',
                  fontSize: '26px',
                  fontWeight: 700,
                  color: 'rgb(110, 90, 51)',
                  marginTop: '40px',
                  marginBottom: '14px',
                  lineHeight: 1.3,
                }}
              >
                {sec.heading}
              </h2>
              {sec.body.map((para, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: 'HarmoniaSans, sans-serif',
                    fontSize: '16px',
                    lineHeight: 1.8,
                    color: '#444',
                    marginBottom: '14px',
                  }}
                >
                  {para}
                </p>
              ))}
              {sec.media && sec.media.length > 0 && <TreatmentMedia media={sec.media} />}
            </div>
          ))}

        {treatment.media && <TreatmentMedia media={treatment.media} />}
      </section>

      <TreatmentCTA />

      <Footer />
    </>
  );
}
