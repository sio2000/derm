import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TreatmentList from '@/components/TreatmentList';
import { somaTreatments } from '@/data/treatments';

export const metadata = {
  title: 'Θεραπείες Σώματος | Advanced Derma',
  description: 'Ανακαλύψτε τις θεραπείες σώματος στα δερματολογικά ιατρεία Advanced Derma. Σύγχρονες αισθητικές λύσεις για σύσφιξη, κυτταρίτιδα και αναδιαμόρφωση σιλουέτας.',
};

export default function SomaPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          height: '420px',
          backgroundColor: 'rgb(110, 90, 51)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          marginTop: '135px',
        }}
      >
        <Image
          src="/images/body-treatments.png"
          alt="Θεραπείες Σώματος"
          fill
          style={{ objectFit: 'cover', opacity: 0.35 }}
          priority
        />
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 24px' }}>
          <h1
            style={{
              fontFamily: 'HarmoniaSans, sans-serif',
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: 700,
              color: '#fff',
              marginBottom: '16px',
            }}
          >
            Θεραπείες Σώματος
          </h1>
          <p
            style={{
              fontFamily: 'HarmoniaSans, sans-serif',
              fontSize: '16px',
              color: 'rgba(255,255,255,0.9)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Αισθητικές λύσεις για σύσφιξη, κυτταρίτιδα και αναδιαμόρφωση σιλουέτας
          </p>
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
