import type { ContactMethod } from '../constants/contact';

type ContactMethodsProps = {
  items: ContactMethod[];
  variant?: 'footer' | 'panel';
};

const variants = {
  footer: {
    Wrapper: 'ul',
    Item: 'li',
    wrapperClassName: 'text-gray-300 space-y-2',
    itemClassName: 'flex items-start gap-2',
    iconClassName: 'mt-1 shrink-0',
    titleClassName: '',
    valueClassName: 'flex flex-col',
    linkClassName: 'hover:text-white transition',
    showTitle: false,
  },
  panel: {
    Wrapper: 'div',
    Item: 'div',
    wrapperClassName: 'flex flex-col gap-6',
    itemClassName: 'flex gap-3 items-start',
    iconClassName: 'text-xl text-accent shrink-0 mt-1',
    titleClassName: 'font-semibold',
    valueClassName: 'text-primary flex flex-col',
    linkClassName: 'hover:underline',
    showTitle: true,
  },
} as const;

export function ContactMethods({
  items,
  variant = 'panel',
}: ContactMethodsProps) {
  const config = variants[variant];
  const Wrapper = config.Wrapper;
  const Item = config.Item;

  return (
    <Wrapper className={config.wrapperClassName}>
      {items.map(({ label, icon: Icon, values }) => (
        <Item key={label} className={config.itemClassName}>
          <Icon className={config.iconClassName} />

          <div>
            {config.showTitle && (
              <p className={config.titleClassName}>{label}</p>
            )}

            <div className={config.valueClassName}>
              {values.map(({ label, href, ariaLabel }) =>
                href ? (
                  <a
                    key={label}
                    href={href}
                    className={config.linkClassName}
                    aria-label={ariaLabel ?? label}
                  >
                    {label}
                  </a>
                ) : (
                  <p key={label}>{label}</p>
                ),
              )}
            </div>
          </div>
        </Item>
      ))}
    </Wrapper>
  );
}
