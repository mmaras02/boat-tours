import Link from "next/link";
import { motion } from "framer-motion";
import { Tour } from "../../types/tour";

interface tourCardProps {
    tour: Tour;
}

export const TourCard = ({ tour }: tourCardProps) => {
    return (
        <motion.article
            key={tour.id}
            className="relative bg-white shadow-lg hover:shadow-xl transition-shadow overflow-hidden flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: tour.id * 0.1 }}
        >
            <Link
                href={`/tours/${tour.slug}`}
                aria-label={`View details for ${tour.title}`}
                className="absolute inset-0 z-10"
            />

            {tour.image ? (
                <img src={tour.image} alt={tour.title} className="h-56 bg-linear-to-br from-[#0b4f5a] to-[#17384A] w-full object-cover" />
            ) : (
                <div className="h-56 bg-linear-to-br from-[#0b4f5a] to-[#17384A] relative">
                    <div className="absolute inset-0 flex items-center justify-center text-white text-6xl opacity-20">
                        🚤
                    </div>
                </div>
            )
            }

            <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-3">
                    <h2 className="text-2xl font-bold text-[#17384A] leading-tight">
                        {tour.title}
                    </h2>
                </div>

                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                        ⏱️ {tour.duration}
                    </span>
                    <span className="font-bold text-[#c79432]">
                        {tour.price}
                    </span>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">
                    {tour.description}
                </p>

                <div className="mb-6">
                    <h3 className="font-semibold text-[#17384A] mb-2 text-sm uppercase">
                        Highlights
                    </h3>
                    <ul className="space-y-1.5 text-sm text-gray-600">
                        {tour.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                                <span className="text-[#c79432] mt-0.5">✓</span>
                                <span>{highlight}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="relative z-20 mt-auto pt-4 border-t border-gray-200 flex gap-3">
                    <Link
                        href="/contact"
                        className="flex-1 text-center bg-[#c79432] hover:bg-[#b6852d] text-white py-3 px-4 font-semibold text-sm transition"
                    >
                        BOOK NOW
                    </Link>
                    <Link
                        href={`/tours/${tour.slug}`}
                        className="flex-1 text-center border-2 border-[#c79432] text-[#c79432] hover:bg-[#b6852d] hover:text-white py-3 px-4 font-semibold text-sm transition"
                    >
                        DETAILS
                    </Link>
                </div>
            </div>
        </motion.article>
    )
};