import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TreatmentList from '@/components/TreatmentList';
import { getTreatments } from '@/lib/content/treatments';

export const metadata = {
  title: 'Θεραπείες Προσώπου | Advanced Derma',
  description: 'Ανακαλύψτε τις θεραπείες προσώπου στα δερματολογικά ιατρεία Advanced Derma. Σύγχρονες αισθητικές και ιατρικές θεραπείες για κάθε ανάγκη επιδερμίδας.',
};

export const dynamic = 'force-dynamic';

export default async function ProsopoPage() {
  const prosopoTreatments = await getTreatments('prosopo');
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        className="prosopo-hero"
        style={{
          width: '100%',
          backgroundColor: 'rgb(244, 238, 224)',
          marginTop: '135px',
          overflow: 'hidden',
        }}
      >
        <div
          className="prosopo-hero-inner"
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            gap: '48px',
            padding: '56px 64px',
            minHeight: '420px',
          }}
        >
          <div className="prosopo-hero-text" style={{ flex: 1, maxWidth: '560px' }}>
            <h1
              style={{
                fontFamily: 'HarmoniaSans, sans-serif',
                fontSize: 'clamp(32px, 4.2vw, 52px)',
                fontWeight: 700,
                color: 'rgb(110, 90, 51)',
                lineHeight: 1.15,
                margin: '0 0 20px',
              }}
            >
              Θεραπείες Προσώπου
            </h1>
            <p
              style={{
                fontFamily: 'HarmoniaSans, sans-serif',
                fontSize: '16px',
                color: '#5a4a30',
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              Η φροντίδα προσώπου στο Advanced Derma εστιάζει στην{' '}
              <strong>υγεία και την ποιότητα του δέρματος</strong>, όχι απλώς στην επιφανειακή βελτίωση. Με{' '}
              <strong>σύγχρονες ιατρικές και αισθητικές τεχνικές</strong>, αντιμετωπίζονται σημάδια γήρανσης, ατέλειες και δυσχρωμίες, ενώ παράλληλα ενισχύεται η φυσική λάμψη του προσώπου. Οι θεραπείες βασίζονται σε{' '}
              <strong>τεχνολογίες αιχμής</strong> και υψηλής ποιότητας υλικά, πάντα προσαρμοσμένες στις ανάγκες κάθε επιδερμίδας. Στόχος είναι ένα{' '}
              <strong>φρέσκο, ξεκούραστο και φυσικό αποτέλεσμα</strong>, με σεβασμό στα χαρακτηριστικά του προσώπου και χωρίς υπερβολές.
            </p>
          </div>

          <div
            className="prosopo-hero-media"
            style={{
              flex: '0 0 46%',
              maxWidth: '46%',
              position: 'relative',
              height: '380px',
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0 8px 28px rgba(110, 90, 51, 0.18)',
            }}
          >
            <Image
              src="/images/prosopofotinieikona.png"
              alt="Θεραπείες Προσώπου"
              fill
              sizes="(max-width: 900px) 100vw, 46vw"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority
            />
          </div>
        </div>
      </section>

      {/* Treatments list */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 24px' }}>
        <TreatmentList treatments={prosopoTreatments} basePath="/el/ypiresies/prosopo" />
      </section>

      {/* Biofiller & Exosomes sections moved into their respective treatment pages
          (aytologo-biofiller / therapia-me-exosomata). */}

      <Footer />
    </>
  );
}
