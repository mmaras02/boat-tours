'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface HeroButton {
  text: string;
  href: string;
}

interface HeroProps {
  image: string;
  title: string;
  description: ReactNode;
  buttons?: HeroButton[];
}

export const Hero = ({
  image,
  title,
  description,
  buttons = [],
}: HeroProps) => {
  return (
    <section className="relative w-full overflow-hidden flex items-start md:items-center min-h-[calc(100vh-5rem)]">
      <img
        src={image}
        alt="Hero image"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-r from-[#0b4f5a]/80 via-[#0b4f5a]/50 to-[#0b4f5a]/30" />

      <div className="relative pt-15 z-10 w-full max-w-7xl mx-auto px-10 lg:px-10 py-6 md:py-16 grid md:grid-cols-12 gap-8 items-start md:items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:col-span-5 text-white text-center md:text-left mx-auto md:mx-0"
        >
          <p className="text-sm tracking-[0.35em] uppercase text-slate-200 mb-3 text-accent">
            Venti Boat
          </p>
          <h1 className="font-extrabold uppercase leading-[0.95] text-4xl sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-4 text-slate-200/95 text-sm sm:text-base leading-relaxed max-w-md mx-auto md:mx-0">
            {description}
          </p>

          <div className="mt-7 text-center md:text-left">
            <a
              href="/contact"
              aria-label="Contact VentiBoat to book your tour"
              className="inline-flex items-center gap-2 bg-[#c79432] hover:bg-[#b6852d] text-white px-6 py-3 font-semibold tracking-wide transition"
            >
              BOOK NOW
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
