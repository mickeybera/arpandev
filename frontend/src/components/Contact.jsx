import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await axios.post("https://arpandev.onrender.com", formData);
      toast.success("Your message has been sent!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-5xl font-bold text-center mb-12 bg-gradient-to-b from-white to-neutral-400 text-transparent bg-clip-text">
        Get in Touch
      </h1>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Email Form */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition duration-300">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-white/90">
            <FaEnvelope /> Email Me
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-1 text-sm text-white/70">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-white/5 text-white placeholder-white/80 border border-white/30 focus:outline-none focus:border-white"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1 text-sm text-white/70">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-white/5 text-white placeholder-white/80 border border-white/30 focus:outline-none focus:border-white"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-1 text-sm text-white/70">Message</label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-white/5 text-white placeholder-white/80 border border-white/30 focus:outline-none focus:border-white"
                placeholder="Write your message"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 mt-2 bg-white text-neutral-900 rounded-lg hover:bg-neutral-200 transition"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* WhatsApp */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(0,255,0,0.2)] transition duration-300 flex flex-col justify-center items-center text-center">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-white/90">
            <FaWhatsapp /> Chat on WhatsApp
          </h2>
          <p className="mb-6 text-white/70">Instant replies on WhatsApp. Let’s connect!</p>
          <a
            href="https://wa.me/9732760714"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 transition text-white px-6 py-3 rounded-lg inline-flex items-center shadow-md hover:shadow-lg"
          >
            <FaWhatsapp className="mr-2" />
            Message Me
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
