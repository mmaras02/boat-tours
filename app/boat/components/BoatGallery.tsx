'use client';

import Image from 'next/image';
import { useState } from 'react';
import { boat } from '@/app/constants/boat';
import { ImageModal } from '@/app/components/ImageModal';
import { ImageCarousel } from '@/app/components/ImageCarousel';

export const BoatGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <>
      <div className="max-w-4xl mx-auto">
        <div className="hidden md:flex justify-center shadow-xl">
          <Image
            src="/images/boat/2.png"
            alt="Boat image"
            width={900}
            height={400}
            onClick={() =>
              setSelectedIndex(boat.images.indexOf('/images/boat/2.png'))
            }
          />
        </div>

        <div className="py-10">
          <ImageCarousel
            items={boat.images.map((img) => ({
              image: img,
            }))}
            cardsPerView={4}
            onClick={(index) => setSelectedIndex(index)}
          />
        </div>
      </div>

      <ImageModal
        images={boat.images}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
    </>
  );
};
