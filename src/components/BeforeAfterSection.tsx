import Image from 'next/image';

/* Πριν & Μετά — κάθε εικόνα περιέχει ήδη το «πριν» (αριστερά) και το «μετά» (δεξιά).
   Αντιστοιχούν στα αρχεία αποτελεσμάτων του πελάτη (gallery/g02..g32). */
const beforeAfter = ['g02', 'g03', 'g04', 'g11', 'g13', 'g14', 'g16', 'g17', 'g28', 'g31', 'g32'].map(
  (g) => `/images/gallery/${g}.png`
);

export default function BeforeAfterSection() {
  return (
    <section style={{ width: '100%', backgroundColor: '#fff', padding: '60px 0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <p
          style={{
            fontFamily: 'HarmoniaSans, sans-serif',
            fontSize: '16px',
            fontWeight: 600,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: 'rgb(147, 123, 76)',
            textAlign: 'center',
            marginBottom: '12px',
          }}
        >
          Αποτελέσματα που μιλούν
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
          Πριν &amp; Μετά
        </h2>
        <p
          style={{
            fontFamily: 'HarmoniaSans, sans-serif',
            fontSize: '16px',
            color: '#777',
            textAlign: 'center',
            marginBottom: '40px',
          }}
        >
          Δείτε πραγματικά αποτελέσματα θεραπειών του Advanced Derma
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '20px',
          }}
        >
          {beforeAfter.map((src, i) => (
            <div
              key={src}
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '1 / 1',
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 2px 14px rgba(110, 90, 51,0.12)',
                backgroundColor: 'rgb(244, 238, 224)',
              }}
            >
              <Image
                src={src}
                alt={`Πριν και Μετά — αποτέλεσμα θεραπείας ${i + 1}`}
                fill
                loading="lazy"
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>

        <p
          style={{
            fontFamily: 'HarmoniaSans, sans-serif',
            fontSize: '16px',
            color: '#999',
            textAlign: 'center',
            marginTop: '28px',
          }}
        >
          * Τα αποτελέσματα ενδέχεται να διαφέρουν ανά άτομο. Όλες οι φωτογραφίες είναι πραγματικών ασθενών με τη συγκατάθεσή τους.
        </p>
      </div>
    </section>
  );
}
