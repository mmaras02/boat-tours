"use client";

interface FilterButtonProps {
    active: boolean;
    onClick: () => void;
    children: React.ReactNode;
}

export const FilterButton = ({ active, onClick, children }: FilterButtonProps) => (
    <button
        type="button"
        onClick={onClick}
        className={`px-5 py-2 text-sm font-semibold transition ${active
                ? "bg-[#c79432] text-white"
                : "bg-white text-[#17384A] border border-slate-300 hover:border-[#c79432]"
            }`}
    >
        {children}
    </button>
);