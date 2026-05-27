import { useState } from 'react';
import { boat } from '@/app/constants/boat';
import { SectionTitle } from '@/app/components/SectionTitle';
import { OptionCard } from '@/app/components/OptionCard';

interface ToggleButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const ToggleButton = ({ active, onClick, children }: ToggleButtonProps) => (
  <button
    id="toggle-button"
    type="button"
    onClick={onClick}
    className={`flex-1 py-3 px-4 font-semibold transition-all ${
      active
        ? 'bg-[#c79432] text-white shadow-lg'
        : 'text-slate-600 bg-slate-100 hover:bg-slate-200'
    }`}
  >
    {children}
  </button>
);

export const RentalOptions = () => {
  const [rentalType, setRentalType] = useState<
    'withSkipper' | 'withoutSkipper'
  >('withoutSkipper');

  const selectedOption = boat.pricing.find(
    (option) => option.id === rentalType,
  );

  return (
    <div>
      <SectionTitle title="Rental Options" size="lg" />
      <div className="p-1 mb-8 flex gap-1">
        <ToggleButton
          active={rentalType === 'withoutSkipper'}
          onClick={() => setRentalType('withoutSkipper')}
        >
          Without Skipper
        </ToggleButton>
        <ToggleButton
          active={rentalType === 'withSkipper'}
          onClick={() => setRentalType('withSkipper')}
        >
          With Skipper
        </ToggleButton>
      </div>

      {selectedOption && (
        <OptionCard
          title={selectedOption.title}
          price={selectedOption.price}
          description={selectedOption.description}
          features={selectedOption.features}
          variant="toggle"
        />
      )}
    </div>
  );
};
