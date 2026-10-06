'use client';
import { useState } from 'react';

type Review = { name: string; stars: number; text: string };

/* Πραγματικές αξιολογήσεις ασθενών (Google) — Advanced Derma. Μεταφέρθηκαν αυτούσιες. */
const reviews: Review[] = [
  {
    name: 'Anastasia',
    stars: 5,
    text: `Αν ψάχνετε για τις απόλυτες βασίλισσες της ομορφιάς, του επαγγελματισμού και των μεταμορφωτικών αποτελεσμάτων, μην ψάχνετε άλλο από το Advance Derma. Αυτό το μέρος δεν είναι απλώς μια κλινική - είναι ένα καταφύγιο λάμψης όπου η επιστήμη συναντά τη μαγεία.

Από τη στιγμή που μπαίνετε μέσα, νιώθετε σαν να μπαίνετε σε έναν κόσμο σχεδιασμένο για θεές - και αυτό το συναίσθημα γίνεται πραγματικότητα χάρη στις δύο Wonderwoman που κάνουν θαύματα:

✨ Κα. Κωνσταντίνα - Η Θεά του Laser

Η θεραπεία με λέιζερ από την κα. Κωνσταντίνα είναι απλά τελειότητα.
Η τεχνική της; Ακριβής. Ανώδυνη. Δυνατή.
Η παρουσία της; Ζεστή, πανέμορφη και γεμάτη αυτοπεποίθηση.
Εξηγεί τα πάντα με σαφήνεια, σας φέρεται με φροντίδα και προσφέρει αποτελέσματα που αφήνουν το δέρμα σας πιο λείο, φωτεινότερο και απόλυτα άψογο. Αν το λέιζερ είχε βασίλισσα, αυτή θα ήταν αυτή.

✨ Δρ. Χρύσα Ζησίμου - Η Μία και Μοναδική

Έπειτα, υπάρχει η Δρ. Χρυσά Ζησίμου - η μία και μοναδική, η γιατρός που συνδυάζει την ιατρική εξειδίκευση με την καλλιτεχνική φινέτσα. Είναι ο ορισμός του επαγγελματισμού, της ομορφιάς και της δύναμης.
Οι γνώσεις της ακτινοβολούν μέσα από κάθε συμβουλευτική συνεδρία και η προσέγγισή της σας κάνει να νιώθετε ασφαλείς, σίγουροι και ορατοί. Μια αληθινή Wonderwoman - κομψή, λαμπρή και δυνατή.

💎 Advance Derma = Αποτελέσματα + Πολυτέλεια + Ενδυνάμωση

Κάθε επίσκεψη μοιάζει με τον τέλειο συνδυασμό πολυτέλειας και επιστήμης.
Κάθε θεραπεία προσφέρει ακριβώς αυτό που υπόσχεται - και ακόμα περισσότερα.
Κάθε στιγμή εκεί σας υπενθυμίζει ότι αξίζετε το καλύτερο.

Αν θέλετε να νιώσετε όμορφη, ενδυναμωμένη και να σας φροντίζουν οι πιο δυνατοί, έξυπνοι και εκπληκτικοί επαγγελματίες, το Advance Derma είναι το ΜΟΝΟ μέρος που πρέπει να πάτε.

Πέντε αστέρια δεν είναι αρκετά.
Αυτή η ομάδα αξίζει ολόκληρο τον γαλαξία. ✨🌟💫`,
  },
  { name: 'Khalid Alhamad', stars: 5, text: 'The Greek doctor has never seen herself in history with this art.' },
  { name: 'Aisha Yousif', stars: 5, text: 'I had an amazing experience with Dr. CHRYSOULA from Europe ❤️. She treated my skin using the Vivace Fractional Microneedle RF device combined with Exosome therapy, and I was genuinely impressed with the results. Even after my first session, I noticed my skin looked firmer, my collagen seemed noticeably stimulated, and my fine lines were visibly softer. Dr. CHRYSOULA was incredibly skilled, gentle, and made me feel comfortable throughout the entire treatment. I’m so happy with my results and can’t wait to continue my sessions. I highly recommend her to anyone looking for natural skin rejuvenation!' },
  { name: 'Helena Lena', stars: 5, text: 'ΗΤΑΝ ΟΛΑ ΓΡΉΓΟΡΑ ΚΑΙ ΥΠΕΡΟΧΑ ΚΑΙ ΚΑΘΑΡΑ. ΜΟΥ ΚΑΝΑΝΕ ΤΟΣΑ ΟΜΟΡΦΑ ΔΩΡΑ ΚΑΙ ΜΕ ΠΡΟΣΕΞΑΝ ΚΑΙ ΕΙΝΑΙ ΥΠΕΡΟΧΕΣ ΚΟΡΙΤΣΙΑ ΤΡΕΞΤΕ ΔΕΝ ΘΑ ΒΡΕΙΤΕ ΚΑΛΤΕΡΕΣ 💗🌷💗🌷🌷💗🌷🔥🔥💗🔥 Η PENNYY ΥΠΕΡΟΧΗΗΗΗΗΗΗΗΗΗ ΤΗΝ ΑΓΑΠΑΩΩΩΩ 💗🔥🔥🔥💗💗' },
  { name: 'Gabriella Stamatiou', stars: 5, text: 'Όλα τα κορίτσια είναι εξαιρετικά όπως κ η γιατρός πάντα άψογη στη δουλειά της!!! Στο παρελθόν είχα επισκεφθεί κ άλλα ιατρεία αλλά σε κανένα δεν είχα αυτό το αποτέλεσμα.' },
  { name: 'Αργυρώ Μαυρογιαννάκη', stars: 5, text: 'Κάνω full body laser συστηματικά στο ιατρείο και έχω να πω μόνο τα καλύτερα, ζητάω πάντα την Κωνσταντίνα που κάνει καταπληκτική λεπτομερής και γρήγορη δουλεια! Η καλύτερη επιλογή στην Αθήνα με διαφορά' },
  { name: 'Russian Mult', stars: 5, text: 'Πολύ καλή η εξυπηρέτηση!! Από την αρχή που ήρθα στο ιατρείο με υποδέχθηκε η Πέννυ με πολύ ευγένια και μου προσέφερε νερό!! Ύστερα στην συνέδρια με εξυπηρέτησε η Αγγελική με επαγγελματισμό παρόλο της πρώτης μου συνεδρίας. Ευχαριστώ πολύ και το συνιστώ!!' },
  { name: 'mili bashari', stars: 5, text: 'Πολύ φιλικό και έμπειρο προσωπικό. 7 χρόνια τώρα είναι πάντα η πρώτη επιλογή για laser (πλέον συντήρηση) και καθαρισμό προσώπου' },
  { name: 'Olivia Murga', stars: 5, text: 'Όλο το προσωπικό του ιατρείου είναι πάντα πολύ ευγενικό και εξυπηρετικό. Αλλά για εμένα προσωπικά η αγαπημένη μου είναι η Πέννυ. Η κοπέλα είναι εξαιρετική επαγγελματίας και όσες φορές με έχει αναλάβει στο laser έχει κάνει άψογη και λεπτομερή δουλειά.' },
  { name: 'MD P', stars: 5, text: 'Πηγαίνω χρόνια και είμαι απίστευτα ικανοποιημένη, πάντα άριστη δουλειά και πολύ προσεκτικά όλα τα κορίτσια. Η γιατρός είναι φοβερή και εξαιρετική στη δουλειά της, επαγγελματίας και άνθρωπος' },
  { name: 'Βάνα Δεμιρτζόγλου', stars: 5, text: 'Σας το προτείνω ανεπιφύλακτα! Πολύ καθαρός χώρος, ευγενέστατο προσωπικό και το πιο σημαντικό εξυπηρετικό! Τέλεια δουλειά, μπράβο τους!!' },
  { name: 'Mariam Aghakhanyan', stars: 5, text: 'Η Ματίνα είναι υπέροχη! Κάνει εξαιρετική δουλειά, είναι πολύ προσεκτική και σε κάνει να νιώθεις άνετα από την πρώτη στιγμή. Τα αποτελέσματα από το λέιζερ είναι φοβερά — πραγματικά τη συστήνω σε όλους!' },
  { name: 'ΙΩΑΝΝΑ ΝΑΚΟΥ', stars: 5, text: 'Εξαιρετικη δουλειά και από τα κορίτσια και από τη γιατί ευχαριστώ πολύ για όλα το συστήνω ανεπιφύλακτα για όλες τις θεραπείες' },
  { name: 'Polina Pantelopoulou', stars: 5, text: 'Εξαιρετικο προσωπικο και εξαιρετικη δουλεια! Το ιατρειο ειναι φοβερο και τα κοριτσια πραγματικοι επαγγελματιες!' },
  { name: 'Nora Kaframani', stars: 5, text: 'Έχω επισκεφτεί το λέιζερ άπειρες φορές και κάθε φορά το αποτέλεσμα είναι άριστο! Τα κορίτσια είναι πάντα υπερβολικά βοηθητικά, ευγενικά και κάνουν τη διαδικασία πολύ ευχάριστη. Το προτείνω ανεπιφύλακτα!' },
  { name: 'Βασιλική Γκιούλη', stars: 5, text: 'Όμορφο και ευγενικό προσωπικό πολύ αναλυτικό προς τις ανάγκες του σώματος και την επεξήγηση αυτών, ζητήστε την κυρία Ματίνα άριστη στην δουλειά της.' },
  { name: 'Βερόνικα Κεσίδου', stars: 5, text: 'Έκανα καθαρισμό προσώπου και λέιζερ με τη Ματίνα και έμεινα πολύ ευχαριστημένη. Ο καθαρισμός ήταν σχολαστικός αλλά καθόλου ενοχλητικός, και το λέιζερ ήπιο, ιδανικό για το δέρμα μου. Είναι ευγενική, επαγγελματίας και σε κάνει να νιώθεις άνετα.' },
  { name: 'Σοφία Γώγιου', stars: 5, text: 'Εκανα πολλα χρονια laser αλλα τελικα τωρα εκανα πρωτη φορα σωστη δουλεια με την Ματινα!! Η Γιατρος καταπληκτικη, εξαιρετικη επαγγελματιας και ανθρωπος!! Η Ηλιανα μου εκανε καυτηριασμο και επιτελους βρηκα εναν χωρο που ολο το προσωπικο αξιζει πολυ. Σας ευχαριστουμε για ολα!!' },
  { name: 'Παναγιώτα Ζησίμου', stars: 5, text: 'Επισκέφτηκα την γιατρό Ζησίμου για να κάνω χείλη, με τελείως φυσικό αποτέλεσμα. Το αποτέλεσμα ήταν ακριβώς αυτό που ζήτησα με διάρκεια ένα χρόνο με το υλικό Restilan kiss!' },
  { name: 'Lyudmila Shider', stars: 5, text: 'Η γιατρός είναι άκρως καταρτισμένη με εμπειρία και στο εξωτερικό Qatar. Μου έλυσε το πρόβλημα της ακμής μου που με ταλαιπωρούσε χρόνια. Μόνο τη γιατρό δερματολόγο Χρυσούλα εμπιστεύομαι' },
  { name: 'Luna Vieira', stars: 5, text: 'Sem dúvidas a melhor clínica de estética de Athens' },
  { name: 'Irini Bezat', stars: 5, text: 'Σε κάθε μου επίσκεψη η κυρία Ζησίμου και τα υπόλοιπα κορίτσια ήταν ευγενέστατα και πολύ εξυπηρετικά. Η Αγγελική είναι εξαιρετική επαγγελματίας και άνθρωπος με έμφαση στην λεπτομέρεια! Ευχαριστώ πολύ' },
  { name: 'Bella Vata', stars: 5, text: 'Ήθελα να μοιραστώ μαζί σας την εμπειρία μου όσο αφορά το λέιζερ, έχω μείνει πολύ ικανοποιημένη από την εξυπηρέτηση και το αποτέλεσμα που έχω δει πάνω μου, ωστόσο είμαι στην περίοδο εγκυμοσύνης και επισκέφτηκα πάλι το ιατρείο για λέιζερ στο οποίο με ανέλαβε η Αγγελική, μια εξαιρετική κοπέλα και άψογη στην δουλειά της! Σας το συνιστώ ανεπιφύλακτα' },
  { name: 'ΑΙΜΙΛΙΑ ΧΡΙΣΤΟΦΟΡΟΥ', stars: 5, text: 'Η γιατρος κάνει το καλύτερο botox της Ελλάδας μόνο με 150 ευρώ' },
  { name: 'eleni Retsa', stars: 5, text: 'Έρχομαι χρόνια στο ιατρείο της Αθήνας, είμαι πάρα πολύ ευχαριστημένη από τα αποτελέσματα των θεραπειών που μου κάνει η γιατρος, είναι μια εξαιρετική επιστήμονας με γνώσεις, την αγαπώ πολύ' },
  { name: 'Sophienia Platania', stars: 5, text: 'The best doctor in Athens in Dubai! Άψογη αντιμετώπιση και εξυπηρέτηση! Επίσης οι θεραπείες πρωτοποριακής τεχνολογίας!' },
  { name: 'Davina Samara', stars: 5, text: 'Πολύ καθαρός και προσεγμένος χώρος, ευγενικό και επαγγελματικό προσωπικό που με έκανε να νιώσω άνετα από την πρώτη στιγμή. Η διαδικασία του laser έγινε με προσοχή και επεξήγηση σε κάθε βήμα! Το συστήνω σίγουρα!' },
  { name: 'Marietta Mantheou', stars: 5, text: 'Επισκέπτομαι το ιατρείο εδω κ 4 χρόνια! Καλές υπηρεσίες με πολυ Καλές τιμές!' },
  { name: 'Stamoc Alpan', stars: 5, text: 'Μια άκρως φοβιστική διαδικασία η οποία με την βοήθεια των κοριτσιών φάνηκε όσο γίνοταν ανώδυνη διότι ήμουν ιδιάζουσα περίπτωση! Θα τις εμπιστευτώ ξανά σίγουρα!' },
  { name: 'Ευανθία Κριθαριώτη', stars: 5, text: 'Ολοκλήρωσα τη επαναληπτική μου συνέδρια πρώτη φορά εδώ στην κυρία Χρύσα Ζησίμου. Έχω μείνει απόλυτα ικανοποιημένη. 10/10 Το προτείνω ανεπιφύλακτα' },
  { name: 'Elena Bob', stars: 5, text: 'Το καλύτερο κέντρο αποτρίχωσης με διαφορά' },
  { name: 'pelagia proistaki', stars: 5, text: 'Επισκέπτομαι χρόνια τη Χρύσα!!! Έχω κάνει αρκετές και διαφορετικές θεραπείες ώστε να μπορώ να πω ότι είμαι απόλυτα ευχαριστημένη!!! Έχει καλές τιμές (πολύ λογικές για την εποχή μας) και δεν τις αλλάζει με τα χρόνια, είναι άριστη γιατρός, ενώ έχω να πω ότι έχει άψογους συνεργάτες (Πεννυ, Κωνσταντίνα εξαιρετικές).' },
  { name: 'Vali Rosovschi', stars: 5, text: 'Ευχαριστούμε πολύ!!! Ειδικά στη Πέννυ!!! Που με εξυπηρετεί κάθε φορά!!! 7 χρόνια πηγαίνω, τα τελευταία 3 κανω συντήρηση μόνο, αφού έχει η ιατρος στο ιατρείο της το καλύτερο λασερ ever!!!' },
  { name: 'Panagiota Barakou', stars: 4, text: 'Ξεκίνησα τις συνεδρίες λέιζερ στο συγκεκριμένο ιατρείο και μέχρι στιγμής είμαι πολύ ικανοποιημένη. Παλιότερα υπήρχαν κάποιες καθυστερήσεις στα ραντεβού, όμως πλέον το ζήτημα έχει λυθεί.' },
  { name: 'Erlinda hhgt Kitahhkybtytt', stars: 5, text: 'Έκανα θεραπεία κατά της κυτταρίτιδας, εξαιρετικό αποτέλεσμα και πρωτόκολλο. Όλο το προσωπικό πολύ ευγενικό. Άριστα αποτέλεσμα κι στο λέιζερ' },
  { name: 'maria kanellopoulou', stars: 5, text: 'Πρώτη φορά επισκέφθηκα το ιατρείο, έμεινα πολύ ευχαριστημένη, η Αγγελική εξαιρετική, η γιατρος καταπληκτική, ο χώρος καθαρός και όλα απολυμαίνονται σωστά!!!! Σας το συνιστώ!!!!!!!' },
  { name: 'Nantia Theodosi', stars: 5, text: 'Εξαιρετική εμπειρία στο δερματολογικό ιατρείο. Η γιατρος είναι πολύ προσιτή, ευγενική και σε κάνει να νιώθεις άνετα από την πρώτη στιγμή. Ο χώρος είναι καθαρός και οργανωμένος, ενώ η εξυπηρέτηση άψογη.' },
  { name: 'omr omran', stars: 5, text: 'Επισκέπτομαι το ιατρείο εδω και δυο χρόνια και τα αποτελέσματα ειναι εκπληκτικά!! Κάνω fractional λειζερ για την αντιμετώπιση των σημαδιών απο την ακμή αλλα και λειζερ αποτριχωσης και ειμαι πολυ ευχαριστημενη καθως εχω το επιθυμητο και αριστο αποτελεσμα και το δερμα μου εχει αλλαξει!! Όλο το προσωπικό του ιατρειου είναι επαγγελματίες, ευγενικοί και εξυπηρετικοί!! Συνιστώ το ιατρείο ανεπιφύλακτα!!' },
  { name: 'Helena Lena', stars: 5, text: 'ΗΤΑΝ ΟΛΑ ΓΡΗΓΟΡΑ ΚΑΙ ΥΠΕΡΟΧΑ ΚΑΙ ΚΑΘΑΡΑ. ΜΟΥ ΚΑΝΑΝΕ ΤΟΣΑ ΟΜΟΡΦΑ ΔΩΡΑ ΚΑΙ ΜΕ ΠΡΟΣΕΞΑΝ ΚΑΙ ΕΙΝΑΙ ΥΠΕΡΟΧΕΣ ΚΟΡΙΤΣΙΑ, ΤΡΕΞΤΕ ΔΕΝ ΘΑ ΒΡΕΙΤΕ ΚΑΛΥΤΕΡΕΣ. Η ΠΕΝΝΥ ΥΠΕΡΟΧΗ, ΤΗΝ ΑΓΑΠΑΩ' },
  { name: 'Magda Ntala', stars: 5, text: 'Διαβάζω αρκετά αρνητικά σχόλια, άγνωστο γιατί. Προσωπικά θα πω τη δική μου άποψη. Κάνω διαρκώς λέιζερ αλεξανδρίτη αποτρίχωση επί 3 χρόνια σχεδόν. Αποτέλεσμα ναι έχω. Έχω κάνει πολλά σημεία. Καρπό με αγκώνα, μπικίνι ολο, θηλες, κάτω γραμμή κοιλιάς, μασχαλι. Αρκετά ήταν ήδη δουλεμένα από προηγουμένως και χρειάζεται απλά ανά μηνες λίγη συντήρηση. Μια χαρά το χτυπάει. Το αν το λέιζερ αυτό θα κρατήσει και θα έχει αποτέλεσμα εν μέρει εξαρτάται και από εμάς. Προσωπικά ναι το τηρώ, επί 2-3 χρόνια πάω ανα 1-2 μήνα στα σημεία ώστε να καταστραφεί όντως ο θύλακας. Ακούω τι μου λένε οι ειδικοί. Κάποια σημεία όπως το μπικίνι επειδή είναι ορμονικό θέμα θα βγάζουν πάντα, ωστόσο με τήρηση βγαίνει άλλη ποιότητα τρίχα και έχει άλλη ποιότητα το δέρμα. Εγω ραντεβού βρίσκω εκεί και βολεύει, όπως και το ότι η τοποθεσία είναι σε σημείο κεντρικό και με τα μέσα μεταφοράς. Υπάρχει η ανάλογη ευγένεια και πτυχίο υπάρχει προφανώς κανονικά της γιατρού. Δεν μπορώ να πω για τα υπόλοιπα παιδιά ότι υπήρξε ποτέ κάποιος αγενής ή απότομος.' },
  { name: 'Aurora Baci', stars: 5, text: 'Το καλύτερο ιατρείο μακράν όλης της Αθήνας, εξαιρετικές τιμές, υπερσύγχρονα μηχανήματα laser. Νιώθεις εμπιστοσύνη' },
  { name: 'Αλεξάνδρα Κ', stars: 5, text: 'Τέλειο αποτέλεσμα με την μοναδική Πέννυ, εξαιρετική επαγγελματίας οπως πάντα, με full body 100€. Με αναγνωρισμένη γιατρό Doctor Zisimou στην Ντόχα.' },
  { name: 'Marianthy Linardatou', stars: 5, text: 'Η γιατρος μου Κυρια Ζησιμου κάνει το καλύτερο μποτός της Αθήνας και του Κατάρ' },
  { name: 'Victoria Prifti Phibrows', stars: 5, text: 'Δεν είχα σκοπό να γράψω κριτική, απλά επειδή διάβασα κάποιες κακόβουλες κριτικές για το ιατρείο της κυρίας Ζήσιμου την οποία επισκεφτόμαστε χρόνια, θα ήθελα να πω ότι μια μικρή αναμονή των 10 λεπτών και όχι παραπάνω σε μια τόσο επιτυχημένη γιατρό είναι απολύτως φυσιολογικό. Όλες τις ενέσιμες θεραπείες τις εφαρμόζει μόνο η γιατρός. Το laser εφαρμόζεται μόνο από νοσηλεύτριες ή αισθητικούς με πτυχίο, από υπερσύγχρονα μηχανήματα. Επίσης δεν είναι τυχαίο ότι διαλέξανε την γιατρό Κυρία Ζήσιμου να δουλεύει στο ΚΑΤΑΡ και DUBAI. Προσωπικά δεν έχω δει άλλη ελληνίδα γιατρό να δουλεύει ως δερματολόγος στα Ηνωμένα Αραβικά Εμιράτα.' },
  { name: 'ΕΥΑΓΓΕΛΙΑ ΤΣΟΥΡΟΠΛΗ', stars: 5, text: 'Η γιατρός εξαιρετική, απόλυτα ενημερωμένη, αποτελεσματική και επεξηγηματική και συνεπέστατη στα ραντεβού μας. Οι κοπέλες πολύ ευγενικές και φιλικές και πάντα με χαμόγελο!' },
  { name: 'Olga Zadorozhna', stars: 5, text: 'The best clinic in Athens and peiraeus, thank you Dr Chrysoula and the girls at the office' },
  { name: 'Ελεαννα Δευτερινου', stars: 5, text: '«Εμπιστεύομαι την κα. Χρυσούλα για μποτοξ και υαλουρονικο και μου έχει αλλάξει όλο το προσωπο! (Δεν είναι τυχαίο που πλέον έχει συνεργαστεί και με κλινική στο Qatar)! Άψογη εξυπηρέτηση και φοβερές τιμές σε μια περίοδο ακρίβειας, δίνοντας έτσι την ευκαιρία σε όλους μας να κάνουμε ένα δώρο περιποίησης στον εαυτό μας! Σας ευχαριστώ πολύ και την συνιστώ ανεπιφύλακτα ❤️»' },
  { name: 'duja kd', stars: 5, text: 'Dr zisimo is the best doctor ever I recommend her she is very kind supportive and so comforting and will get you the best work done! ❤️' },
];

export const TOTAL_REVIEWS = reviews.length;

const PER_PAGE = 6;

export default function TestimonialsSection() {
  const [page, setPage] = useState(0);
  const pageCount = Math.ceil(reviews.length / PER_PAGE);
  const visibleReviews = reviews.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  const go = (next: number) => {
    setPage(Math.max(0, Math.min(pageCount - 1, next)));
    if (typeof document !== 'undefined') {
      document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
      id="testimonials"
      style={{
        width: '100%',
        minHeight: '630px',
        backgroundColor: '#fff',
        padding: '60px 0',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px',
        }}
      >
        <h2
          style={{
            fontFamily: 'HarmoniaSans, sans-serif',
            fontSize: '40px',
            fontWeight: 700,
            color: 'rgb(110, 90, 51)',
            marginBottom: '12px',
            textAlign: 'center',
          }}
        >
          Είπαν για εμάς
        </h2>
        <p
          style={{
            fontFamily: 'HarmoniaSans, sans-serif',
            fontSize: '16px',
            color: '#888',
            textAlign: 'center',
            marginBottom: '28px',
          }}
        >
          Λίγα λόγια από τους ασθενείς μας
        </p>

        {/* Google rating summary card */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
          <div
            style={{
              backgroundColor: '#fff',
              border: '1px solid rgb(244, 238, 224)',
              borderRadius: '12px',
              boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
              padding: '24px 32px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '10px',
              maxWidth: '340px',
              width: '100%',
            }}
          >
            <span
              style={{
                fontFamily: 'HarmoniaSans, sans-serif',
                fontSize: '18px',
                fontWeight: 700,
                color: '#333',
              }}
            >
              κριτικές
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span
                style={{
                  fontFamily: 'HarmoniaSans, sans-serif',
                  fontSize: '30px',
                  fontWeight: 700,
                  color: '#333',
                  lineHeight: 1,
                }}
              >
                4.70
              </span>
              <span style={{ display: 'flex', gap: '2px' }} aria-label="4.70 στα 5 αστέρια">
                {Array.from({ length: 5 }).map((_, si) => (
                  <span key={si} style={{ color: '#FBBC04', fontSize: '22px', lineHeight: 1 }}>★</span>
                ))}
              </span>
              <span
                style={{
                  fontFamily: 'HarmoniaSans, sans-serif',
                  fontSize: '15px',
                  color: '#888',
                }}
              >
                (866)
              </span>
            </div>
            <a
              href="https://www.google.com/search?sca_esv=33ade75dbb948c2a&sxsrf=APpeQntgnruITvA8NMwbOY3bFOOaE1mBsg:1783217339469&q=Advanced+Derma+Athens+%CE%91%CE%BE%CE%B9%CE%BF%CE%BB%CE%BF%CE%B3%CE%AE%CF%83%CE%B5%CE%B9%CF%82&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-__aFEiHevihIMBM0SVGfaE9oO14XsvepXJ-TLSKN5TEiwpED3LqiZTEfdtGf9qfB7sLYWvg%3D&uds=AJ5uw18nNIe6iM3ZvBqn-kM2E7cZKCbDamlH4m9EBi4wY3S_DBrGSIQi9JfZLsNZNp94WekPRXQMVHLNCGO9AkHMqB83kYH0NVSW9vRynZZ0af5LtCt08lPBe5DOgp-3UF4MJXbYOGE8XhZi6h3lDJUnmIUUUNMUow&sa=X"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                backgroundColor: '#1a73e8',
                color: '#fff',
                fontFamily: 'HarmoniaSans, sans-serif',
                fontSize: '14px',
                fontWeight: 500,
                padding: '10px 18px',
                borderRadius: '6px',
                textDecoration: 'none',
                marginTop: '4px',
              }}
            >
              Κριτική σε εμάς στο Google
            </a>
          </div>
        </div>

        <div
          className="derma-rgrid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
            marginBottom: '40px',
          }}
        >
          {visibleReviews.map((review, i) => (
            <div
              key={`${page}-${i}`}
              style={{
                backgroundColor: '#fff',
                border: '1px solid rgb(244, 238, 224)',
                borderRadius: '8px',
                padding: '28px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ marginBottom: '12px', display: 'flex', gap: '2px' }}>
                {Array.from({ length: review.stars }).map((_, si) => (
                  <span key={si} style={{ color: '#C9A227', fontSize: '16px' }}>★</span>
                ))}
              </div>
              <p
                style={{
                  fontFamily: 'HarmoniaSansQuote, HarmoniaSans, sans-serif',
                  fontSize: '16px',
                  color: '#333',
                  lineHeight: 1.7,
                  fontStyle: 'italic',
                  whiteSpace: 'pre-line',
                  flex: 1,
                }}
              >
                {review.text}
              </p>
              <p
                style={{
                  fontFamily: 'HarmoniaSans, sans-serif',
                  fontSize: '16px',
                  fontWeight: 600,
                  color: 'rgb(110, 90, 51)',
                  marginTop: '18px',
                }}
              >
                {review.name}
              </p>
            </div>
          ))}
        </div>

        {/* Pagination: Previous / page dots / Next */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '12px',
            flexWrap: 'wrap',
          }}
        >
          <button
            onClick={() => go(page - 1)}
            disabled={page === 0}
            aria-label="Προηγούμενες αξιολογήσεις"
            style={{
              fontFamily: 'HarmoniaSans, sans-serif',
              fontSize: '16px',
              fontWeight: 500,
              padding: '8px 18px',
              borderRadius: '6px',
              border: '1px solid rgb(203, 179, 121)',
              backgroundColor: page === 0 ? 'transparent' : 'rgb(203, 179, 121)',
              color: page === 0 ? 'rgba(110, 90, 51,0.45)' : '#000',
              cursor: page === 0 ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s',
            }}
          >
            ‹ Προηγούμενα
          </button>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Σελίδα ${i + 1}`}
                aria-current={i === page ? 'page' : undefined}
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'HarmoniaSans, sans-serif',
                  fontSize: '16px',
                  fontWeight: 600,
                  backgroundColor: i === page ? 'rgb(110, 90, 51)' : 'rgb(244, 238, 224)',
                  color: i === page ? '#fff' : 'rgb(110, 90, 51)',
                  transition: 'background-color 0.2s',
                }}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() => go(page + 1)}
            disabled={page === pageCount - 1}
            aria-label="Επόμενες αξιολογήσεις"
            style={{
              fontFamily: 'HarmoniaSans, sans-serif',
              fontSize: '16px',
              fontWeight: 500,
              padding: '8px 18px',
              borderRadius: '6px',
              border: '1px solid rgb(203, 179, 121)',
              backgroundColor: page === pageCount - 1 ? 'transparent' : 'rgb(203, 179, 121)',
              color: page === pageCount - 1 ? 'rgba(110, 90, 51,0.45)' : '#000',
              cursor: page === pageCount - 1 ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s',
            }}
          >
            Επόμενα ›
          </button>
        </div>
      </div>
    </div>
  );
}
