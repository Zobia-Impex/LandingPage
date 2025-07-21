// src/pages/Services.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FiTruck,
  FiGlobe,
  FiPackage,
  FiClipboard,
  FiShield,
  FiTrendingUp,
  FiUsers,
  FiBarChart2,
  FiDollarSign,
  FiCalendar,
} from "react-icons/fi";

const Services = () => {
  // Core services data
  const coreServices = [
    {
      icon: <FiGlobe className="text-3xl" />,
      title: "Global Import Services",
      description: "We source quality electrical materials, appliances, lighting, and food commodities from trusted suppliers worldwide.",
      highlights: [
        "Supplier identification & vetting",
        "Quality assurance inspections",
        "Competitive pricing negotiation",
        "Customs clearance assistance",
      ],
    },
    {
      icon: <FiTruck className="text-3xl" />,
      title: "Export Solutions",
      description: "Efficient export of Indian electrical goods, agricultural products, and general supplies to global markets.",
      highlights: [
        "Export documentation & compliance",
        "Packaging & labeling solutions",
        "Logistics & shipping coordination",
        "Market-specific regulations guidance",
      ],
    },
    {
      icon: <FiPackage className="text-3xl" />,
      title: "B2B Supply Chain",
      description: "Reliable supply of general goods to retailers, wholesalers, manufacturers, and industries.",
      highlights: ["Just-in-time delivery", "Bulk quantity fulfillment", "Inventory management solutions", "Consistent supply assurance"],
    },
  ];

  // Service process steps
  const processSteps = [
    {
      step: 1,
      title: "Requirement Analysis",
      icon: <FiClipboard />,
      description: "We thoroughly understand your business needs and specifications",
    },
    {
      step: 2,
      title: "Sourcing & Quotation",
      icon: <FiBarChart2 />,
      description: "We identify optimal suppliers and provide competitive pricing",
    },
    { step: 3, title: "Quality Assurance", icon: <FiShield />, description: "Rigorous quality checks at every stage of procurement" },
    {
      step: 4,
      title: "Logistics Management",
      icon: <FiTruck />,
      description: "Efficient shipping, customs clearance, and delivery coordination",
    },
    { step: 5, title: "Delivery & Support", icon: <FiPackage />, description: "On-time delivery and post-delivery support" },
  ];

  // Specialized services
  const specializedServices = [
    {
      category: "Electrical Goods",
      items: ["Fans & Home Appliances", "LED Lighting Solutions", "MCBs & Switchgear", "Wires & Cables", "Electrical Accessories"],
      icon: "⚡",
      bgColor: "from-blue-50 to-blue-100",
    },
    {
      category: "Food Commodities",
      items: ["Potatoes & Onions", "Chillies & Vegetables", "Wheat & Maize", "Pulses & Grains", "Spices & Seasonings"],
      icon: "🌾",
      bgColor: "from-green-50 to-green-100",
    },
    {
      category: "General Supplies",
      items: ["Construction Materials", "Packaging Solutions", "Plastic Products", "Textiles & Garments", "Industrial Supplies"],
      icon: "📦",
      bgColor: "from-yellow-50 to-yellow-100",
    },
  ];

  // Why choose us points
  const advantages = [
    {
      icon: <FiTrendingUp />,
      title: "Global Network",
      description: "Established relationships with suppliers and buyers across 20+ countries",
    },
    {
      icon: <FiShield />,
      title: "Quality Assurance",
      description: "Stringent quality control processes at every stage",
    },
    {
      icon: <FiDollarSign />,
      title: "Competitive Pricing",
      description: "Bulk purchasing power ensures best market rates",
    },
    {
      icon: <FiCalendar />,
      title: "Timely Delivery",
      description: "Efficient logistics for on-time shipments every time",
    },
    {
      icon: <FiUsers />,
      title: "Dedicated Support",
      description: "Personal account managers for each client",
    },
    {
      icon: <FiGlobe />,
      title: "Market Expertise",
      description: "Deep understanding of global trade regulations",
    },
  ];

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
              Comprehensive B2B Services
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-yellow-100 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}>
              Reliable Import, Export & Supply Solutions for Businesses Worldwide
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
              <a
                href="#contact"
                className="inline-block bg-white text-green-700 font-medium py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors">
                Request a Service Quote
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Our Core Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive B2B solutions tailored for importers, exporters, and businesses needing reliable supply chain partners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}>
                <div className="w-16 h-16 bg-gradient-to-r from-green-700 to-yellow-600 rounded-xl flex items-center justify-center text-white mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-5">{service.description}</p>
                <ul className="space-y-2">
                  {service.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Our Service Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Streamlined workflow ensuring efficiency, transparency, and reliability at every step
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/4 left-0 right-0 h-1 bg-gradient-to-r from-green-600 to-yellow-500 z-0"></div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}>
                  <div className="w-16 h-16 bg-gradient-to-r from-green-700 to-yellow-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    <span className="text-xl font-bold">{step.step}</span>
                  </div>
                  <div className="text-3xl text-green-700 mb-3">{step.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Specialized Service Areas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Industry-specific solutions for our key product categories</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specializedServices.map((service, index) => (
              <motion.div
                key={index}
                className={`bg-gradient-to-br ${service.bgColor} rounded-2xl p-8 shadow-lg`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}>
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-3">{service.icon}</span>
                  <h3 className="text-xl font-bold text-gray-800">{service.category}</h3>
                </div>

                <ul className="space-y-3">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-3">Our Expertise:</h4>
                  <ul className="space-y-2 text-sm">
                    {service.category === "Electrical Goods" && (
                      <>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">✓</span>
                          <span>International quality standards compliance</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">✓</span>
                          <span>Technical specifications matching</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">✓</span>
                          <span>Certification assistance (CE, UL, etc.)</span>
                        </li>
                      </>
                    )}
                    {service.category === "Food Commodities" && (
                      <>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">✓</span>
                          <span>Cold chain logistics management</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">✓</span>
                          <span>Phytosanitary certification</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">✓</span>
                          <span>Seasonal availability planning</span>
                        </li>
                      </>
                    )}
                    {service.category === "General Supplies" && (
                      <>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">✓</span>
                          <span>Custom packaging solutions</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">✓</span>
                          <span>Bulk shipment optimization</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">✓</span>
                          <span>Multi-product consolidation</span>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-3">Why Partner with Zobia Impex?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">Advantages that make us the preferred B2B partner for businesses worldwide</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}>
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-yellow-500 rounded-lg flex items-center justify-center text-white mb-4">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
                <p className="text-gray-300">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-green-700 to-yellow-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Enhance Your Supply Chain?</h2>
          <p className="text-yellow-100 max-w-2xl mx-auto text-lg mb-8">
            Partner with Zobia Impex for reliable import, export, and supply solutions. Request a quote or schedule a consultation today.
          </p>

          <div className="max-w-xl mx-auto bg-white rounded-xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Request Service Information</h3>

            <form className="space-y-4 text-left">
              <div>
                <label className="block text-gray-700 mb-1">Your Business Type</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent">
                  <option>Select business type</option>
                  <option>Importer</option>
                  <option>Exporter</option>
                  <option>Wholesaler</option>
                  <option>Retailer</option>
                  <option>Manufacturer</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-1">Service Interest</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent">
                  <option>Select service</option>
                  <option>Import Services</option>
                  <option>Export Services</option>
                  <option>Supply Chain Solutions</option>
                  <option>Multiple Services</option>
                  <option>Custom Requirements</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  placeholder="your@business.com"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-700 to-yellow-600 text-white font-medium py-3 px-8 rounded-lg shadow-lg hover:from-green-800 hover:to-yellow-700 transition-all">
                Submit Request
              </button>
            </form>

            <div className="mt-6 pt-4 border-t border-gray-200">
              <p className="text-gray-600">
                Or contact us directly:
                <br></br>
                <span className="font-medium ml-2">zobiaimpexmodasa@gmail.com</span> |
                <span className="font-medium ml-2">+91 9898111883</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
