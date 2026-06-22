import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <>
      {/* Hero Carousel */}
      <div
        className="ad-hero"
        style={{
          position: 'relative',
          width: '100%',
          height: '585px',
          overflow: 'hidden',
          backgroundColor: '#fff',
          marginTop: '135px',
        }}
      >
        <div
          className="ad-hero-inner"
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            height: '100%',
            padding: '32px',
            display: 'flex',
            flexDirection: 'row-reverse',
            alignItems: 'center',
            gap: '32px',
          }}
        >
          {/* Right: Image */}
          <div
            className="ad-hero-imgwrap"
            style={{
              flex: '0 0 auto',
              width: '503px',
              height: '479px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              className="ad-hero-img"
              src="/images/treatment-baby-botox.png"
              alt="Δερματολογικά Ιατρεία"
              width={648}
              height={585}
              priority
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
          </div>

          {/* Left: Text */}
          <div
            className="ad-hero-text"
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              gap: '16px',
            }}
          >
            <h2
              className="ad-hero-title"
              style={{
                fontFamily: 'HarmoniaSans, sans-serif',
                fontSize: '52px',
                fontWeight: 700,
                color: 'rgb(110, 90, 51)',
                lineHeight: 1.15,
                margin: 0,
              }}
            >
              Η επιστήμη της δερματολογίας
              <br />
              συναντά την αισθητική αρμονία.
            </h2>
            <p
              style={{
                fontFamily: 'HarmoniaSans, sans-serif',
                fontSize: '16px',
                fontWeight: 400,
                color: '#555',
                lineHeight: 1.6,
                maxWidth: '520px',
              }}
            >
              Στο Advanced Derma προσφέρουμε ιατρικά εξατομικευμένες θεραπείες που αναδεικνύουν το καλύτερο αποτέλεσμα για την επιδερμίδα σας, με απόλυτη ασφάλεια, φυσική αισθητική και σεβασμό στη μοναδικότητα κάθε προσώπου. Με 20 χρόνια εμπειρίας και εξειδίκευσης στην αντιμετώπιση και θεραπεία της <strong style={{ fontWeight: 800, color: '#000' }}>Ακμής</strong>, μέσα από συνδυαστικά πρωτόκολλα που εφαρμόζονται μόνο στις κλινικές μας.
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
                padding: '10px 20px',
                borderRadius: '4px',
                textDecoration: 'none',
                marginTop: '8px',
                transition: 'background-color 0.2s',
              }}
            >
              Κλείστε το ραντεβού σας
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Feature bar */}
      <div
        className="ad-featbar"
        style={{
          width: '100%',
          backgroundColor: '#fff',
          height: '100px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0',
        }}
      >
        <div
          className="ad-featbar-inner"
          style={{
            maxWidth: '1280px',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {[
            { icon: '🔬', label: 'Εξατομικευμένη Δερματολογία' },
            { icon: '⚕️', label: 'Αισθητική Ιατρική Ακριβείας' },
            { icon: '🌿', label: '20+ Χρόνια Εμπειρίας' },
          ].map((item, i) => (
            <div
              key={i}
              className="ad-featbar-item"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '0 48px',
                borderRight: i < 2 ? '1px solid rgba(110, 90, 51,0.2)' : 'none',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'rgb(110, 90, 51)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  {i === 0 && <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>}
                  {i === 1 && <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>}
                  {i === 2 && <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>}
                </svg>
              </div>
              <span
                style={{
                  fontFamily: 'HarmoniaSans, sans-serif',
                  fontSize: '16px',
                  fontWeight: 500,
                  color: 'rgb(110, 90, 51)',
                  whiteSpace: 'nowrap',
                }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <hr style={{ border: 'none', borderTop: '1px solid rgba(110, 90, 51,0.12)', margin: 0 }} />
    </>
  );
}
