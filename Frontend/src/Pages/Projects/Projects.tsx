"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { FaExternalLinkAlt, FaGithub, FaArrowRight, FaCar, FaBook, FaCheckCircle, FaChartBar, FaCog, FaTrophy, FaFileAlt, FaDollarSign, FaTint } from "react-icons/fa"
import { SiReact, SiTypescript } from "react-icons/si"

const projects = [
  {
    name: "Car E-Commerce Website",
    description: "Modern MERN stack e-commerce platform with React, Node.js & TailwindCSS.",
    fullDescription:
      "A comprehensive automotive e-commerce solution featuring advanced search filters, real-time inventory management, secure payment processing, and responsive design optimized for mobile and desktop experiences.",
    tech: ["React", "Node.js", "MongoDB", "Express", "TailwindCSS", "Stripe"],
    status: "Completed",
    category: "Full Stack",
    github: "https://github.com/rafayali123/CarzXpress",
    live: "#",
    image: "/Images/Gemini_Generated_Image_tc9vj4tc9vj4tc9v.png",
    icon: FaCar,
  },
  {
    name: "Loan Management System",
    description: "Full-stack loan management platform with HTML/CSS/JS frontend and Java backend with multithreading and unit testing.",
    fullDescription:
      "A comprehensive loan management system featuring a responsive HTML/CSS/JavaScript frontend, and a robust Java Spring Boot backend with multithreading for concurrent loan processing, advanced unit testing for code quality assurance, loan approval workflows, payment tracking, and comprehensive reporting capabilities with secure user authentication.",
    tech: ["HTML", "CSS", "JavaScript", "Java", "Spring Boot", "MONGODB", "Multithreading", "JUnit"],
    status: "Completed",
    category: "Full Stack",
    github: "#",
    live: "#",
    image: "/Images/Gemini_Generated_Image_p3mrtsp3mrtsp3mr.png",
    icon: FaDollarSign,
  },
  {
    name: "Water App",
    description: "Full-stack water management application with mobile (Flutter), web (React), and backend (NestJS).",
    fullDescription:
      "A comprehensive water management solution featuring a Flutter mobile application for on-the-go access, a responsive React website with TailwindCSS for desktop users, and a robust NestJS backend API. Includes real-time water usage tracking, analytics dashboard, consumption reports, and user management with secure authentication.",
    tech: ["Flutter", "React", "TailwindCSS", "NestJS", "TypeScript", "MongoDB" ,"Zustand"],
    status: "In Progress",
    category: "Full Stack",
    github: "https://github.com/wenawa/waterapp",
    live: "#",
    image: "/Images/Gemini_Generated_Image_qln0j4qln0j4qln0.png",
    icon: FaTint,
  },
  {
    name: "Resume Builder",
    description: "Full-stack resume builder with MERN architecture for creating professional resumes.",
    fullDescription:
      "A comprehensive full-stack resume creation platform featuring user authentication, multiple professional templates, real-time preview, PDF/DOC export capabilities, and cloud storage. Built with React frontend for intuitive UI, Node.js/Express backend for API management, and MongoDB for secure user data persistence.",
    tech: ["React", "Node.js", "Express", "MongoDB", "TypeScript", "TailwindCSS", "PDF Export"],
    status: "Completed",
    category: "Full Stack",
    github: "https://github.com/rafayali123/ResumeProject",
    live: "#",
    image: "/Images/Gemini_Generated_Image_hckhpahckhpahckh.png",
    icon: FaFileAlt,
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

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  const categories = ["All", "Full Stack", "Frontend", "Backend"]
  const filteredProjects = selectedCategory === "All" ? projects : projects.filter(p => p.category === selectedCategory)

  return (
    <section className="relative min-h-screen py-20 px-6 md:px-12 bg-black text-white overflow-hidden">
      <AnimatedStars />
      <FloatingParticles />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Featured Projects
          </motion.h2>
          <motion.div
            className="w-24 h-1.5 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
          <motion.p
            className="text-gray-300 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore my latest work showcasing modern technologies and creative solutions
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex justify-center gap-4 mb-12 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600/30"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              {/* Glow Background */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-lg" />

              {/* Card */}
              <motion.div
                className="relative h-full bg-black/80 backdrop-blur-xl rounded-2xl border border-gray-700/50 group-hover:border-purple-500/50 overflow-hidden transition-all duration-300"
                whileHover={{ y: -8 }}
              >
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-purple-900/20 to-pink-900/20">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                  {/* Status & Category Badges */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    <motion.div
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold backdrop-blur-sm ${
                        project.status === "Completed"
                          ? "bg-green-500/20 text-green-300 border border-green-400/50"
                          : "bg-yellow-500/20 text-yellow-300 border border-yellow-400/50"
                      }`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {project.status}
                    </motion.div>
                    <motion.div
                      className="px-3 py-1.5 rounded-lg text-xs font-bold bg-purple-500/20 text-purple-300 border border-purple-400/50 backdrop-blur-sm"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {project.category}
                    </motion.div>
                  </div>

                  {/* Icon */}
                  <motion.div
                    className="absolute bottom-4 left-4 text-white text-3xl bg-gradient-to-br from-purple-600 to-pink-600 p-3 rounded-lg shadow-lg"
                    animate={{ y: hoveredProject === index ? -5 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <project.icon size={28} />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      {project.name}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {hoveredProject === index ? project.fullDescription : project.description}
                    </p>
                  </motion.div>

                  {/* Tech Stack */}
                  <motion.div
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-purple-500/30 to-pink-500/30 text-purple-200 rounded-full border border-purple-400/40 hover:border-purple-400/80 transition-all"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div
                    className="flex gap-3 pt-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <motion.a
                      href={project.live}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300 group/btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Live Demo</span>
                      <FaExternalLinkAlt className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      href={project.github}
                      className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-800/60 hover:bg-gray-700 text-gray-300 hover:text-white font-semibold rounded-lg border border-gray-600/50 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub className="w-4 h-4" />
                    </motion.a>
                  </motion.div>
                </div>

                {/* Glow Effect */}
                <motion.div
                  className="absolute -top-1 -right-1 w-24 h-24 bg-gradient-to-br from-purple-500/40 to-pink-500/40 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.3,
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {[
            { label: "Projects Completed", value: "15+", Icon: FaChartBar },
            { label: "Technologies Used", value: "20+", Icon: FaCog },
            { label: "Years of Experience", value: "2+", Icon: FaTrophy },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="relative group"
              whileHover={{ y: -5 }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur" />
              <motion.div
                className="relative p-6 bg-black/80 backdrop-blur-xl rounded-xl border border-gray-700/50 group-hover:border-purple-500/50 transition-all duration-300 text-center"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: index * 0.5,
                }}
              >
                <div className="flex justify-center mb-3">
                  <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-3 rounded-lg">
                    <stat.Icon size={32} className="text-white" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-gray-400 mb-6">Want to see more of my work?</p>
          <motion.a
            href="https://github.com/rafayali123"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-full transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(168, 85, 247, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Visit My GitHub</span>
            <FaArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
