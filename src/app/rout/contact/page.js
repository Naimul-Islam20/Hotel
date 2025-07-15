"use client";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import Image from "next/image"; // যদি তুমি Next.js use করো

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero */}
      <div className="text-center py-14 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <h1 className="text-4xl font-bold">📬 Get in Touch</h1>
        <p className="mt-2 text-lg">We’d love to hear from you. Reach out anytime!</p>
      </div>

      {/* Contact + Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-14 lg:px-24 py-12">
        {/* Contact Info & Image */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
            <h2 className="text-2xl font-semibold mb-2">📞 Contact Information</h2>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-blue-600" />
              <span>+880 1234 567 890</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-red-600" />
              <span>info@muktodhara.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaWhatsapp className="text-green-600" />
              <span>+880 1987 654 321</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-purple-600" />
              <span>Halishahar K Block, Chattogram, Bangladesh</span>
            </div>

            {/* 👉 Direct Call/WhatsApp Buttons */}
            <div className="pt-4 flex flex-wrap gap-4">
              <a href="tel:+8801234567890" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                📞 Call Now
              </a>
              <a href="https://wa.me/8801987654321" target="_blank" className="bg-[#25D366] text-white px-4 py-2 rounded hover:bg-green-700">
                💬 WhatsApp Now
              </a>
            </div>

            {/* 👉 Social Icons */}
            <div className="pt-4 flex gap-4 text-lg">
              <a href="https://facebook.com" target="_blank" className="text-blue-600 hover:scale-110 transition"><FaFacebookF /></a>
              <a href="https://instagram.com" target="_blank" className="text-pink-500 hover:scale-110 transition"><FaInstagram /></a>
              <a href="https://linkedin.com" target="_blank" className="text-blue-800 hover:scale-110 transition"><FaLinkedinIn /></a>
              <a href="https://youtube.com" target="_blank" className="text-red-600 hover:scale-110 transition"><FaYoutube /></a>
            </div>
          </div>

          {/* 👉 Support Agent Image */}
          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/agent.jpg" // 👉 তোমার public ফোল্ডারে agent.jpg রাখো
              alt="Support Agent"
              width={600}
              height={400}
              className="w-full object-cover h-64"
            />
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
          <h2 className="text-2xl font-semibold">✉️ Send Us a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                placeholder="example@email.com"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                rows="4"
                placeholder="Type your message..."
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

    {/* Google Map - Container Width */}
<div className="px-6 md:px-14 lg:px-24 py-10">
  <div className="w-full h-[350px] rounded-lg overflow-hidden shadow-md">
    <iframe
      title="Muktodhara Technology Limited Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.5914230645894!2d91.78723127434566!3d22.33128684177332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd90f5872b99d%3A0x878f02d031662a33!2sMuktodhara%20Technology%20Limited!5e0!3m2!1sen!2sbd!4v1752478976306!5m2!1sen!2sbd"
      className="w-full h-full border-0"
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>
    </div>
  );
}
