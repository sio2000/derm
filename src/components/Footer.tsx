'use client';
import Image from 'next/image';
import Link from 'next/link';

const clinicLinks = [
  { label: 'Advanced Derma Αθήνα', href: '/el/dermatologiko-iatreio/athina/' },
  { label: 'Advanced Derma Πειραιάς', href: '/el/dermatologiko-iatreio/peiraias/' },
];

const serviceLinks = [
  { label: 'Θεραπείες Προσώπου', href: '/el/ypiresies/prosopo/' },
  { label: 'Θεραπείες Σώματος', href: '/el/ypiresies/soma/' },
  { label: 'Κλινική Δερματολογία', href: '/el/ypiresies/kliniki-dermatologia/' },
];

const companyLinks = [
  { label: 'Η Ιατρός μας', href: '/el/about-us/' },
  { label: 'Τα Ιατρεία μας', href: '/el/dermatologika-iatreia/' },
  { label: 'Κλείστε Ραντεβού', href: '/el/booking-request/' },
  { label: 'Πολιτική Προστασίας Προσωπικών Δεδομένων', href: '/el/dilosi-aporritoy-prosopikon-dedomenon/' },
  { label: 'Πολιτική Cookies', href: '/el/politiki-cookies/' },
];

const instagramAccounts = [
  { handle: '@advanced_derma', href: 'https://www.instagram.com/advanced_derma/' },
  { handle: '@advanced_laser_', href: 'https://www.instagram.com/advanced_laser_/' },
  { handle: '@advanced_peiraias', href: 'https://www.instagram.com/advanced_peiraias/' },
  { handle: '@chrysoula_zisimou', href: 'https://www.instagram.com/chrysoula_zisimou/' },
];

export default function Footer() {
  return (
    <footer
      style={{
        width: '100%',
        backgroundColor: 'rgb(244, 238, 224)',
        padding: '48px 0 32px',
        minHeight: '468px',
      }}
    >
      <div
        className="ad-footer-grid"
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'grid',
          gridTemplateColumns: '220px 1fr 1fr 1fr',
          gap: '48px',
          alignItems: 'start',
        }}
      >
        {/* Logo column */}
        <div>
          <div style={{ marginBottom: '8px' }}>
            <Image
              src="/images/newlogo.png"
              alt="Advanced Derma"
              width={120}
              height={120}
              style={{ width: '120px', height: 'auto', paddingLeft: '16px', paddingTop: '8px', paddingBottom: '8px' }}
            />
          </div>
          <p
            style={{
              fontFamily: 'HarmoniaSans, sans-serif',
              fontSize: '16px',
              color: 'rgba(110, 90, 51,0.85)',
              lineHeight: 1.6,
              paddingLeft: '16px',
              marginBottom: '16px',
              maxWidth: '200px',
            }}
          >
            Δερματολογία &amp; Αισθητική Ιατρική υπό τη διεύθυνση της Δρ. Χρυσούλας Ζήσιμου, σε Αθήνα και Πειραιά.
          </p>
          {/* Social icons */}
          <div style={{ display: 'flex', gap: '12px', paddingLeft: '16px', marginTop: '16px', flexWrap: 'wrap' }}>
            <Link
              href="https://www.facebook.com/advancedermaa/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook — Advanced Derma"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'rgb(110, 90, 51)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                transition: 'opacity 0.2s',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </Link>
          </div>
          {/* Instagram usernames (text links only) */}
          <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0 0', paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {instagramAccounts.map((acc) => (
              <li key={acc.handle}>
                <a
                  href={acc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontFamily: 'HarmoniaSans, sans-serif', fontSize: '16px', color: 'rgba(110, 90, 51,0.9)' }}
                >
                  {acc.handle}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Clinics */}
        <div>
          <h4
            style={{
              fontFamily: 'HarmoniaSans, sans-serif',
              fontSize: '16px',
              fontWeight: 700,
              color: 'rgb(110, 90, 51)',
              marginBottom: '16px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}
          >
            Ιατρεία
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {clinicLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  style={{
                    fontFamily: 'HarmoniaSans, sans-serif',
                    fontSize: '16px',
                    color: 'rgb(110, 90, 51)',
                    textDecoration: 'none',
                    transition: 'opacity 0.15s',
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <h4
            style={{
              fontFamily: 'HarmoniaSans, sans-serif',
              fontSize: '16px',
              fontWeight: 700,
              color: 'rgb(110, 90, 51)',
              margin: '24px 0 12px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}
          >
            Επικοινωνία
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <li>
              <a href="tel:+306975105858" style={{ fontFamily: 'HarmoniaSans, sans-serif', fontSize: '16px', color: 'rgb(110, 90, 51)' }}>
                Αθήνα: 697 510 5858
              </a>
            </li>
            <li>
              <a href="tel:+302168093444" style={{ fontFamily: 'HarmoniaSans, sans-serif', fontSize: '16px', color: 'rgb(110, 90, 51)' }}>
                Σταθερό: 216 809 3444
              </a>
            </li>
            <li>
              <a href="tel:+306936717377" style={{ fontFamily: 'HarmoniaSans, sans-serif', fontSize: '16px', color: 'rgb(110, 90, 51)' }}>
                Πειραιάς: 693 671 7377
              </a>
            </li>
            <li>
              <a href="mailto:advaderma@gmail.com" style={{ fontFamily: 'HarmoniaSans, sans-serif', fontSize: '16px', color: 'rgb(110, 90, 51)' }}>
                advaderma@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4
            style={{
              fontFamily: 'HarmoniaSans, sans-serif',
              fontSize: '16px',
              fontWeight: 700,
              color: 'rgb(110, 90, 51)',
              marginBottom: '16px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}
          >
            Θεραπείες
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {serviceLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  style={{
                    fontFamily: 'HarmoniaSans, sans-serif',
                    fontSize: '16px',
                    color: 'rgb(110, 90, 51)',
                    textDecoration: 'none',
                    transition: 'opacity 0.15s',
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4
            style={{
              fontFamily: 'HarmoniaSans, sans-serif',
              fontSize: '16px',
              fontWeight: 700,
              color: 'rgb(110, 90, 51)',
              marginBottom: '16px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}
          >
            Ιατρείο
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {companyLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  style={{
                    fontFamily: 'HarmoniaSans, sans-serif',
                    fontSize: '16px',
                    color: 'rgb(110, 90, 51)',
                    textDecoration: 'none',
                    transition: 'opacity 0.15s',
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: '1280px',
          margin: '32px auto 0',
          padding: '16px 24px 0',
          borderTop: '1px solid rgba(110, 90, 51,0.2)',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px 24px',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <p
          style={{
            fontFamily: 'HarmoniaSans, sans-serif',
            fontSize: '16px',
            color: 'rgba(110, 90, 51,0.7)',
          }}
        >
          © {new Date().getFullYear()} Advanced Derma — Δρ. Χρυσούλα Ζήσιμου. Με επιφύλαξη παντός δικαιώματος.
        </p>
        <p
          style={{
            fontFamily: 'HarmoniaSans, sans-serif',
            fontSize: '16px',
            color: 'rgba(110, 90, 51,0.7)',
          }}
        >
          Powered by{' '}
          <a
            href="https://devtaskhub.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'rgb(110, 90, 51)', fontWeight: 600, textDecoration: 'underline' }}
          >
            Devtaskhub.com
          </a>
        </p>
      </div>
    </footer>
  );
}
