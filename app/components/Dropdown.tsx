'use client';

import { ReactNode, useId, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

type PriceDropdownProps = {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
};

export const Dropdown = ({
  title,
  children,
  defaultOpen = false,
}: PriceDropdownProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentId = useId();

  return (
    <section className="mb-4">
      <button
        id="dropdown-button"
        type="button"
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between bg-slate-100 hover:bg-slate-200 px-6 py-4 transition duration-300 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white ring-accent"
      >
        <span className="font-semibold text-lg">{title}</span>
        {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
      </button>

      {isOpen && (
        <div
          id={contentId}
          className="mt-2 mb-10 bg-white shadow-md overflow-hidden animate-fadeIn"
        >
          <div className="p-6">{children}</div>
        </div>
      )}
    </section>
  );
};
