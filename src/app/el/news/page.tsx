import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Νέα | Advanced Derma',
  description: 'Τελευταία νέα και ανακοινώσεις από τα δερματολογικά ιατρεία Advanced Derma.',
};

const newsItems = [
  {
    id: 1,
    title: 'Νέα Υπηρεσία: Ψηφιακή Χαρτογράφηση Σπίλων',
    excerpt: 'Τα Advanced Derma εισάγουν την πρωτοποριακή υπηρεσία ψηφιακής χαρτογράφησης σπίλων για πρώιμη ανίχνευση μελανώματος.',
    category: 'Νέες Υπηρεσίες',
  },
  {
    id: 2,
    title: 'Μάιος: Μήνας Πρόληψης & Ενημέρωσης για τον Καρκίνο του Δέρματος',
    excerpt: 'Ο καρκίνος του δέρματος είναι ο **συχνότερος τύπος καρκίνου**, αλλά παραμένει σε μεγάλο βαθμό ιάσιμος όταν διαγνωστεί έγκαιρα!',
    category: 'Νέες Υπηρεσίες',
  },
  {
    id: 3,
    title: 'Νέα Υπηρεσία: Δερματοσκόπηση υψηλής ευκρίνειας',
    excerpt: 'Δημιουργήσαμε νέα υπηρεσία δερματοσκόπησης υψηλής ευκρίνειας για να εντοπίζουμε έγκαιρα ύποπτες αλλοιώσεις στο δέρμα.',
    category: 'Νέες Υπηρεσίες',
  },
  {
    id: 4,
    title: 'Νέα Υπηρεσία: Αντιμετώπιση δυσχρωμιών και ουλών',
    excerpt: 'Η ομάδα μας προσφέρει εξατομικευμένα πρωτόκολλα για δυσχρωμίες και ουλές, με θεραπείες που ενισχύουν την υγιή όψη του δέρματος.',
    category: 'Νέες Υπηρεσίες',
  },
  {
    id: 5,
    title: 'Νέα Υπηρεσία: Προληπτικός ετήσιος έλεγχος δέρματος',
    excerpt: 'Αποκτήστε το νέο πρόγραμμα προληπτικού ετήσιου ελέγχου για την έγκαιρη διάγνωση δερματικών παθήσεων και την πρόληψη του καρκίνου του δέρματος.',
    category: 'Νέες Υπηρεσίες',
  },
  {
    id: 6,
    title: 'Νέα Υπηρεσία: Θεραπείες φωτεινότητας δέρματος',
    excerpt: 'Προτείνουμε εξειδικευμένα πρωτόκολλα φωτεινότητας και ενυδάτωσης για να βελτιώσουμε την όψη της επιδερμίδας και να μειώσουμε τις δυσχρωμίες.',
    category: 'Νέες Υπηρεσίες',
  },
  {
    id: 7,
    title: 'Νέα Υπηρεσία: Προστασία και φροντίδα μετά από δερματολογικές διαδικασίες',
    excerpt: 'Προσφέρουμε ολοκληρωμένη φροντίδα μετά από θεραπείες, ώστε το δέρμα να αναρρώνει σωστά και να προστατεύεται από νέες βλάβες.',
    category: 'Νέες Υπηρεσίες',
  },
];

export default function NewsPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        style={{
          width: '100%',
          background: 'linear-gradient(135deg, rgb(110, 90, 51) 0%, rgb(150,70,35) 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '280px',
          marginTop: '135px',
          padding: '56px 24px',
          textAlign: 'center',
        }}
      >
        <div>
          <h1
            style={{
              fontFamily: 'HarmoniaSans, sans-serif',
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: 700,
              color: '#fff',
              marginBottom: '12px',
            }}
          >
            Νέα
          </h1>
          <p
            style={{
              fontFamily: 'HarmoniaSans, sans-serif',
              fontSize: '16px',
              color: 'rgba(255,255,255,0.85)',
            }}
          >
            Τελευταίες ανακοινώσεις και ενημερώσεις
          </p>
        </div>
      </section>

      {/* News List */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '64px 24px 96px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {newsItems.map((item) => (
            <article
              key={item.id}
              style={{
                backgroundColor: '#fff',
                borderRadius: '12px',
                padding: '32px',
                boxShadow: '0 2px 12px rgba(110, 90, 51,0.08)',
                border: '1px solid rgb(244, 238, 224)',
                display: 'flex',
                gap: '24px',
                alignItems: 'flex-start',
              }}
            >
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '12px' }}>
                  <span
                    style={{
                      backgroundColor: 'rgb(244, 238, 224)',
                      color: 'rgb(110, 90, 51)',
                      fontFamily: 'HarmoniaSans, sans-serif',
                      fontSize: '16px',
                      fontWeight: 600,
                      padding: '3px 10px',
                      borderRadius: '20px',
                    }}
                  >
                    {item.category}
                  </span>
                </div>
                <h2
                  style={{
                    fontFamily: 'HarmoniaSans, sans-serif',
                    fontSize: '16px',
                    fontWeight: 700,
                    color: 'rgb(110, 90, 51)',
                    marginBottom: '10px',
                  }}
                >
                  {item.title}
                </h2>
                <p
                  style={{
                    fontFamily: 'HarmoniaSans, sans-serif',
                    fontSize: '16px',
                    color: '#666',
                    lineHeight: 1.6,
                  }}
                >
                  {item.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <Link
            href="/el/booking-request/"
            style={{
              display: 'inline-block',
              backgroundColor: 'rgb(203, 179, 121)',
              color: '#000',
              fontFamily: 'HarmoniaSans, sans-serif',
              fontSize: '16px',
              fontWeight: 700,
              padding: '14px 36px',
              borderRadius: '6px',
              textDecoration: 'none',
              boxShadow: '0 10px 22px rgba(110, 90, 51, 0.16)',
            }}
          >
            Κλείστε τώρα το ραντεβού σας
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
