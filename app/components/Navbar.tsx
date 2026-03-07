"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import {
    motion,
    AnimatePresence,
    useMotionValue,
    useTransform,
    animate
} from "framer-motion";
import { pages } from "../constants/pages";

function processPage(
    page: any,
    index: number,
    pathname: string,
    onClick?: () => void,
    showDivider = true
) {
    const isActive =
        page.path === "/" ? pathname === page.path : pathname.startsWith(page.path);

    return (
        <div key={index} className="flex items-center">
            <Link
                href={page.path}
                onClick={onClick}
                className={`transition-colors duration-200 px-2 py-1 block
                ${isActive
                        ? "text-[#c79432] font-bold border-b-2 border-[#c79432]"
                        : "hover:text-[#c79432]"
                    }`}
            >
                {page.title}
            </Link>

            {showDivider && index < pages.length - 1 && (
                <div className="w-px h-4 bg-slate-50 mx-4 self-center"></div>
            )}
        </div>
    );
}

export function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const progress = useMotionValue(0);

    const gradient = useTransform(
        progress,
        [0, 0.8, 1],
        [
            "linear-gradient(to left, rgba(13,48,67,0) 0%, rgba(13,48,67,0) 100%)",
            "linear-gradient(to left, rgba(13,48,67,0.8) 0%, rgba(13,48,67,0.8) 100%)",
            "linear-gradient(to left, rgba(13,48,67,1) 0%, rgba(13,48,67,1) 100%)"
        ]
    );

    const toggleMenu = () => setIsOpen((prev) => !prev);
    const closeMenu = () => setIsOpen(false);

    const desktopNavItems = pages.map((page, index) =>
        processPage(page, index, pathname)
    );

    const mobileNavItems = pages.map((page, index) =>
        processPage(page, index, pathname, closeMenu, false)
    );

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            animate(progress, 1, { duration: 0.5 });
        } else {
            animate(progress, scrolled ? 0.8 : 0, { duration: 0.5 });
        }
    }, [isOpen, scrolled]);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-[#0d3043]">
            <motion.nav
                style={{ background: gradient }}
                className="relative px-6 lg:px-8 py-6 text-white transition-colors duration-300"
            >
                <div className="relative z-10 w-full flex items-center justify-between lg:flex-col lg:gap-7">

                    <Link
                        href="/"
                        className="text-2xl lg:text-3xl font-bold"
                    >
                        <h2 className="border-b border-blue-200 px-4 lg:px-25">
                            Rosa Ventorum
                        </h2>
                    </Link>

                    <ul className="hidden lg:flex items-center text-lg justify-center">
                        {desktopNavItems}
                    </ul>

                    <div className="lg:hidden">
                        <button onClick={toggleMenu}>
                            {isOpen ? <IoMdClose size={28} /> : <GiHamburgerMenu size={28} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "tween", duration: 0.5 }}
                        className="fixed top-18 left-0 w-full h-[calc(100vh-88px)] bg-slate-900 text-white z-40"
                    >
                        <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl">

                            <ul className="flex flex-col items-center gap-6 text-lg">
                                {mobileNavItems}
                            </ul>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}