import { tourBenefits } from "../constants/tourBenefits"

export const ReasonsSection = () => {
    return (
        <section className="pb-5 pt-10 bg-slate-50 mt-5 overflow-visible">
            <div className="max-w-6xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-stretch">
                    {tourBenefits.map((benefit, i) => (
                        <article key={i} className="relative border border-slate-200 bg-white px-6 pt-14 pb-8 text-center min-h-75 flex flex-col">
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                                <div className="h-20 w-20 rotate-45 border border-slate-200 bg-white flex items-center justify-center">
                                    {benefit.icon}
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold uppercase tracking-wide text-[#17384A]">{benefit.title}</h3>
                            <span className="mx-auto mt-3 mb-5 h-1 w-14 bg-[#c79432]" />
                            <p className="text-sm leading-6 text-[#4B6070]">
                                {benefit.description}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>

    )
}
