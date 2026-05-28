import type { SocialLink } from '../constants/contact';

type SocialLinksProps = {
  items: SocialLink[];
  variant?: 'footer' | 'panel';
};

const variants = {
  footer: {
    linkClassName:
      'bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors',
    iconColor: undefined,
  },
  panel: {
    linkClassName:
      'bg-[#0d3043] hover:bg-[#c79432] p-2 rounded-full transition-colors',
    iconColor: 'white',
  },
} as const;

export function SocialLinks({ items, variant = 'panel' }: SocialLinksProps) {
  const config = variants[variant];

  return (
    <div className="flex space-x-4">
      {items.map(({ label, link, icon: Icon }) => (
        <a
          key={label}
          href={link}
          aria-label={`Visit VentiBoat on ${label}`}
          className={config.linkClassName}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon size={24} color={config.iconColor} />
        </a>
      ))}
    </div>
  );
}
