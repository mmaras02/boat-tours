'use client';

import { boat } from '../constants/boat';
import { OptionCard } from '../components/OptionCard';

interface OptionsSectionProps {
  backgroundImage: string;
}

export const OptionsSection = ({ backgroundImage }: OptionsSectionProps) => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-slate-50 mt-2">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      ></div>

      <div className="absolute inset-0 bg-options-overlay"></div>

      <div className="relative z-10 w-full px-6 lg:px-20 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white uppercase mb-4">
              Choose Your Rental Option
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {boat.pricing.map((option) => (
              <OptionCard key={option.id} {...option} />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/80 text-sm">
            {boat.included.map((item: string, index: number) => (
              <span key={index}>{item} • </span>
            ))}
          </p>
          <div className="flex justify-center gap-6 mt-6 text-white text-xs">
            <span>✓ Free cancellation up to 7 days before departure</span>
            <span>✓ Best price guarantee</span>
            <span>✓ Secure booking</span>
          </div>
        </div>
      </div>
    </section>
  );
};
