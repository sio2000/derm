import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const blogPosts: Record<string, { title: string; date: string; category: string; content: string }> = {
  'ti-einai-to-dermapen': {
    title: 'Τι είναι το DermaPen και πώς λειτουργεί;',
    date: '12 Ιουνίου 2026',
    category: 'Θεραπείες Προσώπου',
    content: `Το DermaPen είναι μια επαναστατική θεραπεία μικροβελόνας που χρησιμοποιεί ελεγχόμενες μικροτρώσεις για να διεγείρει τη φυσική ανανέωση του δέρματος. Η διαδικασία δημιουργεί χιλιάδες μικροσκοπικές τρώσεις στην επιδερμίδα, οι οποίες ενεργοποιούν τη φυσική θεραπευτική απόκριση του οργανισμού.

Το αποτέλεσμα είναι η αυξημένη παραγωγή κολλαγόνου και ελαστίνης, δύο πρωτεϊνών που είναι υπεύθυνες για τη σφριγηλότητα και την ελαστικότητα του δέρματος. Με τον καιρό, αυτές οι πρωτεΐνες μειώνονται, οδηγώντας σε ρυτίδες και χαλάρωση.

Το DermaPen είναι ιδανικό για ουλές ακμής, λεπτές ρυτίδες, ανομοιόμορφη υφή δέρματος, διευρυμένους πόρους και δυσχρωμίες. Τα αποτελέσματα είναι ορατά μετά από 3-4 συνεδρίες, με πλήρη αποτελέσματα να εμφανίζονται σε 3-6 μήνες.`,
  },
  'botox-vs-fillers': {
    title: 'Botox vs Fillers: Ποια θεραπεία είναι κατάλληλη για εσάς;',
    date: '5 Ιουνίου 2026',
    category: 'Αισθητική',
    content: `Το Botox και τα Fillers είναι οι δύο πιο δημοφιλείς αισθητικές θεραπείες, αλλά λειτουργούν με εντελώς διαφορετικούς τρόπους.

Η νευροτοξίνη (Botox) χαλαρώνει τους μυς που δημιουργούν εκφραστικές ρυτίδες. Είναι ιδανική για ρυτίδες μετώπου, χηνοπόδια και ρυτίδες μεσοφρύου. Τα αποτελέσματα διαρκούν 4-6 μήνες.

Τα Fillers υαλουρονικού οξέος αναπληρώνουν τον χαμένο όγκο και γεμίζουν ρυτίδες. Χρησιμοποιούνται για χείλη, παρειές, ρυτίδες ναζογένειες και γενικά για αποκατάσταση όγκου στο πρόσωπο. Τα αποτελέσματα διαρκούν 12-18 μήνες.

Η επιλογή ανάμεσα στις δύο θεραπείες εξαρτάται από τις ανάγκες σας. Ο δερματολόγος μας θα σας βοηθήσει να αποφασίσετε τη σωστή προσέγγιση για εσάς.`,
  },
};

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];
  if (!post) return { title: 'Blog | Advanced Derma' };
  return {
    title: `${post.title} | Blog | Advanced Derma`,
    description: post.content.slice(0, 160),
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug] ?? {
    title: 'Άρθρο Blog',
    date: '',
    category: 'Blog',
    content: 'Το άρθρο αυτό είναι σύντομα διαθέσιμο. Ευχαριστούμε για την υπομονή σας.',
  };

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        style={{
          width: '100%',
          background: 'linear-gradient(135deg, rgb(110, 90, 51) 0%, rgb(150,70,35) 100%)',
          display: 'flex',
          alignItems: 'flex-end',
          minHeight: '320px',
          marginTop: '135px',
          padding: '56px 64px',
        }}
      >
        <div style={{ maxWidth: '800px' }}>
          <div
            style={{
              display: 'inline-block',
              backgroundColor: 'rgb(203, 179, 121)',
              color: 'rgb(110, 90, 51)',
              fontFamily: 'HarmoniaSans, sans-serif',
              fontSize: '16px',
              fontWeight: 700,
              padding: '4px 12px',
              borderRadius: '20px',
              marginBottom: '16px',
            }}
          >
            {post.category}
          </div>
          <h1
            style={{
              fontFamily: 'HarmoniaSans, sans-serif',
              fontSize: 'clamp(24px, 3.5vw, 44px)',
              fontWeight: 700,
              color: '#fff',
              lineHeight: 1.25,
            }}
          >
            {post.title}
          </h1>
          {post.date && (
            <p
              style={{
                fontFamily: 'HarmoniaSans, sans-serif',
                fontSize: '16px',
                color: 'rgba(255,255,255,0.7)',
                marginTop: '12px',
              }}
            >
              {post.date}
            </p>
          )}
        </div>
      </section>

      {/* Breadcrumb */}
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '20px 24px 0',
          display: 'flex',
          gap: '8px',
          alignItems: 'center',
        }}
      >
        {[
          { label: 'Αρχική', href: '/' },
          { label: 'Blog', href: '/el/blog/' },
          { label: post.title, href: null },
        ].map((crumb, idx, arr) => (
          <span key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {crumb.href ? (
              <Link
                href={crumb.href}
                style={{
                  fontFamily: 'HarmoniaSans, sans-serif',
                  fontSize: '16px',
                  color: 'rgb(110, 90, 51)',
                  textDecoration: 'none',
                  opacity: 0.75,
                }}
              >
                {crumb.label}
              </Link>
            ) : (
              <span
                style={{
                  fontFamily: 'HarmoniaSans, sans-serif',
                  fontSize: '16px',
                  color: 'rgb(110, 90, 51)',
                  fontWeight: 600,
                  maxWidth: '300px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {crumb.label}
              </span>
            )}
            {idx < arr.length - 1 && (
              <span style={{ color: 'rgba(110, 90, 51,0.4)', fontSize: '16px' }}>›</span>
            )}
          </span>
        ))}
      </div>

      {/* Content */}
      <section style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 24px 80px' }}>
        {post.content.split('\n\n').map((para, i) => (
          <p
            key={i}
            style={{
              fontFamily: 'HarmoniaSans, sans-serif',
              fontSize: '16px',
              lineHeight: 1.8,
              color: '#333',
              marginBottom: '24px',
            }}
          >
            {para}
          </p>
        ))}

        {/* CTA */}
        <div
          style={{
            backgroundColor: 'rgb(244, 238, 224)',
            borderRadius: '12px',
            padding: '36px',
            marginTop: '48px',
            textAlign: 'center',
          }}
        >
          <h3
            style={{
              fontFamily: 'HarmoniaSans, sans-serif',
              fontSize: '40px',
              fontWeight: 700,
              color: 'rgb(110, 90, 51)',
              marginBottom: '12px',
            }}
          >
            Θέλετε να μάθετε περισσότερα;
          </h3>
          <p
            style={{
              fontFamily: 'HarmoniaSans, sans-serif',
              fontSize: '16px',
              color: '#555',
              marginBottom: '24px',
            }}
          >
            Κλείστε ραντεβού με έναν από τους εξειδικευμένους δερματολόγους μας.
          </p>
          <Link
            href="/el/booking-request/"
            style={{
              display: 'inline-block',
              backgroundColor: 'rgb(203, 179, 121)',
              color: '#000',
              fontFamily: 'HarmoniaSans, sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              padding: '12px 32px',
              borderRadius: '6px',
              textDecoration: 'none',
            }}
          >
            Κλείστε Ραντεβού
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
