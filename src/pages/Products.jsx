import React from "react";
import { motion } from "framer-motion";

const productCategories = [
  {
    icon: "💡",
    name: "Electrical Materials",
    desc: "Wires, cables, lighting, switchgear, and accessories for industrial and commercial use.",
  },
  { icon: "🌾", name: "Food & Agro Commodities", desc: "Potatoes, onions, pulses, grains, spices, and more for wholesale supply." },
  {
    icon: "🧱",
    name: "Construction Materials",
    desc: "Cement, steel, tiles, sanitaryware, and building supplies for projects of all sizes.",
  },
  { icon: "📦", name: "Packaging & Plastics", desc: "Cartons, films, containers, and custom packaging solutions for every industry." },
  { icon: "👕", name: "Textiles & Garments", desc: "Fabrics, uniforms, workwear, and ready-made garments for B2B clients." },
  { icon: "🏠", name: "Home Appliances", desc: "Fans, kitchen appliances, electronics, and more for bulk procurement." },
  { icon: "🧴", name: "Chemicals & Cleaning", desc: "Industrial chemicals, cleaning agents, and hygiene products." },
  { icon: "🛠️", name: "Industrial Supplies", desc: "Tools, machinery, safety equipment, and MRO products." },
  { icon: "🍽️", name: "Hotel & Kitchen Supplies", desc: "Crockery, cutlery, kitchenware, and hotel amenities." },
  { icon: "🚚", name: "Logistics & Warehousing", desc: "Pallets, racks, storage solutions, and logistics support." },
];

const Products = () => (
  <motion.div
    className="container mx-auto px-4 py-20 max-w-6xl"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}>
    {/* Hero Section */}
    <motion.h1
      className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-700 to-yellow-600 bg-clip-text text-transparent"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.7 }}>
      Our Products
    </motion.h1>
    <motion.p
      className="text-gray-700 mb-10 text-lg max-w-3xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.7 }}>
      Explore our wide range of general goods and industrial products. We supply quality materials and solutions for businesses, industries,
      and projects worldwide. Contact us for detailed catalogs and custom sourcing.
    </motion.p>

    {/* Product Categories Grid */}
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08 } },
      }}>
      {productCategories.map((cat, idx) => (
        <motion.div
          key={cat.name}
          className="bg-white rounded-2xl p-8 flex flex-col items-center shadow-lg border border-gray-100 hover:shadow-2xl transition-all cursor-pointer group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.08 }}
          whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(34,197,94,0.15)" }}>
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{cat.icon}</div>
          <h3 className="font-semibold text-lg text-gray-800 text-center mb-2">{cat.name}</h3>
          <p className="text-gray-600 text-center text-sm">{cat.desc}</p>
        </motion.div>
      ))}
    </motion.div>

    {/* Call to Action */}
    <motion.div
      className="mt-16 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.7 }}>
      <h2 className="text-2xl font-bold mb-4 text-green-700">Looking for something specific?</h2>
      <p className="mb-6 text-gray-700 max-w-xl mx-auto">
        We offer custom sourcing and bulk supply for all your business needs. Contact us for a detailed product catalog or to request a
        quote.
      </p>
      <a
        href="/contact"
        className="inline-block bg-gradient-to-r from-green-700 to-yellow-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:from-green-800 hover:to-yellow-700 transition-all">
        Contact Us
      </a>
    </motion.div>
  </motion.div>
);

export default Products;
