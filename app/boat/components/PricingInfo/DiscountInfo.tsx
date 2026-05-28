import { SectionTitle } from '@/app/components/SectionTitle';
import { pricingData } from '@/app/constants/pricing';

export const DiscountsInfo = () => {
  return (
    <div className="mb-8">
      <SectionTitle title="Discounts" />
      <p className="text-sm text-slate-600 mb-4">
        We offer various discounts that will be applied to your quote:
      </p>
      <div className="space-y-2">
        {pricingData.discounts.map((discount, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center bg-slate-50 p-3 hover:shadow-md transition"
          >
            <div>
              <p className="font-semibold text-sm">{discount.name}</p>
              <p className="text-xs text-slate-500">{discount.description}</p>
            </div>
            <span className="font-bold text-accent text-sm bg-white px-2 py-1 rounded">
              {discount.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
