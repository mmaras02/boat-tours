import React from 'react';
import { FaUsers } from 'react-icons/fa';
import { IoIosSpeedometer } from 'react-icons/io';
import { GiSteeringWheel, GiSailboat } from 'react-icons/gi';
import { BsFillFuelPumpFill } from 'react-icons/bs';
import { type IconType } from 'react-icons';
import { boat } from '@/app/constants/boat';
import { SectionHeader } from './SectionHeader';

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
      <SectionHeader title="Boat Specifications" />
      <div className="grid grid-cols-2 gap-4 mb-8">
        {specItems.map((spec, idx) => (
          <SpecCard key={idx} {...spec} />
        ))}
      </div>
    </div>
  );
};

// export function BoatSpecifications = () => {
//     <div className="lg:col-span-2">
//                 <h2 className="text-3xl font-bold text-[#17384A] mb-2">
//                   Boat Specifications
//                 </h2>
//                 <div className="w-24 h-1 bg-[#c79432] mb-8"></div>

//                 {/* Dimensions */}
//                 <div className="mb-10">
//                   <h3 className="text-lg font-semibold text-slate-600 mb-4 uppercase tracking-wide">
//                     Dimensions & Capacity
//                   </h3>
//                   <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//                     {[
//                       { label: 'Length', value: '6.46 m', icon: GiSailboat },
//                       { label: 'Width', value: '2.4 m', icon: GiSailboat },
//                       { label: 'Capacity', value: '6 persons', icon: FaUsers },
//                     ].map((spec, idx) => (
//                       <div
//                         key={idx}
//                         className="bg-white border border-slate-200 rounded-lg p-4 hover:shadow-md transition"
//                       >
//                         <div className="text-[#c79432] mb-2">
//                           <spec.icon className="text-2xl" />
//                         </div>
//                         <div className="text-xs font-semibold uppercase text-slate-500 tracking-wide">
//                           {spec.label}
//                         </div>
//                         <div className="text-lg font-bold text-[#17384A] mt-1">
//                           {spec.value}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Performance */}
//                 <div className="mb-10">
//                   <h3 className="text-lg font-semibold text-slate-600 mb-4 uppercase tracking-wide">
//                     Performance
//                   </h3>
//                   <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//                     {[
//                       {
//                         label: 'Engine',
//                         value: 'Mercury EFI 115',
//                         icon: GiSteeringWheel,
//                       },
//                       {
//                         label: 'Max Speed',
//                         value: '32 mph',
//                         icon: IoIosSpeedometer,
//                       },
//                       {
//                         label: 'Cruise Speed',
//                         value: '24 mph',
//                         icon: IoIosSpeedometer,
//                       },
//                     ].map((spec, idx) => (
//                       <div
//                         key={idx}
//                         className="bg-white border border-slate-200 rounded-lg p-4 hover:shadow-md transition"
//                       >
//                         <div className="text-[#c79432] mb-2">
//                           <spec.icon className="text-2xl" />
//                         </div>
//                         <div className="text-xs font-semibold uppercase text-slate-500 tracking-wide">
//                           {spec.label}
//                         </div>
//                         <div className="text-lg font-bold text-[#17384A] mt-1">
//                           {spec.value}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Fuel & Water */}
//                 <div className="mb-10">
//                   <h3 className="text-lg font-semibold text-slate-600 mb-4 uppercase tracking-wide">
//                     Tanks
//                   </h3>
//                   <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//                     {[
//                       {
//                         label: 'Fuel Tank',
//                         value: '160 L',
//                         icon: BsFillFuelPumpFill,
//                       },
//                       {
//                         label: 'Water Tank',
//                         value: '45 L',
//                         icon: BsFillFuelPumpFill,
//                       },
//                     ].map((spec, idx) => (
//                       <div
//                         key={idx}
//                         className="bg-white border border-slate-200 rounded-lg p-4 hover:shadow-md transition"
//                       >
//                         <div className="text-[#c79432] mb-2">
//                           <spec.icon className="text-2xl" />
//                         </div>
//                         <div className="text-xs font-semibold uppercase text-slate-500 tracking-wide">
//                           {spec.label}
//                         </div>
//                         <div className="text-lg font-bold text-[#17384A] mt-1">
//                           {spec.value}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
// }

//                 {/* Additional Features */}
//                 <div className="sticky top-32">
//             <h2 className="text-3xl font-bold text-[#17384A] mb-2">
//               Rental Options
//             </h2>
//             <div className="w-24 h-1 bg-[#c79432] mb-8"></div>

//             {/* Rental Type Toggle */}
//             <div className="grid grid-cols-2 gap-2 mb-8 bg-slate-100 p-1 rounded-lg">
//               <button
//                 onClick={() => setRentalType('bareboat')}
//                 className={`py-3 px-4 font-semibold rounded transition-all ${
//                   rentalType === 'bareboat'
//                     ? 'bg-[#c79432] text-white shadow-lg'
//                     : 'text-slate-600 hover:text-slate-800'
//                 }`}
//               >
//                 Bareboat
//               </button>
//               <button
//                 onClick={() => setRentalType('captained')}
//                 className={`py-3 px-4 font-semibold rounded transition-all ${
//                   rentalType === 'captained'
//                     ? 'bg-[#c79432] text-white shadow-lg'
//                     : 'text-slate-600 hover:text-slate-800'
//                 }`}
//               >
//                 With Skipper
//               </button>
//             </div>

//             {/* Rental Cards */}
//             {rentalType === 'bareboat' && (
//               <div className="bg-linear-to-br from-white to-slate-50 border-2 border-[#c79432] rounded-xl p-6 shadow-lg">
//                 <h3 className="text-2xl font-bold text-[#17384A] mb-2">
//                   Rent Without Skipper
//                 </h3>
//                 <p className="text-slate-600 mb-6 leading-relaxed">
//                   Perfect for experienced captains. You'll have full control of
//                   the vessel and explore at your own pace.
//                 </p>
//                 <div className="mb-6">
//                   <div className="text-4xl font-bold text-[#c79432]">
//                     €200
//                     <span className="text-sm text-slate-500 font-normal">
//                       /day
//                     </span>
//                   </div>
//                   <p className="text-xs text-slate-500 mt-1">
//                     from price shown
//                   </p>
//                 </div>
//                 <ul className="space-y-3 mb-8">
//                   {[
//                     'License required (Category B)',
//                     'Fuel included up to 10L/hour',
//                     'Free cancellation 48h prior',
//                     'Security deposit: €800',
//                   ].map((item, idx) => (
//                     <li
//                       key={idx}
//                       className="flex items-start gap-3 text-slate-700"
//                     >
//                       <span className="text-[#c79432] font-bold mt-0.5">✓</span>
//                       <span>{item}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}

//             {rentalType === 'captained' && (
//               <div className="bg-linear-to-br from-white to-slate-50 border-2 border-[#c79432] rounded-xl p-6 shadow-lg">
//                 <h3 className="text-2xl font-bold text-[#17384A] mb-2">
//                   Rent With Skipper
//                 </h3>
//                 <p className="text-slate-600 mb-6 leading-relaxed">
//                   Sit back and relax while our experienced skipper navigates the
//                   best spots and hidden gems.
//                 </p>
//                 <div className="mb-6">
//                   <div className="text-4xl font-bold text-[#c79432]">
//                     €400
//                     <span className="text-sm text-slate-500 font-normal">
//                       /day
//                     </span>
//                   </div>
//                   <p className="text-xs text-slate-500 mt-1">
//                     from price shown
//                   </p>
//                 </div>
//                 <ul className="space-y-3 mb-8">
//                   {[
//                     'Professional licensed skipper',
//                     'Fuel included',
//                     'Local knowledge of hidden gems',
//                     'No license required',
//                     'Reduced security deposit',
//                   ].map((item, idx) => (
//                     <li
//                       key={idx}
//                       className="flex items-start gap-3 text-slate-700"
//                     >
//                       <span className="text-[#c79432] font-bold mt-0.5">✓</span>
//                       <span>{item}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
