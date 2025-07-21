import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Services", path: "/services" },
  { name: "Industries", path: "/industries" },
  { name: "Partners", path: "/partners" },
  { name: "Contact", path: "/contact" },
  { name: "FAQ", path: "/faq" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? "bg-white shadow-lg py-3" : "bg-transparent py-5"}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center">
          <div className="bg-gradient-to-r from-green-700 to-yellow-600 w-10 h-10 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">ZI</span>
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-green-700 to-yellow-600 bg-clip-text text-transparent ml-2">
            Zobia Impex
          </h1>
        </motion.div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((item) => (
            <motion.div key={item.name} whileHover={{ scale: 1.05 }} className="relative group">
              <Link
                to={item.path}
                className={`font-medium transition-colors ${
                  location.pathname === item.path ? "text-green-700" : "text-gray-700 hover:text-green-700"
                }`}>
                {item.name}
              </Link>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-700 transition-all duration-300 group-hover:w-full"></span>
            </motion.div>
          ))}
        </nav>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-700 hover:text-green-700 focus:outline-none"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle menu">
          {isMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
        </button>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 overflow-hidden z-40">
            <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`py-2 font-medium border-b border-gray-100 block ${
                    location.pathname === item.path ? "text-green-700" : "text-gray-700 hover:text-green-700"
                  }`}>
                  {item.name}
                </Link>
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
  );
};

export default Navbar;
