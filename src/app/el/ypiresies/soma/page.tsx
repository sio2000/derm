import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TreatmentList from '@/components/TreatmentList';
import { getTreatments } from '@/lib/content/treatments';

export const metadata = {
  title: 'Θεραπείες Σώματος | Advanced Derma',
  description: 'Ανακαλύψτε τις θεραπείες σώματος στα δερματολογικά ιατρεία Advanced Derma. Σύγχρονες αισθητικές λύσεις για σύσφιξη, κυτταρίτιδα και αναδιαμόρφωση σιλουέτας.',
};

export const dynamic = 'force-dynamic';

export default async function SomaPage() {
  const somaTreatments = await getTreatments('soma');
  return (
    <>
      <Navbar />

      {/* Hero — same structure as the prosopo hero (text + clean image, side by
          side on desktop; on mobile the title/copy stacks first, image below). */}
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
              Σώμα
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
              Η φροντίδα του σώματος βασίζεται στον συνδυασμό ιατρικής{' '}
              <strong>γνώσης</strong>, σύγχρονης <strong>τεχνολογίας</strong> και εξατομικευμένων{' '}
              <strong>πρωτοκόλλων</strong>. Κάθε θεραπεία σχεδιάζεται σύμφωνα με τις ανάγκες του σώματος, με στόχο τη βελτίωση της{' '}
              <strong>υφής</strong> του δέρματος, τη <strong>σύσφιγξη</strong> και τη συνολική{' '}
              <strong>αναδιαμόρφωση της σιλουέτας</strong>. Χρησιμοποιούνται προηγμένα μηχανήματα και πιστοποιημένα υλικά, με έμφαση στην ασφάλεια και στο φυσικό αποτέλεσμα.
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
              src="/images/body-treatments.png"
              alt="Θεραπείες Σώματος"
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
        <TreatmentList treatments={somaTreatments} basePath="/el/ypiresies/soma" />
      </section>

      <Footer />
    </>
  );
}
