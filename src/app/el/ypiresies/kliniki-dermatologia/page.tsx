import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TreatmentList from '@/components/TreatmentList';
import { getTreatments } from '@/lib/content/treatments';

export const metadata = {
  title: 'Κλινική Δερματολογία | Advanced Derma',
  description: 'Εξειδικευμένη κλινική δερματολογία στα ιατρεία Advanced Derma. Διάγνωση και θεραπεία δερματικών παθήσεων με σύγχρονα πρωτόκολλα.',
};

export const dynamic = 'force-dynamic';

export default async function KlinikiDermatologiaPage() {
  const klinikiTreatments = await getTreatments('kliniki-dermatologia');
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
              Κλινική Δερματολογία
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
              Η κλινική δερματολογία εστιάζει στην ουσιαστική{' '}
              <strong>φροντίδα</strong> και την υγεία του δέρματος. Κάθε περιστατικό αξιολογείται{' '}
              <strong>εξατομικευμένα</strong> από <strong>εξειδικευμένο δερματολόγο</strong>, με στόχο τη{' '}
              <strong>σωστή διάγνωση</strong> και την{' '}
              <strong>αποτελεσματική αντιμετώπιση δερματικών παθήσεων</strong>. Με τη χρήση{' '}
              <strong>σύγχρονων διαγνωστικών</strong> μεθόδων και ιατρικών πρωτοκόλλων, δίνεται έμφαση τόσο στη θεραπεία όσο και στην{' '}
              <strong>πρόληψη</strong>.
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
              src="/images/kliniki.png"
              alt="Κλινική Δερματολογία"
              fill
              sizes="(max-width: 900px) 100vw, 46vw"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority
            />
          </div>
        </div>
      </section>

      {/* Video section */}
      <section style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px 64px' }}>
        <div style={{ width: '100%', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 8px 28px rgba(110, 90, 51, 0.18)' }}>
          <video
            src="/images/IMG_2632.mp4"
            controls
            style={{ width: '100%', display: 'block', maxHeight: '400px' }}
          />
        </div>
      </section>

      {/* Treatments list */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 24px' }}>
        <TreatmentList treatments={klinikiTreatments} basePath="/el/ypiresies/kliniki-dermatologia" />
      </section>

      <Footer />
    </>
  );
}
