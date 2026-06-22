import Link from 'next/link';

// Reusable premium CTA placed at the bottom of every treatment page.
// Strong title, short description, booking button and clinic contact details.
const contacts = [
  { label: 'Αθήνα', value: '697 510 5858', href: 'tel:+306975105858' },
  { label: 'Πειραιάς', value: '693 671 7377', href: 'tel:+306936717377' },
  { label: 'Σταθερό', value: '216 809 3444', href: 'tel:+302168093444' },
  { label: 'Email', value: 'advaderma@gmail.com', href: 'mailto:advaderma@gmail.com' },
];

export default function TreatmentCTA({
  title = 'Κλείστε το ραντεβού σας στο Advanced Derma',
  description = 'Η Δρ. Χρυσούλα Ζήσιμου και η ομάδα του Advanced Derma σχεδιάζουν για εσάς ένα εξατομικευμένο πρωτόκολλο, με ασφάλεια, επιστημονική τεκμηρίωση και φυσικό αποτέλεσμα. Επικοινωνήστε μαζί μας για την προσωπική σας αξιολόγηση.',
}: {
  title?: string;
  description?: string;
}) {
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
          gap: '20px',
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
        <p
          style={{
            fontFamily: 'HarmoniaSans, sans-serif',
            fontSize: '16px',
            color: 'rgba(255,255,255,0.9)',
            lineHeight: 1.7,
            maxWidth: '720px',
            margin: 0,
          }}
        >
          {description}
        </p>

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
