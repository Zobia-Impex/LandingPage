import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => (
  <motion.div
    className="container mx-auto px-4 py-20 max-w-5xl"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}>
    {/* Hero Section */}
    <motion.h1
      className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-700 to-yellow-600 bg-clip-text text-transparent"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.7 }}>
      About Zobia Impex
    </motion.h1>
    <motion.p
      className="text-gray-700 mb-10 text-lg max-w-3xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.7 }}>
      Zobia Impex is a global B2B importer, exporter, and supplier of general goods and industrial products. With a legacy of excellence, we
      connect businesses worldwide to quality, reliability, and innovation. Our expertise spans sourcing, logistics, and supply chain
      management, making us a trusted partner for companies across diverse industries.
    </motion.p>

    {/* Company Overview Section */}
    <motion.section
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25, duration: 0.7 }}>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-3 text-green-700">Who We Are</h2>
          <p className="text-gray-600 mb-2">
            Founded in 2017 in Modasa, Gujarat, India, Zobia Impex has grown from a local trading company into a global B2B powerhouse. We
            specialize in the import, export, and supply of electrical materials, food commodities, construction goods, packaging, and more.
          </p>
          <p className="text-gray-600">
            Our commitment to quality, compliance, and customer satisfaction drives every partnership. We believe in building long-term
            relationships and delivering tailored solutions for every client.
          </p>
        </div>
        <div className="flex justify-center">
          <img src="/public/vite.svg" alt="Zobia Impex Office" className="rounded-2xl shadow-lg w-full max-w-xs md:max-w-sm" />
        </div>
      </div>
    </motion.section>

    {/* Timeline Section */}
    <motion.section
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.7 }}>
      <h2 className="text-2xl font-bold mb-8 text-yellow-600 text-center">Our Journey</h2>
      <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 justify-center items-center">
        <div className="bg-white rounded-xl shadow p-6 border-t-4 border-green-700 w-full md:w-1/3">
          <h3 className="font-bold text-lg mb-2 text-green-700">2010</h3>
          <p className="text-gray-600">Founded in Modasa, Gujarat, India as a local trading company.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 border-t-4 border-yellow-600 w-full md:w-1/3">
          <h3 className="font-bold text-lg mb-2 text-yellow-600">2015</h3>
          <p className="text-gray-600">Expanded to international markets, focusing on B2B supply and export.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 border-t-4 border-green-700 w-full md:w-1/3">
          <h3 className="font-bold text-lg mb-2 text-green-700">2022</h3>
          <p className="text-gray-600">Recognized as a trusted global partner for industrial and general goods.</p>
        </div>
      </div>
    </motion.section>

    {/* Mission, Vision, Values Section */}
    <motion.section
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35, duration: 0.7 }}>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h3 className="text-xl font-bold mb-3 text-green-700">Our Mission</h3>
          <p className="text-gray-600">
            To empower businesses globally by providing reliable sourcing, import, export, and supply of high-quality general goods and
            industrial products, with a focus on trust, efficiency, and customer satisfaction.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h3 className="text-xl font-bold mb-3 text-yellow-600">Our Vision</h3>
          <p className="text-gray-600">
            To be the preferred B2B partner for businesses worldwide, recognized for our integrity, innovation, and ability to deliver
            comprehensive supply solutions across diverse industries.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h3 className="text-xl font-bold mb-3 text-green-700">Our Values</h3>
          <ul className="list-disc pl-5 text-gray-600 space-y-1">
            <li>Integrity & Transparency</li>
            <li>Customer-Centric Approach</li>
            <li>Innovation & Adaptability</li>
            <li>Quality & Compliance</li>
            <li>Long-Term Partnerships</li>
          </ul>
        </div>
      </div>
    </motion.section>

    {/* Leadership Section */}
    <motion.section
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.7 }}>
      <h2 className="text-2xl font-bold mb-8 text-gray-800 text-center">Leadership</h2>
      <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 justify-center items-center">
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 flex flex-col items-center w-full md:w-1/3">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="CEO" className="w-24 h-24 rounded-full mb-4 shadow" />
          <h3 className="font-bold text-lg mb-1 text-green-700">Mr. Ahmed Khan</h3>
          <p className="text-gray-600 mb-1">Chief Executive Officer</p>
          <p className="text-gray-500 text-sm text-center">20+ years in global trade, supply chain, and B2B leadership.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 flex flex-col items-center w-full md:w-1/3">
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="COO" className="w-24 h-24 rounded-full mb-4 shadow" />
          <h3 className="font-bold text-lg mb-1 text-yellow-600">Ms. Sara Malik</h3>
          <p className="text-gray-600 mb-1">Chief Operations Officer</p>
          <p className="text-gray-500 text-sm text-center">Expert in logistics, compliance, and international operations.</p>
        </div>
      </div>
    </motion.section>

    {/* Global Presence Section */}
    <motion.section
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.45, duration: 0.7 }}>
      <h2 className="text-2xl font-bold mb-8 text-green-700 text-center">Our Global Presence</h2>
      <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 justify-center items-center">
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 w-full md:w-1/2">
          <h3 className="font-bold text-lg mb-2 text-green-700">Offices</h3>
          <ul className="list-disc pl-5 text-gray-600 space-y-1">
            <li>Modasa, Gujarat, India (Headquarters)</li>
            <li>Dubai, UAE</li>
            <li>London, UK</li>
            <li>Shanghai, China</li>
          </ul>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 w-full md:w-1/2">
          <h3 className="font-bold text-lg mb-2 text-yellow-600">Clients & Partners</h3>
          <ul className="list-disc pl-5 text-gray-600 space-y-1">
            <li>Retailers & Wholesalers</li>
            <li>Manufacturers</li>
            <li>Construction & Real Estate</li>
            <li>Food & Agro Businesses</li>
            <li>Industrial Plants</li>
          </ul>
        </div>
      </div>
    </motion.section>

    {/* Call to Action Section */}
    <motion.section
      className="py-12 bg-gradient-to-r from-green-700 to-yellow-600 rounded-2xl text-white text-center shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.7 }}>
      <h2 className="text-3xl font-bold mb-4">Ready to Partner with Zobia Impex?</h2>
      <p className="mb-6 text-lg max-w-2xl mx-auto">
        Contact us today to discuss your B2B requirements, request a quote, or learn more about our global supply solutions. Our team is
        ready to help your business grow.
      </p>
      <a
        href="/contact"
        className="inline-block bg-white text-green-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-all">
        Contact Us
      </a>
    </motion.section>
  </motion.div>
);

export default AboutUs;
