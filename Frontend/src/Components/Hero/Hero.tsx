"use client"

import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden bg-black">
      {/* Enhanced Stars with more variety */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.8 + 0.2,
            }}
            animate={{
              y: ["0%", "100vh"],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
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

      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute bg-purple-400 rounded-full opacity-20"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: Math.random() * 4 + 3,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Enhanced Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/60 via-black to-blue-900/60"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center px-6 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-transparent text-balance leading-tight"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          whileHover={{
            scale: 1.02,
            textShadow: "0 0 30px rgba(168, 85, 247, 0.5)",
          }}
        >
          <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-300 mb-2">
            Hey, I'm
          </span>
          <span className="font-black tracking-tight">Syed Abdul Rafay Ali</span>
        </motion.h1>

        <motion.p
          className="mt-6 text-xl md:text-3xl text-gray-300 text-balance max-w-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <span className="block text-lg md:text-xl text-gray-400 mb-2">Full Stack Developer & Ai Engineer</span>
          Exploring the{" "}
          <span className="font-semibold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Universe of Code & Creativity
          </span>
          <motion.span
            className="inline-block ml-2"
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            🌌
          </motion.span>
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.a
            href="#projects"
            className="px-10 py-4 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white font-bold shadow-2xl hover:shadow-purple-500/40 transition-all duration-300 text-lg relative overflow-hidden"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(168, 85, 247, 0.8)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View Projects</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
          <motion.a
            href="#contact"
            className="px-10 py-4 rounded-full border-2 border-purple-400 text-purple-400 font-bold hover:bg-purple-400 hover:text-black transition-all duration-300 text-lg backdrop-blur-sm relative overflow-hidden"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(168, 85, 247, 0.6)",
              borderColor: "rgba(236, 72, 153, 1)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>

        <motion.div
          className="mt-16 relative w-56 h-56 md:w-72 md:h-72"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-purple-400 shadow-2xl">
            <img
              src="/Images/WhatsApp Image 2025-08-28 at 11.38.10 PM.jpeg"
              alt="Cosmic Avatar"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 rounded-full shadow-[0_0_100px_rgba(168,85,247,0.8)] animate-pulse"></div>
          </div>

          {/* Enhanced orbital rings with different speeds and colors */}
          <motion.div
            className="absolute inset-0 border-2 border-pink-400/40 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            style={{ transform: "scale(1.15)" }}
          />
          <motion.div
            className="absolute inset-0 border-2 border-blue-400/30 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            style={{ transform: "scale(1.3)" }}
          />
          <motion.div
            className="absolute inset-0 border border-purple-400/20 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            style={{ transform: "scale(1.45)" }}
          />
        </motion.div>

        <div className="absolute top-20 left-10 md:left-20">
          <motion.div
            className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 rounded-full px-4 py-2 text-sm text-purple-300"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            ✨ Full Stack Developer
          </motion.div>
        </div>

        <div className="absolute top-32 right-10 md:right-20">
          <motion.div
            className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 text-sm text-blue-300"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
          >
            🚀 Ai Engineer
          </motion.div>
        </div>

        <div className="absolute bottom-32 left-16 md:left-32">
          <motion.div
            className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-sm border border-pink-400/30 rounded-full px-4 py-2 text-sm text-pink-300"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
          >
            💡 Problem Solver
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
