"use client";

import { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaArrowUp } from "react-icons/fa";
import Image from "next/image";

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
    <footer className="relative bg-gray-200 text-gray-800 pt-16">
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* About */}
        <div>
          <h2 className="text-2xl font-bold text-blue-700">Hotel Niribili</h2>
          <p className="mt-4 text-sm">
            A peaceful luxury stay. Book with confidence & comfort.
          </p>
          <div className="flex gap-4 mt-6 text-lg">
            <FaFacebookF className="text-blue-800 cursor-pointer" />
            <FaInstagram className="text-pink-600 cursor-pointer" />
            <FaTwitter className="text-sky-500 cursor-pointer" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/rooms" className="hover:text-blue-700">Room Types</a></li>
            <li><a href="/about" className="hover:text-blue-700">About Us</a></li>
            <li><a href="/gallery" className="hover:text-blue-700">Gallery</a></li>
            <li><a href="/offers" className="hover:text-blue-700">Special Offers</a></li>
            <li><a href="/contact" className="hover:text-blue-700">Contact</a></li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Policies</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/terms" className="hover:text-blue-700">Terms & Conditions</a></li>
            <li><a href="/privacy" className="hover:text-blue-700">Privacy Policy</a></li>
            <li><a href="/faq" className="hover:text-blue-700">FAQs</a></li>
            <li><a href="/cancellation" className="hover:text-blue-700">Cancellation Policy</a></li>
          </ul>
        </div>

        {/* Newsletter + Payment Icons */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Subscribe</h4>
          <p className="text-sm mb-3">Get exclusive updates in your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 border border-gray-300 rounded text-sm w-full"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm">
              Subscribe
            </button>
          </form>

          {/* Payment Logos */}
          <div className="flex gap-4 mt-6">
            <Image src="/visa.png" alt="Visa" width={40} height={24} />
            <Image src="/mastercard.png" alt="Mastercard" width={40} height={24} />
            <Image src="/bkash.png" alt="bKash" width={40} height={24} />
            <Image src="/nagad.png" alt="Nagad" width={40} height={24} />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-300 py-4 text-xs text-gray-600 px-4 text-center">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
          <p>© 2025 Hotel Niribili. All rights reserved.</p>
          <div className="mt-2 md:mt-0 flex gap-4 items-center">
            <a href="/privacy" className="hover:text-blue-700">Privacy</a>
            <a href="/terms" className="hover:text-blue-700">Terms</a>
            <select className="border px-2 py-1 text-xs rounded bg-white">
              <option>English</option>
              <option>বাংলা</option>
            </select>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          <FaArrowUp />
        </button>
      )}

      {/* Floating TripAdvisor Badge */}
      <div className="fixed left-2 bottom-6 z-40">
        <a href="https://www.tripadvisor.com/" target="_blank" rel="noopener noreferrer">
          <Image
            src="/tripadvisor-badge.png"
            alt="TripAdvisor"
            width={100}
            height={40}
            className="hover:scale-105 transition"
          />
        </a>
      </div>
    </footer>
  );
}
