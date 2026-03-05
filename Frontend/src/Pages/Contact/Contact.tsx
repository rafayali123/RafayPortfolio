"use client"
import { motion } from "framer-motion"
import type React from "react"
import { toast  } from "react-toastify"
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaPaperPlane, FaBolt, FaCheckCircle } from "react-icons/fa"
import { useState } from "react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!formData.name.trim()) {
    toast.error("Username is required");
    return;
  }

  if (!formData.email.trim()) {
    toast.error("Email is required");
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(formData.email)) {
    toast.error("Invalid email format");
    return;
  }

  if (!formData.subject.trim()) {
    toast.error("subject is required");
    return;
  }

    if (!formData.message.trim()) {
    toast.error("message is required");
    return;
  }

  try {
    const response = await fetch("http://localhost:3000/api/contact/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData) 
    });

    const data = await response.json();

    if (response.ok) {
      toast.success(data.message);

      setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
      });

    } else {
      toast.error(data.message);
    }

  } catch (error) {

  }
};


  return (
    <section id="contact" className="relative py-24 px-6 md:px-20 bg-black overflow-hidden">
      {/* Animated Stars Background */}
      <div className="absolute inset-0 will-change-opacity">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              willChange: "opacity",
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none will-change-transform">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: `linear-gradient(45deg, ${
                i % 3 === 0 ? "#8B5CF6" : i % 3 === 1 ? "#EC4899" : "#06B6D4"
              }, transparent)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              willChange: "transform, opacity",
            }}
            animate={{
              y: [-20, -100, -20],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            Get In Touch
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ready to bring your ideas to life? Let's create something amazing together in the digital cosmos.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              {[
                {
                  Icon: FaEnvelope,
                  title: "Email",
                  value: "rafay8924@gmail.com",
                  description: "Drop me a line anytime",
                  color: "from-pink-500 to-pink-600",
                },
                {
                  Icon: FaPhone,
                  title: "Phone",
                  value: "+92 312 1255002",
                  description: "Call for urgent projects",
                  color: "from-blue-500 to-blue-600",
                },
                {
                  Icon: FaMapMarkerAlt,
                  title: "Location",
                  value: "Karachi, Pakistan",
                  description: "Available for remote and onsite work",
                  color: "from-red-500 to-red-600",
                },
                {
                  Icon: FaClock,
                  title: "Response Time",
                  value: "Within 24 hours",
                  description: "Quick turnaround guaranteed",
                  color: "from-orange-500 to-orange-600",
                },
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-lg" />
                  <div className="relative p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl">
                    <div className="flex items-center space-x-4">
                      <motion.div
                        className={`p-3 rounded-lg bg-gradient-to-br ${contact.color} shadow-lg`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <contact.Icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">{contact.title}</h3>
                        <p className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-semibold text-sm">{contact.value}</p>
                        <p className="text-gray-400 text-sm">{contact.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
              <div className="flex space-x-6">
                {[
                  { name: "GitHub", Icon: FaGithub, color: "from-gray-600 to-gray-800", url: "https://github.com/rafayali123" },
                  { name: "LinkedIn", Icon: FaLinkedin, color: "from-blue-600 to-blue-800", url: "https://www.linkedin.com/in/syed-abdul-rafay-ali-8272b12a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative p-4 bg-gradient-to-br ${social.color} rounded-xl hover:scale-110 transition-all duration-300 shadow-lg`}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.Icon className="text-2xl text-white" />
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-3 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {social.name}
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.form
              className="relative p-8 bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-md rounded-3xl border border-purple-500/30 shadow-2xl"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              {/* Form Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl blur-xl opacity-50" />

              <div className="relative space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-white mb-2">Send Message</h3>
                  <p className="text-gray-300">Let's start a conversation</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div whileFocus={{ scale: 1.02 }} className="relative">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      className="w-full p-4 bg-black/50 border border-purple-500/50 rounded-xl focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 outline-none text-white placeholder-gray-400 transition-all duration-300"
                      required
                    />
                  </motion.div>

                  <motion.div whileFocus={{ scale: 1.02 }} className="relative">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      className="w-full p-4 bg-black/50 border border-purple-500/50 rounded-xl focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 outline-none text-white placeholder-gray-400 transition-all duration-300"
                      required
                          onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                    />
                  </motion.div>
                </div>

                <motion.div whileFocus={{ scale: 1.02 }} className="relative">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    className="w-full p-4 bg-black/50 border border-purple-500/50 rounded-xl focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 outline-none text-white placeholder-gray-400 transition-all duration-300"
                    required
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                  />
                </motion.div>

                <motion.div whileFocus={{ scale: 1.02 }} className="relative">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    rows={6}
                    className="w-full p-4 bg-black/50 border border-purple-500/50 rounded-xl focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 outline-none text-white placeholder-gray-400 resize-none transition-all duration-300"
                    required
                      onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  />
                </motion.div>

                <motion.button
                onClick={handleSubmit}
                  className="w-full py-4 px-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Send Message</span>
                  <FaPaperPlane className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.form>
          </motion.div>
        </div>

        {/* Floating Achievement Badges */}
        <div className="absolute top-20 right-10 hidden lg:block">
          <motion.div
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <FaBolt className="w-4 h-4" />
            <span>Quick Response</span>
          </motion.div>
        </div>

        <div className="absolute bottom-32 left-10 hidden lg:block">
          <motion.div
            className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2"
            animate={{
              y: [0, -15, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <FaCheckCircle className="w-4 h-4" />
            <span>Available 24/7</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
