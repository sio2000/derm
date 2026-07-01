import Image from 'next/image';

const credentials = [
  'Πτυχιούχος Ιατρικής Σχολής ΕΚΠΑ — ειδίκευση στο Νοσοκομείο «Ανδρέας Συγγρός»',
  'Μετεκπαίδευση με υποτροφία στην Κλινική & Αισθητική Δερματολογία και στις Εφαρμογές Laser (Denver Colorado Hospital)',
  'Μέλος της Ελληνικής Εταιρείας Δερματολογίας – Αφροδισιολογίας & της European / American Academy of Dermatology',
  'Εξειδίκευση σε ενέσιμες θεραπείες, μικρο-χειρουργική και θεραπείες ακμής',
];

const stats = [
  { value: '20+', label: 'Χρόνια εμπειρίας' },
  { value: '9K+', label: 'Ασθενείς' },
  { value: '4.000+', label: 'Θεραπείες' },
];

export default function WhyUsSection() {
  return (
    <div
      style={{
        width: '100%',
        minHeight: '667px',
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        padding: '60px 0',
      }}
    >
      <div
        className="ad-whyus-inner"
        style={{
          maxWidth: '1280px',
          width: '100%',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          gap: '48px',
          alignItems: 'center',
        }}
      >
        {/* Left: Doctor portrait */}
        <div className="ad-whyus-imgcol" style={{ flex: '0 0 443px' }}>
          <Image
            className="ad-whyus-img"
            src="/images/doctor.jpg"
            alt="Δρ. Χρυσούλα Ζήσιμου — Δερματολόγος, Αφροδισιολόγος"
            width={443}
            height={520}
            style={{
              width: '443px',
              height: '520px',
              objectFit: 'cover',
              objectPosition: 'top center',
              borderRadius: '8px',
            }}
          />
        </div>

        {/* Right: Biography */}
        <div style={{ flex: 1 }}>
          <p
            style={{
              fontFamily: 'HarmoniaSans, sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              color: 'rgb(147, 123, 76)',
              marginBottom: '12px',
            }}
          >
            Η Ιατρός μας
          </p>
          <h2
            className="ad-whyus-title"
            style={{
              fontFamily: 'HarmoniaSans, sans-serif',
              fontSize: '40px',
              fontWeight: 700,
              color: 'rgb(110, 90, 51)',
              marginBottom: '8px',
            }}
          >
            Δρ. Χρυσούλα Ζήσιμου
          </h2>
          <p
            style={{
              fontFamily: 'HarmoniaSans, sans-serif',
              fontSize: '16px',
              fontWeight: 500,
              color: 'rgb(147, 123, 76)',
              marginBottom: '24px',
            }}
          >
            Δερματολόγος – Αφροδισιολόγος
          </p>

          <p
            style={{
              fontFamily: 'HarmoniaSans, sans-serif',
              fontSize: '16px',
              color: '#444',
              lineHeight: 1.75,
              marginBottom: '16px',
            }}
          >
            Η Δρ. Χρυσούλα Ζήσιμου είναι Δερματολόγος – Αφροδισιολόγος με πάνω από 20 χρόνια
            εμπειρίας και διατηρεί ιδιωτικά ιατρεία στον Ζωγράφο και στον Πειραιά. Είναι
            πτυχιούχος της Ιατρικής Σχολής του ΕΚΠΑ και ειδικεύτηκε στη Δερματολογία στο
            Νοσοκομείο Δερματικών και Αφροδίσιων Νόσων «Ανδρέας Συγγρός», ενώ κατά τις σπουδές
            της έλαβε υποτροφία του Πανεπιστημίου Αθηνών.
          </p>
          <p
            style={{
              fontFamily: 'HarmoniaSans, sans-serif',
              fontSize: '16px',
              color: '#444',
              lineHeight: 1.75,
              marginBottom: '28px',
            }}
          >
            Υποψήφια Διδάκτωρ της Ιατρικής Σχολής του ΕΚΠΑ, μετεκπαιδεύτηκε με υποτροφία στην
            Κλινική και Αισθητική Δερματολογία και στις Εφαρμογές Laser. Διαθέτει έντονη
            συγγραφική δραστηριότητα με πλήθος επιστημονικών δημοσιεύσεων στην Ελλάδα και το
            εξωτερικό και συνεργάζεται με πολυδύναμες κλινικές σε{' '}
            <strong style={{ color: 'rgb(110, 90, 51)' }}>Κατάρ</strong> και{' '}
            <strong style={{ color: 'rgb(110, 90, 51)' }}>Μπαχρέιν</strong>.
          </p>

          <div
            className="ad-whyus-creds"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '14px 32px',
              marginBottom: '28px',
            }}
          >
            {credentials.map((text, i) => (
              <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span
                  style={{
                    flexShrink: 0,
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    backgroundColor: 'rgb(203, 179, 121)',
                    marginTop: '7px',
                  }}
                />
                <p
                  style={{
                    fontFamily: 'HarmoniaSans, sans-serif',
                    fontSize: '16px',
                    color: '#555',
                    lineHeight: 1.55,
                  }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>

          <div className="ad-whyus-stats" style={{ display: 'flex', gap: '40px' }}>
            {stats.map((s) => (
              <div key={s.label}>
                <div
                  style={{
                    fontFamily: 'HarmoniaSans, sans-serif',
                    fontSize: '40px',
                    fontWeight: 700,
                    color: 'rgb(110, 90, 51)',
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontFamily: 'HarmoniaSans, sans-serif',
                    fontSize: '16px',
                    color: '#777',
                    marginTop: '6px',
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
