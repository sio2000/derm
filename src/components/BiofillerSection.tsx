const tags = ['Αυτόλογο', 'Βιο-ενέσιμο', 'Φυσική γραμμή'];

export default function BiofillerSection() {
  return (
    <section style={{ width: '100%', backgroundColor: '#fff', padding: '60px 0' }}>
      <div
        className="ad-rgrid"
        style={{
          maxWidth: '1180px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '48px',
          alignItems: 'center',
        }}
      >
        {/* Copy */}
        <div>
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
            Νέα Τεχνική
          </p>
          <h2
            style={{
              fontFamily: 'HarmoniaSans, sans-serif',
              fontSize: '40px',
              fontWeight: 700,
              color: 'rgb(110, 90, 51)',
              lineHeight: 1.1,
              marginBottom: '6px',
            }}
          >
            Biofiller
          </h2>
          <p
            style={{
              fontFamily: 'HarmoniaSans, sans-serif',
              fontSize: '16px',
              fontStyle: 'italic',
              color: 'rgb(147, 123, 76)',
              marginBottom: '20px',
            }}
          >
            Φυσική Αναδόμηση Όγκου
          </p>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
            {tags.map((t) => (
              <span
                key={t}
                style={{
                  fontFamily: 'HarmoniaSans, sans-serif',
                  fontSize: '16px',
                  fontWeight: 600,
                  letterSpacing: '0.5px',
                  color: 'rgb(110, 90, 51)',
                  backgroundColor: 'rgb(244, 238, 224)',
                  padding: '6px 14px',
                  borderRadius: '20px',
                }}
              >
                {t}
              </span>
            ))}
          </div>

          <p
            style={{
              fontFamily: 'HarmoniaSans, sans-serif',
              fontSize: '16px',
              color: '#444',
              lineHeight: 1.75,
              marginBottom: '14px',
            }}
          >
            Το <strong>Biofiller</strong> αξιοποιεί τα δικά σας κύτταρα για εντοπισμένη αποκατάσταση
            όγκου και λείας επιφάνειας, χωρίς συνθετικά υλικά, με φυσική ενσωμάτωση στο υπάρχον
            λίπος και ήπια, φυσική αισθητική.
          </p>
          <p
            style={{
              fontFamily: 'HarmoniaSans, sans-serif',
              fontSize: '16px',
              color: '#444',
              lineHeight: 1.75,
            }}
          >
            Ιδανικό για αρμονικές διορθώσεις στο πρόσωπο και στις περιοχές που χρειάζονται «ζωντανή»
            πλήρωση, χωρίς την αίσθηση ξένου σώματος. Η εφαρμογή γίνεται με εξατομικευμένο πλάνο, με
            έμφαση στην ασφάλεια και στο ρεαλιστικό αποτέλεσμα.
          </p>
        </div>

        {/* Video */}
        <div
          style={{
            position: 'relative',
            borderRadius: '14px',
            overflow: 'hidden',
            boxShadow: '0 8px 30px rgba(110, 90, 51,0.18)',
            backgroundColor: 'rgb(244, 238, 224)',
          }}
        >
          <video
            className="biofiller-video"
            controls
            playsInline
            preload="metadata"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          >
            <source src="/videos/biofiller.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
