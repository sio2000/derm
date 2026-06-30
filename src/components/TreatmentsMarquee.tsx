'use client';

// Rotating treatments bar shown directly under the Hero section.
// Treatments reflect the Advanced Derma service catalogue; colours follow the
// gold/bronze branding of the new project.
const ITEMS = [
  'BOTOX',
  'Υαλουρονικό Οξύ',
  'Skin Boosters',
  'Πολυνουκλεοτίδια',
  'Fractional Laser',
  'Χημικό Peeling',
  'Μεσοθεραπεία',
  'Laser Αποτρίχωση',
  'Βιοαναζωογόνηση',
  'Κλινική Δερματολογία',
  'Χαρτογράφηση Σπίλων',
] as const;

function Group({ suffix }: { suffix: string }) {
  return (
    <span className="ad-marquee-group">
      {ITEMS.map((label) => (
        <span key={`${suffix}-${label}`} className="ad-marquee-group">
          <span className="ad-marquee-item">{label}</span>
          <span className="ad-marquee-dot">◆</span>
        </span>
      ))}
    </span>
  );
}

export default function TreatmentsMarquee() {
  return (
    <div className="ad-marquee-strip" role="presentation" aria-hidden>
      <div className="ad-marquee-track">
        <Group suffix="a" />
        <Group suffix="b" />
      </div>
    </div>
  );
}
