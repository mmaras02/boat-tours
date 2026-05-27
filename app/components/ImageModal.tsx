'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageModalProps {
  images: string[];
  selectedIndex: number | null;
  setSelectedIndex: (index: number | null) => void;
}

export const ImageModal = ({
  images,
  selectedIndex,
  setSelectedIndex,
}: ImageModalProps) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const closeModal = () => setSelectedIndex(null);

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null)
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null)
      setSelectedIndex((selectedIndex + 1) % images.length);
  };

  useEffect(() => {
    if (selectedIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft' && selectedIndex !== null)
        setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
      if (e.key === 'ArrowRight' && selectedIndex !== null)
        setSelectedIndex((selectedIndex + 1) % images.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedIndex]);

  if (!mounted || !images || images.length === 0) return null;

  return createPortal(
    <AnimatePresence>
      {selectedIndex !== null && (
        <motion.div
          className="fixed inset-0 z-9999 flex items-center justify-center bg-black/70 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <button
            id="close-button"
            type="button"
            onClick={closeModal}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          {images.length > 1 && (
            <button
              id="prev-button-image"
              type="button"
              onClick={prevImage}
              className="absolute left-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Image */}
          <motion.div
            className="relative w-[90vw] max-w-4xl h-[80vh] rounded-2xl overflow-hidden shadow-2xl"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[selectedIndex]}
              alt={`Image ${selectedIndex + 1}`}
              className="w-full h-full object-contain"
            />
          </motion.div>

          {/* Next */}
          {images.length > 1 && (
            <button
              id="next-button-image"
              type="button"
              onClick={nextImage}
              className="absolute right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Counter */}
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/70 text-sm">
            {selectedIndex + 1} / {images.length}
          </p>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
};
