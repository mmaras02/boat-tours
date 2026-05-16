'use client';

import { useState } from 'react';
import Image from 'next/image';
import ImageModal from '@/app/components/ImageModal';
import { ImageCarousel } from '../components/ImageCarousel';
import { BoatInfo } from './components/BoatInfo';

export default function BoatPage() {
  const images = [
    '/images/boats/1.png',
    '/images/boats/2.png',
    '/images/boats/3.png',
    '/images/boats/4.jpg',
    '/images/boats/6.jpg',
    '/images/boats/7.jpg',
    '/images/boats/8.jpg',
    '/images/boats/9.jpg',
    '/images/boats/10.jpeg',
  ];

  const [selectedImage, setSelectedImage] = useState(images[1]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen pt-40 px-6">
      <div className="text-center py-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#17384A] uppercase tracking-tight">
          Quicksilver Active 605 Open
        </h2>
        <div className="w-24 h-1 bg-[#c79432] mx-auto mt-4 mb-6"></div>
        <p className="text-slate-600 text-lg max-w-3xl mx-auto">
          Comfort, family-friendly motorboat with ideal balance of sporty
          performance, practicality and sefety for a whole day leisure on the
          sea. The Boat of the Year 2017 by Moteur Boat Magazine makes best in
          the category of storage capacities and intelligent use of space, best
          access from water to cockpit and outstandingly low fuel consumption
          with the new Mercury EFI 115 CT engine.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Main Image */}
        <div className="flex justify-center shadow-xl">
          <Image
            src={selectedImage}
            alt="Boat image"
            width={900}
            height={400}
            onClick={() => setSelectedIndex(images.indexOf(selectedImage))}
          />
        </div>

        <div className="py-10">
          <ImageCarousel
            items={images.map((img) => ({
              image: img,
            }))}
            cardsPerView={4}
            onClick={(index) => setSelectedIndex(index)}
          />
        </div>
      </div>

      <ImageModal
        images={images}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />

      <BoatInfo />
    </main>
  );
}
