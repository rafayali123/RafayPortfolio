"use client"

import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      {
        name: "React",
        logo: "/Images/images.png",
        level: 95,
        color: "from-blue-400 to-cyan-400",
        description: "Advanced component architecture & hooks",
      },
      {
        name: "TypeScript",
        logo: "/Images/free-typescript-icon-svg-png-download-2945272.webp",
        level: 90,
        color: "from-blue-600 to-blue-400",
        description: "Type-safe development & advanced patterns",
      },
      {
        name: "Next.js",
        logo: "/Images/Next.js.webp",
        level: 85,
        color: "from-gray-400 to-white",
        description: "Full-stack React framework & SSR",
      },
      {
        name: "Tailwind CSS",
        logo: "/Images/Tailwind logo.png",
        level: 95,
        color: "from-cyan-400 to-teal-400",
        description: "Utility-first CSS & responsive design",
      },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      {
        name: "Node.js",
        logo: "/Images/Node js.jpg",
        level: 80,
        color: "from-green-500 to-emerald-400",
        description: "Server-side JavaScript & APIs",
      },
      {
        name: "MongoDB",
        logo: "/Images/MongoDB log.png",
        level: 75,
        color: "from-green-600 to-green-400",
        description: "NoSQL database design & optimization",
      },
      {
        name: "JavaScript",
        logo: "/Images/5968292.png",
        level: 85,
        color: "from-yellow-400 to-orange-400",
        description: "ES6+ features & async programming",
      },
    ],
  },
]

const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: `linear-gradient(45deg, ${
              i % 3 === 0 ? "#8B5CF6" : i % 3 === 1 ? "#EC4899" : "#06B6D4"
            }, transparent)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
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
  )
}

const AnimatedStars = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(100)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
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
  )
}

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 px-6 md:px-20 bg-black text-white overflow-hidden">
      <AnimatedStars />
      <FloatingParticles />

      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-blue-900/20" />

      <div className="relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            Technical Arsenal
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Mastering the tools that power modern web development
          </motion.p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="space-y-8"
            >
              <motion.h3
                className="text-3xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {category.title}
              </motion.h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -100, rotateY: -15 }}
                    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100,
                    }}
                    whileHover={{
                      scale: 1.02,
                      rotateY: 5,
                      z: 50,
                    }}
                    className="group relative p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300"
                    style={{
                      boxShadow: "0 8px 32px rgba(139, 92, 246, 0.1)",
                    }}
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-4">
                        <motion.div className="relative" whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 blur-md opacity-50" />
                          <img
                            src={skill.logo || "/placeholder.svg"}
                            alt={skill.name}
                            className="relative w-12 h-12 rounded-full object-cover border-2 border-purple-400/30"
                          />
                        </motion.div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                            {skill.name}
                          </h4>
                          <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                            {skill.description}
                          </p>
                        </div>
                        <motion.span
                          className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>

                      <div className="relative">
                        <div className="w-full h-3 bg-gray-700/50 rounded-full overflow-hidden backdrop-blur-sm">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1.5,
                              ease: "easeInOut",
                              delay: index * 0.1 + 0.3,
                            }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full" />
                            <motion.div
                              className="absolute right-0 top-0 w-2 h-full bg-white/60 rounded-full"
                              animate={{
                                opacity: [0.6, 1, 0.6],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Number.POSITIVE_INFINITY,
                              }}
                            />
                          </motion.div>
                        </div>

                        <motion.div
                          className="absolute -top-8 right-0 px-2 py-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-xs font-bold text-white shadow-lg"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          animate={{
                            y: [-2, 2, -2],
                          }}
                          transition={{
                            opacity: { duration: 0.5, delay: index * 0.1 + 1 },
                            y: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                          }}
                        >
                          Expert
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex justify-center mt-16 space-x-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {["2+ Years", "10+ Projects", "∞ Learning"].map((badge, index) => (
            <motion.div
              key={index}
              className="px-6 py-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-400/30 rounded-full text-purple-300 font-semibold"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 20px rgba(139, 92, 246, 0.4)",
              }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                delay: index * 0.5,
              }}
            >
              {badge}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
