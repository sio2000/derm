import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { clinics } from '@/data/treatments';

export const metadata = {
  title: 'Τα Ιατρεία μας | Advanced Derma',
  description: 'Βρείτε το ιατρείο Advanced Derma που σας εξυπηρετεί. Δερματολογικά ιατρεία σε Αθήνα (Ζωγράφου) και Πειραιά, υπό τη διεύθυνση της Δρ. Χρυσούλας Ζήσιμου.',
};

export default function ClinicsPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          height: '360px',
          backgroundColor: 'rgb(110, 90, 51)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '135px',
        }}
      >
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 24px' }}>
          <h1
            style={{
              fontFamily: 'HarmoniaSans, sans-serif',
              fontSize: 'clamp(28px, 4vw, 52px)',
              fontWeight: 700,
              color: '#fff',
              marginBottom: '16px',
            }}
          >
            Δερματολογικά Ιατρεία Advanced Derma
          </h1>
          <p
            style={{
              fontFamily: 'HarmoniaSans, sans-serif',
              fontSize: '16px',
              color: 'rgba(255,255,255,0.9)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Βρείτε το κοντινότερο ιατρείο και κλείστε ραντεβού σήμερα
          </p>
        </div>
      </section>

      {/* Clinics Grid */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 24px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '32px',
          }}
        >
          {clinics.map((clinic) => (
            <div
              key={clinic.slug}
              style={{ textDecoration: 'none', cursor: 'default' }}
            >
              <div
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 12px rgba(110, 90, 51,0.1)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  backgroundColor: '#fff',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ position: 'relative', overflow: 'hidden', height: '180px' }}>
                  <iframe
                    title={`Χάρτης — ${clinic.name}`}
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(`${clinic.name}, ${clinic.address}`)}&t=m&z=17&output=embed`}
                    style={{ width: '100%', height: '100%', border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div style={{ padding: '24px', flex: 1 }}>
                  <div
                    style={{
                      display: 'inline-block',
                      backgroundColor: 'rgb(244, 238, 224)',
                      color: 'rgb(110, 90, 51)',
                      fontFamily: 'HarmoniaSans, sans-serif',
                      fontSize: '16px',
                      fontWeight: 600,
                      padding: '4px 10px',
                      borderRadius: '20px',
                      marginBottom: '12px',
                    }}
                  >
                    {clinic.area}
                  </div>
                  <h2
                    style={{
                      fontFamily: 'HarmoniaSans, sans-serif',
                      fontSize: '16px',
                      fontWeight: 700,
                      color: 'rgb(110, 90, 51)',
                      marginBottom: '8px',
                    }}
                  >
                    {clinic.name}
                  </h2>
                  <p
                    style={{
                      fontFamily: 'HarmoniaSans, sans-serif',
                      fontSize: '16px',
                      color: '#555',
                      marginBottom: '6px',
                    }}
                  >
                    {clinic.address}
                  </p>
                  <a
                    href={`tel:${clinic.phone.replace(/\s+/g, '')}`}
                    style={{
                      display: 'inline-block',
                      marginBottom: '12px',
                      fontFamily: 'HarmoniaSans, sans-serif',
                      fontSize: '16px',
                      color: 'rgb(110, 90, 51)',
                      fontWeight: 500,
                      textDecoration: 'none',
                    }}
                  >
                    {clinic.phone}
                  </a>
                  <Link
                    href={`/el/dermatologiko-iatreio/${clinic.slug}/`}
                    style={{
                      display: 'block',
                      marginTop: '12px',
                      color: 'rgb(110, 90, 51)',
                      fontFamily: 'HarmoniaSans, sans-serif',
                      fontSize: '16px',
                      fontWeight: 600,
                      textDecoration: 'none',
                    }}
                  >
                    Δείτε το ιατρείο &rarr;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>



      <Footer />
    </>
  );
}
