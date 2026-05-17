type SectionHeaderProps = {
  title: string;
};

export const SectionHeader = ({ title }: SectionHeaderProps) => (
  <div>
    <h3 className="text-2xl font-bold text-[#17384A] flex items-center gap-2">
      {title}
    </h3>
    <div className="w-24 h-1 bg-[#c79432] mb-6"></div>
  </div>
);
