"use client";

import { FaCaretDown } from "react-icons/fa";
import { useEffect } from "react";
import Link from "next/link";


const faqData = [
  {
    question: "How can I book a room?",
    answer:
      "You can easily book a room through our website booking form or by calling our hotline number directly.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "If you cancel at least 24 hours before your check-in time, you will receive a full refund. For cancellations made within 24 hours, 50% will be charged.",
  },
  {
    question: "What are the check-in and check-out times?",
    answer: "Check-in time is 1:00 PM and check-out time is 11:00 AM.",
  },
  {
    question: "What facilities are available at the hotel?",
    answer:
      "We offer free Wi-Fi, air-conditioned rooms, 24/7 room service, an on-site restaurant, car parking, and more.",
  },
  {
    question: "Are pets allowed in the hotel?",
    answer: "Sorry, pets are not allowed inside the hotel premises.",
  },
  {
    question: "Is breakfast included in the room price?",
    answer:
      "Yes, all room bookings include complimentary breakfast served between 7 AM - 10 AM.",
  },
  {
    question: "Do you offer airport shuttle service?",
    answer: "Yes, we offer airport pickup and drop service at an additional cost.",
  },
  {
    question: "Can I modify my booking later?",
    answer:
      "Yes, you can modify your booking by contacting our support team at least 24 hours before check-in.",
  },
  {
    question: "Do you have conference rooms?",
    answer:
      "Yes, we offer fully-equipped conference rooms for business meetings and events.",
  },
  {
    question: "Is smoking allowed inside the rooms?",
    answer:
      "All our rooms are non-smoking. However, we have designated smoking areas outside.",
  },
];

export default function FAQPage() {
  // Divide FAQs into two columns
  const half = Math.ceil(faqData.length / 2);
  const leftColumn = faqData.slice(0, half);
  const rightColumn = faqData.slice(half);

  return (
   <div className="min-h-[130vh] bg-white  text-gray-900 ">

      {/* Hero Section */}
      <div
  className="relative h-[180px] md:h-[260px]  flex flex-col items-center justify-center text-white"
  style={{
    backgroundImage: "url(/img/contact4.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="absolute inset-0  bg-opacity-50"></div>

  {/* FAQ Title */}
  <h1 className="relative z-10 text-5xl font-bold">FAQ</h1>

  {/* Breadcrumb inside hero */}
  <div className="relative z-10 mt-4">
    <p className="text-sm text-gray-200">
      <Link href="/" className="hover:underline text-blue-200">
        Home
      </Link>{" "}
      &gt; <span className="text-white">FAQ</span>
    </p>
  </div>
</div>


      {/* FAQ Section */}
      <div className="max-w-6xl mx-auto mt-7 px-4 pt-12 pb-24">

        <div className="grid md:grid-cols-2 gap-8">
          {[leftColumn, rightColumn].map((column, colIndex) => (
            <div key={colIndex} className="space-y-5">
              {column.map((faq, index) => (
                <details
                  key={index}
                  className="group border border-gray-300 rounded-md overflow-hidden bg-white "
                >
                  <summary className="cursor-pointer bg-gray-100 px-4 py-3 flex justify-between items-center text-sm font-medium text-gray-700  group-open:bg-blue-50 group-open:text-blue-700">
                    {faq.question}
                    <span className="text-lg transform group-open:rotate-180 transition duration-300">
                      <FaCaretDown />
                    </span>
                  </summary>
                  <div className="px-4 py-3 text-sm text-gray-600 ">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
