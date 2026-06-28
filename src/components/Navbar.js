// import React from "react";
// import "./Navbar.css";
// import { FaCode } from "react-icons/fa";

// const Navbar = () => {
//   return (
//     <nav className="navbar">

//       {/* LOGO */}
//       <div className="logo-section">

//         <div className="logo-icon">
//           <FaCode />
//         </div>

//         <h2 className="logo-text">
//           Nitharsana
//         </h2>

//       </div>

//       {/* NAV LINKS */}
//       <div className="nav-links">

//         <a href="#about">About</a>

//         <a href="#skills">Skills</a>

//         <a href="#projects">Projects</a>

//         <a href="#contact">Contact</a>

//       </div>

//     </nav>
//   );
// };

// export default Navbar;

// import React from "react";
// import "./Navbar.css";

// import {
//   FaCode,
//   FaGithub,
//   FaLinkedin
// } from "react-icons/fa";

// const Navbar = () => {
//   return (

//     <nav className="navbar">

//       {/* LOGO */}
//       <div className="logo-section">

//         <div className="logo-icon">
//           <FaCode />
//         </div>

//         <h2 className="logo-text">
//           Nitharsana
//         </h2>

//       </div>

//       {/* CENTER LINKS */}
//       <div className="nav-links">

//         <a href="#about">About</a>

//         <a href="#projects">Projects</a>

//         <a href="#contact">Contact</a>

//       </div>

//       {/* RIGHT SOCIAL ICONS */}
//       <div className="social-icons">

        

//         <a
//           href="https://linkedin.com/in/nitharshana/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <FaLinkedin />
//         </a>
//         <a
//           href="https://github.com/YOUR_GITHUB_USERNAME"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <FaGithub />
//         </a>

//       </div>

//     </nav>
//   );
// };

// export default Navbar;

// import React from "react";
// import "./Navbar.css";

// import {
//   FaCode,
//   FaGithub,
//   FaLinkedin,
//   FaTimes,
//   FaBars
// } from "react-icons/fa";

// const Navbar = () => {

//   // Smooth scroll to top
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth"
//     });
//   };

//   return (
//     <nav className="navbar">

//       {/* LOGO (SCROLL TO TOP) */}
//       <div className="logo-section" onClick={scrollToTop}>
//         <div className="logo-icon">
//           <FaCode />
//         </div>

//         <h2 className="logo-text">
//           Nitharsana
//         </h2>
//       </div>

//       {/* NAV LINKS */}
//       <div className="nav-links">

//         <a href="#about">About</a>

//         <a href="#projects">Projects</a>

//         <a
//   href="https://wa.me/94742002621"
//   target="_blank"
//   rel="noopener noreferrer"
//   className="nav-contact-btn"
// >
//   Contact
// </a>

//       </div>

//       {/* SOCIAL ICONS */}
//       <div className="social-icons">

//         <a
//           href="https://linkedin.com/in/nitharshana/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <FaLinkedin />
//         </a>

//         <a
//           href="https://github.com/Nitharsana6"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <FaGithub />
//         </a>
//  {/* HAMBURGER */}
//         <div
//           className="hamburger"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <FaTimes /> : <FaBars />}
//         </div>
//       </div>

//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import "./Navbar.css";

// import {
//   FaCode,
//   // FaGithub,
//   // FaLinkedin,
//   FaTimes,
//   FaBars
// } from "react-icons/fa";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//     setMenuOpen(false);
//   };

//   const closeMenu = () => setMenuOpen(false);

//   return (
//     <nav className="navbar">

//       {/* LEFT - LOGO */}
//       <div className="nav-left" onClick={scrollToTop}>
//         <div className="logo-section">
//           <FaCode className="logo-icon" />
//           <h2 className="logo-text">Tharmika</h2>
//         </div>
//       </div>

//       {/* CENTER - NAV LINKS */}
//       <div className={`nav-center ${menuOpen ? "active" : ""}`}>

//         <a href="#about" onClick={closeMenu}>About</a>
//         <a href="#projects" onClick={closeMenu}>Projects</a>
//         <a href="#experience" onClick={closeMenu}>Experience</a>

//       </div>

//       {/* RIGHT - CONTACT + SOCIAL + MENU */}
//       <div className="nav-right">

//         {/* CONTACT BUTTON */}
//         <a
//           href="https://wa.me/94742002621"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="nav-contact-btn"
//           onClick={closeMenu}
//         >
//           Contact
//         </a>

       
//         {/* HAMBURGER */}
//         <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
//           {menuOpen ? <FaTimes /> : <FaBars />}
//         </div>

//       </div>

//     </nav>
//   );
// };

// export default Navbar;

// after my change

import React, { useState } from "react";
import "./Navbar.css";

import {
  FaFigma,
  FaTimes,
  FaBars
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">

      {/* LEFT - LOGO (SCROLL TO TOP) */}
      <div className="nav-left" onClick={scrollToTop}>
        <div className="logo-section">
          <FaFigma className="logo-icon" />
          <h2 className="logo-text">Tharmika</h2>
        </div>
      </div>

      {/* CENTER - NAV LINKS */}
      <div className={`nav-center ${menuOpen ? "active" : ""}`}>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#experience" onClick={closeMenu}>Experience</a>
      </div>

      {/* RIGHT - CONTACT + MENU */}
      <div className="nav-right">

        <a
          href="#contact"
          className="nav-contact-btn"
          onClick={closeMenu}
        >
          Contact
        </a>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>

    </nav>
  );
};

export default Navbar;