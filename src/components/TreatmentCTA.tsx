import Link from 'next/link';

// Reusable premium CTA placed at the bottom of every treatment page.
// Strong title, short description, booking button and clinic contact details.
const contacts = [
  { label: 'Αθήνα', value: '697 510 5858', href: 'tel:+306975105858' },
  // Προσωρινά κρυμμένο από το UI — μην διαγραφεί (ιατρείο Πειραιά):
  // { label: 'Πειραιάς', value: '693 671 7377', href: 'tel:+306936717377' },
  { label: 'Σταθερό', value: '216 809 3444', href: 'tel:+302168093444' },
  { label: 'Email', value: 'advancedermabooking@gmail.com', href: 'mailto:advancedermabooking@gmail.com' },
];

export default function TreatmentCTA({
  title = 'ΓΙΑΤΙ ΝΑ ΜΑΣ ΕΠΙΛΕΞΕΤΕ',
  description = '',
}: {
  title?: string;
  description?: string;
}) {
  const bulletPoints = [
    'Γιατί δουλεύουμε με πάθος και υπομονή',
    'Γιατί ακούμε τον ασθενή',
    'Γιατί δημιουργούμε σχέσεις εμπιστοσύνης',
    'Η βασική μας πεποίθηση είναι η ιδέα της συνεχούς βελτίωσης',
    'Για το έμπειρο προσωπικό μας. Είστε σε καλά χέρια',
    'Δεσμευόμαστε για ποιοτικές λύσεις',
    'Για τους ευχαριστημένους μας πελάτες',
    'Γιατί γνωρίζουμε το δέρμα. Το δέρμα είναι το μεγαλύτερο όργανο στο ανθρώπινο σώμα και είμαστε αφοσιωμένοι να διατηρούμε το δικό σας στην καλύτερη δυνατή φόρμα',
    'Παρέχουμε εξατομικευμένη, ολιστική φροντίδα για πολύπλοκες και κοινές δερματικές παθήσεις, βασιζόμενοι σε έναν συνδυασμό δοκιμασμένων και αξιόπιστων καθώς και πιο καινοτόμων και προηγμένων εργαλείων και επιλογών θεραπείας που διαθέτουμε.',
    'Δημιουργούμε για κάθε θεραπεία ένα μοναδικό σχέδιο εργασίας. Κάθε ασθενής είναι μοναδικός και έχει ξεχωριστές ανάγκες',
    'Εστιάζουμε πρώτα στον ασθενή. Έχοντας τις ανάγκες σας στο επίκεντρο του μυαλού μας, θα εντοπίσουμε και θα προσφέρουμε τη βέλτιστη, εξατομικευμένη δερματολογική φροντίδα, προσαρμοσμένη ώστε να διασφαλίζει την υψηλότερη αποτελεσματικότητα σε συνδυασμό με τον ρεαλισμό του κόστους',
    'Σε βολική τοποθεσία με εύκολη πρόσβαση και άρτια εξοπλισμένο ιατρείο δερματολογίας μας είναι μια εύκολη επιλογή για όλες τις ανάγκες της επιδερμίδας σας. Καταλαβαίνουμε ότι έχετε ένα φορτωμένο πρόγραμμα όπως και εμείς, γι\' αυτό θέτουμε ως προτεραιότητα να σας δούμε την προγραμματισμένη ώρα του ραντεβού σας.',
  ];

  return (
    <section
      style={{
        width: '100%',
        background: 'linear-gradient(135deg, rgb(110, 90, 51) 0%, rgb(147, 123, 76) 100%)',
        padding: '64px 24px',
      }}
    >
      <div
        style={{
          maxWidth: '1040px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '32px',
        }}
      >
        <h2
          style={{
            fontFamily: 'HarmoniaSans, sans-serif',
            fontSize: 'clamp(26px, 3.4vw, 38px)',
            fontWeight: 700,
            color: '#fff',
            lineHeight: 1.2,
            margin: 0,
          }}
        >
          {title}
        </h2>
        
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '16px',
            width: '100%',
            textAlign: 'left',
          }}
        >
          {bulletPoints.map((point, index) => (
            <div
              key={index}
              style={{
                fontFamily: 'HarmoniaSans, sans-serif',
                fontSize: '15px',
                color: 'rgba(255,255,255,0.95)',
                lineHeight: 1.6,
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                padding: '12px',
                background: 'rgba(255,255,255,0.08)',
                borderRadius: '6px',
              }}
            >
              <span
                style={{
                  color: 'rgb(232, 213, 154)',
                  fontWeight: 700,
                  flexShrink: 0,
                  marginTop: '2px',
                }}
              >
                ✓
              </span>
              <span>{point}</span>
            </div>
          ))}
        </div>

        <Link
          href="/el/booking-request/"
          className="btn-primary"
          style={{
            backgroundColor: 'rgb(232, 213, 154)',
            fontSize: '16px',
            fontWeight: 600,
            padding: '14px 36px',
            borderRadius: '6px',
            marginTop: '4px',
          }}
        >
          Κλείστε το ραντεβού σας
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
          </svg>
        </Link>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '14px 32px',
            marginTop: '16px',
            paddingTop: '24px',
            borderTop: '1px solid rgba(255,255,255,0.25)',
            width: '100%',
          }}
        >
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              style={{
                fontFamily: 'HarmoniaSans, sans-serif',
                fontSize: '16px',
                color: '#fff',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span style={{ color: 'rgb(232, 213, 154)', fontWeight: 600 }}>{c.label}:</span>
              {c.value}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
