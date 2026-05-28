import Link from 'next/link';
import Image from 'next/image';

export const CTASection = () => {
  return (
    <section className="relative mt-2 py-10 overflow-hidden">
      <Image
        src="/images/hero.avif"
        alt="Dalmatian coast boat tour"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-cta-overlay" />

      <div className="relative z-10 py-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready for Your Dalmatian Adventure?
        </h2>
        <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
          Contact us to book this boat and create a custom itinerary tailored to
          your preferences.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact"
            className="group/btn inline-flex items-center gap-2 bg-accent bg-accent-hover text-white px-8 py-4 font-semibold transition-all duration-300 shadow-lg shadow-black/20 hover:shadow-xl hover:-translate-y-0.5"
          >
            <span>Contact Us Now</span>
            <span className="group-hover/btn:translate-x-1 transition-transform duration-300">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};
