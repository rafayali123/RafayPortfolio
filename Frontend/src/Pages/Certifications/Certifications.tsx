"use client"
import { motion } from "framer-motion"
import { useState } from "react"

const certifications = [
  {
    name: "React Development",
    issuer: "Coursera",
    link: "#",
    date: "2024",
    skills: ["React", "JSX", "Hooks", "State Management"],
    level: "Advanced",
    hours: "40 hours",
    verified: true,
    description: "Comprehensive React development course covering modern patterns and best practices",
  },
  {
    name: "Full Stack MERN",
    issuer: "Udemy",
    link: "#",
    date: "2023",
    skills: ["MongoDB", "Express", "React", "Node.js"],
    level: "Expert",
    hours: "60 hours",
    verified: true,
    description: "Complete MERN stack development with real-world project implementations",
  },
  {
    name: "Certificate on Crash Course in Python",
    issuer: "Coursera",
    link: "#",
    date: "2023",
    skills: ["Python", "Data Structures", "OOP", "Algorithms"],
    level: "Intermediate",
    hours: "30 hours",
    verified: true,
    description: "Intensive Python programming course with hands-on coding exercises",
  },
  {
    name: "JavaScript ES6+ Mastery",
    issuer: "freeCodeCamp",
    link: "#",
    date: "2024",
    skills: ["ES6+", "Async/Await", "Modules", "Classes"],
    level: "Advanced",
    hours: "35 hours",
    verified: true,
    description: "Modern JavaScript features and advanced programming concepts",
  },
  {
    name: "AI Essentials",
    issuer: "Coursera",
    link: "#",
    date: "2024",
    skills: ["Machine Learning", "Neural Networks", "AI Fundamentals", "Deep Learning"],
    level: "Advanced",
    hours: "50 hours",
    verified: true,
 
    description: "Comprehensive AI essentials course covering machine learning fundamentals and practical applications",
  },
  {
    name: "UI/UX Design Principles",
    issuer: "Google",
    link: "#",
    date: "2023",
    skills: ["Figma", "Design Systems", "Prototyping", "User Research"],
    level: "Advanced",
    hours: "50 hours",
    verified: true,
    description: "User experience design methodology and interface design best practices",
  },
]

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

const Certifications = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="certifications" className="relative py-24 px-6 md:px-20 bg-black text-white overflow-hidden">
      <AnimatedStars />
      <FloatingParticles />

      <div className="relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            Certifications
          </motion.h2>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.p
            className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            Professional certifications and achievements that validate my expertise across various technologies
          </motion.p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 rounded-2xl blur-xl"
                animate={{
                  opacity: hoveredIndex === index ? 0.8 : 0.3,
                  scale: hoveredIndex === index ? 1.05 : 1,
                }}
                transition={{ duration: 0.3 }}
              />

              <motion.a
                href={cert.link}
                className="relative block bg-black/60 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 h-full"
                whileHover={{
                  scale: 1.02,
                  rotateY: 5,
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {cert.verified && (
                  <motion.div
                    className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.div>
                )}

                <div
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
                    cert.level === "Expert"
                      ? "bg-gradient-to-r from-purple-500 to-pink-500"
                      : cert.level === "Advanced"
                        ? "bg-gradient-to-r from-blue-500 to-cyan-500"
                        : "bg-gradient-to-r from-green-500 to-emerald-500"
                  }`}
                >
                  {cert.level}
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {cert.name}
                </h3>

                <div className="flex items-center gap-2 mb-3">
                  <p className="text-purple-400 font-semibold">{cert.issuer}</p>
                  <span className="text-gray-500">•</span>
                  <p className="text-gray-400 text-sm">{cert.date}</p>
                </div>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{cert.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="px-2 py-1 bg-white/10 rounded-lg text-xs text-cyan-300 border border-cyan-500/30"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {cert.hours}
                  </span>
                  <motion.span className="text-purple-400 font-semibold" whileHover={{ scale: 1.1 }}>
                    View Certificate →
                  </motion.span>
                </div>

                <motion.div
                  className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center"
                  animate={{
                    y: [-2, 2, -2],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </motion.div>
              </motion.a>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { label: "Certifications", value: "6+" },
              { label: "Study Hours", value: "260+" },
              { label: "Skills Mastered", value: "20+" },
              { label: "Verified", value: "100%" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
