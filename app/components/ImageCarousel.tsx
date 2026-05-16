'use client';

import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';

export interface CarouselItem {
  key?: string | number;
  title?: string;
  image: string;
  description?: string;
  width?: number;
  height?: number;
  onClick?: (index?: number) => void;
}

interface ImageCarouselProps {
  items: CarouselItem[];
  cardsPerView?: number;
  autoPlayMs?: number;
  className?: string;
  gap?: number;
  onClick?: (index: number) => void;
}

export function ImageCarousel({
  items,
  cardsPerView = 3,
  autoPlayMs = 4000,
  className = '',
  gap = 16,
  onClick,
}: ImageCarouselProps) {
  const safeCardsPerView = Math.max(1, cardsPerView);

  const maxStartIndex = useMemo(
    () => Math.max(0, items.length - safeCardsPerView),
    [items.length, safeCardsPerView],
  );

  const totalPositions = maxStartIndex + 1;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    if (currentIndex > maxStartIndex) {
      setCurrentIndex(maxStartIndex);
    }
  }, [currentIndex, maxStartIndex]);

  useEffect(() => {
    if (totalPositions <= 1 || autoPlayMs <= 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPositions);
    }, autoPlayMs);

    return () => clearInterval(timer);
  }, [autoPlayMs, totalPositions]);

  const getTranslateX = () => {
    if (!containerWidth || !cardWidth) return 0;
    return (cardWidth + gap) * currentIndex;
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxStartIndex : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPositions);
  };

  return (
    <div className={`w-full ${className}`}>
      <div className="relative overflow-hidden shadow-2xl">
        <motion.div
          className="flex"
          style={{ gap: `${gap}px` }}
          animate={{ x: `-${getTranslateX()}px` }}
          transition={{ duration: 0.55, ease: 'easeInOut' }}
        >
          {items.map((item, index) => (
            <article
              key={item.key ?? `${item.title}-${index}`}
              className="shrink-0 overflow-hidden bg-white/95 flex flex-col"
              ref={(el) => {
                if (el && index === 0) {
                  const width = el.getBoundingClientRect().width;
                  setCardWidth(width);
                }
                if (el && index === 0) {
                  const parentWidth =
                    el.parentElement?.getBoundingClientRect().width;
                  if (parentWidth) setContainerWidth(parentWidth);
                }
              }}
              style={{
                width: `calc((100% - ${gap * (safeCardsPerView - 1)}px) / ${safeCardsPerView})`,
              }}
            >
              <div className="relative w-full h-56 sm:h-64 md:h-72 cursor-pointer">
                <Image
                  src={item.image}
                  alt={item.title ?? 'carousel image'}
                  fill
                  sizes={`(max-width: 768px) 100vw, ${100 / safeCardsPerView}vw`}
                  className="object-cover"
                  onClick={() => onClick?.(index)}
                />
              </div>

              {item.title && item.description && (
                <div className="p-4 md:p-5">
                  <h3 className="text-lg md:text-xl font-bold text-[#17384A]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              )}
            </article>
          ))}
        </motion.div>

        {totalPositions > 1 && (
          <>
            <button
              onClick={goPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white h-10 w-10 flex items-center justify-center transition rounded-full"
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              onClick={goNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white h-10 w-10 flex items-center justify-center transition rounded-full"
              aria-label="Next image"
            >
              ›
            </button>
          </>
        )}
      </div>

      {totalPositions > 1 && (
        <div className="mt-4 flex items-center justify-center gap-2">
          {Array.from({ length: totalPositions }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                index === currentIndex ? 'bg-[#c79432] w-6' : 'bg-gray-400'
              }`}
              aria-label={`Go to slide set ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
