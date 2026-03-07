"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { IoMdMailOpen } from "react-icons/io";

export function Footer() {
    const pathname = usePathname();

    const pages = [
        { title: "Home", path: "/" },
        { title: "Tours", path: "/tours" },
        { title: "About Us", path: "/about" },
        { title: "Contact", path: "/contact" }
    ];

    return (
        <footer>
            <div className="bottom-0 max-w-full mx-auto px-6 py-12 flex flex-col md:flex-row justify-evenly gap-8 dark-background text-gray-300">

                <div>
                    <h3 className="text-lg font-semibold mb-1">Contact Us</h3>
                    <div className="h-0.5 w-14 bg-[#c79432] mb-6"></div>
                    <ul className="text-gray-300 space-y-2">
                        <li className="flex items-center gap-2">
                            <CiLocationOn /> Split, Croatia
                        </li>
                        <li className="flex items-center gap-2">
                            <FaPhoneAlt /> +385 99 306 1719
                        </li>
                        <li className="flex items-center gap-2">
                            <IoMdMailOpen /> rosaVentorum@gmail.com
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
                                    className={`hover:text-white transition ${pathname === page.path ? "text-white font-medium" : ""
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
                        <a href="" className="bg-white/10 hover:bg-white/20 p-2 rounded-full">
                            <FaFacebookF size={24} />
                        </a>
                        <a href="" className="bg-white/10 hover:bg-white/20 p-2 rounded-full">
                            <FaInstagram size={24} />
                        </a>
                        <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full">
                            <FaTwitter size={24} />
                        </a>
                    </div>
                </div>



            </div>

            <div className="border-t border-white/10 py-4 text-center text-slate-200 text-sm bg-fixed-dark">
                © {new Date().getFullYear()} Rosa Ventorum. All rights reserved.
            </div>
        </footer>
    );
}