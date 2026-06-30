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
        description={
          <>
            Η φροντίδα προσώπου στο Advanced Derma εστιάζει στην{' '}
            <strong>υγεία και την ποιότητα του δέρματος</strong>, όχι απλώς στην επιφανειακή βελτίωση. Με{' '}
            <strong>σύγχρονες ιατρικές και αισθητικές τεχνικές</strong>, αντιμετωπίζονται σημάδια γήρανσης, ατέλειες και δυσχρωμίες, ενώ παράλληλα ενισχύεται η φυσική λάμψη του προσώπου. Οι θεραπείες βασίζονται σε{' '}
            <strong>τεχνολογίες αιχμής</strong> και υψηλής ποιότητας υλικά, πάντα προσαρμοσμένες στις ανάγκες κάθε επιδερμίδας. Στόχος είναι ένα{' '}
            <strong>φρέσκο, ξεκούραστο και φυσικό αποτέλεσμα</strong>, με σεβασμό στα χαρακτηριστικά του προσώπου και χωρίς υπερβολές.
          </>
        }
        imageSrc="/images/prosoponeaeikona.png"
        imageAlt="Περιποίηση Προσώπου"
        buttonText="Θεραπείες προσώπου"
        buttonHref="/el/ypiresies/prosopo/"
        height={575}
      />

      {/* Σώμα — Body */}
      <ServiceSection
        title="Σώμα"
        description={
          <>
            Η φροντίδα του σώματος βασίζεται στον συνδυασμό ιατρικής{' '}
            <strong>γνώσης</strong>, σύγχρονης <strong>τεχνολογίας</strong> και εξατομικευμένων{' '}
            <strong>πρωτοκόλλων</strong>. Κάθε θεραπεία σχεδιάζεται σύμφωνα με τις ανάγκες του σώματος, με στόχο τη βελτίωση της{' '}
            <strong>υφής</strong> του δέρματος, τη <strong>σύσφιγξη</strong> και τη συνολική{' '}
            <strong>αναδιαμόρφωση της σιλουέτας</strong>. Χρησιμοποιούνται προηγμένα μηχανήματα και πιστοποιημένα υλικά, με έμφαση στην ασφάλεια και στο φυσικό αποτέλεσμα.
          </>
        }
        imageSrc="/images/somaneaeikona.png"
        imageAlt="Περιποίηση Σώματος"
        buttonText="Θεραπείες σώματος"
        buttonHref="/el/ypiresies/soma/"
        imageOnLeft
        height={529}
      />

      {/* Κλινική Δερματολογία */}
      <ServiceSection
        title="Κλινική Δερματολογία"
        description={
          <>
            Η κλινική δερματολογία εστιάζει στην ουσιαστική{' '}
            <strong>φροντίδα</strong> και την υγεία του δέρματος. Κάθε περιστατικό αξιολογείται{' '}
            <strong>εξατομικευμένα</strong> από <strong>εξειδικευμένο δερματολόγο</strong>, με στόχο τη{' '}
            <strong>σωστή διάγνωση</strong> και την{' '}
            <strong>αποτελεσματική αντιμετώπιση δερματικών παθήσεων</strong>. Με τη χρήση{' '}
            <strong>σύγχρονων διαγνωστικών</strong> μεθόδων και ιατρικών πρωτοκόλλων, δίνεται έμφαση τόσο στη θεραπεία όσο και στην{' '}
            <strong>πρόληψη</strong>.
          </>
        }
        imageSrc="/images/kilinikidermaneaeikona.png"
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
