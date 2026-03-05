"use client"
import { motion } from "framer-motion"
import { Link, useLocation } from "react-router-dom"
import { useEffect } from "react"
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaHeart,
  FaRocket,
  FaCheckCircle,
} from "react-icons/fa"

const Footer = () => {
  const location = useLocation()

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, [location.pathname])
  // Animated stars
  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 3 + 2,
  }))

  // Floating particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 4 + 3,
  }))

  // Real working social links - Your actual profiles
  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/rafayali123",
      label: "GitHub",
      color: "hover:text-purple-400",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/syed-abdul-rafay-ali-8272b12a8/",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/rafayyyy_12/",
      label: "Instagram",
      color: "hover:text-pink-400",
    },
  ]

  // Navigation links - These will route to different pages
  const quickLinks = [
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Certifications", path: "/certifications" },
    { name: "Contact", path: "/contact" },
  ]

  // Contact information with working links
  const contactInfo = [
    {
      icon: FaEnvelope,
      text: "rafay8924@gmail.com",
      href: "mailto:rafay8924@gmail.com",
    },
    {
      icon: FaPhone,
      text: "+92 312 1255002",
      href: "tel:+923121255002",
    },
    {
      icon: FaMapMarkerAlt,
      text: "Karachi, Pakistan",
      href: "https://maps.google.com/?q=Karachi,Pakistan",
    },
  ]

  return (
    <footer className="relative bg-black border-t border-purple-500/20 overflow-hidden">
      {/* Animated Stars Background */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute bg-white rounded-full opacity-70"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: star.duration,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <motion.h3
              className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              Rafay Ali
            </motion.h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Software Engineering student specializing in AI-integrated web applications built on the MERN stack.
            </p>
            <div className="flex items-center space-x-2 text-purple-400 text-sm">
              <FaRocket />
              <span>Building the future, one line of code at a time</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <motion.li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center group text-sm cursor-pointer"
                  >
                    <motion.span className="w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 mr-3 group-hover:w-4 transition-all duration-300" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Get In Touch</h4>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.li key={index}>
                  <a
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center group text-sm"
                  >
                    <info.icon className="mr-3 text-purple-400 group-hover:scale-110 transition-transform duration-300 flex-shrink-0 w-5 h-5" />
                    <span>{info.text}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-1"
          >
            <h4 className="text-lg font-semibold text-white mb-6">Follow Me</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} transition-all duration-300 p-3 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-400/25`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  title={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 mt-8"
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
            <p className="text-gray-400 text-sm flex items-center justify-center md:justify-start">
              &copy; 2025 Rafay Ali. Made with{" "}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                className="mx-1"
              >
                <FaHeart className="text-red-400" />
              </motion.span>
              and lots of coffee
            </p>
            <div className="flex items-center justify-center md:justify-end gap-4 text-xs md:text-sm text-gray-500">
              <a href="#privacy" className="hover:text-purple-400 transition-colors">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="#terms" className="hover:text-purple-400 transition-colors">
                Terms of Service
              </a>
              <span>•</span>
              <a href="#sitemap" className="hover:text-purple-400 transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Badge */}
      <motion.div
        className="absolute top-8 right-8 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 rounded-full px-4 py-2 text-xs text-purple-300 flex items-center gap-2"
        animate={{
          y: [-5, 5, -5],
          rotate: [-1, 1, -1],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <FaCheckCircle className="w-4 h-4" />
        Available for hire
      </motion.div>
    </footer>
  )
}

export default Footer
