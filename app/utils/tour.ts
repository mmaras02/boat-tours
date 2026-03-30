import { tours } from '../data/tours';
import { Tour } from '../../types/tour';

export function getAllTours(): Tour[] {
  return tours;
}

export function getFeaturedTours(): Tour[] {
  return tours.filter((tour) => tour.featured);
}

export function getToursByDestination(destination: string): Tour[] {
  return tours.filter((tour) =>
    tour.destinations?.some((d) =>
      d.toLowerCase().includes(destination.toLowerCase()),
    ),
  );
}

export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find((tour) => tour.slug === slug);
}

export function getAllTourSlugs(): string[] {
  return tours.map((tour) => tour.slug);
}

export function getToursByDuration(type: 'half' | 'full'): Tour[] {
  return tours.filter((tour) =>
    type === 'half'
      ? tour.duration.toLowerCase().includes('half') || tour.duration_hours! < 7
      : tour.duration.toLowerCase().includes('full') ||
        tour.duration_hours! >= 7,
  );
}
