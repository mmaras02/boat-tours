"use client";

import { motion } from "framer-motion";

interface OptionsSectionProps {
    backgroundImage: string;
}

export const OptionsSection = ({
    backgroundImage,
}: OptionsSectionProps) => {

    return (
        <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-slate-50 mt-5">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${backgroundImage}')` }}
            ></div>

            <div className="absolute inset-0 bg-linear-to-r from-[#0b4f5a]/50 via-[#0b4f5a]/50 to-[#0b4f5a]/20"></div>

            <div className="relative z-10 w-full px-6 lg:px-20 py-16">
                <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
                    <motion.div
                        className="flex flex-col justify-center"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 lg:p-10 max-w-md">
                            <h2 className="text-2xl md:text-3xl font-bold text-white uppercase mb-1">
                                Half Day Tours
                            </h2>
                            <div className="w-20 h-1 bg-[#c79432] mb-6"></div>
                            <p className="text-slate-200 text-sm leading-relaxed mb-6">
                                Perfect for a quick escape. Explore stunning coastlines, hidden coves, and crystal-clear waters in just a few hours.
                            </p>
                            <ul className="space-y-3 mb-8 text-slate-200 text-sm">
                                <li className="flex items-center gap-3">
                                    <span className="text-[#c79432] text-xl">●</span>
                                    <span>Twice a day (morning and afternoon)</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-[#c79432] text-xl">●</span>
                                    <span>4-hour private boat experience</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-[#c79432] text-xl">●</span>
                                    <span>Refreshments & local snacks</span>
                                </li>
                            </ul>
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-2 bg-[#c79432] hover:bg-[#b6852d] text-white px-6 py-3 text-sm font-semibold tracking-wide transition"
                                >
                                    VIEW TOURS
                                </a>
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-2 border-2 border-white hover:bg-white hover:text-[#0b4f5a] text-white px-6 py-3 text-sm font-semibold tracking-wide transition"
                                >
                                    BOOK NOW
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex flex-col justify-center md:justify-end md:items-end"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 lg:p-10 max-w-md">
                            <h2 className="text-2xl md:text-3xl font-bold text-white uppercase mb-1">
                                All Day Tours
                            </h2>
                            <div className="w-20 h-1 bg-[#c79432] mb-6"></div>
                            <p className="text-slate-200 text-sm leading-relaxed mb-6">
                                The ultimate maritime adventure. Discover multiple destinations, enjoy gourmet meals, and create unforgettable memories.
                            </p>
                            <ul className="space-y-3 mb-8 text-slate-200 text-sm">
                                <li className="flex items-center gap-3">
                                    <span className="text-[#c79432] text-xl">●</span>
                                    <span>8-hour boat experience</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-[#c79432] text-xl">●</span>
                                    <span>Full water sports equipment</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-[#c79432] text-xl">●</span>
                                    <span>Up to 6 destinations</span>
                                </li>
                            </ul>
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-2 bg-[#c79432] hover:bg-[#b6852d] text-white px-6 py-3 text-sm font-semibold tracking-wide transition"
                                >
                                    VIEW TOURS
                                </a>
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-2 border-2 border-white hover:bg-white hover:text-[#0b4f5a] text-white px-6 py-3 text-sm font-semibold tracking-wide transition"
                                >
                                    BOOK NOW
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}