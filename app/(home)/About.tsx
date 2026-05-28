import { motion } from 'framer-motion';
import Link from 'next/link';
import { boat } from '../constants/boat';

const DisplayStats = ({ stat, idx }: { stat: any; idx: number }) => {
  return (
    <div
      key={idx}
      className="flex flex-col p-5 border-b border-slate-300 last:border-b-0 md:border-b-0 md:nth-3:border-b-0"
    >
      <p className="text-accent font-bold text-2xl">
        {boat.specifications[stat.valueKey as keyof typeof boat.specifications]}
      </p>
      <p className="text-sm text-gray-500">{stat.label}</p>
    </div>
  );
};

export const About = () => {
  return (
    <section className="bg-slate-50 mt-2 overflow-hidden">
      <div className="w-full grid grid-cols-1 md:grid-cols-5 items-center">
        <motion.div
          className="relative h-100 md:h-125 w-full md:col-span-2 mb-10 md:mb-0"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src={boat.images[0]}
            alt={boat.name}
            className="w-full h-full object-cover about-image"
          />
        </motion.div>

        <motion.div
          className="px-8 lg:px-16 md:col-span-3"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold leading-tight text-navbar mb-1">
            {boat.name}
          </h2>

          <p className="text-accent uppercase tracking-wide font-semibold mb-6">
            About The Boat
          </p>

          <p className="text-gray-600 mb-10 leading-relaxed">
            {boat.aboutDescription}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-b-2 border-t-2 border-slate-300 divide-y divide-slate-300 md:divide-y-0">
            {boat.stats.map((stat, idx) => (
              <DisplayStats key={idx} stat={stat} idx={idx} />
            ))}
          </div>

          <div className="flex justify-center md:block">
            <Link
              href="/boat"
              className="inline-block mt-8 mb-10 md:mb-0 bg-accent bg-accent-hover text-white font-bold px-6 py-3 transition-colors duration-300 text-center"
            >
              More Details
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
