// src/pages/Industries.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiShoppingCart, FiHome, FiTruck, FiCoffee, FiBook, FiHeart, FiPackage, FiSettings, FiGlobe } from "react-icons/fi";

const Industries = () => {
  // Industry categories with detailed information
  const industries = [
    {
      id: "retail",
      icon: <FiShoppingCart className="text-3xl" />,
      title: "Retail & Wholesale",
      description: "Supplying retailers and wholesalers with diverse general goods for consumer markets",
      products: ["Electrical appliances", "Home goods", "Food commodities", "Packaging materials", "Consumer electronics"],
      howWeHelp: [
        "Consistent supply of popular consumer goods",
        "Bulk quantities at competitive wholesale pricing",
        "Seasonal inventory planning support",
        "Private labeling options",
      ],
    },
    {
      id: "construction",
      icon: <FiHome className="text-3xl" />,
      title: "Construction",
      description: "Providing materials for residential, commercial, and infrastructure projects",
      products: ["Electrical wiring & accessories", "Lighting solutions", "Plumbing materials", "Safety equipment", "Building hardware"],
      howWeHelp: [
        "Just-in-time delivery for project timelines",
        "Bulk discounts on large orders",
        "Technical specifications matching",
        "Import of specialized construction materials",
      ],
    },
    {
      id: "hospitality",
      icon: <FiCoffee className="text-3xl" />,
      title: "Hospitality & Hotels",
      description: "Supplying hotels, restaurants, and catering businesses with essential goods",
      products: ["Kitchen appliances", "Tableware & serving items", "Cleaning supplies", "Bed & bath linens", "Food ingredients"],
      howWeHelp: [
        "Customized supply packages for hotels/resorts",
        "Regular delivery schedules",
        "International sourcing of specialty items",
        "Cost-effective solutions for high-volume usage",
      ],
    },
    {
      id: "manufacturing",
      icon: <FiSettings className="text-3xl" />,
      title: "Manufacturing",
      description: "Providing industrial inputs and materials for production facilities",
      products: ["Electrical components", "Raw materials", "Packaging supplies", "Industrial consumables", "Maintenance equipment"],
      howWeHelp: [
        "Reliable supply chain for production lines",
        "Global sourcing of specialized components",
        "Custom packaging solutions",
        "Consignment inventory options",
      ],
    },
    {
      id: "healthcare",
      icon: <FiHeart className="text-3xl" />,
      title: "Healthcare",
      description: "Supplying hospitals, clinics, and healthcare facilities with essential goods",
      products: ["Medical equipment", "Cleaning chemicals", "Linens & textiles", "Kitchen supplies", "Office materials"],
      howWeHelp: [
        "Compliance with healthcare regulations",
        "Sterile packaging options",
        "Emergency supply chain solutions",
        "Customized delivery schedules",
      ],
    },
    {
      id: "logistics",
      icon: <FiTruck className="text-3xl" />,
      title: "Logistics & Distribution",
      description: "Partnering with logistics providers to enhance their service offerings",
      products: ["Packaging materials", "Handling equipment", "Warehouse supplies", "Safety gear", "Office supplies"],
      howWeHelp: [
        "Bulk supply of packaging materials",
        "Custom branded packaging solutions",
        "Consistent inventory for distribution centers",
        "Cost reduction through volume purchasing",
      ],
    },
    {
      id: "food-processing",
      icon: <FiPackage className="text-3xl" />,
      title: "Food Processing",
      description: "Supplying food manufacturers with quality ingredients and packaging",
      products: ["Potatoes & onions", "Grains & pulses", "Spices & seasonings", "Packaging materials", "Processing equipment parts"],
      howWeHelp: [
        "Seasonal sourcing of agricultural products",
        "Cold chain logistics management",
        "Customized packaging solutions",
        "Import of specialized processing equipment",
      ],
    },
    {
      id: "education",
      icon: <FiBook className="text-3xl" />,
      title: "Education",
      description: "Providing schools, colleges, and universities with essential supplies",
      products: ["Furniture & fixtures", "Kitchen supplies", "Cleaning materials", "Electrical equipment", "Office supplies"],
      howWeHelp: [
        "Bulk discounts for educational institutions",
        "Scheduled deliveries during academic breaks",
        "Customized supply packages",
        "Budget-friendly solutions",
      ],
    },
  ];

  const [activeIndustry, setActiveIndustry] = useState(industries[0]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 font-sans">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-green-700 to-yellow-600 text-white">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}>
              Industries We Serve
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-yellow-100 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}>
              Tailored B2B Solutions for Diverse Sectors Through Import, Export & Supply
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
              <a
                href="#solutions"
                className="inline-block bg-white text-green-700 font-medium py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors">
                Explore Industry Solutions
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Serving Diverse Business Sectors</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Zobia Impex partners with businesses across multiple industries, providing specialized import, export, and supply chain
              solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {industries.map((industry, index) => (
              <motion.button
                key={industry.id}
                className={`flex flex-col items-center p-5 rounded-xl transition-all ${
                  activeIndustry.id === industry.id
                    ? "bg-gradient-to-br from-green-700 to-yellow-600 text-white shadow-lg"
                    : "bg-gray-50 hover:bg-gray-100"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveIndustry(industry)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}>
                <div
                  className={`mb-3 p-3 rounded-full ${
                    activeIndustry.id === industry.id
                      ? "bg-white text-green-700"
                      : "bg-gradient-to-r from-green-700 to-yellow-600 text-white"
                  }`}>
                  {industry.icon}
                </div>
                <h3 className="font-bold text-center">{industry.title}</h3>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Spotlight */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <motion.div
              className="lg:w-2/5 bg-white rounded-2xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>
              <div className="bg-gradient-to-r from-green-700 to-yellow-600 p-8 text-white">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-green-700 mb-5">
                  {activeIndustry.icon}
                </div>
                <h2 className="text-3xl font-bold mb-4">{activeIndustry.title}</h2>
                <p className="text-yellow-100 text-lg">{activeIndustry.description}</p>
              </div>

              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">How We Help {activeIndustry.title} Businesses</h3>
                <ul className="space-y-3">
                  {activeIndustry.howWeHelp.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-700 mr-3 mt-1 flex-shrink-0">
                        ✓
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              className="lg:w-3/5 bg-white rounded-2xl shadow-xl p-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Products We Supply to {activeIndustry.title} Sector</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {activeIndustry.products.map((product, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-700 mr-4 flex-shrink-0">
                      <span className="font-bold">•</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{product}</h4>
                      <p className="text-gray-600 text-sm mt-1">
                        {activeIndustry.title === "Retail & Wholesale" && "Consumer-ready products at competitive prices"}
                        {activeIndustry.title === "Construction" && "Durable materials meeting industry standards"}
                        {activeIndustry.title === "Hospitality & Hotels" && "High-quality supplies for guest satisfaction"}
                        {activeIndustry.title === "Manufacturing" && "Industrial-grade materials for production"}
                        {activeIndustry.title === "Healthcare" && "Supplies meeting healthcare regulations"}
                        {activeIndustry.title === "Logistics & Distribution" && "Essential materials for operations"}
                        {activeIndustry.title === "Food Processing" && "Quality ingredients and packaging"}
                        {activeIndustry.title === "Education" && "Durable supplies for educational environments"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h4 className="font-bold text-gray-800 mb-3">Custom Solutions for {activeIndustry.title}</h4>
                <p className="text-gray-600 mb-4">At Zobia Impex, we understand that every industry has unique requirements. We offer:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Customized packaging and labeling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Specialized import/export documentation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Volume-based pricing models</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Dedicated account management</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Serve Industries */}
      <section id="solutions" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Our Industry-Specific Approach</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              How Zobia Impex tailors solutions to meet the unique challenges of each sector
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Understanding Industry Needs",
                description: "We conduct thorough analysis of sector-specific requirements, regulations, and challenges",
                icon: "🔍",
                color: "from-blue-50 to-blue-100",
              },
              {
                title: "Tailored Supply Chain Solutions",
                description: "Developing logistics and inventory strategies specific to industry demands",
                icon: "📦",
                color: "from-green-50 to-green-100",
              },
              {
                title: "Regulatory Compliance",
                description: "Ensuring all imports/exports meet industry-specific regulations and standards",
                icon: "📋",
                color: "from-yellow-50 to-yellow-100",
              },
              {
                title: "Customized Sourcing",
                description: "Identifying suppliers that meet industry quality and certification requirements",
                icon: "🌐",
                color: "from-purple-50 to-purple-100",
              },
              {
                title: "Flexible Delivery Models",
                description: "Creating delivery schedules that align with industry operational cycles",
                icon: "🚚",
                color: "from-red-50 to-red-100",
              },
              {
                title: "Continuous Improvement",
                description: "Regularly reviewing and enhancing our industry-specific solutions",
                icon: "📈",
                color: "from-indigo-50 to-indigo-100",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`bg-gradient-to-br ${item.color} rounded-2xl p-6 shadow-lg`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}>
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Partners */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-3">Trusted by Industry Leaders</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">Zobia Impex partners with businesses across diverse sectors globally</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Retail Chains", count: "120+", icon: "🛒" },
              { name: "Construction Firms", count: "85+", icon: "🏗️" },
              { name: "Hotel Groups", count: "65+", icon: "🏨" },
              { name: "Manufacturers", count: "150+", icon: "🏭" },
              { name: "Healthcare Providers", count: "45+", icon: "🏥" },
              { name: "Logistics Companies", count: "70+", icon: "📦" },
              { name: "Food Processors", count: "55+", icon: "🍎" },
              { name: "Educational Institutions", count: "90+", icon: "🎓" },
            ].map((partner, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-2xl p-6 text-center shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}>
                <div className="text-4xl mb-4">{partner.icon}</div>
                <h3 className="text-xl font-bold mb-1">{partner.name}</h3>
                <p className="text-green-400 font-semibold">{partner.count} Partners</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-700 to-yellow-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Streamline Your Industry Supply Chain?</h2>
          <p className="text-yellow-100 max-w-2xl mx-auto text-lg mb-8">
            Partner with Zobia Impex for industry-specific import, export, and supply solutions.
          </p>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <motion.button
              className="bg-white text-green-700 hover:bg-gray-100 font-medium py-3 px-8 rounded-full shadow-lg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              Request Industry Solution
            </motion.button>
            <motion.button
              className="bg-transparent border-2 border-white hover:bg-green-800 font-medium py-3 px-8 rounded-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              Contact Our Industry Specialists
            </motion.button>
          </div>

          <div className="mt-10 pt-6 border-t border-green-500 max-w-2xl mx-auto">
            <p className="text-yellow-100">
              "Zobia Impex transformed our supply chain with their industry-specific approach. Their understanding of our sector's unique
              challenges made all the difference."
              <span className="block mt-2 font-semibold">- Supply Chain Director, Leading Hotel Group</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
