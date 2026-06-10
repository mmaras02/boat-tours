export type TourFilter = 'all' | 'full' | 'half';

export type Tour = {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  duration: string;
  duration_hours: number;
  availability: string;
  boat_type: string;
  max_guests: number;
  starting_point: string;
  description: string;
  full_description: string;
  highlights: string[];
  includes: string[];
  excludes: string[];
  price: string;
  price_amount: number;
  currency: string;
  image: string;
  images: string[];
  destinations: string[];
  featured: boolean;
};
