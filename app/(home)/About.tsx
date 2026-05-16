import { motion } from 'framer-motion';
import Link from 'next/link';

export const About = () => {
  return (
    <section className=" bg-slate-50 mt-2 overflow-hidden">
      <div className="w-full grid grid-cols-1 md:grid-cols-5 items-center">
        <motion.div
          className="relative h-100 md:h-125 w-full md:col-span-2"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="/images/boats/1.png"
            alt="Quicksilver Active 605 Open"
            className="w-full h-full object-cover"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0% 100%)',
            }}
          />
        </motion.div>

        <motion.div
          className="px-8 lg:px-16 xl:px-2y md:col-span-3"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold leading-tight text-[#0d3043] mb-1">
            Quicksilver Active 605 Open
          </h2>

          <p className="text-[#c79432] uppercase tracking-wide font-semibold mb-6">
            About The Boat
          </p>

          <p className="text-gray-600 mb-10 leading-relaxed">
            The Quicksilver Active 605 Open is a fast and comfortable motorboat
            designed for exploring the beautiful Dalmatian coastline and nearby
            islands. Perfect for private tours and small groups, it offers a
            smooth ride, modern design, and everything needed for a relaxing day
            at sea.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-b-2 border-t-2 border-slate-300">
            <div className="flex flex-col p-5">
              <p className="text-accent font-bold text-3xl">6</p>
              <p className="text-sm text-gray-500">Guests</p>
            </div>

            <div className="flex flex-col p-5">
              <p className="font-bold text-2xl text-accent">52 km/h</p>
              <p className="text-sm text-gray-500">Top Speed</p>
            </div>

            <div className="flex flex-col p-5">
              <p className="font-bold text-2xl text-accent">6.46 m</p>
              <p className="text-sm text-gray-500">Length</p>
            </div>

            <div className="flex flex-col p-5">
              <p className="font-bold text-2xl text-accent">115 HP</p>
              <p className="text-sm text-gray-500">Engine</p>
            </div>
          </div>
          <a
            href="/boat"
            className="inline-block mt-8 bg-[#c79432] text-white font-bold px-6 py-3 hover:bg-[#b5842c] transition-colors duration-300"
          >
            More Details
          </a>
        </motion.div>
      </div>
    </section>
  );
};
