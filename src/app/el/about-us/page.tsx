import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TreatmentCTA from '@/components/TreatmentCTA';

const doctorPhotos = Array.from({ length: 8 }, (_, i) => `/images/doctor-${i + 1}.jpg`);
const galleryImages = Array.from({ length: 32 }, (_, i) => `/images/gallery/g${String(i + 1).padStart(2, '0')}.png`);

export const metadata = {
  title: 'Σχετικά με εμάς | Advanced Derma',
  description: 'Γνωρίστε το Advanced Derma και τη Δρ. Χρυσούλα Ζήσιμου, Δερματολόγο – Αφροδισιολόγο με πάνω από 20 χρόνια εμπειρίας. Εξατομικευμένη φροντίδα, σύγχρονη τεχνολογία, ιατρεία σε Αθήνα & Πειραιά.',
};

export default function AboutUsPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '360px',
          marginTop: '135px',
          padding: '64px 24px',
          textAlign: 'center',
          overflow: 'hidden',
        }}
      >
        <Image
          src="/images/hero-about.jpg"
          alt="Φροντίδα προσώπου στο Advanced Derma"
          fill
          priority
          data-no-lightbox
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(110, 90, 51, 0.85) 0%, rgba(110, 90, 51, 0.6) 100%)',
          }}
        />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1
            style={{
              fontFamily: 'HarmoniaSans, sans-serif',
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: 700,
              color: '#fff',
              marginBottom: '16px',
            }}
          >
            Σχετικά με εμάς
          </h1>
          <p
            style={{
              fontFamily: 'HarmoniaSans, sans-serif',
              fontSize: '16px',
              color: 'rgba(255,255,255,0.85)',
              maxWidth: '580px',
              lineHeight: 1.6,
            }}
          >
Δερματολογία &amp; Αισθητική Ιατρική — η αισθητική συναντά την ιατρική επιστήμη
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '72px 24px' }}>
        <div
          className="about-intro-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) 340px',
            gap: '48px',
            alignItems: 'start',
            marginBottom: '48px',
          }}
        >
          <div>
        <h2
          style={{
            fontFamily: 'HarmoniaSans, sans-serif',
            fontSize: '40px',
            fontWeight: 700,
            color: 'rgb(110, 90, 51)',
            marginBottom: '24px',
          }}
        >
          Advanced Derma — Δρ. Χρυσούλα Ζήσιμου
        </h2>
        <p
          style={{
            fontFamily: 'HarmoniaSans, sans-serif',
            fontSize: '16px',
            lineHeight: 1.8,
            color: '#333',
            marginBottom: '24px',
          }}
        >
          Το Advanced Derma είναι ένα πρότυπο ιατρείο αισθητικής και κλινικής δερματολογίας, υπό τη διεύθυνση της Δρ. Χρυσούλας Ζήσιμου, Δερματολόγου – Αφροδισιολόγου με πάνω από 20 χρόνια εμπειρίας. Με δύο ιατρεία, στου Ζωγράφου (Αθήνα) και στον Πειραιά, προσφέρουμε ολοκληρωμένες υπηρεσίες δερματολογίας σε χιλιάδες ασθενείς κάθε χρόνο.
        </p>
        <p
          style={{
            fontFamily: 'HarmoniaSans, sans-serif',
            fontSize: '16px',
            lineHeight: 1.8,
            color: '#333',
            marginBottom: '24px',
          }}
        >
Η φιλοσοφία μας είναι απλή: κάθε ασθενής αξίζει εξατομικευμένη φροντίδα, βασισμένη στην επιστήμη και εκτελεσμένη με τα πλέον σύγχρονα ιατρικά εργαλεία. Η Δρ. Ζήσιμου είναι εξειδικευμένη τόσο στην αισθητική δερματολογία όσο και στη θεραπεία δερματικών παθήσεων, με ιδιαίτερη έμφαση στις θεραπείες ακμής, στις ενέσιμες θεραπείες και στις εφαρμογές laser.
        </p>
        <p
          style={{
            fontFamily: 'HarmoniaSans, sans-serif',
            fontSize: '16px',
            lineHeight: 1.8,
            color: '#333',
            marginBottom: '48px',
          }}
        >
          Δεσμευόμαστε για διαφάνεια, ασφάλεια και φυσικά αποτελέσματα — πάντα με σεβασμό στην ατομικότητα κάθε ασθενή.
        </p>
          </div>
          <div
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '3 / 4',
              borderRadius: '14px',
              overflow: 'hidden',
              boxShadow: '0 8px 30px rgba(110, 90, 51, 0.18)',
            }}
          >
            <Image
              src="/images/doctor-7.jpg"
              alt="Δρ. Χρυσούλα Ζήσιμου — Δερματολόγος, Αφροδισιολόγος"
              fill
              style={{ objectFit: 'cover', objectPosition: 'top center' }}
            />
          </div>
        </div>

        {/* Stats */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
            gap: '24px',
            marginBottom: '64px',
          }}
        >
          {[
            { number: '2', label: 'Ιατρεία — Αθήνα & Πειραιάς' },
            { number: '20+', label: 'Χρόνια εμπειρίας' },
            { number: '50+', label: 'Θεραπείες & υπηρεσίες' },
            { number: '9K+', label: 'Ικανοποιημένοι ασθενείς' },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                backgroundColor: 'rgb(244, 238, 224)',
                borderRadius: '12px',
                padding: '28px 20px',
                textAlign: 'center',
              }}
            >
              <p
                style={{
                  fontFamily: 'HarmoniaSans, sans-serif',
                  fontSize: '40px',
                  fontWeight: 700,
                  color: 'rgb(110, 90, 51)',
                  lineHeight: 1,
                  marginBottom: '8px',
                }}
              >
                {stat.number}
              </p>
              <p
                style={{
                  fontFamily: 'HarmoniaSans, sans-serif',
                  fontSize: '16px',
                  color: '#555',
                  lineHeight: 1.4,
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

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
      </section>

      {/* Doctor photos */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px 64px' }}>
        <p
          style={{
            fontFamily: 'HarmoniaSans, sans-serif',
            fontSize: '16px',
            fontWeight: 600,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: 'rgb(147, 123, 76)',
            marginBottom: '12px',
          }}
        >
          Η Ιατρός μας
        </p>
        <h2
          style={{
            fontFamily: 'HarmoniaSans, sans-serif',
            fontSize: '40px',
            fontWeight: 700,
            color: 'rgb(110, 90, 51)',
            marginBottom: '28px',
          }}
        >
          Στιγμές με τη Δρ. Χρυσούλα Ζήσιμου
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
            gap: '14px',
          }}
        >
          {doctorPhotos.map((src, i) => (
            <div
              key={src}
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '3 / 4',
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 2px 12px rgba(110, 90, 51,0.12)',
              }}
            >
              <Image
                src={src}
                alt={`Η Δρ. Χρυσούλα Ζήσιμου — φωτογραφία ${i + 1}`}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section style={{ width: '100%', backgroundColor: '#fff', padding: '0 0 80px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <p
              style={{
                fontFamily: 'HarmoniaSans, sans-serif',
                fontSize: '16px',
                fontWeight: 600,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: 'rgb(147, 123, 76)',
                marginBottom: '10px',
              }}
            >
              Gallery
            </p>
            <h2
              style={{
                fontFamily: 'HarmoniaSans, sans-serif',
                fontSize: '40px',
                fontWeight: 700,
                color: 'rgb(110, 90, 51)',
                marginBottom: '14px',
              }}
            >
              Αποτελέσματα Θεραπειών
            </h2>
            <span
              style={{
                display: 'block',
                width: '64px',
                height: '3px',
                margin: '0 auto 16px',
                borderRadius: '2px',
                background: 'linear-gradient(90deg, rgb(147, 123, 76), rgb(232, 213, 154))',
              }}
            />
            <p
              style={{
                fontFamily: 'HarmoniaSans, sans-serif',
                fontSize: '16px',
                color: '#777',
                maxWidth: '620px',
                margin: '0 auto',
                lineHeight: 1.6,
              }}
            >
              Πραγματικά περιστατικά από το Advanced Derma — δείτε τη διαφορά που κάνουν οι εξατομικευμένες θεραπείες μας.
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))',
              gap: '12px',
            }}
          >
            {galleryImages.map((src, i) => (
              <div
                key={src}
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '3 / 4',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  backgroundColor: 'rgb(244, 238, 224)',
                }}
              >
                <Image
                  src={src}
                  alt={`Αποτέλεσμα θεραπείας Advanced Derma ${i + 1}`}
                  fill
                  loading="lazy"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <TreatmentCTA
        title="Γνωρίστε από κοντά το Advanced Derma"
        description="Κλείστε το ραντεβού σας με τη Δρ. Χρυσούλα Ζήσιμου και ανακαλύψτε μια εξατομικευμένη προσέγγιση φροντίδας δέρματος, βασισμένη στην επιστήμη και την εμπειρία 20 ετών, σε Αθήνα και Πειραιά."
      />

      <Footer />
    </>
  );
}
