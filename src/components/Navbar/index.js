"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import NavItem from "../ChildComponent/navItem";
import MobileMenu from "../ChildComponent/mobileMenu ";
import { GoChevronDown } from "react-icons/go";
import { FaChevronRight } from "react-icons/fa6";
import Topbar from "./Topbar";

const Navbar = () => {
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
      {/* 🔹 Location + Contact Info (scroll করলে উপরে চলে যাবে) */}
     <Topbar/>

      {/* 🔸 Sticky Navbar */}
      <div className="sticky top-0 uppercase font-semibold text-sm z-50 bg-white shadow-md">
        <nav className="w-full text-black">
          <div
            className="w-full mx-auto px-6 h-13 md:h-17 py-4 flex items-center justify-between"
            
          >
            <Link href="/">
              <div className=" space-x-2  cursor-pointer">
                <Image src="/img/logo2.png" alt="Logo" width={70} height={60} />
              </div>
            </Link>

            <ul className="hidden md:flex space-x-10 h-20 items-center">
              {NavItem.map((item) => (
                <li
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.href || "#"}
                    className="cursor-pointer hover:text-sky-500 select-none flex items-center gap-1"
                  >
                    <span>{item.name}</span>
                    {item.dropdown && <GoChevronDown className="text-sm mt-[1px]" />}
                  </Link>

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
                        className={`mt-[22px] z-[9999]  overflow-hidden ${
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
                              className="w-full min-w-[200px] font-mono text-sm  text-black hover:text-sky-500 py-2 px-4 whitespace-nowrap  flex items-center justify-between  duration-300"
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

            <Link href="/rout/rooms/roomsPage" className="hover:bg-sky-600 bg-sky-500 text-white rounded-full  px-3 py-2 hidden md:flex items-center gap-2   ">
              
              VIEW RATE
            </Link>

            <div
              className="md:hidden text-xl cursor-pointer select-none"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              ☰
            </div>
          </div>

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

export default Navbar;