import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqs = [
  {
    question: "What products and services does Zobia Impex offer?",
    answer:
      "We provide import, export, and B2B supply chain solutions for electrical goods, food commodities, general supplies, and more. Our services include sourcing, logistics, quality assurance, and end-to-end support for businesses worldwide.",
  },
  {
    question: "Which industries do you serve?",
    answer:
      "We serve a wide range of industries including retail, manufacturing, construction, hospitality, healthcare, agriculture, logistics, and more. See our Industries page for details.",
  },
  {
    question: "How can I request a quote or place an order?",
    answer:
      "You can request a quote or place an order by filling out the contact form on our Contact page, or by emailing us directly at zobiaimpexmodasa@gmail.com.",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we offer international shipping and handle all logistics, customs, and compliance for global trade partners.",
  },
  {
    question: "How does Zobia Impex ensure product quality?",
    answer:
      "We implement strict quality control processes, supplier vetting, and third-party inspections to ensure all products meet international standards.",
  },
  {
    question: "Can you source custom or hard-to-find products?",
    answer:
      "Absolutely! Our global network allows us to source a wide variety of products, including custom and specialized items. Contact us with your requirements.",
  },
  {
    question: "What are your payment terms and methods?",
    answer:
      "We offer flexible payment terms and accept various methods including bank transfer, LC, and others depending on the order and client profile.",
  },
  {
    question: "How do I become a partner or supplier?",
    answer:
      "If you are interested in partnering with Zobia Impex, please reach out via our Contact page or email us. We welcome new suppliers and business collaborations.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 font-sans py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-10 text-center bg-gradient-to-r from-green-700 to-yellow-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          Frequently Asked Questions
        </motion.h1>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <motion.div
              key={faq.question}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}>
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-green-400"
                onClick={() => toggleFAQ(idx)}
                aria-expanded={openIndex === idx}>
                <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
                <span className="ml-4 text-green-700">{openIndex === idx ? <FiChevronUp size={24} /> : <FiChevronDown size={24} />}</span>
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    className="px-6 pb-6 text-gray-700 text-base"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}>
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
