import Link from "next/link";
import { Facebook, Linkedin, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#222E68] px-6 py-4 text-white">
      <div className="container mx-auto flex max-w-6xl items-center justify-center pb-16 pt-6 md:justify-between">
        <div className="flex flex-col items-center space-y-6 md:flex-row md:space-x-24 md:space-y-0">
          <h2 className="text-2xl font-bold">Tintash</h2>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-gray-300">
              <Facebook size={20} />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="hover:text-gray-300">
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="hover:text-gray-300">
              <Instagram size={20} />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="hover:text-gray-300">
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
          <div className="flex space-x-6 ps-3 text-sm font-semibold">
            <Link href="#" className="hover:underline">
              LEGAL
            </Link>
            <span>|</span>
            <Link href="#" className="hover:underline">
              PRIVACY POLICY
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
