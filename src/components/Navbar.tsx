"use client";

import { Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-[#213488] bg-opacity-60 p-4 text-white backdrop-blur-[6px]">
      <div className="container mx-auto flex flex-col md:flex-row md:items-center xl:px-20">
        <div className="flex w-full items-center justify-between md:w-3/5">
          <Link href="/" className="text-2xl font-bold">
            Tintash
          </Link>
          <button
            className="block md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="text-2xl text-white">☰</span>
          </button>
        </div>

        <nav
          className={`mx-auto mt-4 w-full md:mt-0 lg:w-2/5 ${
            menuOpen ? "block" : "hidden"
          } flex flex-col items-center justify-center space-y-2 md:flex md:flex-row md:justify-between md:space-y-0`}
        >
          <Link
            href="/about"
            className="font-bold transition-colors hover:text-blue-200"
          >
            ABOUT US
          </Link>
          <Link
            href="/services"
            className="font-bold transition-colors hover:text-blue-200"
          >
            SERVICES
          </Link>
          <Link
            href="/contact"
            className="flex items-center bg-[#FCF42F] px-6 py-2 font-bold text-[#343464] transition-colors hover:bg-yellow-300"
          >
            CONTACT US
            <Mail className="ml-3 h-5 w-5" />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
