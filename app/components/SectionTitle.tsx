type SectionTitleProps = {
  title: string;
};

export const SectionTitle = ({ title }: SectionTitleProps) => (
  <div>
    <h3 className="text-xl font-bold text-[#17384A] flex items-center gap-2">
      {title}
    </h3>
    <div className="w-24 h-0.5 bg-[#c79432] mb-4"></div>
  </div>
);
