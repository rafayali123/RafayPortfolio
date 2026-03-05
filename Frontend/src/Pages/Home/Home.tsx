import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { FaCode, FaRocket, FaLightbulb, FaBrain } from "react-icons/fa"

const Home = () => {
  const navigate = useNavigate()

  const downloadcv = () => {
      const link = document.createElement("a");
      link.href = "/src/assets/cv.pdf";
      link.download = "Syed Abdul Rafay Ali.pdf";
      link.click();
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-20 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden pt-20">
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

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Greeting Text */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <p className="text-xl text-gray-300">Hey, I'm</p>
        </motion.div>

        {/* Main Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent"
        >
          Syed Abdul Rafay Ali
        </motion.h1>

        {/* Title and Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <p className="text-xl md:text-2xl text-gray-300 mb-4">Full Stack Developer & AI Engineer</p>
          <p className="text-lg md:text-xl text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text flex items-center justify-center gap-3 font-semibold">
            <FaRocket className="w-6 h-6 text-cyan-400 flex-shrink-0" />
            <span>Exploring the Universe of Code & Creativity</span>
            <FaCode className="w-6 h-6 text-purple-400 flex-shrink-0" />
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row gap-6 justify-center mb-12"
        >
          <motion.button
            onClick={() => downloadcv()}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.button>
          <motion.button
            onClick={() => navigate("/contact")}
            className="px-8 py-4 border-2 border-purple-500 text-white font-bold rounded-full hover:bg-purple-500/10 transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.button>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-2xl opacity-75 animate-pulse" />
            <div className="relative w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 rounded-full p-1">
              <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                <img
                  src="/Images/WhatsApp Image 2026-01-22 at 7.25.07 PM.jpeg"
                  alt="Syed Abdul Rafay Ali"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Badge Labels */}
        <div className="absolute top-32 left-10 md:top-40 md:left-20 hidden lg:block">
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
            <FaCode className="w-4 h-4" />
            <span>Full Stack Developer</span>
          </motion.div>
        </div>

        <div className="absolute bottom-32 right-10 md:bottom-40 md:right-20 hidden lg:block">
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
            <FaBrain className="w-4 h-4" />
            <span>AI Engineer</span>
          </motion.div>
        </div>

        <div className="absolute top-1/2 left-12 hidden lg:block -translate-y-1/2">
          <motion.div
            className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2"
            animate={{
              y: [0, -10, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            <FaLightbulb className="w-4 h-4" />
            <span>Problem Solver</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Home
