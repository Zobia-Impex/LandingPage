import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterest } from "react-icons/fa";

const socialIcons = [
  { icon: <FaFacebookF />, color: "hover:bg-blue-600" },
  { icon: <FaTwitter />, color: "hover:bg-sky-500" },
  { icon: <FaInstagram />, color: "hover:bg-gradient-to-r from-purple-500 to-pink-500" },
  { icon: <FaLinkedinIn />, color: "hover:bg-blue-700" },
  { icon: <FaPinterest />, color: "hover:bg-red-600" },
];

const Footer = () => (
  <footer className="bg-gray-900 text-gray-400 py-12 mt-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2">
          <div className="flex items-center mb-4">
            <div className="bg-gradient-to-r from-green-700 to-yellow-600 w-10 h-10 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">ZI</span>
            </div>
            <h3 className="text-white text-xl font-bold ml-2">Zobia Impex</h3>
          </div>
          <p className="mb-6 max-w-md">
            Your trusted B2B partner for import, export, and supply of general goods: electrical materials, home appliances, lighting,
            wires, cables, food items, and more. Serving businesses worldwide.
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
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Products", path: "/products" },
              { name: "Services", path: "/services" },
              { name: "Industries", path: "/industries" },
              { name: "Partners", path: "/partners" },
              { name: "Contact", path: "/contact" },
              { name: "FAQ", path: "/faq" },
            ].map((link) => (
              <li key={link.name}>
                <a href={link.path} className="hover:text-white transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-medium mb-4">Categories</h4>
          <ul className="space-y-2">
            {[
              "Electrical Materials",
              "Food & Agro Commodities",
              "Construction Materials",
              "Packaging & Plastics",
              "Textiles & Garments",
              "Home Appliances",
            ].map((category) => (
              <li key={category}>
                <span className="hover:text-white transition-colors cursor-default">{category}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-medium mb-4">Contact</h4>
          <address className="not-italic space-y-2 text-sm">
            <p>Phone: +91 9898111883</p>
            <p>Email: zobiaimpexmodasa@gmail.com</p>
            <p>Modasa, Gujarat</p>
          </address>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-10 pt-6 text-center">
        <p>&copy; {new Date().getFullYear()} Zobia Impex. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
