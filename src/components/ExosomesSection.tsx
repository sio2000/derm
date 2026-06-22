'use client';

import { useCallback, useRef, useState } from 'react';
import Link from 'next/link';

// Viral Trend · 2026 — Exosomes. Ported from the original project and
// re-styled for the Advanced Derma gold/bronze brand. Video left, copy right.
const benefits = [
  { title: 'Λάμψη & ομοιομορφία', text: 'Φωτεινός, ξεκούραστος τόνος δέρματος.' },
  { title: 'Επανόρθωση & σύσφιξη', text: 'Διέγερση κολλαγόνου — αναζωογόνηση χωρίς όγκο.' },
  { title: 'Καθαρή υφή', text: 'Βελτίωση σε σημάδια ακμής, πόρους και θαμπάδα.' },
];

const tags = ['Βιο-σήματα', 'Λάμψη & Σύσφιξη', 'Zero downtime'];

export default function ExosomesSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      void v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  }, []);

  return (
    <section
      style={{
        width: '100%',
        background: 'linear-gradient(135deg, rgb(248, 244, 235) 0%, rgb(244, 238, 224) 100%)',
        padding: '80px 24px',
      }}
    >
      <div
        className="exo-grid"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '56px',
          alignItems: 'center',
        }}
      >
        {/* Video */}
        <div style={{ position: 'relative' }}>
          <span
            style={{
              position: 'absolute',
              top: '16px',
              left: '16px',
              zIndex: 2,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(110, 90, 51, 0.92)',
              color: 'rgb(232, 213, 154)',
              fontFamily: 'HarmoniaSans, sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              letterSpacing: '1.5px',
              padding: '7px 14px',
              borderRadius: '999px',
            }}
          >
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: 'rgb(232, 213, 154)' }} />
            VIRAL · 2026
          </span>

          <div
            style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 18px 50px rgba(110, 90, 51, 0.25)',
              border: '1px solid rgba(203, 179, 121, 0.4)',
              backgroundColor: '#000',
              aspectRatio: '4 / 5',
            }}
          >
            <video
              ref={videoRef}
              data-no-lightbox
              playsInline
              controls={playing}
              preload="metadata"
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              onEnded={() => setPlaying(false)}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            >
              <source src="/videos/exosomes.mp4" type="video/mp4" />
            </video>

            {!playing && (
              <button
                type="button"
                onClick={togglePlay}
                aria-label="Αναπαραγωγή βίντεο Exosomes"
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(180deg, rgba(110,90,51,0.15), rgba(110,90,51,0.45))',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                <span
                  style={{
                    width: '76px',
                    height: '76px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.9)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                  }}
                >
                  <span style={{ marginLeft: '5px', borderStyle: 'solid', borderWidth: '13px 0 13px 22px', borderColor: 'transparent transparent transparent rgb(110, 90, 51)' }} />
                </span>
              </button>
            )}
          </div>
        </div>

        {/* Copy */}
        <div>
          <p
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'HarmoniaSans, sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: 'rgb(147, 123, 76)',
              marginBottom: '14px',
            }}
          >
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'rgb(203, 179, 121)' }} />
            Viral Trend · 2026
          </p>
          <h2
            style={{
              fontFamily: 'HarmoniaSans, sans-serif',
              fontSize: '52px',
              fontWeight: 700,
              color: 'rgb(110, 90, 51)',
              lineHeight: 1.1,
              marginBottom: '8px',
            }}
          >
            Exosomes
          </h2>
          <p
            style={{
              fontFamily: 'HarmoniaSans, sans-serif',
              fontSize: '16px',
              color: 'rgb(147, 123, 76)',
              marginBottom: '20px',
            }}
          >
            Η νέα γενιά κυτταρικής αναγέννησης
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '22px' }}>
            {tags.map((t) => (
              <span
                key={t}
                style={{
                  fontFamily: 'HarmoniaSans, sans-serif',
                  fontSize: '16px',
                  fontWeight: 500,
                  color: 'rgb(110, 90, 51)',
                  backgroundColor: 'rgba(203, 179, 121, 0.2)',
                  border: '1px solid rgba(203, 179, 121, 0.5)',
                  padding: '6px 14px',
                  borderRadius: '999px',
                }}
              >
                {t}
              </span>
            ))}
          </div>

          <p style={{ fontFamily: 'HarmoniaSans, sans-serif', fontSize: '16px', color: '#333', lineHeight: 1.75, marginBottom: '16px' }}>
            Τα <strong>Exosomes</strong> είναι μικροσκοπικά «μηνύματα» που ενεργοποιούν τα κύτταρα του
            δέρματος. Ανανέωση κολλαγόνου, ομοιόμορφος τόνος και αληθινή λάμψη, χωρίς ενέσιμα υλικά
            πλήρωσης. Είναι το trend που έγινε viral σε όλο τον κόσμο και πλέον είναι διαθέσιμο στην{' '}
            <em>Advanced Derma</em>.
          </p>
          <p style={{ fontFamily: 'HarmoniaSans, sans-serif', fontSize: '16px', color: '#555', lineHeight: 1.75, marginBottom: '24px' }}>
            Εφαρμόζονται μετά από microneedling ή laser, για στοχευμένη αναγέννηση σε γραμμές, ουλές
            ακμής, λεπτή υφή και ευαισθησία. Η εμπειρία είναι ήπια, χωρίς αναμονή ανάρρωσης, και τα
            αποτελέσματα φωτεινά και διακριτικά — όπως αρμόζει σε ένα πρόσωπο που θέλει να μοιάζει
            ξεκούραστο, όχι «παρεμβαμένο».
          </p>

          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {benefits.map((b) => (
              <li key={b.title} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ flexShrink: 0, width: '20px', height: '20px', borderRadius: '50%', marginTop: '2px', background: 'linear-gradient(135deg, rgb(147, 123, 76), rgb(203, 179, 121))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="#fff"><path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" /></svg>
                </span>
                <div>
                  <strong style={{ fontFamily: 'HarmoniaSans, sans-serif', fontSize: '16px', color: 'rgb(110, 90, 51)' }}>{b.title}</strong>
                  <span style={{ display: 'block', fontFamily: 'HarmoniaSans, sans-serif', fontSize: '16px', color: '#666', marginTop: '2px' }}>{b.text}</span>
                </div>
              </li>
            ))}
          </ul>

          <Link href="/el/booking-request/" className="btn-primary" style={{ fontSize: '16px', fontWeight: 600, padding: '12px 28px' }}>
            Κλείστε ραντεβού για Exosomes
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
