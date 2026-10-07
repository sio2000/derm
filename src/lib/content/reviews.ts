import { defaultReviews, defaultReviewSummary } from '@/data/reviews';
import { readContent, writeContent } from './storage';
import type { ReviewsContent } from './types';

const KEY = 'reviews';

const defaults = (): ReviewsContent => ({
  ...defaultReviewSummary,
  reviews: defaultReviews.map((r, i) => ({ id: `base-${i + 1}`, ...r })),
});

export async function getReviewsContent(): Promise<ReviewsContent> {
  return (await readContent<ReviewsContent>(KEY)) ?? defaults();
}

export async function saveReviewsContent(content: ReviewsContent): Promise<void> {
  await writeContent(KEY, content);
}
