interface OptionCardProps {
  type: 'withSkipper' | 'withoutSkipper';
  data: {
    description: string;
    price: number;
    features: string[];
  };
}

export const OptionCard = ({ type, data }: OptionCardProps) => {
  const isWithSkipper = type === 'withSkipper';

  return (
    <div className="border-l-4 border-[#c79432] p-6 rounded-r-xl">
      <h4 className="text-xl font-bold text-[#17384A] mb-2">
        Rent {isWithSkipper ? 'With' : 'Without'} Skipper
      </h4>
      <p className="text-slate-600 mb-4">{data.description}</p>
      <div className="text-3xl font-bold text-[#c79432] mb-4">
        from {data.price} €/day
      </div>
      <ul className="space-y-2 text-slate-600">
        {data.features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-2">
            ✓ {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};
