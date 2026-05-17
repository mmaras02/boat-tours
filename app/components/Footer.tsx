'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
} from 'react-icons/fa';
import { CiLocationOn } from 'react-icons/ci';
import { IoMdMailOpen } from 'react-icons/io';
import { pages } from '../constants/pages';

export function Footer() {
  const pathname = usePathname();

  return (
    <footer>
      <div className="bottom-0 max-w-full mx-auto px-6 py-12 flex flex-col md:flex-row justify-evenly gap-8 dark-background text-gray-300">
        <div>
          <h3 className="text-lg font-semibold mb-1">Contact Us</h3>
          <div className="h-0.5 w-14 bg-[#c79432] mb-6"></div>
          <ul className="text-gray-300 space-y-2">
            <li className="flex items-center gap-2">
              <CiLocationOn /> Uvala Zenta (lučica), Split, Croatia
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> +385 99 306 1719
            </li>
            <li className="flex items-center gap-2">
              <IoMdMailOpen /> ventiboat@gmail.com
            </li>
          </ul>
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
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/people/VentiBoat/61590072562984/?rdid=4mrmxCOrfQGrn9qH&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1ETsm4s9Z1%2F"
              className="bg-white/10 hover:bg-white/20 p-2 rounded-full"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://www.instagram.com/ventiboat/"
              className="bg-white/10 hover:bg-white/20 p-2 rounded-full"
            >
              <FaInstagram size={24} />
            </a>
            {/* <a
              href="#"
              className="bg-white/10 hover:bg-white/20 p-2 rounded-full"
            >
              <FaTwitter size={24} />
            </a> */}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-sm dark-background text-gray-300">
        © {new Date().getFullYear()} Venti Boat. All rights reserved.
      </div>
    </footer>
  );
}
