import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Blog | Advanced Derma',
  description: 'Άρθρα και συμβουλές από τους ειδικούς δερματολόγους των Advanced Derma. Ενημερωθείτε για θεραπείες, φροντίδα δέρματος και τάσεις αισθητικής.',
};

const blogPosts = [
  {
    slug: 'ti-einai-to-dermapen',
    title: 'Τι είναι το DermaPen και πώς λειτουργεί;',
    excerpt: 'Το DermaPen είναι μια από τις πιο δημοφιλείς θεραπείες αναζωογόνησης δέρματος. Μάθετε πώς η μικροβελόνα τεχνολογία μετασχηματίζει την επιδερμίδα σας.',
    date: '12 Ιουνίου 2026',
    category: 'Θεραπείες Προσώπου',
    readTime: '4 λεπτά',
  },
  {
    slug: 'botox-vs-fillers',
    title: 'Botox vs Fillers: Ποια θεραπεία είναι κατάλληλη για εσάς;',
    excerpt: 'Δύο από τις πιο διάσημες αισθητικές θεραπείες αντιμετωπίζουν διαφορετικά προβλήματα. Ανακαλύψτε τις διαφορές και πώς να επιλέξετε σωστά.',
    date: '5 Ιουνίου 2026',
    category: 'Αισθητική',
    readTime: '5 λεπτά',
  },
  {
    slug: 'dermatoskopisi-importance',
    title: 'Γιατί η δερματοσκόπηση είναι απαραίτητη κάθε χρόνο',
    excerpt: 'Η πρώιμη ανίχνευση του μελανώματος σώζει ζωές. Μάθετε γιατί η ετήσια δερματοσκόπηση αποτελεί μια από τις πιο σημαντικές προληπτικές εξετάσεις.',
    date: '28 Μαΐου 2026',
    category: 'Κλινική Δερματολογία',
    readTime: '3 λεπτά',
  },
  {
    slug: 'xrisi-antisiliakis-kremias',
    title: 'Αντηλιακή κρέμα: Πώς να την εφαρμόζετε σωστά',
    excerpt: 'Η σωστή χρήση αντηλιακής κρέμας είναι η πιο αποτελεσματική αντιγηραντική φροντίδα. Οι δερματολόγοι μας εξηγούν τα μυστικά της σωστής προστασίας.',
    date: '20 Μαΐου 2026',
    category: 'Φροντίδα Δέρματος',
    readTime: '4 λεπτά',
  },
  {
    slug: 'akmi-enilikes',
    title: 'Ακμή σε ενήλικες: Αιτίες και σύγχρονες θεραπείες',
    excerpt: 'Η ακμή δεν αφορά μόνο τους εφήβους. Ανακαλύψτε γιατί εμφανίζεται στους ενήλικες και ποιες θεραπείες είναι οι πιο αποτελεσματικές.',
    date: '12 Μαΐου 2026',
    category: 'Κλινική Δερματολογία',
    readTime: '6 λεπτά',
  },
  {
    slug: 'kryolipoli-apotelesma',
    title: 'Κρυολιπόλυση: Τι να περιμένετε μετά τη θεραπεία',
    excerpt: 'Πόσο καιρό χρειάζεται για να δείτε αποτελέσματα κρυολιπόλυσης; Ο πλήρης οδηγός αποθεραπείας και προσδοκιών.',
    date: '4 Μαΐου 2026',
    category: 'Θεραπείες Σώματος',
    readTime: '5 λεπτά',
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        style={{
          width: '100%',
          background: 'linear-gradient(135deg, rgb(110, 90, 51) 0%, rgb(150,70,35) 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '280px',
          marginTop: '135px',
          padding: '56px 24px',
          textAlign: 'center',
        }}
      >
        <div>
          <h1
            style={{
              fontFamily: 'HarmoniaSans, sans-serif',
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: 700,
              color: '#fff',
              marginBottom: '12px',
            }}
          >
            Blog
          </h1>
          <p
            style={{
              fontFamily: 'HarmoniaSans, sans-serif',
              fontSize: '16px',
              color: 'rgba(255,255,255,0.85)',
            }}
          >
            Συμβουλές και ενημέρωση από τους ειδικούς μας
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '64px 24px 96px' }}>
        <div
          className="ad-rgrid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '36px',
          }}
        >
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/el/blog/${post.slug}/`}
              style={{ textDecoration: 'none' }}
            >
              <article
                style={{
                  backgroundColor: '#fff',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 12px rgba(110, 90, 51,0.08)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid rgb(244, 238, 224)',
                }}
              >
                <div
                  style={{
                    backgroundColor: 'rgb(244, 238, 224)',
                    height: '160px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <rect x="8" y="10" width="32" height="4" rx="2" fill="rgb(110, 90, 51)" fillOpacity="0.3" />
                    <rect x="8" y="20" width="28" height="3" rx="1.5" fill="rgb(110, 90, 51)" fillOpacity="0.25" />
                    <rect x="8" y="28" width="24" height="3" rx="1.5" fill="rgb(110, 90, 51)" fillOpacity="0.2" />
                    <rect x="8" y="36" width="20" height="3" rx="1.5" fill="rgb(110, 90, 51)" fillOpacity="0.15" />
                  </svg>
                </div>
                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '12px', alignItems: 'center' }}>
                    <span
                      style={{
                        backgroundColor: 'rgb(244, 238, 224)',
                        color: 'rgb(110, 90, 51)',
                        fontFamily: 'HarmoniaSans, sans-serif',
                        fontSize: '16px',
                        fontWeight: 600,
                        padding: '3px 10px',
                        borderRadius: '20px',
                      }}
                    >
                      {post.category}
                    </span>
                    <span
                      style={{
                        fontFamily: 'HarmoniaSans, sans-serif',
                        fontSize: '16px',
                        color: '#999',
                      }}
                    >
                      {post.readTime}
                    </span>
                  </div>
                  <h2
                    style={{
                      fontFamily: 'HarmoniaSans, sans-serif',
                      fontSize: '16px',
                      fontWeight: 700,
                      color: 'rgb(110, 90, 51)',
                      marginBottom: '10px',
                      lineHeight: 1.35,
                    }}
                  >
                    {post.title}
                  </h2>
                  <p
                    style={{
                      fontFamily: 'HarmoniaSans, sans-serif',
                      fontSize: '16px',
                      color: '#666',
                      lineHeight: 1.6,
                      flex: 1,
                    }}
                  >
                    {post.excerpt}
                  </p>
                  <p
                    style={{
                      fontFamily: 'HarmoniaSans, sans-serif',
                      fontSize: '16px',
                      color: '#aaa',
                      marginTop: '16px',
                    }}
                  >
                    {post.date}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
