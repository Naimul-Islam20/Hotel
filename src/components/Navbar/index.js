"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";
import { PiBuildings } from "react-icons/pi";
import Link from "next/link";
import Image from "next/image";
import NavItem from "../ChildComponent/navItem";
import MobileMenu from "../ChildComponent/mobileMenu ";
import { GoChevronDown } from "react-icons/go";
import { FaChevronRight } from "react-icons/fa6";
import Topbar from "./Topbar";
import { usePathname } from "next/navigation"; // ✅ for current path

const Navbar = () => {
  const pathname = usePathname(); // ✅ get current path
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredSubItem, setHoveredSubItem] = useState(null);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef();
  const [dropdownHeight, setDropdownHeight] = useState(0);

  const handleMouseEnter = (name) => {
    clearTimeout(timeoutRef.current);
    setOpenDropdown(name);
    setHoveredSubItem(null);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
      setHoveredSubItem(null);
    }, 100);
  };

  return (
    <>
      {/* 🔹 Topbar */}
      <Topbar />

      {/* 🔸 Sticky Navbar */}
      <div className="sticky top-0 uppercase font-semibold text-sm z-50 bg-white shadow-md">
        <nav className="w-full text-black">
          <div className="w-full mx-auto px-6 h-13 md:h-17 py-4 flex items-center justify-between">
            <Link href="/">
              <div className="cursor-pointer flex items-center gap-1 w-fit h-[2.2rem]">
                <div className="h-full aspect-square flex items-center justify-center">
                  <PiBuildings className="text-sky-500 w-full h-full" />
                </div>
                <div className="flex flex-col justify-center leading-tight">
                  <div className="text-sky-500 text-lg font-black uppercase leading-none">
                    Ocean
                  </div>
                  <div className="text-black text-lg font-black leading-none">
                    Residence
                  </div>
                </div>
              </div>
            </Link>

            {/* 🟦 Desktop Menu */}
            <ul className="hidden md:flex space-x-7 h-20 items-center">
              {NavItem.map((item) => (
                <li
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.href || "#"}
                    className={`cursor-pointer select-none flex items-center gap-1 hover:text-sky-500 ${
                      pathname === item.href ? "text-sky-500" : ""
                    }`}
                  >
                    <span>{item.name}</span>
                    {item.dropdown && <GoChevronDown className="text-sm mt-[1px]" />}
                  </Link>

                  {/* spacer for dropdown hover zone */}
                  <div className="absolute top-full left-0 w-full h-7"></div>

                  <AnimatePresence>
                    {openDropdown === item.name && item.dropdown && (
                      <motion.ul
                        initial={{ height: 0 }}
                        animate={{
                          height: dropdownHeight || "auto",
                          transition: { duration: 0.2, ease: "easeOut" },
                        }}
                        exit={{
                          height: 0,
                          transition: { duration: 0, ease: "easeIn" },
                        }}
                        className={`mt-[24px] z-[9999] overflow-hidden ${
                          item.dropdown.length > 7
                            ? "absolute left-1/2 top-full -translate-x-1/2 bg-white shadow-xl border border-gray-300 grid grid-cols-2 gap-x-6 px-8 py-5 max-w-[700px] min-w-[500px]"
                            : "absolute top-full left-0 bg-white shadow-xl border border-gray-300 flex flex-col w-auto px-4 py-2"
                        }`}
                        ref={dropdownRef}
                      >
                        {item.dropdown.map((subItem, index) => (
                          <li
                            key={subItem.name + index}
                            className="relative"
                            onMouseEnter={(e) => {
                              if (subItem.dropdown) {
                                const rect = e.currentTarget.getBoundingClientRect();
                                setHoveredSubItem(subItem);
                              }
                            }}
                            onMouseLeave={() => {
                              if (subItem.dropdown) {
                                timeoutRef.current = setTimeout(
                                  () => setHoveredSubItem(null),
                                  200
                                );
                              }
                            }}
                          >
                            <Link
                              href={subItem.href || "#"}
                              className={`w-full min-w-[200px] font-mono text-sm py-2 px-4 whitespace-nowrap flex items-center justify-between duration-300 ${
                                pathname === subItem.href
                                  ? "text-sky-500"
                                  : "text-black hover:text-sky-500"
                              }`}
                              onClick={(e) => {
                                if (!subItem.href) e.preventDefault();
                              }}
                            >
                              <span>{subItem.name}</span>
                              {subItem.dropdown && (
                                <FaChevronRight className="text-sm mt-[1px]" />
                              )}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>

            {/* 🟦 View Rate Button */}
            <Link
              href="/routes/rooms/roomsPage"
              className="hover:bg-sky-600 bg-sky-500 text-white rounded px-3 py-2 hidden md:flex items-center gap-2"
            >
              VIEW RATE
            </Link>

            {/* 🟦 Mobile Menu Toggle */}
            <div
              className="md:hidden text-xl cursor-pointer select-none"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              ☰
            </div>
          </div>

          {/* 🟦 Mobile Menu Drawer */}
          <MobileMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            navItems={NavItem}
          />
        </nav>
      </div>
    </>
  );
};

export default Navbar;
