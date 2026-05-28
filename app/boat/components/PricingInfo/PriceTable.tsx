import { SectionTitle } from '@/app/components/SectionTitle';
import { pricingData } from '@/app/constants/pricing';

const TABLE_HEADERS = ['Season', 'Months', 'Without Skipper', 'With Skipper'];

export const PriceTable = () => {
  return (
    <>
      <SectionTitle title="Pricing Overview" />

      <div className="hidden md:block overflow-x-auto my-6">
        <table className="w-full">
          <thead className="bg-slate-100 divide-y divide-slate-200">
            <tr>
              {TABLE_HEADERS.map((header) => (
                <th
                  key={header}
                  className="px-4 py-3 text-left text-sm font-semibold text-dark-slate"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-200">
            {pricingData.seasonalPricing.map((item) => (
              <tr key={item.season}>
                <td className="px-4 py-3 text-sm font-medium text-dark-slate">
                  {item.season}
                </td>
                <td className="px-4 py-3 text-sm text-slate-600">
                  {item.months}
                </td>
                <td className="px-4 py-3 text-sm font-semibold text-accent">
                  {item.priceWithoutSkipper} €/day
                </td>
                <td className="px-4 py-3 text-sm font-semibold text-accent">
                  {item.priceWithSkipper} €/day
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="md:hidden space-y-4 my-6">
        {pricingData.seasonalPricing.map((item) => (
          <div key={item.season} className="bg-slate-50 p-4 shadow-sm">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-bold text-dark-slate text-lg">
                  {item.season}
                </h3>
                <p className="text-sm text-slate-500">{item.months}</p>
              </div>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-200">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Without Skipper:</span>
                <span className="font-semibold text-accent">
                  {item.priceWithoutSkipper} €/day
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">With Skipper:</span>
                <span className="font-semibold text-accent">
                  {item.priceWithSkipper} €/day
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs mb-5 text-slate-500 mt-1 text-center md:text-left">
        * Skipper price is always +120 €/day
      </p>
    </>
  );
};
