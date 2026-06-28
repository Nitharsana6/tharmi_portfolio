import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Specialization from "./components/Specialization";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
//import WhatsAppCTA from "./components/WhatsAppCTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Specialization />
      <Projects />
      <Experience />
      <Education />
    
      <Contact />
      <Footer />
    </>
  );
}

export default App;