// "Γιατί να μας επιλέξετε" — value-proposition cards with icons.
// Paraphrased, original copy aligned with the Advanced Derma brand.

type Reason = { title: string; text: React.ReactNode; icon: React.ReactNode };

const iconStyle = { width: 26, height: 26, fill: '#fff' } as const;

const reasons: Reason[] = [
  {
    title: 'Ιατρική εξειδίκευση',
    text: 'Κάθε θεραπεία σχεδιάζεται και εκτελείται από εξειδικευμένο δερματολόγο, με βαθιά γνώση και πάνω από 20 χρόνια κλινικής εμπειρίας.',
    icon: (
      <svg viewBox="0 0 24 24" style={iconStyle}><path d="M19 8h-1V3H6v5H5a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3zM8 5h8v3H8V5zm7 11h-2v2h-2v-2H9v-2h2v-2h2v2h2v2z"/></svg>
    ),
  },
  {
    title: 'Εξατομικευμένα πρωτόκολλα',
    text: 'Δεν υπάρχουν τυποποιημένες λύσεις. Αξιολογούμε τις ανάγκες της δικής σας επιδερμίδας και σχεδιάζουμε ένα πλάνο στα μέτρα σας.',
    icon: (
      <svg viewBox="0 0 24 24" style={iconStyle}><path d="M12 2a5 5 0 0 0-5 5c0 2 1 3.5 2.5 4.5L9 22h6l-.5-10.5C16 10.5 17 9 17 7a5 5 0 0 0-5-5zm0 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/></svg>
    ),
  },
  {
    title: 'Τεχνολογία αιχμής',
    text: 'Επενδύουμε σε σύγχρονα, πιστοποιημένα μηχανήματα και υλικά υψηλής ποιότητας, για αποτελεσματικές και ασφαλείς θεραπείες.',
    icon: (
      <svg viewBox="0 0 24 24" style={iconStyle}><path d="M12 2 4 6v6c0 5 3.4 8.7 8 10 4.6-1.3 8-5 8-10V6l-8-4zm-1 14-4-4 1.4-1.4L11 13.2l5.6-5.6L18 9l-7 7z"/></svg>
    ),
  },
  {
    title: 'Απόλυτη ασφάλεια',
    text: 'Τηρούμε αυστηρά ιατρικά πρωτόκολλα και κανόνες υγιεινής σε κάθε στάδιο, ώστε να αισθάνεστε σιγουριά πριν, κατά τη διάρκεια και μετά.',
    icon: (
      <svg viewBox="0 0 24 24" style={iconStyle}><path d="M12 1 3 5v6c0 5.6 3.8 10.7 9 12 5.2-1.3 9-6.4 9-12V5l-9-4zm0 6a3 3 0 0 1 3 3v1h1v5H8v-5h1v-1a3 3 0 0 1 3-3zm0 2a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1z"/></svg>
    ),
  },
  {
    title: 'Φυσικό αποτέλεσμα',
    text: (
      <>
        Στόχος μας είναι η αρμονία και η φυσικότητα, να αναδεικνύουμε τα χαρακτηριστικά σας, χωρίς
        υπερβολές και χωρίς «<strong style={{ color: '#000', fontWeight: 700 }}>παγωμένη</strong>» όψη.
      </>
    ),
    icon: (
      <svg viewBox="0 0 24 24" style={iconStyle}><path d="M12 3C7 3 3 7 3 12s4 9 9 9 9-4 9-9-4-9-9-9zm0 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm-4 9c.4-1.7 2-3 4-3s3.6 1.3 4 3a7 7 0 0 1-8 0z"/></svg>
    ),
  },
  {
    title: 'Σχέση εμπιστοσύνης',
    text: 'Χτίζουμε μακροχρόνιες σχέσεις με τους ασθενείς μας, με διαφάνεια, ειλικρινή ενημέρωση και ουσιαστική φροντίδα σε κάθε επίσκεψη.',
    icon: (
      <svg viewBox="0 0 24 24" style={iconStyle}><path d="M12 21s-7.5-4.6-10-9.3C.7 8.9 2.3 5.5 5.6 5.5c1.9 0 3.3 1 4.4 2.3C11.1 6.5 12.5 5.5 14.4 5.5c3.3 0 4.9 3.4 3.6 6.2C19.5 16.4 12 21 12 21z"/></svg>
    ),
  },
];

export default function WhyChooseUsSection() {
  return (
    <section style={{ width: '100%', backgroundColor: 'rgb(248, 244, 235)', padding: '72px 24px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <p
          style={{
            fontFamily: 'HarmoniaSans, sans-serif',
            fontSize: '16px',
            fontWeight: 600,
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            color: 'rgb(147, 123, 76)',
            textAlign: 'center',
            marginBottom: '10px',
          }}
        >
          Advanced Derma
        </p>
        <h2
          style={{
            fontFamily: 'HarmoniaSans, sans-serif',
            fontSize: 'clamp(28px, 3.4vw, 42px)',
            fontWeight: 700,
            color: 'rgb(110, 90, 51)',
            textAlign: 'center',
            marginBottom: '48px',
          }}
        >
          Γιατί να μας επιλέξετε
        </h2>

        <div
          className="ad-rgrid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}
        >
          {reasons.map((r) => (
            <div
              key={r.title}
              style={{
                backgroundColor: '#fff',
                borderRadius: '12px',
                padding: '32px 28px',
                boxShadow: '0 2px 16px rgba(110, 90, 51, 0.08)',
                border: '1px solid rgba(110, 90, 51, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgb(147, 123, 76), rgb(203, 179, 121))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {r.icon}
              </div>
              <h3
                style={{
                  fontFamily: 'HarmoniaSans, sans-serif',
                  fontSize: '16px',
                  fontWeight: 700,
                  color: 'rgb(110, 90, 51)',
                  margin: 0,
                }}
              >
                {r.title}
              </h3>
              <p
                style={{
                  fontFamily: 'HarmoniaSans, sans-serif',
                  fontSize: '16px',
                  color: '#555',
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {r.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
