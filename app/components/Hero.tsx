"use client"

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { DestinationCard } from "./DestinationCard";
import { destinations } from "../constants/destinations";

interface HeroButton {
    text: string;
    href: string;
}

interface HeroProps {
    image: string;
    title: string;
    description: ReactNode;
    buttons?: HeroButton[];
    isFirst?: boolean;
}

export const Hero = ({
    image,
    title,
    description,
    buttons = [],
    isFirst = true,
}: HeroProps) => {

    return (
        <section className={`relative w-full overflow-hidden flex items-center ${isFirst ? "min-h-[calc(100vh-5rem)]" : "min-h-[76vh]"}`}>
            <img
                src={image}
                alt="Hero image"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-[#0b4f5a]/95 via-[#0b4f5a]/55 to-[#0b4f5a]/30" />

            <div className="relative z-10 w-full max-w-7xl m-auto lg:px-10 py-12 md:py-16 grid md:grid-cols-12 gap-8 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="md:col-span-5 text-white"
                >
                    <p className="text-sm tracking-[0.35em] uppercase text-slate-200 mb-3 text-accent">Rosa Ventorum</p>
                    <h1 className="font-extrabold uppercase leading-[0.95] text-4xl sm:text-5xl lg:text-6xl">
                        {title}
                    </h1>
                    <p className="mt-4 text-slate-200/95 max-w-md text-sm sm:text-base leading-relaxed">
                        {description}
                    </p>

                    <div className="mt-7 flex items-center gap-5">
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 bg-[#c79432] hover:bg-[#b6852d] text-white px-6 py-3 font-semibold tracking-wide transition"
                        >
                            BOOK NOW
                        </a>
                        <div className="hidden sm:flex items-center gap-2 text-slate-100/80 text-lg">
                            <span>◀</span>
                            <span>◀</span>
                            <span>◀</span>
                            <span>◀</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, delay: 0.15 }}
                    className="md:col-span-7 grid sm:grid-cols-3 gap-4 mt-30"
                >
                    {destinations.slice(0, 3).map((card) => (
                        <DestinationCard key={card.title} image={card.image} title={card.title} text={card.description} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}