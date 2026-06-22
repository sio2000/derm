import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { clinics } from '@/data/treatments';

export async function generateStaticParams() {
  return clinics.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const clinic = clinics.find((c) => c.slug === params.slug);
  if (!clinic) return {};
  return {
    title: `${clinic.name} | Δερματολογικό Ιατρείο | Advanced Derma`,
    description: `Το δερματολογικό ιατρείο Advanced Derma στην περιοχή ${clinic.area}. Διεύθυνση: ${clinic.address}. Τηλέφωνο: ${clinic.phone}.`,
  };
}

export default function ClinicDetailPage({ params }: { params: { slug: string } }) {
  const clinic = clinics.find((c) => c.slug === params.slug);
  if (!clinic) notFound();

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          height: '400px',
          backgroundColor: 'rgb(110, 90, 51)',
          display: 'flex',
          alignItems: 'flex-end',
          overflow: 'hidden',
          marginTop: '135px',
        }}
      >
        <Image
          src={clinic.image}
          alt={`Ιατρείο Advanced Derma — ${clinic.area}`}
          fill
          priority
          data-no-lightbox
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(110, 90, 51, 0.35) 0%, rgba(110, 90, 51, 0.85) 100%)',
          }}
        />
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            padding: '0 0 48px 64px',
          }}
        >
          <p
            style={{
              fontFamily: 'HarmoniaSans, sans-serif',
              fontSize: '16px',
              color: 'rgb(203, 179, 121)',
              fontWeight: 600,
              marginBottom: '8px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}
          >
            {clinic.area}
          </p>
          <h1
            style={{
              fontFamily: 'HarmoniaSans, sans-serif',
              fontSize: 'clamp(28px, 4vw, 52px)',
              fontWeight: 700,
              color: '#fff',
              lineHeight: 1.2,
            }}
          >
            {clinic.name}
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
          { label: 'Ιατρεία', href: '/el/dermatologika-iatreia/' },
          { label: clinic.name, href: null },
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
      <section style={{ maxWidth: '1000px', margin: '0 auto', padding: '48px 24px 80px' }}>
        <div
          className="ad-clinic-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '48px',
            alignItems: 'start',
          }}
        >
          {/* Info card */}
          <div
            style={{
              backgroundColor: 'rgb(244, 238, 224)',
              borderRadius: '12px',
              padding: '36px',
            }}
          >
            <h2
              style={{
                fontFamily: 'HarmoniaSans, sans-serif',
                fontSize: '40px',
                fontWeight: 700,
                color: 'rgb(110, 90, 51)',
                marginBottom: '24px',
              }}
            >
              Στοιχεία Ιατρείου
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <p
                  style={{
                    fontFamily: 'HarmoniaSans, sans-serif',
                    fontSize: '16px',
                    fontWeight: 700,
                    color: 'rgb(110, 90, 51)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    marginBottom: '4px',
                  }}
                >
                  Διεύθυνση
                </p>
                <p
                  style={{
                    fontFamily: 'HarmoniaSans, sans-serif',
                    fontSize: '16px',
                    color: '#333',
                  }}
                >
                  {clinic.address}
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontFamily: 'HarmoniaSans, sans-serif',
                    fontSize: '16px',
                    fontWeight: 700,
                    color: 'rgb(110, 90, 51)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    marginBottom: '4px',
                  }}
                >
                  Τηλέφωνο
                </p>
                <p
                  style={{
                    fontFamily: 'HarmoniaSans, sans-serif',
                    fontSize: '16px',
                    color: '#333',
                  }}
                >
                  {clinic.phone}
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontFamily: 'HarmoniaSans, sans-serif',
                    fontSize: '16px',
                    fontWeight: 700,
                    color: 'rgb(110, 90, 51)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    marginBottom: '4px',
                  }}
                >
                  Ωράριο
                </p>
                <p
                  style={{
                    fontFamily: 'HarmoniaSans, sans-serif',
                    fontSize: '16px',
                    color: '#333',
                  }}
                >
                  Δευτέρα – Παρασκευή: 11:00 – 20:00<br />
                  Σάββατο: 10:00 – 18:00
                </p>
              </div>
              <div
                style={{
                  marginTop: '8px',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  height: '230px',
                  boxShadow: '0 2px 10px rgba(110, 90, 51, 0.15)',
                }}
              >
                <iframe
                  title={`Χάρτης — ${clinic.name}`}
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(`${clinic.name}, ${clinic.address}`)}&t=m&z=17&output=embed`}
                  style={{ width: '100%', height: '100%', border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* CTA panel */}
          <div>
            <h2
              style={{
                fontFamily: 'HarmoniaSans, sans-serif',
                fontSize: '40px',
                fontWeight: 700,
                color: 'rgb(110, 90, 51)',
                marginBottom: '16px',
              }}
            >
              Κλείστε Ραντεβού στο {clinic.name}
            </h2>
            <p
              style={{
                fontFamily: 'HarmoniaSans, sans-serif',
                fontSize: '16px',
                lineHeight: 1.7,
                color: '#555',
                marginBottom: '32px',
              }}
            >
              Το ιατρείο μας διαθέτει εξειδικευμένους δερματολόγους και σύγχρονο εξοπλισμό για κάθε αισθητική ή κλινική ανάγκη. Επικοινωνήστε μαζί μας ή κλείστε ραντεβού online.
            </p>
            <Link
              href="/el/booking-request/"
              style={{
                display: 'inline-block',
                backgroundColor: 'rgb(203, 179, 121)',
                color: '#000',
                fontFamily: 'HarmoniaSans, sans-serif',
                fontSize: '16px',
                fontWeight: 600,
                padding: '14px 36px',
                borderRadius: '6px',
                textDecoration: 'none',
                marginBottom: '16px',
              }}
            >
              Κλείστε Ραντεβού Online
            </Link>
            <br />
            <a
              href={`tel:${clinic.phone.replace(/\s/g, '')}`}
              style={{
                display: 'inline-block',
                marginTop: '12px',
                color: 'rgb(110, 90, 51)',
                fontFamily: 'HarmoniaSans, sans-serif',
                fontSize: '16px',
                fontWeight: 600,
                textDecoration: 'none',
                borderBottom: '2px solid rgb(110, 90, 51)',
                paddingBottom: '2px',
              }}
            >
              {clinic.phone}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
