import Link from 'next/link';

export default function MythsSection() {
  return (
    <div
      style={{
        width: '100%',
        minHeight: '388px',
        background: 'linear-gradient(135deg, rgb(248, 244, 235) 0%, rgb(244, 238, 224) 100%)',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        className="ad-myths"
        style={{
          maxWidth: '1200px',
          width: '100%',
          margin: '0 auto',
          padding: '60px 64px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}
      >
        <h2
          className="ad-myths-title"
          style={{
            fontFamily: 'HarmoniaSans, sans-serif',
            fontSize: '40px',
            fontWeight: 700,
            color: 'rgb(110, 90, 51)',
            marginBottom: '20px',
          }}
        >
          Μύθοι & Αλήθειες
        </h2>
        <p
          style={{
            fontFamily: 'HarmoniaSans, sans-serif',
            fontSize: '16px',
            color: '#333',
            lineHeight: 1.7,
            maxWidth: '620px',
            marginBottom: '32px',
          }}
        >
          Με τη σειρά «Μύθοι & Αλήθειες», το Advanced Derma ξεχωρίζει την επιστημονική γνώση από τις διαδεδομένες παρανοήσεις γύρω από το δέρμα. Σας ενημερώνουμε με υπευθυνότητα και διαφάνεια, ώστε κάθε απόφαση για την υγεία, την ασφάλεια και την περιποίηση της επιδερμίδας σας να στηρίζεται σε τεκμηριωμένα δεδομένα και όχι σε μύθους.
        </p>
        <Link
          href="/el/mythoi-and-alitheies/"
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
            transition: 'background-color 0.2s',
          }}
        >
          Δείτε τη σειρά
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
          </svg>
        </Link>
      </div>
    </div>
  );
}
