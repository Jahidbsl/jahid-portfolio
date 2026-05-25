"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/jahidhasan-webdev",
      icon: <FaLinkedin />,
    },
    {
      name: "GitHub",
      href: "https://github.com/Jahidbsl",
      icon: <FaGithub />,
    },
    {
      name: "Twitter",
      href: "https://x.com/your-username", // Replace with your link
      icon: <FaXTwitter />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/jahidbsl25",
      icon: <FaInstagram />,
    },
  ];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! I'll get back to you soon. ✨");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black tracking-tight text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Have a project in mind? I'm always open to discussing new
            opportunities and creative ideas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-8">
                Get In Touch
              </h3>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">EMAIL</p>
                    <Link
                      href="jahidhasanbls46@gmail.com"
                      className="text-white hover:text-pink-400 transition text-lg"
                    >
                      jahidhasanbls46@gmail.com
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">PHONE</p>
                    <a
                      href="tel:+8801516569041"
                      className="text-white hover:text-pink-400 transition text-lg"
                    >
                      +880 1516569041
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">LOCATION</p>
                    <p className="text-white text-lg">Barishal, Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-white/60 text-sm mb-4">CONNECT WITH ME</p>
              <div className="flex gap-6">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.name}
                    className="text-white/60 hover:text-white transition-all duration-300 text-2xl hover:scale-110"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-zinc-900/80 border border-white/10 rounded-3xl p-8 md:p-10"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="bg-black/50 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/40 focus:border-pink-500 outline-none transition"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email"
                  className="bg-black/50 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/40 focus:border-pink-500 outline-none transition"
                />
              </div>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Subject"
                className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/40 focus:border-pink-500 outline-none transition"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Your Message..."
                className="w-full bg-black/50 border border-white/10 rounded-3xl px-6 py-5 text-white placeholder:text-white/40 focus:border-pink-500 outline-none transition resize-y"
              />

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white font-semibold py-5 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300"
              >
                Send Message
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
