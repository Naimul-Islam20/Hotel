"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

const Header = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header-section");
      if (window.scrollY >= 120) {
        header?.classList.add("is-sticky");
      } else {
        header?.classList.remove("is-sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header-section absolute top-0 left-0 w-full z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-white text-xl font-bold">
          Weekendmonks
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-6 items-center">
          <Link href="/" className="text-white hover:text-primary">Home</Link>
          <Link href="/about" className="text-white hover:text-primary">About Us</Link>
          <Link href="/tours" className="text-white hover:text-primary">Tours</Link>

          {/* Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-white hover:text-primary">
              Destination <FiChevronDown />
            </button>
            <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-md mt-2 rounded z-50">
              <Link href="/destination/spain" className="block px-4 py-2 text-black hover:bg-gray-100">Spain Tours</Link>
            </div>
          </div>

          <Link href="/gallery" className="text-white hover:text-primary">Gallery</Link>
          <Link href="/contact" className="text-white hover:text-primary">Contact</Link>
          <Link href="/book" className="ml-4 bg-primary text-white px-4 py-2 rounded hover:bg-primary/90">Book Now</Link>
        </nav>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl">
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="bg-white lg:hidden shadow-md px-6 py-4 space-y-4 animate-slideDown">
          <Link href="/" className="block text-black">Home</Link>
          <Link href="/about" className="block text-black">About Us</Link>
          <Link href="/tours" className="block text-black">Tours</Link>

          <details className="text-black">
            <summary className="cursor-pointer flex items-center gap-1">
              Destination <FiChevronDown />
            </summary>
            <Link href="/destination/spain" className="block pl-4 py-1 text-sm">Spain Tours</Link>
          </details>

          <Link href="/gallery" className="block text-black">Gallery</Link>
          <Link href="/contact" className="block text-black">Contact</Link>
          <Link href="/book" className="inline-block bg-primary text-white px-4 py-2 rounded mt-2">Book Now</Link>
        </div>
      )}

      {/* Sticky Style */}
      <style jsx>{`
        .is-sticky {
          position: fixed;
          background-color: white;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          animation: slideDown 0.4s ease forwards;
        }

        @keyframes slideDown {
          0% {
            transform: translateY(-40px);
            opacity: 0;
          }
          100% {
            transform: translateY(0px);
            opacity: 1;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
