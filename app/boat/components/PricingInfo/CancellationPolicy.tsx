import { SectionTitle } from '@/app/components/SectionTitle';
import { pricingData } from '@/app/constants/pricing';

export const CancellationPolicy = () => {
  return (
    <div className="mb-8 py-4">
      {/* <h3 className="font-bold text-[#17384A] mb-3 text-lg">
        Cancellation Policy
      </h3> */}
      <SectionTitle title="Cancellation Policy" />
      <div className="space-y-2 text-sm">
        <p className="flex items-start gap-2">
          <span>✓</span>
          <span>
            Free cancellation up to{' '}
            <span className="font-semibold">
              {pricingData.cancellationPolicy.freeCancellation}
            </span>
          </span>
        </p>
        <p className="flex items-start gap-2">
          <span>✗</span>
          <span>{pricingData.cancellationPolicy.partialRefund}</span>
        </p>
      </div>
    </div>
  );
};
