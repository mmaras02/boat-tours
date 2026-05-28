'use client';

import { BoatInfo } from './components/BoatInfo/BoatInfo';
import { boat } from '../constants/boat';
import { BoatGallery } from './components/BoatInfo/BoatGallery';

export default function BoatPage() {
  return (
    <main className="min-h-screen pt-20 md:pt-40 px-6">
      <div className="md:text-center pt-10 md:py-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-dark-slate uppercase tracking-tight">
          {boat.name}
        </h2>
        <div className="w-60 h-1 bg-accent m-0 md:mx-auto mt-4 mb-6"></div>
        <p className="text-slate-600 text-lg max-w-3xl mx-auto">
          {boat.description}
        </p>
      </div>

      <BoatGallery />
      <BoatInfo />
    </main>
  );
}
