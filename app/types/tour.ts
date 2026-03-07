export type TourFilter = 'all' | 'full' | 'half';

export type Tour = {
  id: number;
  image: string;
  title: string;
  description: string;
  duration: string;
  price: string;
  highlights: string[];
};
