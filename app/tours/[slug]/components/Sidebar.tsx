import { Tour } from '@/types/tour';
import { Anchor, CheckCircle, Heart, Shield, Ship, Sun } from 'lucide-react';
import Link from 'next/link';
import { ImageGallery } from './ImageGallery';

interface SidebarProps {
  tour: Tour;
}

export const Sidebar = ({ tour }: SidebarProps) => {
  return (
    <div className="sticky top-24 space-y-6">
      <div className="relative bg-white/95 backdrop-blur-md border border-slate-300 shadow-[0_20px_70px_-15px_rgba(23,56,74,0.3)] overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-[#c79432]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        {/* Price section */}
        <div className="relative p-8 text-center border-b border-slate-100">
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#c79432]/10 rounded-full blur-2xl" />
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500 mb-3">
            Starting Price
          </p>
          <div className="flex items-center justify-center gap-1">
            <span className="text-5xl font-bold text-[#17384A]">
              {tour.price}
            </span>
          </div>
          <p className="text-sm text-slate-600 mt-3 font-medium">
            Private tour for your group
          </p>

          {/* Trust badge */}
          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500">
            <Heart className="w-4 h-4 text-[#c79432]" />
            <span>Best price guaranteed</span>
          </div>
        </div>

        {/* Booking section */}
        <div className="p-8">
          <Link
            href="/contact"
            className="group/btn relative block w-full bg-linear-to-r from-[#c79432] to-[#b6852d] hover:from-[#b6852d] hover:to-[#a67828] text-white py-5 px-6 font-semibold text-center transition-all duration-300 rounded-xl shadow-lg shadow-[#c79432]/30 overflow-hidden"
          >
            <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
            <span className="relative z-10 text-lg">Book This Tour</span>
          </Link>

          <p className="text-xs text-slate-500 text-center mt-4 flex items-center justify-center gap-1">
            <CheckCircle className="w-4 h-4 text-emerald-500" />
            Free cancellation up to 24 hours before
          </p>

          {/* Why book with us */}
          <div className="mt-8 pt-6 border-t border-slate-100">
            <h4 className="font-semibold text-[#17384A] mb-4 flex items-center gap-2">
              Why book with us?
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-slate-600 group/item">
                <span className="shrink-0 w-8 h-8 rounded-lg bg-[#c79432]/10 flex items-center justify-center group-hover/item:bg-[#c79432]/20 transition-colors duration-300">
                  <Ship className="w-4 h-4 text-[#c79432]" />
                </span>
                <span>Private boat for your group only</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-600 group/item">
                <span className="shrink-0 w-8 h-8 rounded-lg bg-[#c79432]/10 flex items-center justify-center group-hover/item:bg-[#c79432]/20 transition-colors duration-300">
                  <Anchor className="w-4 h-4 text-[#c79432]" />
                </span>
                <span>Experienced local skippers</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-600 group/item">
                <span className="shrink-0 w-8 h-8 rounded-lg bg-[#c79432]/10 flex items-center justify-center group-hover/item:bg-[#c79432]/20 transition-colors duration-300">
                  <Sun className="w-4 h-4 text-[#c79432]" />
                </span>
                <span>Flexible itinerary</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-600 group/item">
                <span className="shrink-0 w-8 h-8 rounded-lg bg-[#c79432]/10 flex items-center justify-center group-hover/item:bg-[#c79432]/20 transition-colors duration-300">
                  <Shield className="w-4 h-4 text-[#c79432]" />
                </span>
                <span>Best price guarantee</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <ImageGallery images={tour.images} />

      <div className="flex flex-wrap justify-center gap-3 text-xs text-slate-500">
        <span className="px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-full border border-white/40">
          ✓ Secure Booking
        </span>
        <span className="px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-full border border-white/40">
          ✓ Best Price
        </span>
        <span className="px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-full border border-white/40">
          ✓ Local Experts
        </span>
      </div>
    </div>
  );
};
