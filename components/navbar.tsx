"use client";

import Link from "next/link";

const Navbar = () => {
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <header className="sticky top-0 z-50 w-full bg-transparent backdrop-blur-sm">
      <nav className=" px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="#home" className="flex text-white items-center gap-2">
            <span className="font-bold text-lg text-white hidden sm:inline">
              WanderLust
            </span>
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-white hover:text-accent transition-colors duration-200 font-medium"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/booking"
            className="hidden md:inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-600/90 transition-colors duration-200 font-medium"
          >
            Book Now
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
