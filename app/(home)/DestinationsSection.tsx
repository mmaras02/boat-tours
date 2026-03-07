import { motion } from "framer-motion";
import { ImageCarousel } from "../components/ImageCarousel";
import { destinations } from "../constants/destinations";

export const DestinationsSection = () => {
    return (
        <section className="w-full bg-slate-100 mt-5">
            <motion.div
                className="mx-auto px-6 lg:px-10 max-w-7xl py-14 flex flex-col gap-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="text-slate-700 text-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold uppercase leading-tight">
                        Explore Destinations
                    </h2>
                    <p className="mt-4 text-slate-500 text-sm md:text-base leading-relaxed">
                        Discover Croatia from the sea with curated routes, private stops, and premium comfort.
                    </p>
                    {/* <a
                        href="#"
                        className="mt-7 inline-flex items-center gap-2 bg-[#c79432] hover:bg-[#b6852d] text-white px-6 py-3 text-sm font-semibold tracking-wide transition"
                    >
                        BOOK NOW
                    </a> */}
                </div>

                <ImageCarousel items={destinations} cardsPerView={3} autoPlayMs={4000} />
            </motion.div>
        </section>
    );
};