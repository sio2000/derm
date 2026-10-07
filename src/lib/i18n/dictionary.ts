// ── Advanced Derma — i18n curated dictionary ──────────────────────────────
// High-value UI / navigation / marketing strings translated by hand for quality.
// Keys are the ORIGINAL Greek text, whitespace-normalised (trim + collapse spaces).
// Anything not found here is machine-translated at runtime by the TranslationEngine
// and cached in localStorage (hybrid strategy).
//
// Supported target languages: 'en' (English) and 'ar' (Arabic, RTL).
// The source language is Greek ('el') — the site's authored language.

export type Lang = 'el' | 'en' | 'ar';

export interface Translations {
  en: string;
  ar: string;
}

/** Collapse whitespace so dictionary lookups match rendered text nodes. */
export function normalize(text: string): string {
  return text.replace(/\s+/g, ' ').trim();
}

// NOTE: keys must be the normalised Greek exactly as rendered on screen.
export const DICTIONARY: Record<string, Translations> = {
  // ── Navigation ──────────────────────────────────────────────
  'Πρόσωπο': { en: 'Face', ar: 'الوجه' },
  'Σώμα': { en: 'Body', ar: 'الجسم' },
  'Κλινική Δερματολογία': { en: 'Clinical Dermatology', ar: 'الأمراض الجلدية السريرية' },
  'Η Ιατρός μας': { en: 'Our Doctor', ar: 'طبيبتنا' },
  'Κλείστε το ραντεβού σας': { en: 'Book your appointment', ar: 'احجز موعدك' },
  'Ιατρεία': { en: 'Clinics', ar: 'العيادات' },
  'Ιατρείο': { en: 'Clinic', ar: 'العيادة' },
  'Άνοιγμα μενού': { en: 'Open menu', ar: 'فتح القائمة' },
  'Κλείσιμο μενού': { en: 'Close menu', ar: 'إغلاق القائمة' },

  // ── CTAs / section buttons ──────────────────────────────────
  'Θεραπείες προσώπου': { en: 'Face treatments', ar: 'علاجات الوجه' },
  'Θεραπείες σώματος': { en: 'Body treatments', ar: 'علاجات الجسم' },
  'Δείτε τις επιλογές σας': { en: 'See your options', ar: 'اطّلع على خياراتك' },

  // ── Footer ──────────────────────────────────────────────────
  'Θεραπείες': { en: 'Treatments', ar: 'العلاجات' },
  'Επικοινωνία': { en: 'Contact', ar: 'اتصل بنا' },
  'Θεραπείες Προσώπου': { en: 'Face Treatments', ar: 'علاجات الوجه' },
  'Θεραπείες Σώματος': { en: 'Body Treatments', ar: 'علاجات الجسم' },
  'Τα Ιατρεία μας': { en: 'Our Clinics', ar: 'عياداتنا' },
  'Κλείστε Ραντεβού': { en: 'Book Appointment', ar: 'احجز موعداً' },
  'Πολιτική Προστασίας Προσωπικών Δεδομένων': { en: 'Privacy Policy', ar: 'سياسة الخصوصية' },
  'Πολιτική Cookies': { en: 'Cookie Policy', ar: 'سياسة ملفات تعريف الارتباط' },
  'Advanced Derma Αθήνα': { en: 'Advanced Derma Athens', ar: 'Advanced Derma أثينا' },
  'Δερματολογία & Αισθητική Ιατρική υπό τη διεύθυνση της Δρ. Χρυσούλας Ζήσιμου, στου Ζωγράφου (Αθήνα).': {
    en: 'Dermatology & Aesthetic Medicine under the direction of Dr. Chrysoula Zisimou, in Zografou (Athens).',
    ar: 'طب الأمراض الجلدية والطب التجميلي بإشراف الدكتورة خريسولا زيسيمو، في زوغرافو (أثينا).',
  },
  'Σταθερό: 216 809 3444': { en: 'Landline: 216 809 3444', ar: 'الخط الأرضي: 216 809 3444' },

  // ── Booking form ────────────────────────────────────────────
  'Όνομα *': { en: 'First name *', ar: 'الاسم *' },
  'Επώνυμο *': { en: 'Last name *', ar: 'اللقب *' },
  'Τηλέφωνο *': { en: 'Phone *', ar: 'الهاتف *' },
  'Το όνομά σας': { en: 'Your first name', ar: 'اسمك' },
  'Το επώνυμό σας': { en: 'Your last name', ar: 'لقبك' },
  'Επιλογή Ιατρείου': { en: 'Select clinic', ar: 'اختيار العيادة' },
  'Επιλέξτε ιατρείο...': { en: 'Select a clinic...', ar: 'اختر عيادة...' },
  'Advanced Derma Αθήνα — Ζωγράφου': { en: 'Advanced Derma Athens — Zografou', ar: 'Advanced Derma أثينا — زوغرافو' },
  'Μήνυμα / Θεραπεία που σας ενδιαφέρει': { en: 'Message / Treatment of interest', ar: 'رسالة / العلاج الذي يهمّك' },
  'Περιγράψτε μας την ανάγκη σας...': { en: 'Describe your needs...', ar: 'صف لنا احتياجك...' },
  'Αποστολή Αιτήματος Ραντεβού': { en: 'Send Appointment Request', ar: 'إرسال طلب الموعد' },
};

/** Language switcher UI labels. */
export const LANGUAGES: { code: Lang; label: string; native: string }[] = [
  { code: 'el', label: 'ΕΛ', native: 'Ελληνικά' },
  { code: 'en', label: 'EN', native: 'English' },
  { code: 'ar', label: 'AR', native: 'العربية' },
];
