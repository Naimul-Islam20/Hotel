import { useState, useRef } from "react";
import Link from "next/link";
import navItems from "./navItem";
import { GoChevronUp, GoChevronDown } from "react-icons/go";

const MobileMenu = ({ isOpen, onClose }) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const menuRef = useRef();

  const toggleMenu = (name) => {
    setActiveMenu((prev) => (prev === name ? null : name));
  };

  return (
    <>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/30 z-40"
          aria-hidden="true"
        />
      )}

      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="p-4 border-b border-black pb-8 flex justify-between items-center">
          <h2 className="text-xl text-black font-semibold">Menu</h2>
          <button onClick={onClose} className="text-2xl text-black" aria-label="Close menu">
            ✕
          </button>
        </div>

        {/* Menu Items */}
        <ul className="p-4 space-y-2 overflow-y-auto flex-1">
          {navItems.map((item) => (
            <li key={item.name} className="border-b border-black pb-2">
              {item.dropdown ? (
                <>
                  {/* Dropdown Toggle */}
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleMenu(item.name)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        toggleMenu(item.name);
                      }
                    }}
                    aria-expanded={activeMenu === item.name}
                    aria-controls={`${item.name}-submenu`}
                  >
                    <span className="text-sm text-gray-800">{item.name}</span>
                    <span className="text-lg text-black">
                      {activeMenu === item.name ? <GoChevronUp /> : <GoChevronDown />}
                    </span>
                  </div>

                  {/* Dropdown Items */}
                  {activeMenu === item.name && (
                    <ul
                      id={`${item.name}-submenu`}
                      className="pl-4 mt-2 space-y-1"
                      aria-label={`${item.name} submenu`}
                    >
                      {item.dropdown.map((subItem, index) => (
                        <li key={index}>
                          <Link
                            href={subItem.href}
                            className="block text-gray-600 ps-2 text-sm py-2 border-b border-gray-400 hover:bg-gray-200 hover:text-sky-500"
                            onClick={onClose}
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                // Non-dropdown item: পুরো লাইন জুড়ে clickable Link
                <Link
                  href={item.href}
                  className="block w-full text-sm text-gray-800 py-2"
                  onClick={() => {
                    onClose();
                    setActiveMenu(null);
                  }}
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;
