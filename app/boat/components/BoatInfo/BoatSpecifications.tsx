import React from 'react';
import { FaUsers } from 'react-icons/fa';
import { IoIosSpeedometer } from 'react-icons/io';
import { GiSteeringWheel, GiSailboat } from 'react-icons/gi';
import { BsFillFuelPumpFill } from 'react-icons/bs';
import { type IconType } from 'react-icons';
import { SectionTitle } from '@/app/components/SectionTitle';

export const SpecCard: React.FC<{
  icon: IconType;
  label: string;
  value: React.ReactNode;
}> = ({ icon: Icon, label, value }) => (
  <div className="bg-slate-50 border border-slate-200 shadow p-4 hover:shadow-md transition">
    <div className="text-[#c79432] mb-2">
      <Icon className="text-2xl" />
    </div>
    <div className="text-xs font-semibold uppercase text-slate-500 tracking-wide">
      {label}
    </div>
    <div className="text-lg font-bold text-[#17384A] mt-1">{value}</div>
  </div>
);

export const BoatSpecifications = ({
  specifications,
}: {
  specifications: Record<string, any>;
}) => {
  const specItems = [
    { icon: GiSailboat, label: 'Length', value: specifications.length },
    { icon: GiSailboat, label: 'Width', value: specifications.width },
    { icon: FaUsers, label: 'Capacity', value: specifications.capacity },
    { icon: GiSteeringWheel, label: 'Engine', value: specifications.engine },
    {
      icon: IoIosSpeedometer,
      label: 'Max speed',
      value: specifications.maxSpeed,
    },
    {
      icon: IoIosSpeedometer,
      label: 'Cruise speed',
      value: specifications.cruisingSpeed,
    },
    {
      icon: BsFillFuelPumpFill,
      label: 'Fuel tank',
      value: specifications.fuelCapacity,
    },
    {
      icon: BsFillFuelPumpFill,
      label: 'Water tank',
      value: specifications.waterCapacity,
    },
  ];

  return (
    <div>
      <SectionTitle title="Boat Specifications" size="lg" />
      <div className="grid grid-cols-2 gap-4 mb-8">
        {specItems.map((spec, idx) => (
          <SpecCard key={idx} {...spec} />
        ))}
      </div>
    </div>
  );
};
