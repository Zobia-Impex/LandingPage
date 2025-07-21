// src/components/ZobiaImpex.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiShoppingCart,
  FiSearch,
  FiUser,
  FiMenu,
  FiX,
  FiStar,
  FiTruck,
  FiShield,
  FiCreditCard,
  FiSmartphone,
  FiTablet,
  FiHeadphones,
  FiMonitor,
  FiCamera,
  FiWatch,
} from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterest } from "react-icons/fa";

const ZobiaImpex = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Removed: activeCategory, setActiveCategory (no longer used)
  const [currentSlide, setCurrentSlide] = useState(0);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-rotate hero banners
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Removed: categories (no longer used)

  // Removed: products (no longer used)

  // Removed: testimonials (no longer used)

  // Removed: features (no longer used)

  const socialIcons = [
    { icon: <FaFacebookF />, color: "hover:bg-blue-600" },
    { icon: <FaTwitter />, color: "hover:bg-sky-500" },
    { icon: <FaInstagram />, color: "hover:bg-gradient-to-r from-purple-500 to-pink-500" },
    { icon: <FaLinkedinIn />, color: "hover:bg-blue-700" },
    { icon: <FaPinterest />, color: "hover:bg-red-600" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 font-sans">
      {/* Header */}

      {/* Hero Section */}
      <section className="pt-20 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-yellow-50 z-0"></div>

        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <motion.div
              className="lg:w-1/2 mb-12 lg:mb-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}>
              <motion.div
                className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}>
                <h1 className="mb-4">B2B Import, Export & Supply</h1>
                <div className="inline-block">
                  <motion.span
                    className="bg-gradient-to-r from-green-700 to-yellow-600 bg-clip-text text-transparent"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    style={{
                      backgroundSize: "200% auto",
                    }}>
                    General Goods & Supplies
                  </motion.span>
                </div>
              </motion.div>

              <motion.p
                className="text-lg text-gray-600 max-w-xl mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}>
                Zobia Impex is your trusted B2B partner for import, export, and supply of general goods: electrical materials, home
                appliances, lighting, wires, cables, food items (potatoes, onions, pulses, grains), and more. Serving businesses worldwide
                with quality, reliability, and efficiency.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}>
                <motion.button
                  className="bg-gradient-to-r from-green-700 to-yellow-600 hover:from-green-800 hover:to-yellow-700 text-white font-medium py-3 px-8 rounded-full shadow-lg transition-all transform hover:-translate-y-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}>
                  Explore Products
                </motion.button>
                <motion.button
                  className="bg-white border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white font-medium py-3 px-8 rounded-full transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}>
                  Our Services
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div
              className="lg:w-1/2 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}>
              <div className="relative w-full max-w-lg">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl border-8 border-white">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="bg-gradient-to-br from-green-700 to-yellow-600 aspect-video flex items-center justify-center">
                      <div className="text-center p-6 text-white">
                        <motion.div className="text-4xl mb-6" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }}>
                          {currentSlide === 0 ? "�" : currentSlide === 1 ? "🌾" : "📦"}
                        </motion.div>
                        <motion.h2
                          className="text-2xl md:text-3xl font-bold mb-2"
                          initial={{ y: 20 }}
                          animate={{ y: 0 }}
                          transition={{ delay: 0.3 }}>
                          {currentSlide === 0
                            ? "Electrical & Lighting"
                            : currentSlide === 1
                            ? "Food & Agro Commodities"
                            : "General Goods & Supplies"}
                        </motion.h2>
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                          {currentSlide === 0
                            ? "Fans, LEDs, Switchgear, Cables, Accessories"
                            : currentSlide === 1
                            ? "Potatoes, Onions, Pulses, Grains, Spices"
                            : "Construction, Packaging, Plastics, Textiles, More"}
                        </motion.p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {[0, 1, 2].map((index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-green-700" : "bg-gray-300"}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Our Main Categories</h2>
            <p className="text-gray-600 max-w-lg mx-auto">
              We import, export, and supply a wide range of general goods for businesses worldwide.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { icon: "💡", name: "Electrical Materials" },
              { icon: "🏠", name: "Home Appliances" },
              { icon: "🌾", name: "Food & Agro Commodities" },
              { icon: "🧱", name: "Construction Materials" },
              { icon: "📦", name: "Packaging & Plastics" },
              { icon: "🧴", name: "Chemicals & Cleaning" },
              { icon: "👕", name: "Textiles & Garments" },
              { icon: "🛠️", name: "Industrial Supplies" },
              { icon: "🍽️", name: "Hotel & Kitchen Supplies" },
              { icon: "🚚", name: "Logistics & Warehousing" },
            ].map((cat, idx) => (
              <motion.div
                key={cat.name}
                className="bg-gradient-to-br from-green-50 to-yellow-100 rounded-2xl p-6 flex flex-col items-center shadow-md hover:shadow-lg transition-all cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}>
                <div className="text-4xl mb-4">{cat.icon}</div>
                <h3 className="font-semibold text-lg text-gray-800 text-center">{cat.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our B2B Services Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Our B2B Services</h2>
            <p className="text-gray-600 max-w-lg mx-auto">
              Comprehensive solutions for import, export, and supply of general goods for businesses.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "🌍", title: "Global Sourcing", desc: "We source quality goods from trusted suppliers worldwide." },
              { icon: "🚢", title: "Import & Export", desc: "Efficient import/export services for all types of general goods." },
              { icon: "🏭", title: "Bulk Supply", desc: "Supplying businesses, industries, and wholesalers in bulk." },
              { icon: "📦", title: "Custom Packaging", desc: "Tailored packaging and labeling for your business needs." },
              { icon: "📝", title: "Documentation", desc: "Complete trade documentation and compliance support." },
              { icon: "🚚", title: "Logistics & Delivery", desc: "Reliable logistics, warehousing, and on-time delivery." },
              { icon: "🤝", title: "B2B Partnerships", desc: "Long-term partnerships with retailers, manufacturers, and distributors." },
              { icon: "🔍", title: "Product Sourcing", desc: "Find and source any general good as per your requirements." },
            ].map((service, idx) => (
              <motion.div
                key={service.title}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}>
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Zobia Impex Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Why Choose Zobia Impex?</h2>
            <p className="text-gray-600 max-w-lg mx-auto">
              Experience reliability, quality, and global reach for all your B2B general goods needs.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "🌐", title: "Global Network", desc: "Strong sourcing and supply network across continents." },
              { icon: "✅", title: "Quality Assurance", desc: "Strict quality checks and certified suppliers only." },
              { icon: "📄", title: "Compliance & Documentation", desc: "Full support for international trade compliance." },
              { icon: "⚡", title: "Fast & Reliable Delivery", desc: "Efficient logistics and on-time shipments worldwide." },
              { icon: "🔄", title: "Custom Solutions", desc: "Tailored sourcing, packaging, and supply for your business." },
              { icon: "💬", title: "Dedicated Support", desc: "Responsive B2B customer service and trade experts." },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}>
                <div className="w-14 h-14 bg-gradient-to-r from-green-700 to-yellow-600 rounded-xl flex items-center justify-center text-white mb-4 text-3xl">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">{item.title}</h3>
                <p className="text-gray-600 text-center">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Industries We Serve</h2>
            <p className="text-gray-600 max-w-lg mx-auto">
              Zobia Impex supplies general goods to a wide range of industries and sectors globally.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: "🏢", name: "Retail & Wholesale" },
              { icon: "🏭", name: "Manufacturing" },
              { icon: "🏗️", name: "Construction" },
              { icon: "🏨", name: "Hospitality & Hotels" },
              { icon: "🏥", name: "Healthcare" },
              { icon: "🚚", name: "Logistics & Distribution" },
              { icon: "🍽️", name: "Food Processing" },
              { icon: "🏫", name: "Education" },
              { icon: "🏠", name: "Real Estate & Property" },
              { icon: "🛒", name: "Supermarkets" },
              { icon: "🛠️", name: "Industrial Plants" },
              { icon: "🌍", name: "International Trade" },
            ].map((ind, idx) => (
              <motion.div
                key={ind.name}
                className="bg-white rounded-2xl p-6 flex flex-col items-center shadow-md hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}>
                <div className="text-3xl mb-3">{ind.icon}</div>
                <h3 className="font-semibold text-base text-gray-800 text-center">{ind.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-700 to-yellow-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            Ready to Grow Your Business?
          </motion.h2>
          <motion.p
            className="text-yellow-100 max-w-2xl mx-auto text-lg mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            Partner with Zobia Impex for reliable import, export, and supply of general goods. Get in touch for a custom quote or to discuss
            your B2B requirements.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}>
            <motion.button
              className="bg-white text-green-700 hover:bg-gray-100 font-medium py-3 px-8 rounded-full shadow-lg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              Request a Quote
            </motion.button>
            <motion.button
              className="bg-transparent border-2 border-white hover:bg-green-800 font-medium py-3 px-8 rounded-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ZobiaImpex;
