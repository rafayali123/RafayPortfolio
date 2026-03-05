"use client"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Certifications", path: "/certifications" },
    { name: "Contact", path: "/contact" },
  ]

  const handleNavClick = (path: string) => {
    navigate(path)
    setTimeout(() => window.scrollTo(0, 0), 0)
    setIsOpen(false)
  }

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-0 will-change-transform">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full opacity-30"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              willChange: "transform, opacity",
            }}
            animate={{
              y: ["0%", "100vh"],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: Math.random() * 15 + 10,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md text-white px-3 sm:px-4 md:px-6 py-3 md:py-4 z-50 shadow-lg border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo - Fully Responsive */}
          <button
            onClick={() => handleNavClick("/")}
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 truncate max-w-[60%] sm:max-w-[70%]"
          >
            <motion.span
              className="inline-block"
              whileHover={{
                textShadow: "0 0 20px rgba(168, 85, 247, 0.8)",
                scale: 1.05,
              }}
              transition={{ duration: 0.3 }}
            >
              <span className="font-black tracking-wider">RAFAY ALI</span>
              <span className="text-pink-400 ml-1">.</span>
            </motion.span>
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex gap-6 xl:gap-8">
            {navLinks.map((link, i) => (
              <motion.li key={i} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <button
                  onClick={() => handleNavClick(link.path)}
                  className="relative hover:text-purple-400 transition-colors duration-300 group font-medium text-sm xl:text-base"
                >
                  {link.name}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 group-hover:w-full transition-all duration-300 rounded-full"
                    whileHover={{ boxShadow: "0 0 8px rgba(168, 85, 247, 0.6)" }}
                  />
                </button>
              </motion.li>
            ))}
          </ul>

          {/* Mobile/Tablet Menu Button */}
          <motion.button
            onClick={() => setIsOpen(true)}
            className="lg:hidden text-xl sm:text-2xl text-purple-400 hover:text-pink-400 transition-colors duration-300 relative flex-shrink-0 p-1"
            whileHover={{
              scale: 1.1,
              textShadow: "0 0 10px rgba(168, 85, 247, 0.8)",
            }}
            whileTap={{ scale: 0.9 }}
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(168, 85, 247, 0.4)",
                "0 0 0 8px rgba(168, 85, 247, 0)",
                "0 0 0 0 rgba(168, 85, 247, 0)",
              ],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <FaBars />
          </motion.button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <>
              {/* Blur Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-md z-40"
                onClick={() => setIsOpen(false)}
              />

              {/* Responsive Sidebar */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="fixed top-0 right-0 h-screen bg-gradient-to-br from-purple-900/95 via-black/95 to-blue-900/95 backdrop-blur-md z-50 overflow-y-auto w-full sm:w-96 md:max-w-sm"
              >
                {/* Floating particles - Responsive count */}
                {[...Array(window.innerWidth < 640 ? 10 : 15)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute bg-purple-400 rounded-full opacity-20"
                    style={{
                      width: `${Math.random() * 3 + 1}px`,
                      height: `${Math.random() * 3 + 1}px`,
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -15, 0],
                      opacity: [0.1, 0.4, 0.1],
                    }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: Math.random() * 4 + 3,
                      ease: "easeInOut",
                    }}
                  />
                ))}

                {/* Sidebar Content - Fully Responsive */}
                <div className="h-full flex flex-col justify-between p-6 sm:p-8">
                  {/* Close Button - Responsive */}
                  <div className="flex justify-end mb-6">
                    <motion.button
                      onClick={() => setIsOpen(false)}
                      className="text-2xl text-purple-400 hover:text-pink-400 transition-colors duration-300 p-2 rounded-lg hover:bg-purple-500/10"
                      whileHover={{
                        scale: 1.15,
                        rotate: 90,
                        textShadow: "0 0 15px rgba(168, 85, 247, 0.8)",
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaTimes />
                    </motion.button>
                  </div>

                  {/* Profile Section - Responsive Text */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-center mb-10 px-2"
                  >
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-transparent mb-3 leading-tight">
                      Syed Abdul Rafay Ali
                    </h2>
                    <div className="space-y-2">
                      <p className="text-purple-300 text-sm font-semibold flex items-center justify-center gap-2">
                        <span>💼</span>
                        Full Stack Developer
                      </p>
                      <p className="text-purple-200 text-xs leading-relaxed">
                        Full Stack Developer & AI Engineer
                      </p>
                    </div>
                  </motion.div>

                  {/* Navigation Links - Responsive Spacing */}
                  <div className="flex-1 flex flex-col justify-center space-y-4">
                    {navLinks.map((link, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 + 0.2 }}
                      >
                        <motion.button
                          onClick={() => handleNavClick(link.path)}
                          className="w-full text-lg font-semibold bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-transparent hover:scale-105 transition-all duration-300 py-3 px-4 rounded-xl hover:bg-purple-500/10 border border-transparent hover:border-purple-400/50 min-h-[50px] flex items-center justify-center"
                          whileHover={{
                            textShadow: "0 0 20px rgba(168, 85, 247, 0.6)",
                            boxShadow: "0 0 20px rgba(168, 85, 247, 0.2)",
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {link.name}
                        </motion.button>
                      </motion.div>
                    ))}
                  </div>

                  {/* Footer space - Responsive */}
                  <div className="h-4"></div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </>
  )
}

export default Navbar