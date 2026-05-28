'use client';

import { About } from './(home)/About';
import { OptionsSection } from './(home)/OptionsSection';
import { ReasonsSection } from './(home)/ReasonsSection';
import { Hero } from './components/Hero';
import { CTASection } from './components/CTASection';

export default function Home() {
  return (
    <main className="relative pt-20 bg-accent">
      <Hero
        image="/images/hero.jpg"
        title="Welcome to Venti Boat"
        description="Experience unforgettable boat ride with our boat!"
      />

      <About />

      <OptionsSection backgroundImage="/images/slika.jpg" />
      <ReasonsSection />
      <CTASection />
    </main>
  );
}
