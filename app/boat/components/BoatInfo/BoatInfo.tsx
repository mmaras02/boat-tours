'use client';

import { boat } from '@/app/constants/boat';
import { RentalOptions } from '../RentalOptions';
import { Dropdown } from '@/app/components/Dropdown';
import { PricingInfo } from '../PricingInfo/PricingInfo';
import { IncludedItemsDropdown } from './IncludedItemsDropdown';
import { BoatSpecifications } from './BoatSpecifications';

export const BoatInfo = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <BoatSpecifications specifications={boat.specifications} />

          <div>
            <RentalOptions />
          </div>
        </div>

        <Dropdown title="What is Included">
          <IncludedItemsDropdown />
        </Dropdown>

        <PricingInfo />

        <div className="text-center mt-20">
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
