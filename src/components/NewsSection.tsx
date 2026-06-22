import Link from 'next/link';

export default function NewsSection() {
  return (
    <div
      style={{
        width: '100%',
        minHeight: '405px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        className="ad-news"
        style={{
          maxWidth: '1400px',
          width: '100%',
          margin: '0 auto',
          backgroundImage: "url('/images/treatment-prx-t33.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'right center',
          minHeight: '405px',
          display: 'flex',
          alignItems: 'center',
          padding: '64px 80px 64px 40px',
          borderRadius: '4px',
        }}
      >
        <div
          className="ad-news-copy"
          style={{
            maxWidth: '560px',
          }}
        >
          <h2
            className="ad-news-title"
            style={{
              fontFamily: 'HarmoniaSans, sans-serif',
              fontSize: '40px',
              fontWeight: 700,
              color: 'rgb(110, 90, 51)',
              marginBottom: '16px',
              lineHeight: 1.2,
            }}
          >
            Μάιος: Μήνας Πρόληψης & Ενημέρωσης για τον Καρκίνο του Δέρματος
          </h2>
          <p
            style={{
              fontFamily: 'HarmoniaSans, sans-serif',
              fontSize: '16px',
              color: 'rgb(110, 90, 51)',
              lineHeight: 1.6,
              marginBottom: '28px',
            }}
          >
            Ο καρκίνος του δέρματος είναι ο{' '}
            <strong>συχνότερος τύπος καρκίνου</strong>, αλλά παραμένει σε μεγάλο βαθμό ιάσιμος όταν διαγνωστεί έγκαιρα!
          </p>
          <Link
            href="/el/news/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgb(203, 179, 121)',
              color: '#000',
              fontFamily: 'HarmoniaSans, sans-serif',
              fontSize: '16px',
              fontWeight: 500,
              padding: '10px 20px',
              borderRadius: '4px',
              textDecoration: 'none',
              transition: 'background-color 0.2s',
            }}
          >
            Ενημερωθείτε εδώ
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
