// src/components/ZobiaImpex.jsx
import React, { useState, useEffect } from "react";
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
  const [activeCategory, setActiveCategory] = useState(0);
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

  const categories = [
    { icon: <FiSmartphone className="text-3xl" />, name: "Smartphones", color: "from-blue-400 to-indigo-600" },
    { icon: <FiTablet className="text-3xl" />, name: "Tablets", color: "from-purple-400 to-purple-600" },
    { icon: <FiHeadphones className="text-3xl" />, name: "Audio", color: "from-pink-400 to-rose-600" },
    { icon: <FiMonitor className="text-3xl" />, name: "TVs & Monitors", color: "from-cyan-400 to-teal-600" },
    { icon: <FiCamera className="text-3xl" />, name: "Cameras", color: "from-amber-400 to-orange-600" },
    { icon: <FiWatch className="text-3xl" />, name: "Wearables", color: "from-emerald-400 to-green-600" },
  ];

  const products = [
    { name: "iPhone 14 Pro Max", category: "Smartphones", price: "$1099", oldPrice: "$1199", rating: 4.8 },
    { name: "Samsung Galaxy S23 Ultra", category: "Smartphones", price: "$1199", oldPrice: "$1299", rating: 4.7 },
    { name: "Sony WH-1000XM5", category: "Audio", price: "$349", oldPrice: "$399", rating: 4.9 },
    { name: 'MacBook Pro 16" M2', category: "Laptops", price: "$2499", oldPrice: "$2699", rating: 4.9 },
  ];

  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Tech Enthusiast",
      content: "Zobia Impex has the best prices and fastest shipping I've ever experienced. My new laptop arrived in perfect condition.",
    },
    {
      name: "Sarah Williams",
      role: "Photographer",
      content: "The camera gear I bought exceeded my expectations. The quality is exceptional and the support team was very helpful.",
    },
    {
      name: "Michael Chen",
      role: "Gadget Reviewer",
      content: "I've purchased multiple devices from Zobia Impex. Each time the product was authentic and arrived faster than promised.",
    },
  ];

  const features = [
    { icon: <FiTruck className="text-2xl" />, title: "Free Shipping", desc: "On orders over $99" },
    { icon: <FiShield className="text-2xl" />, title: "2-Year Warranty", desc: "Guaranteed protection" },
    { icon: <FiCreditCard className="text-2xl" />, title: "Secure Payments", desc: "Encrypted transactions" },
  ];

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
      <header className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? "bg-white shadow-lg py-3" : "bg-transparent py-5"}`}>
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 w-10 h-10 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent ml-2">
              ZI Electronics
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {["Home", "Products", "Categories", "Deals", "About"].map((item) => (
              <motion.a
                key={item}
                href="#"
                className="font-medium text-gray-700 hover:text-indigo-600 transition-colors relative group"
                whileHover={{ scale: 1.05 }}>
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <motion.div
              className="hidden md:flex items-center bg-white rounded-full px-4 py-2 shadow-sm border border-gray-200"
              whileHover={{ scale: 1.03 }}>
              <input
                type="text"
                placeholder="Search products..."
                className="bg-transparent focus:outline-none w-40 lg:w-64 placeholder-gray-400"
              />
              <FiSearch className="text-gray-500" />
            </motion.div>

            <motion.button className="p-2 text-gray-700 hover:text-indigo-600" whileHover={{ scale: 1.1 }}>
              <FiUser className="text-xl" />
            </motion.button>

            <motion.button className="p-2 text-gray-700 hover:text-indigo-600 relative" whileHover={{ scale: 1.1 }}>
              <FiShoppingCart className="text-xl" />
              <span className="absolute -top-1 -right-1 bg-indigo-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                3
              </span>
            </motion.button>

            <motion.button className="md:hidden p-2 text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)} whileTap={{ scale: 0.9 }}>
              {isMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 overflow-hidden">
              <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
                {["Home", "Products", "Categories", "Deals", "About"].map((item) => (
                  <a key={item} href="#" className="py-2 font-medium text-gray-700 hover:text-indigo-600 border-b border-gray-100">
                    {item}
                  </a>
                ))}
                <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 mt-2">
                  <input type="text" placeholder="Search products..." className="bg-transparent focus:outline-none w-full" />
                  <FiSearch className="text-gray-500" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-purple-50 z-0"></div>

        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

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
                <h1 className="mb-4">Premium Electronics</h1>
                <div className="inline-block">
                  <motion.span
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
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
                    For Your Digital Life
                  </motion.span>
                </div>
              </motion.div>

              <motion.p
                className="text-lg text-gray-600 max-w-xl mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}>
                Discover the latest gadgets, smartphones, and home appliances at unbeatable prices. Quality products with warranty
                guarantee.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}>
                <motion.button
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium py-3 px-8 rounded-full shadow-lg transition-all transform hover:-translate-y-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}>
                  Shop Now
                </motion.button>
                <motion.button
                  className="bg-white border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white font-medium py-3 px-8 rounded-full transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}>
                  View Deals
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
                      className="bg-gradient-to-br from-indigo-500 to-purple-600 aspect-video flex items-center justify-center">
                      <div className="text-center p-6 text-white">
                        <motion.div className="text-4xl mb-6" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }}>
                          {currentSlide === 0 ? "📱" : currentSlide === 1 ? "💻" : "🎧"}
                        </motion.div>
                        <motion.h2
                          className="text-2xl md:text-3xl font-bold mb-2"
                          initial={{ y: 20 }}
                          animate={{ y: 0 }}
                          transition={{ delay: 0.3 }}>
                          {currentSlide === 0 ? "New Smartphones" : currentSlide === 1 ? "Latest Laptops" : "Premium Audio"}
                        </motion.h2>
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                          {currentSlide === 0
                            ? "Up to 20% off flagship models"
                            : currentSlide === 1
                            ? "Powerful performance for work & play"
                            : "Immersive sound experience"}
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
                      className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-indigo-600" : "bg-gray-300"}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Shop By Category</h2>
            <p className="text-gray-600 max-w-lg mx-auto">Explore our wide range of electronic products and accessories</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                className="relative group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => setActiveCategory(index)}>
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${
                    category.color
                  } rounded-2xl transform group-hover:scale-105 transition-all duration-300 ${
                    activeCategory === index ? "ring-2 ring-indigo-500 ring-offset-2" : ""
                  }`}></div>
                <div className="relative p-6 text-center rounded-2xl bg-white shadow-lg group-hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center justify-center border border-gray-100 group-hover:border-transparent">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mb-4">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-lg text-gray-800">{category.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="flex justify-between items-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Featured Products</h2>
              <p className="text-gray-600 mt-2">Our most popular electronics</p>
            </div>
            <motion.button className="text-indigo-600 font-medium flex items-center group" whileHover={{ x: 5 }}>
              View All
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -10 }}>
                <div className="relative">
                  <div className="bg-gradient-to-br from-indigo-400 to-purple-500 aspect-square flex items-center justify-center">
                    <div className="text-white text-5xl">
                      {product.category === "Smartphones" ? "📱" : product.category === "Audio" ? "🎧" : "💻"}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">SALE</div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-gray-800">{product.name}</h3>
                      <p className="text-gray-600 text-sm mt-1">{product.category}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-gray-800">{product.price}</span>
                      <span className="text-gray-500 line-through ml-2 text-sm">{product.oldPrice}</span>
                    </div>
                    <div className="flex items-center">
                      <FiStar className="text-yellow-400 fill-current" />
                      <span className="ml-1 text-gray-600">{product.rating}</span>
                    </div>
                  </div>
                  <motion.button
                    className="mt-4 w-full bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 hover:from-indigo-100 hover:to-purple-100 py-3 rounded-xl font-medium transition-colors flex items-center justify-center group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}>
                    Add to Cart
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}>
                <div className="w-14 h-14 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Customer Testimonials</h2>
            <p className="text-gray-600 max-w-lg mx-auto">See what our customers are saying about their experience</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FiStar key={star} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            Ready to Upgrade Your Tech?
          </motion.h2>
          <motion.p
            className="text-indigo-200 max-w-2xl mx-auto text-lg mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            Join thousands of satisfied customers who shop with confidence at Zobia Impex
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}>
            <motion.button
              className="bg-white text-indigo-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-full shadow-lg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              Start Shopping
            </motion.button>
            <motion.button
              className="bg-transparent border-2 border-white hover:bg-indigo-700 font-medium py-3 px-8 rounded-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 w-10 h-10 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Z</span>
                </div>
                <h3 className="text-white text-xl font-bold ml-2">ZOBIA IMPEX</h3>
              </div>
              <p className="mb-6 max-w-md">
                Your trusted destination for premium electronics at competitive prices. We bring the latest technology to your doorstep.
              </p>
              <div className="flex space-x-3">
                {socialIcons.map((social, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className={`w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white ${social.color} transition-all`}
                    whileHover={{ scale: 1.1 }}>
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {["Home", "Products", "About Us", "Contact", "FAQ"].map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Categories</h4>
              <ul className="space-y-2">
                {["Smartphones", "Laptops", "TVs & Monitors", "Audio", "Cameras", "Home Appliances"].map((category) => (
                  <li key={category}>
                    <a href="#" className="hover:text-white transition-colors">
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Contact Us</h4>
              <address className="not-italic space-y-3">
                <p>123 Electronics Street, Tech City</p>
                <p>Email: info@zobiaimpex.com</p>
                <p>Phone: +1 (234) 567-8900</p>
              </address>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-10 pt-6 text-center">
            <p>&copy; {new Date().getFullYear()} Zobia Impex. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ZobiaImpex;
