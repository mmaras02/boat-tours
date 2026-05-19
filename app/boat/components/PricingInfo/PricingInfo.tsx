'use client';

import { Dropdown } from '@/app/components/Dropdown';
import { PriceTable } from './PriceTable';
import { DiscountsInfo } from './DiscountInfo';
import { CancellationPolicy } from './CancellationPolicy';
import { RentalTerms } from './RentalTerms';

export const PricingInfo = () => {
  return (
    <Dropdown title="Pricing & Rental Information">
      <PriceTable />
      <DiscountsInfo />
      <CancellationPolicy />
      <RentalTerms />

      <p className="text-xs text-slate-400 mt-6 pt-4 text-center border-t border-slate-200">
        * By signing the rental agreement, the renter confirms they have the
        appropriate license to operate the vessel and agrees to all terms and
        conditions.
      </p>
    </Dropdown>
  );
};
