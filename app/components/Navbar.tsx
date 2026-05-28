'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';
import { pages } from '../constants/pages';

function processPage(
  page: any,
  index: number,
  pathname: string,
  onClick?: () => void,
  showDivider = true,
  isMobile = false,
) {
  const isActive =
    page.path === '/' ? pathname === page.path : pathname.startsWith(page.path);

  return (
    <div
      key={index}
      className={
        isMobile
          ? `w-full border-b ${isActive ? 'border-accent' : 'border-white/20'}`
          : 'relative flex items-center w-full'
      }
    >
      <Link
        href={page.path}
        onClick={onClick}
        className={`transition-all duration-200 block w-full ${
          isMobile ? 'px-8 py-5 text-left' : 'px-2 py-1 relative'
        } ${isActive ? 'text-accent font-bold' : 'text-accent-hover'}`}
      >
        {page.title}
      </Link>

      {showDivider && !isMobile && index < pages.length - 1 && (
        <div className="w-px h-4 bg-slate-50 mx-4 self-center"></div>
      )}
    </div>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const desktopNavItems = pages.map((page, index) =>
    processPage(page, index, pathname, undefined, true, false),
  );

  const mobileNavItems = pages.map((page, index) =>
    processPage(page, index, pathname, closeMenu, false, true),
  );

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-navbar">
      <motion.nav className="relative z-50 px-6 lg:px-8 py-6 text-white transition-colors duration-300">
        <div className="relative z-10 w-full flex items-center justify-between lg:flex-col lg:gap-7">
          <Link href="/" className="text-2xl lg:text-3xl font-bold">
            <h2 className="border-b border-white/20 px-4 lg:px-24">
              Venti Boat
            </h2>
          </Link>

          <ul className="hidden lg:flex items-center text-lg justify-center">
            {desktopNavItems}
          </ul>

          <div className="lg:hidden">
            <button id="menu-button" type="button" onClick={toggleMenu}>
              {isOpen ? <IoMdClose size={28} /> : <GiHamburgerMenu size={28} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.5 }}
            className="fixed top-20 left-0 w-full h-[calc(100dvh-5rem)] z-40 overflow-y-auto bg-navbar text-white"
          >
            <div className="flex flex-col items-start justify-start w-full">
              <ul className="flex flex-col items-start w-full">
                {mobileNavItems}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
