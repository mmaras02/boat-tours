import { motion } from 'framer-motion';

interface OptionCardProps {
  title: string;
  price: number;
  description: string;
  features: string[];
  variant?: 'full' | 'toggle';
}

const full =
  'bg-white/10 backdrop-blur-sm border border-white/20 p-8 lg:p-10 text-white';

const toggle =
  'bg-white/5 backdrop-blur-sm border-l-4 border-[#c79432] p-6 text-slate-600 rounded-r-xl';

const textStyles = {
  full: 'text-sm leading-relaxed mb-6 text-white',
  toggle: 'text-sm leading-relaxed mb-6 text-slate-600',
};

const titleStyles = {
  full: 'text-2xl md:text-3xl font-bold uppercase mb-4',
  toggle: 'text-xl font-bold text-[#17384A] mb-2',
};

export const OptionCard = ({
  title,
  price,
  description,
  features,
  variant = 'full',
}: OptionCardProps) => {
  const isToggle = variant === 'toggle';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className={`transition-all ${isToggle ? toggle : full}`}>
        <h2 className={titleStyles[variant]}>{title}</h2>

        {!isToggle && <div className="w-20 h-1 bg-[#c79432] mb-6" />}

        {isToggle ? (
          <>
            <p className={textStyles[variant]}>{description}</p>
            <div className="text-3xl font-bold text-[#c79432] mb-6">
              from {price} €<span className={textStyles[variant]}>/day</span>
            </div>
          </>
        ) : (
          <>
            <div className="text-3xl font-bold text-[#c79432] mb-6">
              from {price} €<span className={textStyles[variant]}>/day</span>
            </div>
            <p className={textStyles[variant]}>{description}</p>
          </>
        )}

        <ul className="space-y-3 mb-8 text-sm">
          {features.map((feature, index) => (
            <li key={`${feature}-${index}`} className="flex items-center gap-3">
              <span className="text-[#c79432]">{isToggle ? '✓' : '●'}</span>
              {feature}
            </li>
          ))}
        </ul>

        {!isToggle && (
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#c79432] hover:bg-[#b6852d] text-white px-6 py-3 text-sm font-semibold"
          >
            Book {title}
          </a>
        )}
      </div>
    </motion.div>
  );
};
