import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Κλείστε Ραντεβού | Advanced Derma',
  description: 'Κλείστε ραντεβού στα δερματολογικά ιατρεία Advanced Derma. Εύκολη και γρήγορη διαδικασία online.',
};

export default function BookingRequestPage() {
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
              fontSize: 'clamp(28px, 4vw, 52px)',
              fontWeight: 700,
              color: '#fff',
              marginBottom: '12px',
            }}
          >
            Κλείστε Ραντεβού
          </h1>
          <p
            style={{
              fontFamily: 'HarmoniaSans, sans-serif',
              fontSize: '16px',
              color: 'rgba(255,255,255,0.85)',
              maxWidth: '500px',
            }}
          >
            Συμπληρώστε τη φόρμα και θα επικοινωνήσουμε μαζί σας άμεσα
          </p>
        </div>
      </section>

      {/* Form + Contact Sidebar */}
      <section
        style={{
          maxWidth: '1120px',
          margin: '0 auto',
          padding: '72px 24px 96px',
        }}
      >
        <div
          className="ad-booking-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr',
            gap: '32px',
          }}
        >
          <form
            className="ad-booking-form"
            style={{
              backgroundColor: '#fff',
              borderRadius: '16px',
              padding: '48px',
              boxShadow: '0 4px 24px rgba(110, 90, 51,0.1)',
            }}
          >
            <div className="ad-booking-names" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
              <div>
                <label
                  htmlFor="firstName"
                  style={{
                    fontFamily: 'HarmoniaSans, sans-serif',
                    fontSize: '16px',
                    fontWeight: 600,
                    color: 'rgb(110, 90, 51)',
                    display: 'block',
                    marginBottom: '6px',
                  }}
                >
                  Όνομα *
                </label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="Το όνομά σας"
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    border: '1.5px solid rgb(244, 238, 224)',
                    borderRadius: '8px',
                    fontFamily: 'HarmoniaSans, sans-serif',
                    fontSize: '16px',
                    color: '#333',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  style={{
                    fontFamily: 'HarmoniaSans, sans-serif',
                    fontSize: '16px',
                    fontWeight: 600,
                    color: 'rgb(110, 90, 51)',
                    display: 'block',
                    marginBottom: '6px',
                  }}
                >
                  Επώνυμο *
                </label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Το επώνυμό σας"
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    border: '1.5px solid rgb(244, 238, 224)',
                    borderRadius: '8px',
                    fontFamily: 'HarmoniaSans, sans-serif',
                    fontSize: '16px',
                    color: '#333',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label
                htmlFor="phone"
                style={{
                  fontFamily: 'HarmoniaSans, sans-serif',
                  fontSize: '16px',
                  fontWeight: 600,
                  color: 'rgb(110, 90, 51)',
                  display: 'block',
                  marginBottom: '6px',
                }}
              >
                Τηλέφωνο *
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="69X XXX XXXX"
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  border: '1.5px solid rgb(244, 238, 224)',
                  borderRadius: '8px',
                  fontFamily: 'HarmoniaSans, sans-serif',
                  fontSize: '16px',
                  color: '#333',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label
                htmlFor="email"
                style={{
                  fontFamily: 'HarmoniaSans, sans-serif',
                  fontSize: '16px',
                  fontWeight: 600,
                  color: 'rgb(110, 90, 51)',
                  display: 'block',
                  marginBottom: '6px',
                }}
              >
                Email *
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="email@example.com"
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  border: '1.5px solid rgb(244, 238, 224)',
                  borderRadius: '8px',
                  fontFamily: 'HarmoniaSans, sans-serif',
                  fontSize: '16px',
                  color: '#333',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label
                htmlFor="clinic"
                style={{
                  fontFamily: 'HarmoniaSans, sans-serif',
                  fontSize: '16px',
                  fontWeight: 600,
                  color: 'rgb(110, 90, 51)',
                  display: 'block',
                  marginBottom: '6px',
                }}
              >
                Επιλογή Ιατρείου
              </label>
              <select
                id="clinic"
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  border: '1.5px solid rgb(244, 238, 224)',
                  borderRadius: '8px',
                  fontFamily: 'HarmoniaSans, sans-serif',
                  fontSize: '16px',
                  color: '#333',
                  outline: 'none',
                  backgroundColor: '#fff',
                  boxSizing: 'border-box',
                }}
              >
                <option value="">Επιλέξτε ιατρείο...</option>
                <option>Advanced Derma Αθήνα — Ζωγράφου</option>
                <option>Advanced Derma Πειραιάς</option>
              </select>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <label
                htmlFor="message"
                style={{
                  fontFamily: 'HarmoniaSans, sans-serif',
                  fontSize: '16px',
                  fontWeight: 600,
                  color: 'rgb(110, 90, 51)',
                  display: 'block',
                  marginBottom: '6px',
                }}
              >
                Μήνυμα / Θεραπεία που σας ενδιαφέρει
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Περιγράψτε μας την ανάγκη σας..."
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  border: '1.5px solid rgb(244, 238, 224)',
                  borderRadius: '8px',
                  fontFamily: 'HarmoniaSans, sans-serif',
                  fontSize: '16px',
                  color: '#333',
                  outline: 'none',
                  resize: 'vertical',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                width: '100%',
                backgroundColor: 'rgb(203, 179, 121)',
                color: '#000',
                fontFamily: 'HarmoniaSans, sans-serif',
                fontSize: '16px',
                fontWeight: 700,
                padding: '16px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                transition: 'background-color 0.2s',
              }}
            >
              Αποστολή Αιτήματος Ραντεβού
            </button>
          </form>

          <aside
            style={{
              backgroundColor: '#f9f5f0',
              borderRadius: '16px',
              padding: '32px',
              border: '1px solid rgba(110, 90, 51, 0.08)',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              minHeight: '420px',
            }}
          >
            <div>
              <h2
                style={{
                  fontFamily: 'HarmoniaSans, sans-serif',
                  fontSize: '24px',
                  fontWeight: 700,
                  color: 'rgb(110, 90, 51)',
                  marginBottom: '12px',
                }}
              >
                Επικοινωνία
              </h2>
              <p
                style={{
                  fontFamily: 'HarmoniaSans, sans-serif',
                  fontSize: '16px',
                  color: '#333',
                  lineHeight: 1.7,
                }}
              >
                Μπορείτε να επικοινωνήσετε μαζί μας με τον πιο γρήγορο τρόπο, είτε με κλήση, είτε με email ή social media.
              </p>
            </div>

            <div>
              <h3
                style={{
                  fontFamily: 'HarmoniaSans, sans-serif',
                  fontSize: '18px',
                  fontWeight: 700,
                  color: 'rgb(110, 90, 51)',
                  marginBottom: '14px',
                }}
              >
                Τηλέφωνο
              </h3>
              <p style={{ fontFamily: 'HarmoniaSans, sans-serif', fontSize: '16px', color: '#333', marginBottom: '8px' }}>
                Αθήνα: <a href="tel:+306975105858" style={{ color: 'rgb(110, 90, 51)', textDecoration: 'none' }}>697 510 5858</a>
              </p>
              <p style={{ fontFamily: 'HarmoniaSans, sans-serif', fontSize: '16px', color: '#333', marginBottom: '8px' }}>
                Πειραιάς: <a href="tel:+306936717377" style={{ color: 'rgb(110, 90, 51)', textDecoration: 'none' }}>693 671 7377</a>
              </p>
              <p style={{ fontFamily: 'HarmoniaSans, sans-serif', fontSize: '16px', color: '#333' }}>
                Σταθερό: <a href="tel:+302168093444" style={{ color: 'rgb(110, 90, 51)', textDecoration: 'none' }}>216 809 3444</a>
              </p>
            </div>

            <div>
              <h3
                style={{
                  fontFamily: 'HarmoniaSans, sans-serif',
                  fontSize: '18px',
                  fontWeight: 700,
                  color: 'rgb(110, 90, 51)',
                  marginBottom: '14px',
                }}
              >
                Email
              </h3>
              <p style={{ fontFamily: 'HarmoniaSans, sans-serif', fontSize: '16px', color: '#333' }}>
                <a href="mailto:advaderma@gmail.com" style={{ color: 'rgb(110, 90, 51)', textDecoration: 'none' }}>advaderma@gmail.com</a>
              </p>
            </div>

            <div>
              <h3
                style={{
                  fontFamily: 'HarmoniaSans, sans-serif',
                  fontSize: '18px',
                  fontWeight: 700,
                  color: 'rgb(110, 90, 51)',
                  marginBottom: '14px',
                }}
              >
                Social
              </h3>
              <p style={{ fontFamily: 'HarmoniaSans, sans-serif', fontSize: '16px', color: '#333', marginBottom: '8px' }}>
                Instagram: <a href="https://www.instagram.com/advanced_derma/" target="_blank" rel="noopener noreferrer" style={{ color: 'rgb(110, 90, 51)', textDecoration: 'none' }}>@advanced_derma</a>
              </p>
              <p style={{ fontFamily: 'HarmoniaSans, sans-serif', fontSize: '16px', color: '#333', marginBottom: '8px' }}>
                Instagram: <a href="https://www.instagram.com/advanced_laser_/" target="_blank" rel="noopener noreferrer" style={{ color: 'rgb(110, 90, 51)', textDecoration: 'none' }}>@advanced_laser_</a>
              </p>
              <p style={{ fontFamily: 'HarmoniaSans, sans-serif', fontSize: '16px', color: '#333', marginBottom: '8px' }}>
                Instagram: <a href="https://www.instagram.com/advanced_peiraias/" target="_blank" rel="noopener noreferrer" style={{ color: 'rgb(110, 90, 51)', textDecoration: 'none' }}>@advanced_peiraias</a>
              </p>
              <p style={{ fontFamily: 'HarmoniaSans, sans-serif', fontSize: '16px', color: '#333', marginBottom: '8px' }}>
                Instagram: <a href="https://www.instagram.com/chrysoula_zisimou/" target="_blank" rel="noopener noreferrer" style={{ color: 'rgb(110, 90, 51)', textDecoration: 'none' }}>@chrysoula_zisimou</a>
              </p>
              <p style={{ fontFamily: 'HarmoniaSans, sans-serif', fontSize: '16px', color: '#333', marginBottom: '8px' }}>
                Facebook: <a href="https://www.facebook.com/advancedermaa/" target="_blank" rel="noopener noreferrer" style={{ color: 'rgb(110, 90, 51)', textDecoration: 'none' }}>Advanced Derma</a>
              </p>
              <p style={{ fontFamily: 'HarmoniaSans, sans-serif', fontSize: '16px', color: '#333' }}>
                TikTok: <a href="https://www.tiktok.com/@advanced_derma" target="_blank" rel="noopener noreferrer" style={{ color: 'rgb(110, 90, 51)', textDecoration: 'none' }}>@advanced_derma</a>
              </p>
            </div>

            <div>
              <h3
                style={{
                  fontFamily: 'HarmoniaSans, sans-serif',
                  fontSize: '18px',
                  fontWeight: 700,
                  color: 'rgb(110, 90, 51)',
                  marginBottom: '14px',
                }}
              >
                Ωράρια
              </h3>
              <p style={{ fontFamily: 'HarmoniaSans, sans-serif', fontSize: '16px', color: '#333', lineHeight: 1.7 }}>
                Δευτέρα - Παρασκευή: 11:00 - 20:00<br />
                Σάββατο: 10:00 - 18:00
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 24px 96px' }}>
        <div style={{ marginBottom: '40px', textAlign: 'center' }}>
          <h2
            style={{
              fontFamily: 'HarmoniaSans, sans-serif',
              fontSize: '32px',
              fontWeight: 700,
              color: 'rgb(110, 90, 51)',
              marginBottom: '12px',
            }}
          >
            Τοποθεσίες Ιατρείων
          </h2>
        </div>

        <div
          className="ad-booking-locs"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            gap: '24px',
          }}
        >
          <div
            style={{
              backgroundColor: '#fff',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 4px 24px rgba(110, 90, 51, 0.08)',
            }}
          >
            <div style={{ padding: '24px' }}>
              <h3
                style={{
                  fontFamily: 'HarmoniaSans, sans-serif',
                  fontSize: '22px',
                  fontWeight: 700,
                  color: 'rgb(110, 90, 51)',
                  marginBottom: '8px',
                }}
              >
                Advanced Derma Αθήνα — Ζωγράφου
              </h3>
            </div>
            <iframe
              src="https://maps.google.com/maps?q=Advanced%20Derma%20Ζωγράφου&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="320"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div
            style={{
              backgroundColor: '#fff',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 4px 24px rgba(110, 90, 51, 0.08)',
            }}
          >
            <div style={{ padding: '24px' }}>
              <h3
                style={{
                  fontFamily: 'HarmoniaSans, sans-serif',
                  fontSize: '22px',
                  fontWeight: 700,
                  color: 'rgb(110, 90, 51)',
                  marginBottom: '8px',
                }}
              >
                Advanced Derma Πειραιάς
              </h3>
            </div>
            <iframe
              src="https://maps.google.com/maps?q=Advanced%20Derma%20Πειραιάς&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="320"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
