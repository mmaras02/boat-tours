const items: string[] = [
  'Full insurance',
  'Safety equipment',
  'Snorkeling gear',
  'Cooler box',
  'First aid kit',
];

export const IncludedItemsDropdown = () => {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-slate-600">
      {items.map((item) => (
        <li key={item}>✓ {item}</li>
      ))}
    </ul>
  );
};
