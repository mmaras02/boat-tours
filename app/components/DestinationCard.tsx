interface DestinationCardProps {
    image: string;
    title: string;
    text: string;
}

export const DestinationCard = ({ image, title, text }: DestinationCardProps) => {
    return (
        <article key={title} className="bg-slate-200 border border-slate-200 shadow-xl min-h-80 flex flex-col hover:scale-101 transition-transform">
            <img src={image} alt={title} className="h-36 w-full object-cover" />
            <div className="p-4 flex flex-col h-full">
                <h3 className="text-lg font-bold text-[#17384A] leading-tight">{title}</h3>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed flex-1">{text}</p>
                <a
                    href="#"
                    className="mt-4 inline-flex items-center justify-center gap-2 bg-[#0b4f5a] hover:bg-[#0a4550] text-white text-xs font-semibold tracking-wide py-2 px-3"
                >
                    READ MORE
                </a>
            </div>
        </article>
    )
};