'use client';

import { useState } from 'react';
import {
  FaShip,
  FaUsers,
  FaSnowflake,
  FaMusic,
  FaBath,
  FaWifi,
  FaAnchor,
  FaChartLine,
  FaLifeRing,
  FaMapMarkedAlt,
} from 'react-icons/fa';
import { IoIosSpeedometer } from 'react-icons/io';
import { GiSteeringWheel, GiSailboat } from 'react-icons/gi';
import { MdOutlineElectricalServices, MdKitchen } from 'react-icons/md';
import { BsFillFuelPumpFill } from 'react-icons/bs';

export const BoatInfo = () => {
  const [rentalType, setRentalType] = useState<'captained' | 'bareboat'>(
    'bareboat',
  );

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* Header */}
        {/* <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#17384A] uppercase tracking-tight">
            Salmeri Calipso 6.30m
          </h2>
          <div className="w-24 h-1 bg-[#c79432] mx-auto mt-4 mb-6"></div>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            Experience the perfect blend of comfort, style, and performance on
            the Adriatic Sea
          </p>
        </div> */}

        {/* Main Info Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Left Column - Key Features */}
          <div>
            <h3 className="text-2xl font-bold text-[#17384A] flex items-center gap-2">
              {/* <FaShip className="text-[#c79432]" /> */}
              Boat Overview
            </h3>
            <div className="w-24 h-1 bg-[#c79432] mb-6"></div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-slate-50 p-4 shadow-sm">
                <div className="text-[#c79432] mb-2">
                  <GiSailboat className="text-2xl" />
                </div>
                <div className="text-sm text-slate-500">Length</div>
                <div className="text-xl font-bold text-[#17384A]">6.46 m</div>
              </div>

              <div className="bg-slate-50 p-4 shadow-sm">
                <div className="text-[#c79432] mb-2">
                  <GiSailboat className="text-2xl" />
                </div>
                <div className="text-sm text-slate-500">Width</div>
                <div className="text-xl font-bold text-[#17384A]">2.4 m</div>
              </div>

              <div className="bg-slate-50 p-4 shadow-sm">
                <div className="text-[#c79432] mb-2">
                  <FaUsers className="text-2xl" />
                </div>
                <div className="text-sm text-slate-500">Capacity</div>
                <div className="text-xl font-bold text-[#17384A]">
                  6 persons
                </div>
              </div>

              <div className="bg-slate-50 p-4 shadow-sm">
                <div className="text-[#c79432] mb-2">
                  <GiSteeringWheel className="text-2xl" />
                </div>
                <div className="text-sm text-slate-500">Engine</div>
                <div className="text-xl font-bold text-[#17384A]">
                  Mercury EFI 115 Command Thrust
                </div>
              </div>

              <div className="bg-slate-50 p-4 shadow-sm">
                <div className="text-[#c79432] mb-2">
                  <IoIosSpeedometer className="text-2xl" />
                </div>
                <div className="text-sm text-slate-500">Max speed</div>
                <div className="text-xl font-bold text-[#17384A]">32 mph</div>
              </div>

              <div className="bg-slate-50 p-4 shadow-sm">
                <div className="text-[#c79432] mb-2">
                  <IoIosSpeedometer className="text-2xl" />
                </div>
                <div className="text-sm text-slate-500">Cruise speed</div>
                <div className="text-xl font-bold text-[#17384A]">24 mph</div>
              </div>

              <div className="bg-slate-50 p-4 shadow-sm">
                <div className="text-[#c79432] mb-2">
                  <BsFillFuelPumpFill className="text-2xl" />
                </div>
                <div className="text-sm text-slate-500">Fuel tank</div>
                <div className="text-xl font-bold text-[#17384A]">160 l</div>
              </div>

              <div className="bg-slate-50 p-4 shadow-sm">
                <div className="text-[#c79432] mb-2">
                  <BsFillFuelPumpFill className="text-2xl" />
                </div>
                <div className="text-sm text-slate-500">Water tank</div>
                <div className="text-xl font-bold text-[#17384A]">45 l</div>
              </div>
            </div>

            {/* <h3 className="text-2xl font-bold text-[#17384A] mb-4 flex items-center gap-2">
              <FaLifeRing className="text-[#c79432]" />
              Equipment & Amenities
            </h3>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                { icon: FaSnowflake, label: 'Air Conditioning' },
                { icon: FaMusic, label: 'Bluetooth Sound' },
                { icon: FaBath, label: 'Shower & Toilet' },
                { icon: MdKitchen, label: 'Full Kitchen' },
                { icon: FaWifi, label: 'WiFi Available' },
                { icon: MdOutlineElectricalServices, label: '220V Outlets' },
                { icon: FaChartLine, label: 'GPS Navigation' },
                { icon: FaAnchor, label: 'Electric Anchor' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 text-slate-600"
                >
                  <item.icon className="text-[#c79432]" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div> */}
          </div>

          {/* Right Column - Rental Options */}
          <div>
            <h3 className="text-2xl font-bold text-[#17384A] flex items-center gap-2">
              {/* <FaMapMarkedAlt className="text-[#c79432]" /> */}
              Rental Options
            </h3>
            <div className="w-24 h-1 bg-[#c79432] mb-6"></div>

            {/* Rental Type Toggle */}
            <div className="p-1 mb-8 flex gap-1">
              <button
                onClick={() => setRentalType('bareboat')}
                className={`flex-1 py-3 px-4 font-semibold transition-all ${
                  rentalType === 'bareboat'
                    ? 'bg-[#c79432] text-white shadow-lg'
                    : 'text-slate-600 bg-slate-100'
                }`}
              >
                Bareboat (No Skipper)
              </button>
              <button
                onClick={() => setRentalType('captained')}
                className={`flex-1 py-3 px-4 font-semibold transition-all ${
                  rentalType === 'captained'
                    ? 'bg-[#c79432] text-white shadow-lg'
                    : 'text-slate-600 bg-slate-100'
                }`}
              >
                With Skipper
              </button>
            </div>

            {/* Bareboat Details */}
            {rentalType === 'bareboat' && (
              <div className="space-y-6">
                <div className="border-l-4 border-[#c79432] p-6 rounded-r-xl">
                  <h4 className="text-xl font-bold text-[#17384A] mb-2">
                    Rent Without Skipper
                  </h4>
                  <p className="text-slate-600 mb-4">
                    Perfect for experienced captains. You'll have full control
                    of the vessel.
                  </p>
                  <div className="text-3xl font-bold text-[#c79432] mb-4">
                    from €200
                    <span className="text-sm text-slate-500">/day</span>
                  </div>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-center gap-2">
                      ✓ License required (Category B)
                    </li>
                    <li className="flex items-center gap-2">
                      ✓ Fuel included up to 10L/hour
                    </li>
                    <li className="flex items-center gap-2">
                      ✓ Free cancellation 48h prior
                    </li>
                    <li className="flex items-center gap-2">
                      ✓ Security deposit: €500
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* With Skipper Details */}
            {rentalType === 'captained' && (
              <div className="space-y-6">
                <div className="border-l-4 border-[#c79432] p-6 rounded-r-xl">
                  <h4 className="text-xl font-bold text-[#17384A] mb-2">
                    Rent With Skipper
                  </h4>
                  <p className="text-slate-600 mb-4">
                    Sit back and relax while our experienced skipper navigates
                    the best spots.
                  </p>
                  <div className="text-3xl font-bold text-[#c79432] mb-4">
                    from €400
                    <span className="text-sm text-slate-500">/day</span>
                  </div>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-center gap-2">
                      ✓ Professional licensed skipper
                    </li>
                    <li className="flex items-center gap-2">✓ Fuel included</li>
                    <li className="flex items-center gap-2">
                      ✓ Local knowledge of hidden gems
                    </li>
                    <li className="flex items-center gap-2">
                      ✓ No license required
                    </li>
                    <li className="flex items-center gap-2">
                      ✓ Learn sailing basics
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* What's Included */}
            <div className="mt-8 bg-slate-50 p-6 shadow-md">
              <h4 className="font-bold text-[#17384A] mb-3">
                What's Included:
              </h4>
              <div className="grid grid-cols-2 gap-2 text-sm text-slate-600">
                <div>✓ Full insurance</div>
                <div>✓ Safety equipment</div>
                <div>✓ Towels</div>
                <div>✓ Snorkeling gear</div>
                <div>✓ Cooler box</div>
                <div>✓ First aid kit</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="bg-[#c79432] hover:bg-[#b6852d] text-white font-bold p-5 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            BOOK THIS BOAT NOW
          </button>
          <p className="text-sm text-slate-400 mt-4">
            Free cancellation up to 48 hours before departure
          </p>
        </div>
      </div>
    </section>
  );
};
