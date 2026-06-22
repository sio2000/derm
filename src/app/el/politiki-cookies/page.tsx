import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Πολιτική Cookies | Advanced Derma',
  description: 'Πληροφορίες για τη χρήση cookies στον ιστότοπο των δερματολογικών ιατρείων Advanced Derma.',
};

export default function PolitikiCookiesPage() {
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
          minHeight: '240px',
          marginTop: '135px',
          padding: '48px 24px',
          textAlign: 'center',
        }}
      >
        <div>
          <h1
            style={{
              fontFamily: 'HarmoniaSans, sans-serif',
              fontSize: 'clamp(24px, 3.5vw, 44px)',
              fontWeight: 700,
              color: '#fff',
            }}
          >
            Πολιτική Cookies
          </h1>
        </div>
      </section>

      {/* Content */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '64px 24px 96px' }}>
        {[
          {
            title: '1. Τι είναι τα Cookies',
            body: 'Τα cookies είναι μικρά αρχεία κειμένου που αποθηκεύονται στη συσκευή σας όταν επισκέπτεστε έναν ιστότοπο. Βοηθούν τον ιστότοπο να λειτουργεί σωστά, να θυμάται τις προτιμήσεις σας και να συλλέγει στατιστικές πληροφορίες.',
          },
          {
            title: '2. Κατηγορίες Cookies που Χρησιμοποιούμε',
            body: 'Χρησιμοποιούμε: (α) Απολύτως αναγκαία cookies για τη λειτουργία του ιστότοπου, (β) Cookies λειτουργικότητας για αποθήκευση προτιμήσεων, (γ) Cookies ανάλυσης (Google Analytics) για στατιστικές χρήσης, (δ) Cookies μάρκετινγκ για στοχευμένη διαφήμιση (μόνο με τη συγκατάθεσή σας).',
          },
          {
            title: '3. Cookies Τρίτων',
            body: 'Ο ιστότοπός μας χρησιμοποιεί cookies από τρίτα μέρη, όπως Google Analytics για ανάλυση κυκλοφορίας και Facebook Pixel για διαφήμιση. Αυτά τα cookies διέπονται από τις πολιτικές απορρήτου των αντίστοιχων εταιρειών.',
          },
          {
            title: '4. Διαχείριση Cookies',
            body: 'Μπορείτε να ελέγξετε και να διαγράψετε τα cookies μέσω των ρυθμίσεων του browser σας. Η απενεργοποίηση ορισμένων cookies μπορεί να επηρεάσει τη λειτουργικότητα του ιστότοπου. Επίσης, μπορείτε να αρνηθείτε μη απαραίτητα cookies κατά την πρώτη σας επίσκεψη.',
          },
          {
            title: '5. Συγκατάθεση',
            body: 'Με τη συνέχιση πλοήγησης στον ιστότοπο, αποδέχεστε τη χρήση απολύτως αναγκαίων cookies. Για άλλες κατηγορίες cookies, ζητάμε τη ρητή συγκατάθεσή σας μέσω του banner cookies.',
          },
          {
            title: '6. Επικοινωνία',
            body: 'Για ερωτήματα σχετικά με την πολιτική cookies, επικοινωνήστε μαζί μας στο: advaderma@gmail.com',
          },
        ].map((section) => (
          <div key={section.title} style={{ marginBottom: '36px' }}>
            <h2
              style={{
                fontFamily: 'HarmoniaSans, sans-serif',
                fontSize: '16px',
                fontWeight: 700,
                color: 'rgb(110, 90, 51)',
                marginBottom: '12px',
              }}
            >
              {section.title}
            </h2>
            <p
              style={{
                fontFamily: 'HarmoniaSans, sans-serif',
                fontSize: '16px',
                lineHeight: 1.75,
                color: '#444',
              }}
            >
              {section.body}
            </p>
          </div>
        ))}

        <p
          style={{
            fontFamily: 'HarmoniaSans, sans-serif',
            fontSize: '16px',
            color: '#aaa',
            marginTop: '48px',
            borderTop: '1px solid rgb(244, 238, 224)',
            paddingTop: '24px',
          }}
        >
          Τελευταία ενημέρωση: Ιούνιος 2026
        </p>
      </section>

      <Footer />
    </>
  );
}
