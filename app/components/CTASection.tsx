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
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-[#17384A]/55 to-[#0b4f5a]/45" />

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
            className="group/btn inline-flex items-center gap-2 bg-[#c79432] hover:bg-[#b6852d] text-white px-8 py-4 font-semibold transition-all duration-300 shadow-lg shadow-black/20 hover:shadow-xl hover:-translate-y-0.5"
          >
            <span>Contact Us Now</span>
            <span className="group-hover/btn:translate-x-1 transition-transform duration-300">
              →
            </span>
          </Link>
          {/* <Link
            href="/tours"
            className="group/btn inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20 px-8 py-4 font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            <span>Explore More Tours</span>
          </Link> */}
        </div>
      </div>
    </section>
  );
};
