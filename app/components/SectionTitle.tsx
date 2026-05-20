type SectionTitleProps = {
  title: string;
  size?: 'sm' | 'md' | 'lg';
};

export const SectionTitle = ({ title, size = 'md' }: SectionTitleProps) => {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  return (
    <div>
      <h3
        className={`${sizeClasses[size]} font-bold text-[#17384A] flex items-center gap-2`}
      >
        {title}
      </h3>
      <div className="w-24 h-0.5 bg-[#c79432] mb-4"></div>
    </div>
  );
};
