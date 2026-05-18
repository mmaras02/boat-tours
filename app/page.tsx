'use client';

import { About } from './(home)/About';
import { DestinationsSection } from './(home)/DestinationsSection';
import { OptionsSection } from './(home)/OptionsSection';
import { ReasonsSection } from './(home)/ReasonsSection';
import { Hero } from './components/Hero';
import { CTASection } from './tours/[slug]/components/CTASection';

export default function Home() {
  return (
    <main className="relative pt-20 bg-[#c79432]">
      <Hero
        image="/hero.avif"
        title="Welcome to Venti Boat"
        description="Experience unforgettable boat ride with us!"
      />

      <About />

      <OptionsSection backgroundImage="/images/slika.jpg" />
      <ReasonsSection />
      {/* <DestinationsSection /> */}
      <CTASection />
    </main>
  );
}
