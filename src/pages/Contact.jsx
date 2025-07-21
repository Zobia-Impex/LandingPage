import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required.";
    if (!form.email.trim()) errs.email = "Email is required.";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errs.email = "Invalid email.";
    if (!form.company.trim()) errs.company = "Company is required.";
    if (!form.message.trim()) errs.message = "Message is required.";
    return errs;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    try {
      const response = await fetch("https://formsubmit.co/zobiaimpexmodasa@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          phone: form.phone,
          message: form.message,
          _subject: "New Contact Form Submission from Zobia Impex Website",
        }),
      });
      if (response.ok) {
        setSubmitted(true);
      } else {
        setErrors({ submit: "Failed to send message. Please try again later." });
      }
    } catch (error) {
      setErrors({ submit: "Failed to send message. Please try again later." });
    }
  };

  return (
    <motion.div
      className="container mx-auto px-4 py-20 max-w-2xl"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}>
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-700 to-yellow-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7 }}>
        Contact Us
      </motion.h1>
      <motion.p
        className="text-gray-700 mb-10 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}>
        Get in touch with Zobia Impex for business inquiries, quotes, or support. Fill out the form below and our team will respond
        promptly.
      </motion.p>
      {submitted ? (
        <motion.div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-8 rounded shadow text-center text-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}>
          Thank you for contacting us! We have received your message and will get back to you soon.
        </motion.div>
      ) : (
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-2xl px-8 pt-8 pb-10 mb-4 border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              className={`shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-400 focus:shadow-outline ${
                errors.name ? "border-red-500" : "border-gray-200"
              }`}
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              className={`shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-400 focus:shadow-outline ${
                errors.email ? "border-red-500" : "border-gray-200"
              }`}
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@email.com"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="company">
              Company <span className="text-red-500">*</span>
            </label>
            <input
              className={`shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-400 focus:shadow-outline ${
                errors.company ? "border-red-500" : "border-gray-200"
              }`}
              id="company"
              name="company"
              type="text"
              value={form.company}
              onChange={handleChange}
              placeholder="Your Company"
            />
            {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="phone">
              Phone
            </label>
            <input
              className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-400 focus:shadow-outline border-gray-200"
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number (optional)"
            />
          </div>
          <div className="mb-8">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              className={`shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-400 focus:shadow-outline ${
                errors.message ? "border-red-500" : "border-gray-200"
              }`}
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="How can we help you?"
            />
            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
          </div>
          {errors.submit && <div className="mb-4 text-red-600 text-center font-semibold">{errors.submit}</div>}
          <div className="flex items-center justify-between">
            <motion.button
              className="bg-gradient-to-r from-green-700 to-yellow-600 hover:from-green-800 hover:to-yellow-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-green-400"
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}>
              Send Message
            </motion.button>
          </div>
        </motion.form>
      )}
    </motion.div>
  );
};

export default Contact;
