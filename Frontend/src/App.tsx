import { Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import Skills from "./Pages/Skills/Skills"
import Projects from "./Pages/Projects/Projects"
import Certifications from "./Pages/Certifications/Certifications"
import Contact from "./Pages/Contact/Contact"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  )
}
