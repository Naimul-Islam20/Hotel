"use client";

import { useRef, useState, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-50 px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Frequently Asked Questions
        </h1>

        {/* Accordion */}
        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            const contentRef = useRef(null);
            const [dropdownHeight, setDropdownHeight] = useState(0);

            useLayoutEffect(() => {
              if (isOpen && contentRef.current) {
                setDropdownHeight(contentRef.current.scrollHeight);
              }
            }, [isOpen]);

            return (
              <div
                key={index}
                className="border border-gray-300 rounded-lg bg-white shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left px-5 py-4 font-medium text-lg focus:outline-none"
                >
                  {faq.question}
                  <motion.span
                    initial={false}
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-xl font-bold"
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{
                        height: dropdownHeight || "auto",
                        transition: { duration: 0.5, ease: "easeOut" },
                      }}
                      exit={{
                        height: 0,
                        transition: { duration: 0.2, ease: "easeIn" },
                      }}
                      className="overflow-hidden px-5 text-gray-700"
                    >
                      <div ref={contentRef} className="py-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
