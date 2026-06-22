'use client';
import Image from 'next/image';
import Link from 'next/link';
import { prosopoTreatments, somaTreatments } from '@/data/treatments';

const popularSlugs = [
  'fractional-laser-co2',
  'bacio',
  'polynucleotides',
  'botox',
  'barbie-botox',
  'aqualyx-michelangelo',
];

const allTreatments = [...prosopoTreatments, ...somaTreatments];

const treatments = popularSlugs
  .map((slug) => allTreatments.find((item) => item.slug === slug))
  .filter((item): item is (typeof allTreatments)[number] => Boolean(item))
  .map((treatment) => ({
    ...treatment,
    image: treatment.thumb ?? treatment.heroImage,
    href: `/el/ypiresies/${treatment.category}/${treatment.slug}/`,
  }));

export default function PopularTreatments() {
  return (
    <div
      className="ad-pop"
      style={{
        width: '100%',
        minHeight: '1013px',
        position: 'relative',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '60px 24px',
      }}
    >

      <div style={{ maxWidth: '1280px', width: '100%', position: 'relative', zIndex: 1 }}>
        <h2
          className="ad-pop-title"
          style={{
            fontFamily: 'HarmoniaSans, sans-serif',
            fontSize: '40px',
            fontWeight: 700,
            color: 'rgb(110, 90, 51)',
            marginBottom: '48px',
            textAlign: 'center',
          }}
        >
          Οι πιο δημοφιλείς θεραπείες
        </h2>

        <div
          className="ad-pop-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
          }}
        >
          {treatments.map((treatment) => (
            <Link
              key={treatment.name}
              href={treatment.href}
              style={{
                display: 'flex',
                flexDirection: 'column',
                textDecoration: 'none',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 2px 12px rgba(0,0,0,0.12)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                backgroundColor: '#fff',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.18)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.12)';
              }}
            >
              <div style={{ width: '100%', height: '300px', overflow: 'hidden', position: 'relative' }}>
                <Image
                  src={treatment.image}
                  alt={treatment.name}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
              </div>
              <div
                style={{
                  padding: '20px 24px',
                  backgroundColor: '#fff',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'HarmoniaSans, sans-serif',
                    fontSize: '16px',
                    fontWeight: 500,
                    color: 'rgb(110, 90, 51)',
                    textAlign: 'center',
                  }}
                >
                  {treatment.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
