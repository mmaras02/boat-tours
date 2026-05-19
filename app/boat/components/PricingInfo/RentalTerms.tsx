import { SectionTitle } from '@/app/components/SectionTitle';
import { pricingData } from '@/app/constants/pricing';

export const RentalTerms = () => {
  return (
    <div className="mb-6">
      <SectionTitle title="Rental Terms & Conditions" />

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="p-4">
          <h4 className="font-semibold text-[#c79432] mb-3">Requirements:</h4>
          <ul className="space-y-2 text-sm text-slate-700">
            {pricingData.rentalTerms.requirements.map((req, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span>•</span>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-4">
          <h4 className="font-semibold text-[#c79432] mb-3">Prohibited:</h4>
          <ul className="space-y-2 text-sm text-slate-700">
            {pricingData.rentalTerms.prohibitedActions.map((action, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span>•</span>
                <span>{action}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mb-4 p-4">
        <h4 className="font-semibold text-[#c79432] mb-2">Weather Policy:</h4>
        <p className="text-sm text-slate-700">
          {pricingData.rentalTerms.weatherPolicy}
        </p>
      </div>

      <div className="mb-4 p-4">
        <h4 className="font-semibold text-[#c79432] mb-2">Responsibility:</h4>
        <p className="text-sm text-slate-700">
          {pricingData.rentalTerms.responsibility}
        </p>
      </div>

      <div className="p-4 bg-gray-50">
        <h4 className="font-semibold text-[#c79432] mb-3">
          Additional Information:
        </h4>
        <ul className="space-y-2 text-sm text-slate-700">
          {pricingData.rentalTerms.miscellaneous.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-gray-500">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
