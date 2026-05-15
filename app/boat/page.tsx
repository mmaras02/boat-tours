'use client';

import { useState } from 'react';
import Image from 'next/image';
import ImageModal from '@/app/components/ImageModal';
import { ImageCarousel } from '../components/ImageCarousel';
import { BoatInfo } from './components/BoatInfo';

export default function BoatPage() {
  const images = [
    '/images/boat/boat1.webp',
    '/images/boat/boat2.jpg',
    '/images/boat/boat3.jpg',
    '/images/boat/boat4.jpg',
    '/images/boat/boat6.jpg',
    '/images/boat/boat7.jpg',
    '/images/boat/boat8.jpg',
  ];

  const [selectedImage, setSelectedImage] = useState(images[6]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#e5e5e5] pt-40 px-6">
      <div className="text-center py-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#17384A] uppercase tracking-tight">
          Salmeri Calipso 6.30m
        </h2>
        <div className="w-24 h-1 bg-[#c79432] mx-auto mt-4 mb-6"></div>
        <p className="text-slate-600 text-lg max-w-3xl mx-auto">
          Experience the perfect blend of comfort, style, and performance on the
          Adriatic Sea
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
