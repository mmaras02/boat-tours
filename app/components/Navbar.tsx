'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
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
        className={`transition-all duration-500 ease-in-out block w-full ${
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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      <motion.nav
        className={`relative z-50 px-6 lg:px-8 text-white transition-all duration-700 ease-out ${
          isScrolled ? 'py-3' : 'py-2'
        }`}
      >
        <div
          className={`relative z-10 w-full flex items-center justify-between transition-all duration-700 ease-out ${
            !isScrolled ? 'lg:flex-col lg:gap-5' : 'lg:flex-row lg:gap-8'
          }`}
        >
          <div
            className={`flex items-center transition-all duration-900 ease-out ${
              !isScrolled
                ? 'lg:w-full lg:justify-center'
                : 'lg:w-auto lg:justify-start'
            }`}
          >
            <img
              src="icon.png"
              alt="Venti Boat Logo"
              className={`transition-all duration-700 ease-out ${
                !isScrolled ? 'w-15 h-15 ml-3' : 'lg:w-12 lg:h-12 lg:ml-0'
              } w-15 h-15 ml-3`}
            />
            <Link
              href="/"
              className={`font-bold transition-all duration-700 ease-out ${
                !isScrolled ? 'text-2xl lg:text-3xl' : 'lg:text-xl lg:text-2xl'
              } text-2xl lg:text-3xl`}
            >
              <h2 className="border-b border-white/40">Venti Boat</h2>
            </Link>
          </div>

          <ul className="hidden lg:flex items-center justify-center gap-2 text-lg">
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
            transition={{
              type: 'tween',
              duration: 0.6,
              ease: [0.23, 1, 0.32, 1],
            }}
            className="fixed top-18 left-0 w-full h-full z-40 overflow-y-auto bg-navbar text-white"
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
