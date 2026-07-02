import Image from 'next/image';

const conferenceImages = [
  ...[2, 3, 4, 5, 6, 1].map((n) => ({
    src: `/images/conference-${n}.jpg`,
    alt: `Η Δρ. Χρυσούλα Ζήσιμου σε συνέδριο δερματολογίας — φωτογραφία ${n}`,
  })),
  { src: '/images/doctor.jpg', alt: 'Δρ. Χρυσούλα Ζήσιμου — Δερματολόγος, Αφροδισιολόγος' },
];

export default function ConferencesSection() {
  return (
    <section
      style={{
        width: '100%',
        backgroundColor: '#fff',
        padding: '20px 0 72px',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
        <p
          style={{
            fontFamily: 'HarmoniaSans, sans-serif',
            fontSize: '16px',
            fontWeight: 600,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: 'rgb(147, 123, 76)',
            textAlign: 'center',
            marginBottom: '14px',
          }}
        >
          Διεθνή και Ελληνικά Συνέδρια Δερματολογίας
        </p>
        <h2
          style={{
            fontFamily: 'HarmoniaSans, sans-serif',
            fontSize: '40px',
            fontWeight: 700,
            color: 'rgb(110, 90, 51)',
            textAlign: 'center',
            marginBottom: '16px',
          }}
        >
          Επιστημονική Δραστηριότητα
        </h2>
        <p
          style={{
            fontFamily: 'HarmoniaSans, sans-serif',
            fontSize: '16px',
            color: '#555',
            textAlign: 'center',
            lineHeight: 1.7,
            maxWidth: '760px',
            margin: '0 auto 40px',
          }}
        >
          Η Δρ. Χρυσούλα Ζήσιμου συμμετέχει ενεργά σε διεθνή και ελληνικά συνέδρια
          δερματολογίας και αισθητικής ιατρικής, διατηρώντας διαρκή επιστημονική
          ενημέρωση και έντονη συγγραφική δραστηριότητα με δημοσιεύσεις στην Ελλάδα
          και το εξωτερικό.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
          }}
        >
          {conferenceImages.map((c) => (
            <div
              key={c.src}
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '4 / 3',
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 2px 14px rgba(110, 90, 51,0.12)',
              }}
            >
              <Image src={c.src} alt={c.alt} fill style={{ objectFit: 'cover' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
