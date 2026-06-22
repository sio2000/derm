'use client';
import Link from 'next/link';

const clinicCards = [
  {
    image: '/images/clinic-athens.jpg',
    href: '/el/dermatologiko-iatreio/athina/',
  },
  {
    image: '/images/treatments-bg.webp',
    isCenter: true,
    title: 'Τα Ιατρεία μας',
    text: 'Επισκεφθείτε το Advanced Derma σε Αθήνα (Ζωγράφου) και Πειραιά και επιλέξτε την τοποθεσία που σας εξυπηρετεί.',
    href: '/el/dermatologika-iatreia/',
  },
  {
    image: '/images/clinic-piraeus.jpg',
    href: '/el/dermatologiko-iatreio/peiraias/',
  },
];

export default function FindClinicSection() {
  return (
    <div
      style={{
        width: '100%',
        minHeight: 'auto',
        backgroundColor: '#fff',
        padding: 'clamp(24px, 4vw, 40px) 0',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 clamp(16px, 3vw, 24px)',
        }}
      >
        <h2
          style={{
            fontFamily: 'HarmoniaSans, sans-serif',
            fontSize: 'clamp(22px, 4vw, 40px)',
            fontWeight: 700,
            color: 'rgb(110, 90, 51)',
            textAlign: 'center',
            marginBottom: 'clamp(24px, 4vw, 32px)',
          }}
        >
          Βρείτε το Δερματολογικό Ιατρείο που σας εξυπηρετεί
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(160px, 100%, 350px), 1fr))',
            gap: 'clamp(12px, 2vw, 16px)',
          }}
        >
          {clinicCards.map((card, i) => (
            <Link
              key={i}
              href={card.href}
              style={{
                minHeight: 'clamp(220px, 50vw, 300px)',
                backgroundImage: `url('${card.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: card.isCenter ? 'center' : 'flex-end',
                alignItems: 'flex-start',
                padding: 'clamp(16px, 3vw, 24px)',
                textDecoration: 'none',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              {card.isCenter && (
                <>
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundColor: 'rgba(110, 90, 51,0.55)',
                      borderRadius: '8px',
                    }}
                  />
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <h3
                      style={{
                        fontFamily: 'HarmoniaSans, sans-serif',
                        fontSize: 'clamp(24px, 5vw, 40px)',
                        fontWeight: 700,
                        color: '#fff',
                        marginBottom: 'clamp(8px, 2vw, 12px)',
                      }}
                    >
                      {card.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'HarmoniaSans, sans-serif',
                        fontSize: 'clamp(13px, 2vw, 16px)',
                        color: 'rgba(255,255,255,0.9)',
                        lineHeight: 1.5,
                        marginBottom: 'clamp(12px, 2vw, 16px)',
                      }}
                    >
                      {card.text}
                    </p>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        backgroundColor: 'rgb(203, 179, 121)',
                        color: '#000',
                        fontFamily: 'HarmoniaSans, sans-serif',
                        fontSize: 'clamp(12px, 2vw, 16px)',
                        fontWeight: 500,
                        padding: 'clamp(6px, 1vw, 8px) clamp(12px, 2vw, 16px)',
                        borderRadius: '4px',
                        minHeight: '44px',
                      }}
                    >
                      Δείτε τα ιατρεία
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                      </svg>
                    </span>
                  </div>
                </>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
