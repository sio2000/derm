import TestimonialsClient from '@/components/TestimonialsClient';
import { getReviewsContent } from '@/lib/content/reviews';

// Loads the reviews (editable from the admin panel) and hands them to the
// interactive, paginated section.
export default async function TestimonialsSection() {
  const { reviews, rating, count } = await getReviewsContent();
  return <TestimonialsClient reviews={reviews} rating={rating} count={count} />;
}
