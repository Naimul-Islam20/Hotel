"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaArrowUp } from "react-icons/fa";
import Image from "next/image";
import { PiBuildings } from "react-icons/pi";

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#13130f] text-white pt-16">
      {/* Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
        
        {/* Left Column: Logo, Desc, Socials */}
        <div>
           <Link href="/">
<div className="cursor-pointer flex items-center gap-1 w-fit h-[2.2rem]">
  {/* বাম পাশের আইকন */}
  <div className="h-full aspect-square flex items-center justify-center">
    <PiBuildings className="text-sky-500 w-full h-full" />
  </div>

  {/* ডান পাশের টেক্সট */}
  <div className="flex flex-col justify-center leading-tight">
    <div className="text-sky-500 text-lg font-black uppercase leading-none">Ocean</div>
    <div className="text-white text-lg font-black leading-none">Residence</div>
  </div>
</div>



            </Link>
         
          <p className="text-sm pt-2"><span className=" font-medium">Address : </span> Ocean Tower, 6th Floor, Agrabad Access Road, Beparipara, Circle Chittagong, Bangladesh.</p>
          <div className="flex gap-3 mt-6">
            Follow us : 
            <Link href="https://www.facebook.com/profile.php?id=61576255126669" className="p-2 bg-white rounded-full shadow hover:bg-blue-100 transition">
              <FaFacebookF className="text-blue-800" />
            </Link>
            <Link href="#" className="p-2 bg-white rounded-full shadow hover:bg-pink-100 transition">
              <FaInstagram className="text-pink-600" />
            </Link>
            <Link href="#" className="p-2 bg-white rounded-full shadow hover:bg-sky-100 transition">
              <FaTwitter className="text-sky-500" />
            </Link>
          </div>
        </div>

        {/* Middle Column: Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/rout/rooms/roomsPage" className="hover:text-sky-400">Room Types</Link>
            </li>
            <li>
              <Link href="/rout/about" className="hover:text-sky-400">About Us</Link>
            </li>
            <li>
              <Link href="/rout/gallary" className="hover:text-sky-400">Gallery</Link>
            </li>
            <li>
              <Link href="/rout/faq" className="hover:text-sky-400">Faq</Link>
            </li>
            <li>
              <Link href="/rout/contact" className="hover:text-sky-400">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Right Column: Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
          <ul className="space-y-2 text-sm">
           <li>
  <span className="font-medium">Phone : </span>
  <a href="tel:+8801336188906" className="text-sky-500 underline">
    +8801336188906
  </a>
</li>

           <li>
  <span className="font-medium">Email : </span> 
  <a href="mailto:oceanresidence10@gmail.com" className="text-sky-500 underline">
    oceanresidence10@gmail.com
  </a>
</li>

            <li></li>
            <li><span className="font-medium">Hours : </span> 24/7 Service Available</li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-300 py-4 text-xs text-gray-400 px-4 text-center">
  <div className="max-w-7xl mx-auto">
    <p>
  © {new Date().getFullYear()}{" "}
  <a
    href="https://muktodharaltd.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-sky-500 hover:underline"
  >
    Muktodhara Technology Limited
  </a>
  . All rights reserved.
</p>

  </div>
</div>


      {/* Scroll to Top Button */}
      {showScroll && (
       <button
  onClick={scrollToTop}
  className="fixed bottom-6 right-6 p-3 bg-sky-500 text-white rounded-full shadow-lg hover:bg-sky-600 transition z-[99999]"
>
  <FaArrowUp />
</button>

      )}
    </footer>
  );
}
