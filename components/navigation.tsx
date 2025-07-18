"use client"
import Link from "next/link";
import { HomeIcon, Menu, X } from "lucide-react";
import AuthButtons from "@/components/auth-buttons";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-accent/90 px-5 h-24 flex items-center justify-between z-50 relative sticky top-0 shadow-md w-full">
      {/* Mobile Layout */}
      <div className="md:hidden flex items-center justify-between w-full">
        <HomeIcon className="w-5 h-5 sm:w-6 sm:h-6" />
        <Link href="/" className="text-sm sm:text-lg tracking-widest uppercase font-medium">
          Fire Homes
        </Link>
        <button
          className="p-2 rounded-md hover:bg-accent/80 transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Desktop Layout */}
      <Link href="/" className="hidden md:flex text-sm sm:text-lg md:text-2xl lg:text-3xl tracking-widest gap-2 items-center uppercase">
        <HomeIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
        <span>Fire Homes</span>
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center justify-between gap-6">
        <li>
          <Link href="/property-search" className="uppercase tracking-widest hover:underline transition-all duration-200">
            Property Search
          </Link>
        </li>
        <li>
          <AuthButtons />
        </li>
      </ul>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-accent border-t border-accent/20 md:hidden">
          <ul className="flex flex-col p-4 gap-4">
            <li>
              <Link
                href="/property-search"
                className="uppercase tracking-widest hover:underline transition-all duration-200 block py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Property Search
              </Link>
            </li>
            <li>
              <div onClick={() => setIsMenuOpen(false)}>
                <AuthButtons />
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}