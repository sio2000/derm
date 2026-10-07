export interface Review {
  id: string;
  name: string;
  stars: number;
  text: string;
}

export interface ReviewsContent {
  rating: string;
  count: string;
  reviews: Review[];
}

export type TreatmentGroup = 'prosopo' | 'soma' | 'kliniki-dermatologia';

export const TREATMENT_GROUPS: TreatmentGroup[] = ['prosopo', 'soma', 'kliniki-dermatologia'];
