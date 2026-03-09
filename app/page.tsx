"use client";

import { About } from "./(home)/About";
import { DestinationsSection } from "./(home)/DestinationsSection";
import { OptionsSection } from "./(home)/OptionsSection";
import { ReasonsSection } from "./(home)/ReasonsSection";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";

export default function Home() {
  return (
    <main className="relative pt-20 bg-[#c79432]">

      <Hero
        image="/hero.avif"
        title="Welcome to Rosa Ventorum"
        description="Experience unforgettable boat tours with us!"
      />

      <About />

      <OptionsSection backgroundImage="/images/galleryImg.avif" />
      <ReasonsSection />
      <DestinationsSection />

    </main>
  );
}