"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <header className="sticky z-50 w-full bg-transparent backdrop-blur-md">
      <nav className="relative px-4 sm:px-6 lg:px-10 sm:py-2 sm:border-b border-white/25">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="#home" className="flex text-white items-center gap-2">
            <span className="font-bold text-2xl text-white hidden sm:inline">
              <span className="text-orange-600">W</span>anderLust
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-white hover:text-blue-200 transition-colors duration-200 font-medium"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/booking"
            className="hidden md:inline-block px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-600/90 transition-colors duration-200 font-medium"
          >
            Book Now
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 z-10  hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle mobile menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute inset-x-0 top-0 border-t border-white/10 bg-black/80 backdrop-blur-md">
            <ul className="flex flex-col gap-2 py-4 m-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="block px-6  py-2 text-white hover:bg-white/10 rounded-lg transition-colors duration-200 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
