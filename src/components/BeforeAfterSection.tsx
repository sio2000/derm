import Image from 'next/image';

/* Πριν & Μετά — όλα τα αρχεία αποτελεσμάτων από τον φάκελο public/images/results. */
type BAItem = { type: 'image' | 'video'; src: string };

const beforeAfter: BAItem[] = [
  // Εικόνες
  { type: 'image', src: '/images/results/bf.png' },
  { type: 'image', src: '/images/results/bf2.png' },
  { type: 'image', src: '/images/results/bf3.png' },
  { type: 'image', src: '/images/results/bf4.png' },
  { type: 'image', src: '/images/results/bf5.png' },
  { type: 'image', src: '/images/results/bf6.png' },
  { type: 'image', src: '/images/results/bf7.png' },
  { type: 'image', src: '/images/results/bf8.png' },
  { type: 'image', src: '/images/results/bf9.png' },
  { type: 'image', src: '/images/results/g03.png' },
  { type: 'image', src: '/images/results/1835.jpg' },
  { type: 'image', src: '/images/results/5061.jpg' },
  { type: 'image', src: '/images/results/9602.jpg' },
  { type: 'image', src: '/images/results/IMG_5061.JPG.jpeg' },
  { type: 'image', src: '/images/results/portada.jpg' },
  // Βίντεο
  { type: 'video', src: '/images/results/IMG_1942.mp4' },
  { type: 'video', src: '/images/results/IMG_1943.mp4' },
  { type: 'video', src: '/images/results/IMG_2647.mp4' },
  { type: 'video', src: '/images/results/IMG_3521.mp4' },
  { type: 'video', src: '/images/results/IMG_9016.mp4' },
];

export default function BeforeAfterSection() {
  return (
    <section style={{ width: '100%', backgroundColor: '#fff', padding: '60px 0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <p
          style={{
            fontFamily: 'HarmoniaSans, sans-serif',
            fontSize: '16px',
            fontWeight: 600,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: 'rgb(147, 123, 76)',
            textAlign: 'center',
            marginBottom: '12px',
          }}
        >
          Αποτελέσματα που μιλούν
        </p>
        <h2
          style={{
            fontFamily: 'HarmoniaSans, sans-serif',
            fontSize: '40px',
            fontWeight: 700,
            color: 'rgb(110, 90, 51)',
            textAlign: 'center',
            marginBottom: '16px',
          }}
        >
          Πριν &amp; Μετά
        </h2>
        <p
          style={{
            fontFamily: 'HarmoniaSans, sans-serif',
            fontSize: '16px',
            color: '#777',
            textAlign: 'center',
            marginBottom: '40px',
          }}
        >
          Δείτε πραγματικά αποτελέσματα θεραπειών του Advanced Derma
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '20px',
          }}
        >
          {beforeAfter.map((item, i) => (
            <div
              key={item.src}
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '3 / 4',
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 2px 14px rgba(110, 90, 51,0.12)',
                backgroundColor: 'rgb(244, 238, 224)',
              }}
            >
              {item.type === 'video' ? (
                <video
                  controls
                  playsInline
                  preload="metadata"
                  data-no-lightbox
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    backgroundColor: '#000',
                  }}
                >
                  <source src={item.src} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={item.src}
                  alt={`Πριν και Μετά — αποτέλεσμα θεραπείας ${i + 1}`}
                  fill
                  loading="lazy"
                  sizes="(max-width: 600px) 100vw, 260px"
                  style={{ objectFit: 'contain' }}
                />
              )}
            </div>
          ))}
        </div>

        <p
          style={{
            fontFamily: 'HarmoniaSans, sans-serif',
            fontSize: '16px',
            color: '#999',
            textAlign: 'center',
            marginTop: '28px',
          }}
        >
          * Τα αποτελέσματα ενδέχεται να διαφέρουν ανά άτομο. Όλες οι φωτογραφίες είναι πραγματικών ασθενών με τη συγκατάθεσή τους.
        </p>
      </div>
    </section>
  );
}
