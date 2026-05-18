'use client';

import { BoatSpecifications } from './BoatSpecifications';
import { boat } from '@/app/constants/boat';
import { RentalOptions } from './RentalOptions';

export const BoatInfo = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <BoatSpecifications specifications={boat.specifications} />

          <div>
            <RentalOptions />

            <div className="mt-8 bg-slate-50 p-6 shadow-md">
              <h4 className="font-bold text-[#17384A] mb-3">
                What's Included:
              </h4>
              <div className="grid grid-cols-2 gap-2 text-sm text-slate-600">
                <div>✓ Full insurance</div>
                <div>✓ Safety equipment</div>
                <div>✓ Towels</div>
                <div>✓ Snorkeling gear</div>
                <div>✓ Cooler box</div>
                <div>✓ First aid kit</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="/contact"
            className="bg-[#c79432] hover:bg-[#b6852d] text-white font-bold py-4 px-8 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            BOOK THIS BOAT NOW
          </a>
          <p className="text-sm text-slate-400 mt-6">
            Free cancellation up to 48 hours before departure
          </p>
        </div>
      </div>
    </section>
  );
};
