import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Πολιτική Προστασίας Προσωπικών Δεδομένων | Advanced Derma',
  description: 'Διαβάστε την πολιτική προστασίας προσωπικών δεδομένων των δερματολογικών ιατρείων Advanced Derma.',
};

export default function DilosiAporritoiPage() {
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
            Πολιτική Προστασίας Προσωπικών Δεδομένων
          </h1>
        </div>
      </section>

      {/* Content */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '64px 24px 96px' }}>
        {[
          {
            title: '1. Εισαγωγή',
            body: 'Το Advanced Derma (εφεξής "εμείς" ή "το Ιατρείο"), υπό τη διεύθυνση της Δρ. Χρυσούλας Ζήσιμου, δεσμεύεται να προστατεύει τα προσωπικά σας δεδομένα σύμφωνα με τον Γενικό Κανονισμό Προστασίας Δεδομένων (GDPR - Κανονισμός ΕΕ 2016/679) και την ισχύουσα ελληνική νομοθεσία.',
          },
          {
            title: '2. Υπεύθυνος Επεξεργασίας',
            body: 'Υπεύθυνος επεξεργασίας των προσωπικών σας δεδομένων είναι το Advanced Derma — Δρ. Χρυσούλα Ζήσιμου, με έδρα στον Ζωγράφο (Στρατάρχου Παπάγου Αλεξάνδρου 50) και ιατρείο στον Πειραιά (Γρηγορίου Λαμπράκη 109). Για ερωτήματα σχετικά με τα δεδομένα σας, επικοινωνήστε μαζί μας στο: advaderma@gmail.com.',
          },
          {
            title: '3. Δεδομένα που Συλλέγουμε',
            body: 'Συλλέγουμε τα ακόλουθα δεδομένα: (α) Στοιχεία ταυτοποίησης (όνομα, επώνυμο), (β) Στοιχεία επικοινωνίας (τηλέφωνο, email), (γ) Δεδομένα υγείας για ιατρικούς σκοπούς, (δ) Δεδομένα πλοήγησης στον ιστότοπο μέσω cookies.',
          },
          {
            title: '4. Σκοπός Επεξεργασίας',
            body: 'Επεξεργαζόμαστε τα δεδομένα σας για: διαχείριση ραντεβού, παροχή ιατρικών υπηρεσιών, επικοινωνία μαζί σας, βελτίωση των υπηρεσιών μας και συμμόρφωση με νομικές υποχρεώσεις.',
          },
          {
            title: '5. Δικαιώματά Σας',
            body: 'Έχετε το δικαίωμα πρόσβασης, διόρθωσης, διαγραφής, περιορισμού επεξεργασίας, φορητότητας δεδομένων και εναντίωσης. Για να ασκήσετε τα δικαιώματά σας, επικοινωνήστε μαζί μας στο advaderma@gmail.com.',
          },
          {
            title: '6. Διατήρηση Δεδομένων',
            body: 'Τα ιατρικά δεδομένα διατηρούνται για 10 χρόνια σύμφωνα με την ισχύουσα νομοθεσία. Τα δεδομένα μάρκετινγκ διατηρούνται έως ότου ανακαλέσετε τη συγκατάθεσή σας.',
          },
          {
            title: '7. Επικοινωνία',
            body: 'Για οποιαδήποτε απορία σχετικά με την προστασία των προσωπικών σας δεδομένων, μπορείτε να επικοινωνήσετε μαζί μας στο: advaderma@gmail.com ή να υποβάλετε καταγγελία στην Αρχή Προστασίας Δεδομένων Προσωπικού Χαρακτήρα (ΑΠΔΠΧ) στο www.dpa.gr.',
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
