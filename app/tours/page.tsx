"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { TOUR_FILTERS } from "../constants/filters";
import { FilterButton } from "../components/FilterButton";
import { TourCard } from "../components/TourCard";
import { TourFilter } from "../../types/tour";
import { getAllTours, getFeaturedTours } from "../utils/tour";
import { tours } from "../data/tours";

export default function ToursPage() {
    const allTours = getAllTours();
    //const featuredTours = getFeaturedTours();
    const [activeFilter, setActiveFilter] = useState<TourFilter>("all");

    const filteredTours = useMemo(() => {
        if (activeFilter === "all") return tours;

        return tours.filter((tour) => {
            const duration = tour.duration.toLowerCase();
            return activeFilter === "full"
                ? duration.includes("full")
                : duration.includes("half");
        });
    }, [activeFilter]);

    return (
        <main className="relative pt-40 min-h-screen bg-slate-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-[#17384A] mb-4">
                        Our Tours
                    </h1>
                    <div className="w-24 h-1 bg-[#c79432] mb-6" />
                    <p className="text-lg text-gray-700 max-w-3xl">
                        Explore our unforgettable boat tours in Split, Croatia.
                        From half-day adventures to full-day excursions, we offer
                        something for everyone.
                    </p>
                </motion.div>

                <div className="mb-8 flex flex-wrap gap-3 justify-end">
                    {TOUR_FILTERS.map(({ value, label }) => (
                        <FilterButton
                            key={value}
                            active={activeFilter === value}
                            onClick={() => setActiveFilter(value as TourFilter)}
                        >
                            {label}
                        </FilterButton>
                    ))}
                </div>

                {filteredTours.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredTours.map((tour) => (
                            <TourCard key={tour.id} tour={tour} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-gray-500 text-lg">
                            No tours found for the selected filter.
                        </p>
                    </div>
                )}
            </div>
        </main>
    );
}