import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TreatmentsMarquee from '@/components/TreatmentsMarquee';
import ServiceSection from '@/components/ServiceSection';
import NewsSection from '@/components/NewsSection';
import PopularTreatments from '@/components/PopularTreatments';
import FindClinicSection from '@/components/FindClinicSection';
import MythsSection from '@/components/MythsSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import WhyUsSection from '@/components/WhyUsSection';
import ConferencesSection from '@/components/ConferencesSection';
import BiofillerSection from '@/components/BiofillerSection';
import ExosomesSection from '@/components/ExosomesSection';
import BeforeAfterSection from '@/components/BeforeAfterSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      {/* Rotating treatments bar (under hero) */}
      <TreatmentsMarquee />

      {/* Πρόσωπο — Face */}
      <ServiceSection
        title="Πρόσωπο"
        subtitle="Θεραπείες Προσώπου"
        description="Η φροντίδα προσώπου στο Advanced Derma εστιάζει στην υγεία και την ποιότητα του δέρματος, όχι απλώς στην επιφανειακή βελτίωση. Με σύγχρονες ιατρικές και αισθητικές τεχνικές, αντιμετωπίζονται σημάδια γήρανσης, ατέλειες και δυσχρωμίες, ενώ παράλληλα ενισχύεται η φυσική λάμψη του προσώπου. Οι θεραπείες βασίζονται σε τεχνολογίες αιχμής και υψηλής ποιότητας υλικά, πάντα προσαρμοσμένες στις ανάγκες κάθε επιδερμίδας. Στόχος είναι ένα φρέσκο, ξεκούραστο και φυσικό αποτέλεσμα, με σεβασμό στα χαρακτηριστικά του προσώπου και χωρίς υπερβολές."
        imageSrc="/images/face2.png"
        imageAlt="Περιποίηση Προσώπου"
        buttonText="Θεραπείες προσώπου"
        buttonHref="/el/ypiresies/prosopo/"
        height={575}
      />

      {/* Σώμα — Body */}
      <ServiceSection
        title="Σώμα"
        description="Η φροντίδα του σώματος βασίζεται στον συνδυασμό ιατρικής γνώσης, σύγχρονης τεχνολογίας και εξατομικευμένων πρωτοκόλλων. Κάθε θεραπεία σχεδιάζεται σύμφωνα με τις ανάγκες του σώματος, με στόχο τη βελτίωση της υφής του δέρματος, τη σύσφιγξη και τη συνολική αναδιαμόρφωση της σιλουέτας. Χρησιμοποιούνται προηγμένα μηχανήματα και πιστοποιημένα υλικά, με έμφαση στην ασφάλεια και στο φυσικό αποτέλεσμα."
        imageSrc="/images/soma.png"
        imageAlt="Περιποίηση Σώματος"
        buttonText="Θεραπείες σώματος"
        buttonHref="/el/ypiresies/soma/"
        imageOnLeft
        height={529}
      />

      {/* Κλινική Δερματολογία */}
      <ServiceSection
        title="Κλινική Δερματολογία"
        description="Η κλινική δερματολογία εστιάζει στην ουσιαστική φροντίδα και την υγεία του δέρματος. Κάθε περιστατικό αξιολογείται εξατομικευμένα από εξειδικευμένο δερματολόγο, με στόχο τη σωστή διάγνωση και την αποτελεσματική αντιμετώπιση δερματικών παθήσεων. Με τη χρήση σύγχρονων διαγνωστικών μεθόδων και ιατρικών πρωτοκόλλων, δίνεται έμφαση τόσο στη θεραπεία όσο και στην πρόληψη."
        imageSrc="/images/treatment-lefki.png"
        imageAlt="Κλινική Δερματολογία"
        buttonText="Δείτε τις επιλογές σας"
        buttonHref="/el/ypiresies/kliniki-dermatologia/"
        height={529}
      />

      {/* May Cancer Awareness */}
      <NewsSection />

      {/* Popular Treatments */}
      <PopularTreatments />

      {/* Find a Clinic */}
      <FindClinicSection />

      {/* Myths & Truths */}
      <MythsSection />

      {/* Why choose us — value proposition cards */}
      <WhyChooseUsSection />

      {/* Doctor biography */}
      <WhyUsSection />

      {/* Scientific activity & conferences */}
      <ConferencesSection />

      {/* Biofiller — Νέα Τεχνική (above reviews) */}
      <BiofillerSection />

      {/* Viral Trend · 2026 — Exosomes (above Before & After) */}
      <ExosomesSection />

      {/* Before & After (between doctor bio and reviews) */}
      <BeforeAfterSection />

      {/* Testimonials */}
      <TestimonialsSection />

      <Footer />
    </>
  );
}
