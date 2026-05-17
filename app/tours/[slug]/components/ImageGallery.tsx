'use client';

import { useState } from 'react';
import { Camera } from 'lucide-react';
import Image from 'next/image';
import { ImageModal } from '@/app/components/ImageModal';

interface ImageGalleryProps {
  images: string[];
}

export const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section className="mt-12">
      {images?.length > 0 && (
        <div className="bg-white/95 backdrop-blur-md border border-slate-300 p-6 shadow-[0_20px_60px_-20px_rgba(23,56,74,0.25)]">
          <h4 className="font-semibold text-[#17384A] mb-4 flex items-center gap-2">
            <Camera className="w-5 h-5 text-[#c79432]" />
            Tour Gallery
          </h4>
          <div className="grid grid-cols-3 gap-2">
            {images.slice(0, 6).map((img, index) => (
              <div
                key={index}
                onClick={() => setSelectedIndex(index)}
                className="group/img relative aspect-square rounded-lg overflow-hidden ring-2 ring-white/60 shadow-md hover:shadow-xl transition-all duration-500 hover:scale-105 cursor-pointer"
              >
                <Image
                  src={img}
                  alt={`Tour preview ${index + 1}`}
                  fill
                  className="object-cover group-hover/img:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      )}

      <ImageModal
        images={images}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
    </section>
  );
};
