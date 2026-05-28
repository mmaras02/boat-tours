'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { pages } from '../constants/pages';
import { contact } from '../constants/contact';
import { ContactMethods } from './ContactMethods';
import { SocialLinks } from './SocialLinks';

export function Footer() {
  const pathname = usePathname();

  return (
    <footer>
      <div className="bottom-0 max-w-full mx-auto px-6 py-12 flex flex-col md:flex-row justify-evenly gap-8 dark-background text-gray-300">
        <div>
          <h3 className="text-lg font-semibold mb-1">Contact Us</h3>
          <div className="h-0.5 w-14 bg-[#c79432] mb-6"></div>
          <ContactMethods items={contact.methods} variant="footer" />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-1">Links</h3>
          <div className="h-0.5 w-14 bg-[#c79432] mb-6"></div>
          <ul className="space-y-2 text-primary">
            {pages.map((page) => (
              <li key={page.path}>
                <Link
                  href={page.path}
                  className={`hover:text-white transition ${
                    pathname === page.path ? 'text-white font-medium' : ''
                  }`}
                >
                  {page.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-1">Follow Us</h3>
          <div className="h-0.5 w-14 bg-[#c79432] mb-6"></div>
          <SocialLinks items={contact.socialLinks} variant="footer" />
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-sm dark-background text-gray-300">
        © {new Date().getFullYear()} Venti Boat. All rights reserved.
      </div>
    </footer>
  );
}
