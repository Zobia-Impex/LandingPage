// src/pages/Partners.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiGlobe, FiTruck, FiTrendingUp, FiUsers, FiShield, FiDollarSign, FiBarChart2 } from "react-icons/fi";

const Partners = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    partnershipType: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would send data to backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);

    // Reset form after submission
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        partnershipType: "",
        message: "",
      });
    }, 5000);
  };

  // Partnership benefits
  const benefits = [
    {
      icon: <FiTrendingUp className="text-3xl" />,
      title: "Business Growth",
      description: "Expand your market reach through our global network",
    },
    {
      icon: <FiDollarSign className="text-3xl" />,
      title: "Revenue Streams",
      description: "Create new revenue opportunities with minimal investment",
    },
    {
      icon: <FiGlobe className="text-3xl" />,
      title: "Global Access",
      description: "Leverage our international trade expertise",
    },
    {
      icon: <FiShield className="text-3xl" />,
      title: "Risk Reduction",
      description: "Partner with an established, reliable business",
    },
  ];

  // Partnership types
  const partnershipTypes = [
    {
      type: "Supplier Partnerships",
      description: "Provide quality products to expand our offerings",
      icon: "📦",
      bgColor: "from-blue-50 to-blue-100",
    },
    {
      type: "Distribution Partnerships",
      description: "Distribute our products in your region or market",
      icon: "🚚",
      bgColor: "from-green-50 to-green-100",
    },
    {
      type: "Reseller Partnerships",
      description: "Sell Zobia Impex products through your channels",
      icon: "🛒",
      bgColor: "from-yellow-50 to-yellow-100",
    },
    {
      type: "Logistics Partnerships",
      description: "Provide transportation, warehousing, or fulfillment",
      icon: "📦",
      bgColor: "from-purple-50 to-purple-100",
    },
    {
      type: "Technology Partnerships",
      description: "Collaborate on supply chain technology solutions",
      icon: "💻",
      bgColor: "from-red-50 to-red-100",
    },
    {
      type: "Strategic Alliances",
      description: "Joint ventures for market expansion or new products",
      icon: "🤝",
      bgColor: "from-indigo-50 to-indigo-100",
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
              Partnership Opportunities
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-yellow-100 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}>
              Grow Your Business by Partnering with Zobia Impex
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
              <a
                href="#partner-form"
                className="inline-block bg-white text-green-700 font-medium py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors">
                Become a Partner
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Why Partner With Us?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join our network to access new markets, create revenue streams, and build a stronger business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}>
                <div className="w-16 h-16 bg-gradient-to-r from-green-700 to-yellow-600 rounded-xl flex items-center justify-center text-white mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Partnership Opportunities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We're seeking partners in these key areas to expand our global reach</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={index}
                className={`bg-gradient-to-br ${type.bgColor} rounded-2xl p-8 shadow-lg`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}>
                <div className="text-4xl mb-4">{type.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{type.type}</h3>
                <p className="text-gray-700 mb-6">{type.description}</p>
                <button
                  onClick={() => document.getElementById("partner-form").scrollIntoView({ behavior: "smooth" })}
                  className="text-green-700 font-medium hover:text-green-800 transition-colors">
                  Learn more about this opportunity →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Our Partnership Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Simple steps to establish a successful partnership with Zobia Impex</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute top-1/4 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-green-600 to-yellow-500 z-0"></div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                {[
                  { step: 1, title: "Initial Inquiry", desc: "Submit your partnership interest through our form" },
                  { step: 2, title: "Evaluation", desc: "Our team reviews your application for fit" },
                  { step: 3, title: "Discussion", desc: "We schedule a meeting to explore opportunities" },
                  { step: 4, title: "Agreement", desc: "Establish formal partnership terms" },
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}>
                    <div className="w-16 h-16 bg-gradient-to-r from-green-700 to-yellow-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                      <span className="text-xl font-bold">{step.step}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-16 bg-gradient-to-r from-green-700 to-yellow-600 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Start the Process?</h3>
              <p className="max-w-2xl mx-auto mb-6">
                Submit your partnership inquiry today and our team will contact you within 2 business days.
              </p>
              <button
                onClick={() => document.getElementById("partner-form").scrollIntoView({ behavior: "smooth" })}
                className="bg-white text-green-700 font-medium py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Form */}
      <section id="partner-form" className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>
              <div className="bg-gradient-to-r from-green-700 to-yellow-600 p-8 text-white text-center">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-green-700 mx-auto mb-5">
                  <FiGlobe className="text-3xl" />
                </div>
                <h2 className="text-3xl font-bold mb-3">Become a Partner</h2>
                <p>Join our network of trusted business partners</p>
              </div>

              <div className="p-8">
                {isSubmitted ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-700 mx-auto mb-5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
                    <p className="text-gray-600 mb-6">Your partnership inquiry has been submitted successfully.</p>
                    <p className="text-gray-600">Our partnership team will contact you within 2 business days.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 mb-2">Your Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                          placeholder="Full name"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2">Company Name *</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                          placeholder="Company/organization"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 mb-2">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                          placeholder="your@company.com"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                          placeholder="+1 (234) 567-8900"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2">Partnership Interest *</label>
                      <select
                        name="partnershipType"
                        value={formData.partnershipType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent">
                        <option value="">Select partnership type</option>
                        <option value="supplier">Supplier Partnership</option>
                        <option value="distribution">Distribution Partnership</option>
                        <option value="reseller">Reseller Partnership</option>
                        <option value="logistics">Logistics Partnership</option>
                        <option value="technology">Technology Partnership</option>
                        <option value="strategic">Strategic Alliance</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2">Tell Us About Your Partnership Proposal *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="4"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                        placeholder="Please describe your company, expertise, and how you'd like to partner with Zobia Impex..."></textarea>
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-green-700 to-yellow-600 text-white font-medium py-4 px-8 rounded-lg shadow-lg hover:from-green-800 hover:to-yellow-700 transition-all">
                        Submit Partnership Inquiry
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>

            <div className="mt-12 text-center text-gray-600">
              <p>
                Have questions about partnerships? Contact us at <span className="font-semibold">zobiaimpexmodasa@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Partnership Benefits</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-12">
              When you partner with Zobia Impex, you gain access to valuable resources and support
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Marketing Support",
                  description: "Co-marketing opportunities and promotional materials",
                  icon: "📢",
                },
                {
                  title: "Training Resources",
                  description: "Product knowledge and sales training",
                  icon: "🎓",
                },
                {
                  title: "Dedicated Support",
                  description: "Assigned partnership manager",
                  icon: "👤",
                },
                {
                  title: "Competitive Terms",
                  description: "Attractive partnership agreements",
                  icon: "💼",
                },
                {
                  title: "Market Intelligence",
                  description: "Industry insights and trend analysis",
                  icon: "📊",
                },
                {
                  title: "Network Access",
                  description: "Connect with other partners and clients",
                  icon: "🌐",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 rounded-2xl p-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}>
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
