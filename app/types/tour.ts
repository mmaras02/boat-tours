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

// export function getAllTours(): Tour[] {
//   return tours;
// }

// export function getFeaturedTours(): Tour[] {
//   return tours.filter((tour) => tour.featured);
// }

// export function getToursByDestination(destination: string): Tour[] {
//   return tours.filter((tour) =>
//     tour.destinations.some((d) =>
//       d.toLowerCase().includes(destination.toLowerCase()),
//     ),
//   );
// }

// export function getTourBySlug(slug: string): Tour | undefined {
//   return tours.find((tour) => tour.slug === slug);
// }

// export function getAllTourSlugs(): string[] {
//   return tours.map((tour) => tour.slug);
// }

// export function getToursByDuration(type: 'half' | 'full'): Tour[] {
//   return tours.filter((tour) =>
//     type === 'half'
//       ? tour.duration.toLowerCase().includes('half')
//       : tour.duration.toLowerCase().includes('full'),
//   );
// }

// export function formatPrice(price: string): string {
//   return price;
// }
