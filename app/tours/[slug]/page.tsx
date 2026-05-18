import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Hero } from '@/app/components/Hero';
import { getAllTourSlugs, getTourBySlug } from '@/app/utils/tour';
import {
  CalendarDays,
  Users,
  Ship,
  CheckCircle,
  XCircle,
  Shield,
} from 'lucide-react';
import { CTASection } from './components/CTASection';
import { Sidebar } from './components/Sidebar';

type TourPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllTourSlugs().map((slug) => ({ slug }));
}

export default async function TourPage({ params }: TourPageProps) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);

  if (!tour) {
    notFound();
  }

  return (
    <main className="relative pt-35 min-h-screen bg-slate-100 overflow-hidden">
      <Hero
        title={tour.title}
        description={tour.subtitle || ''}
        image={tour.image}
      />
      <div className="relative z-10 mx-auto pt-10">
        <Link
          href="/tours"
          className="ml-25 mb-20 inline-flex items-center gap-2 text-sm font-medium text-[#17384A] hover:text-[#c79432] bg-white/40 backdrop-blur-md px-5 py-2.5  border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 group"
        >
          <span className="transform group-hover:-translate-x-1 transition-transform duration-300">
            ←
          </span>
          <span>Back to all tours</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 mx-25 gap-20">
          <div className="lg:col-span-2 space-y-16">
            <div className="flex flex-wrap gap-20 text-sm text-slate-600 border-b border-slate-300 pb-8">
              <div className="flex items-center gap-3">
                <CalendarDays className="w-6 h-6 text-accent" />
                <div>
                  <p className="text-s uppercase tracking-wider text-slate-500">
                    Duration
                  </p>
                  <p className="font-semibold text-[#17384A]">
                    {tour.duration}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-accent" />
                <div>
                  <p className="text-s uppercase tracking-wider text-slate-500">
                    Group Size
                  </p>
                  <p className="font-semibold text-[#17384A]">
                    Up to {tour.max_guests}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Ship className="w-6 h-6 text-accent" />
                <div>
                  <p className="text-s uppercase tracking-wider text-slate-500">
                    Boat
                  </p>
                  <p className="font-semibold text-[#17384A]">
                    {tour.boat_type}
                  </p>
                </div>
              </div>
            </div>

            {/* DESCRIPTION */}

            <section>
              <h2 className="text-3xl font-bold text-[#0d3043] mb-2">
                About This Tour
              </h2>
              <div className="w-24 h-1 bg-[#c79432] mb-6" />

              <p className="text-[#c79432] uppercase tracking-wide font-semibold mb-6">
                Experience
              </p>

              <p className="text-gray-600 leading-relaxed max-w-3xl">
                {tour.full_description || tour.description}
              </p>
            </section>

            {/* DESTINATIONS */}

            {tour.destinations?.length > 0 && (
              <section>
                <h2 className="text-2xl font-semibold text-[#17384A] mb-2 flex items-center gap-2">
                  {/* <MapPin className="w-5 h-5 text-[#c79432]" /> */}
                  Destinations You'll Explore
                </h2>
                <div className="w-24 h-1 bg-[#c79432] mb-6" />

                <div className="flex flex-wrap gap-3 border-b border-slate-300 pb-8 mb-8">
                  {tour.destinations.map((destination) => (
                    <span
                      key={destination}
                      className="px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm hover:bg-[#c79432]/10 transition"
                    >
                      {destination}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* HIGHLIGHTS */}

            <section className="border-b border-slate-300 pb-20">
              <h2 className="text-2xl font-semibold text-[#17384A] mb-2 flex items-center gap-2">
                {/* <Star className="w-5 h-5 text-[#c79432]" /> */}
                Tour Highlights
              </h2>
              <div className="w-24 h-1 bg-[#c79432] mb-6" />

              <ul className="relative pl-8 space-y-4">
                {/* vertical line */}
                <span className="absolute left-4 top-0 bottom-0 w-px bg-slate-200"></span>

                {tour.highlights.map((highlight, index) => (
                  <li className="flex items-start gap-3 relative">
                    {/* bullet aligned on the line */}
                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[#c79432] shadow-md relative z-10" />

                    <span className="text-slate-700 leading-relaxed hover:text-[#17384A] transition-colors duration-200">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* INCLUDES / EXCLUDES */}

            {(tour.includes?.length || tour.excludes?.length) && (
              <section className="grid md:grid-cols-2 gap-12">
                {tour.includes?.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold text-[#17384A] mb-2 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      What's Included
                    </h3>
                    <div className="w-24 h-1 bg-[#c79432] mb-5" />

                    <ul className="space-y-3 text-slate-700">
                      {tour.includes.map((item, index) => (
                        <li key={index} className="flex gap-2">
                          <span className="text-green-600">✓</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {tour.excludes?.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold text-[#17384A] mb-2 flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-red-500" />
                      What's Excluded
                    </h3>
                    <div className="w-24 h-1 bg-[#c79432] mb-5" />

                    <ul className="space-y-3 text-slate-700">
                      {tour.excludes.map((item, index) => (
                        <li key={index} className="flex gap-2">
                          <span className="text-red-500">✗</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            )}

            {/* IMPORTANT INFO */}

            <section className="border-t pt-12">
              <h3 className="text-xl font-semibold text-[#17384A] mb-2 flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#c79432]" />
                Important Information
              </h3>
              <div className="w-24 h-1 bg-[#c79432] mb-6" />

              <div className="space-y-4 text-slate-700">
                {tour.starting_point && (
                  <p>
                    <span className="font-semibold text-[#17384A]">
                      Starting Point:
                    </span>{' '}
                    {tour.starting_point}
                  </p>
                )}

                {tour.availability && (
                  <p>
                    <span className="font-semibold text-[#17384A]">
                      Availability:
                    </span>{' '}
                    {tour.availability}
                  </p>
                )}

                {tour.boat_type && (
                  <p>
                    <span className="font-semibold text-[#17384A]">
                      Boat Type:
                    </span>{' '}
                    {tour.boat_type}
                  </p>
                )}
              </div>
            </section>
          </div>
          {/* Right column - Sticky booking card */}
          <div className="lg:col-span-1">
            <Sidebar tour={tour} />
          </div>
        </div>

        <div>
          <CTASection />
        </div>
      </div>
    </main>
  );
}
