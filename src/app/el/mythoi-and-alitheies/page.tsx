import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Μύθοι & Αλήθειες | Advanced Derma',
  description: 'Ανακαλύψτε αλήθειες για τις αισθητικές θεραπείες. Οι ειδικοί δερματολόγοι των Advanced Derma καταρρίπτουν τους πιο κοινούς μύθους.',
};

const myths = [
  {
    myth: 'Μύθος: Το Botox δίνει ένα "παγωμένο" πρόσωπο',
    truth: 'Αλήθεια: Όταν χορηγείται σωστά από εξειδικευμένο ιατρό, το Botox χαλαρώνει συγκεκριμένους μυς αφήνοντας φυσικές εκφράσεις. Το "παγωμένο" αποτέλεσμα οφείλεται σε υπερδοσολογία ή λάθος τεχνική.',
  },
  {
    myth: 'Μύθος: Τα Fillers είναι μόνιμα και δεν αφαιρούνται',
    truth: 'Αλήθεια: Τα fillers υαλουρονικού οξέος είναι βιοδιασπώμενα και μπορούν να διαλυθούν άμεσα με ένεση υαλουρονιδάσης, αν χρειαστεί.',
  },
  {
    myth: 'Μύθος: Η αποτρίχωση Laser λειτουργεί σε μία μόνο συνεδρία',
    truth: 'Αλήθεια: Η μόνιμη αποτρίχωση απαιτεί 6-8 συνεδρίες λόγω του κύκλου ανάπτυξης των τριχών. Κάθε συνεδρία στοχεύει τις τρίχες σε ενεργή φάση ανάπτυξης.',
  },
  {
    myth: 'Μύθος: Το Peeling κάνει κακό στο δέρμα',
    truth: 'Αλήθεια: Τα ελεγχόμενα χημικά peeling από εξειδικευμένο ιατρό είναι ασφαλή και αναζωογονούν την επιδερμίδα. Διεγείρουν την ανανέωση κυττάρων.',
  },
  {
    myth: 'Μύθος: Οι αισθητικές θεραπείες είναι μόνο για γυναίκες',
    truth: 'Αλήθεια: Όλο και περισσότεροι άνδρες επιλέγουν αισθητικές θεραπείες. Η φροντίδα δέρματος δεν έχει φύλο — απευθύνεται σε όλους.',
  },
];

export default function MythoiAndAlithieiesPage() {
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
            Μύθοι & Αλήθειες
          </h1>
          <p
            style={{
              fontFamily: 'HarmoniaSans, sans-serif',
              fontSize: '16px',
              color: 'rgba(255,255,255,0.85)',
              maxWidth: '500px',
            }}
          >
            Οι ειδικοί μας καταρρίπτουν τους πιο συχνούς μύθους για τις αισθητικές θεραπείες
          </p>
        </div>
      </section>

      {/* Myths Content */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '64px 24px 96px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {myths.map((item, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#fff',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 2px 12px rgba(110, 90, 51,0.08)',
                border: '1px solid rgb(244, 238, 224)',
              }}
            >
              <div
                style={{
                  backgroundColor: 'rgba(110, 90, 51,0.06)',
                  padding: '20px 28px',
                  borderBottom: '1px solid rgb(244, 238, 224)',
                }}
              >
                <p
                  style={{
                    fontFamily: 'HarmoniaSans, sans-serif',
                    fontSize: '16px',
                    fontWeight: 700,
                    color: 'rgb(110, 90, 51)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                  }}
                >
                  <span
                    style={{
                      backgroundColor: 'rgb(110, 90, 51)',
                      color: '#fff',
                      fontSize: '16px',
                      fontWeight: 700,
                      padding: '2px 8px',
                      borderRadius: '4px',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}
                  >
                    ΜΥΘΟΣ
                  </span>
                  {item.myth.replace('Μύθος: ', '')}
                </p>
              </div>
              <div style={{ padding: '20px 28px' }}>
                <p
                  style={{
                    fontFamily: 'HarmoniaSans, sans-serif',
                    fontSize: '16px',
                    lineHeight: 1.7,
                    color: '#444',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                  }}
                >
                  <span
                    style={{
                      backgroundColor: 'rgb(203, 179, 121)',
                      color: 'rgb(110, 90, 51)',
                      fontSize: '16px',
                      fontWeight: 700,
                      padding: '2px 8px',
                      borderRadius: '4px',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}
                  >
                    ΑΛΗΘΕΙΑ
                  </span>
                  {item.truth.replace('Αλήθεια: ', '')}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '56px' }}>
          <p
            style={{
              fontFamily: 'HarmoniaSans, sans-serif',
              fontSize: '16px',
              color: '#555',
              marginBottom: '24px',
            }}
          >
            Έχετε ερωτήσεις; Κλείστε ραντεβού με έναν ειδικό μας.
          </p>
          <Link
            href="/el/booking-request/"
            style={{
              display: 'inline-block',
              backgroundColor: 'rgb(203, 179, 121)',
              color: '#000',
              fontFamily: 'HarmoniaSans, sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              padding: '14px 36px',
              borderRadius: '6px',
              textDecoration: 'none',
            }}
          >
            Κλείστε Ραντεβού
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
