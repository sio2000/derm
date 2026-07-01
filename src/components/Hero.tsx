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
              Στο Advanced Derma προσφέρουμε ιατρικά εξατομικευμένες θεραπείες που αναδεικνύουν το καλύτερο αποτέλεσμα για την επιδερμίδα σας, με απόλυτη ασφάλεια, φυσική αισθητική και σεβασμό στη μοναδικότητα κάθε προσώπου. Με 20 χρόνια εμπειρίας και εξειδίκευσης στην αντιμετώπιση και θεραπεία της <strong style={{ fontWeight: 800, color: 'rgb(110, 90, 51)' }}>Ακμής</strong>, μέσα από συνδυαστικά πρωτόκολλα που εφαρμόζονται μόνο στις κλινικές μας.
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
            { icon: '🔬', label: 'Επιστημονική Εξειδίκευση' },
            { icon: '⚕️', label: 'Τεχνολογία & Ιατρική Αξιοπιστία' },
            { icon: '🌿', label: 'Ολιστική Φροντίδα' },
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
