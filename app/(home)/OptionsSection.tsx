'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface OptionsSectionProps {
  backgroundImage: string;
}

export const OptionsSection = ({ backgroundImage }: OptionsSectionProps) => {
  const [selectedOption, setSelectedOption] = useState<
    'bareboat' | 'captained'
  >('bareboat');

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-slate-50 mt-2">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      ></div>

      <div className="absolute inset-0 bg-linear-to-r from-[#0b4f5a]/80 via-[#0b4f5a]/70 to-[#0b4f5a]/40"></div>

      <div className="relative z-10 w-full px-6 lg:px-20 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white uppercase mb-4">
              Choose Your Rental Option
            </h2>
            <div className="w-24 h-1 bg-[#c79432] mx-auto"></div>
          </motion.div>

          {/* Option Toggle Buttons */}
          <motion.div
            className="flex justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => setSelectedOption('bareboat')}
              className={`px-8 py-3 text-lg font-semibold transition-all duration-300 ${
                selectedOption === 'bareboat'
                  ? 'bg-[#c79432] text-white shadow-lg scale-105'
                  : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
              }`}
            >
              No Skipper (Bareboat)
            </button>
            <button
              onClick={() => setSelectedOption('captained')}
              className={`px-8 py-3 text-lg font-semibold transition-all duration-300 ${
                selectedOption === 'captained'
                  ? 'bg-[#c79432] text-white shadow-lg scale-105'
                  : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
              }`}
            >
              With Skipper
            </button>
          </motion.div>

          {/* Content Cards */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Bareboat Option */}
            <motion.div
              className={`transition-all duration-500 ${
                selectedOption === 'bareboat'
                  ? 'scale-100 opacity-100'
                  : 'scale-95 opacity-50 md:opacity-100'
              }`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div
                className={`bg-white/10 backdrop-blur-sm border p-8 lg:p-10 h-full transition-all ${
                  selectedOption === 'bareboat'
                    ? 'border-[#c79432] shadow-2xl'
                    : 'border-white/20'
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-white uppercase">
                    No Skipper
                  </h2>
                  {selectedOption === 'bareboat' && (
                    <span className="bg-[#c79432] text-white px-3 py-1 text-sm font-bold">
                      SELECTED
                    </span>
                  )}
                </div>
                <div className="w-20 h-1 bg-[#c79432] mb-6"></div>

                <div className="text-3xl font-bold text-[#c79432] mb-6">
                  €250<span className="text-white text-sm">/day</span>
                </div>

                <p className="text-slate-200 text-sm leading-relaxed mb-6">
                  Perfect for experienced captains. Take full control of the
                  vessel and explore at your own pace.
                </p>

                <ul className="space-y-3 mb-8 text-slate-200 text-sm">
                  <li className="flex items-center gap-3">
                    <span className="text-[#c79432] text-xl">●</span>
                    <span>License required (Category B)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#c79432] text-xl">●</span>
                    <span>Fuel included up to 10L/hour</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#c79432] text-xl">●</span>
                    <span>Security deposit: €500</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#c79432] text-xl">●</span>
                    <span>Free cancellation 48h prior</span>
                  </li>
                </ul>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 bg-[#c79432] hover:bg-[#b6852d] text-white px-6 py-3 text-sm font-semibold tracking-wide transition"
                  >
                    BOOK BAREBOAT
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              className={`transition-all duration-500 ${
                selectedOption === 'captained'
                  ? 'scale-100 opacity-100'
                  : 'scale-95 opacity-50 md:opacity-100'
              }`}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div
                className={`bg-white/10 backdrop-blur-sm border p-8 lg:p-10 h-full transition-all ${
                  selectedOption === 'captained'
                    ? 'border-[#c79432] shadow-2xl'
                    : 'border-white/20'
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-white uppercase">
                    With Skipper
                  </h2>
                  {selectedOption === 'captained' && (
                    <span className="bg-[#c79432] text-white px-3 py-1 text-sm font-bold">
                      SELECTED
                    </span>
                  )}
                </div>
                <div className="w-20 h-1 bg-[#c79432] mb-6"></div>

                <div className="text-3xl font-bold text-[#c79432] mb-6">
                  €450<span className="text-white text-sm">/day</span>
                </div>

                <p className="text-slate-200 text-sm leading-relaxed mb-6">
                  Sit back and relax while our experienced skipper navigates the
                  best spots and hidden gems.
                </p>

                <ul className="space-y-3 mb-8 text-slate-200 text-sm">
                  <li className="flex items-center gap-3">
                    <span className="text-[#c79432] text-xl">●</span>
                    <span>Professional licensed skipper</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#c79432] text-xl">●</span>
                    <span>No license required</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#c79432] text-xl">●</span>
                    <span>Learn sailing basics</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#c79432] text-xl">●</span>
                    <span>Local knowledge of hidden gems</span>
                  </li>
                </ul>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 bg-[#c79432] hover:bg-[#b6852d] text-white px-6 py-3 text-sm font-semibold tracking-wide transition"
                  >
                    BOOK WITH SKIPPER
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-white/80 text-sm">
              Both options include: Full insurance • Safety equipment •
              Snorkeling gear • Cooler box • First aid kit
            </p>
            <div className="flex justify-center gap-6 mt-6 text-white text-xs">
              <span>✓ Free cancellation up to 48h before departure</span>
              <span>✓ Best price guarantee</span>
              <span>✓ Secure booking</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
