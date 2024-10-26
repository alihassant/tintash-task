import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <header className="bg-[#213488] text-white p-4">
        <div className="container mx-auto md:px-20  flex">
          <div className="w-3/5">
            <Link href="/" className="text-2xl font-bold">
              Tintash
            </Link>
          </div>
          <div className="w-2/5">
            <nav className="flex justify-between items-center h-full">
              <Link
                href="/about"
                className="hover:text-blue-200 font-bold transition-colors"
              >
                ABOUT US
              </Link>
              <Link
                href="/services"
                className="hover:text-blue-200 font-bold transition-colors"
              >
                SERVICES
              </Link>
              <Link
                href="/contact"
                className="bg-[#FCF42F] text-[#343464] font-bold flex items-center px-6 py-2 hover:bg-yellow-300 transition-colors"
              >
                CONTACT US
                <Mail className="ms-3 w-5 h-5" />
              </Link>
            </nav>
          </div>
        </div>
      </header>
      {/* <nav className="block w-full max-w-screen px-4 py-2 mx-auto bg-[#213488] lg:px-8 lg:py-3 ">
        <div className="container md:px-10 flex flex-wrap items-center justify-between mx-auto text-slate-800">
          <div className="bg-black ">
            <a
              href="#"
              className="mr-4 block cursor-pointer py-1.5 text-white text-xl font-bold"
            >
              Tintash
            </a>
          </div>
          <div className="bg-slate-900">
            <ul className="flex flex-col justify-between   mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center ">
              <li className="flex items-center p-1 text-sm gap-x-2 font-bold text-white">
                <a href="#" className="flex items-center">
                  About Us
                </a>
              </li>
              <li className="flex items-center p-1 text-sm gap-x-2 font-bold text-white">
                <a href="#" className="flex items-center">
                  Services
                </a>
              </li>
              <li className="flex items-center p-1 text-sm gap-x-2 font-bold text-white">
                <button
                  className="bg-[#FCF42F] flex py-2 px-4 border border-transparent text-center text-sm text-[#343464] transition-all shadow-md hover:shadow-lgfocus:shadow-none active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
                  type="button"
                >
                  Contact Us
                  <Mail className="ms-3 w-5 h-5" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}

      {/* hero with the background image */}
      {/* <div className="bg-[#213488] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center">
              We are a game development company
            </h1>
            <p className="mt-4 text-lg sm:text-xl lg:text-2xl text-center">
              We create games that are fun, engaging, and visually stunning.
            </p>
            <button className="bg-[#FCF42F] text-[#343464] font-bold flex items-center px-6 py-2 mt-8 hover:bg-yellow-300 transition-colors">
              Contact Us
              <Mail className="ms-3 w-5 h-5" />
            </button>
          </div>
        </div>
      </div> */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/hero-background.png"
            alt="Hero image"
            layout="fill"
            objectFit="cover"
            className="object-center"
          />
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-blue-900/70"></div>

        {/* Circular overlay */}
        <div className="absolute inset-y-0 right-0 w-1/2 overflow-hidden">
          <div className="absolute right-0 top-1/2 h-[150%] w-[150%] -translate-y-1/2 translate-x-1/2 rounded-full bg-blue-600 opacity-20 blur-3xl"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col justify-center px-8 text-white md:px-16 lg:px-24">
          <h1 className="mb-4 text-xl font-bold leading-tight md:text-5xl lg:text-6xl">
            WE BUILD CHART-
            <br />
            TOPPING MOBILE GAMES.
          </h1>
          <p className="max-w-2xl text-lg md:text-xl lg:text-2xl">
            We are a game studio led by Stanford, Apple and Paypal Alumni. We
            are trusted development partners to Top Publishers, Large IPs,
            Unicorns and Fortune 500s.
          </p>
        </div>
      </div>

      <div className="w-full bg-gray-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-6">
            <div className="col-span-1 flex justify-center">
              <Image
                src="/chillingo-logo.png"
                alt="Chillingo logo"
                width={200}
                height={50}
                className="h-10 object-contain"
              />
            </div>
            <div className="col-span-1 flex justify-center">
              <Image
                src="/homa-logo.png"
                alt="Homa Logo"
                width={200}
                height={50}
                className="h-8 object-contain"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-1 lg:col-span-1">
              <Image
                src="/halfbrick-logo.png"
                alt="Halfbrick logo"
                width={200}
                height={50}
                className="h-10 object-contain"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-1 lg:col-span-1">
              <Image
                src="/lionstudios-logo.png"
                alt="Lion Studios logo"
                width={200}
                height={50}
                className="h-10 object-contain"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-1 lg:col-span-1">
              <Image
                src="/pocketgems-logo.png"
                alt="Pocket Gems logo"
                width={200}
                height={50}
                className="h-10 object-contain"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-1 lg:col-span-1">
              <Image
                src="/sesamestreet-logo.png"
                alt="Sesame Street logo"
                width={200}
                height={50}
                className="h-10 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
