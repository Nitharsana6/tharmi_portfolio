// import React from "react";
// import "./Footer.css";

// import {
//   FaGithub,
//   FaLinkedinIn,
//   FaWhatsapp,
//   FaArrowUp
// } from "react-icons/fa";

// const Footer = () => {

//   const scrollTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth"
//     });
//   };

//   return (
//     <footer className="footer">

//       {/* BACKGROUND GLOW */}
//       <div className="footer-glow footer-glow-1"></div>
//       <div className="footer-glow footer-glow-2"></div>

//       <div className="footer-container">

//         {/* LEFT */}
//         <div className="footer-brand">

//           <span className="footer-tag">
//             AVAILABLE FOR WORK
//           </span>

//           <h2>
//             Nitharsana<span>.</span>
//           </h2>

//           <p>
//             Full-Stack Developer focused on building
//             modern web applications, scalable software
//             systems & AI-powered digital experiences.
//           </p>

//         </div>

//         {/* CENTER */}
//         <div className="footer-links">

//           <h3>Quick Links</h3>

//           <a
//   href="/"
//   onClick={(e) => {
//     e.preventDefault();

//     window.scrollTo({
//       top: 0,
//       behavior: "smooth"
//     });
//   }}
// >
//   Home
// </a>
//           <a href="#about">About</a>
//           <a href="#projects">Projects</a>
//           <a href="#experience">Experience</a>
//           <a href="#education">Education</a>
//           <a href="#contact">Contact</a>

//         </div>

//         {/* RIGHT */}
//         <div className="footer-contact">

//           <h3>Connect</h3>

//           <p>
//             📧 nishanitharshana6@gmail.com
//           </p>

//           <p>
//             📍 Kanthasamy Road,Meesalai West, Jaffna.
//           </p>

//           <div className="footer-socials">

//             <a
//               href="https://github.com/nitharsana6"
//               target="_blank"
//               rel="noreferrer"
//             >
//               <FaGithub />
//             </a>

//             <a
//               href="https://linkedin.com"
//               target="_blank"
//               rel="noreferrer"
//             >
//               <FaLinkedinIn />
//             </a>

//             <a
//               href="https://wa.me/94742002621"
//               target="_blank"
//               rel="noreferrer"
//             >
//               <FaWhatsapp />
//             </a>

//           </div>

//         </div>

//       </div>

//       {/* BOTTOM */}
//       <div className="footer-bottom">

//         <p>
//           © 2026  Nitharsana — Designed & Built
//           with React.js
//         </p>

//         <button
//           className="scroll-top"
//           onClick={scrollTop}
//         >
//           <FaArrowUp />
//         </button>

//       </div>

//     </footer>
//   );
// };

// export default Footer;

// after change

import React from "react";
import "./Footer.css";

import {
  
  FaArrowUp
} from "react-icons/fa";

import { SiFigma } from "react-icons/si";

const Footer = () => {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="footer">

      {/* BACKGROUND GLOW */}
      <div className="footer-glow footer-glow-1"></div>
      <div className="footer-glow footer-glow-2"></div>

      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-brand">

          <span className="footer-tag">
            AVAILABLE FOR WORK
          </span>

          <h2>
            Tharmika<span>.</span>
          </h2>

          <p>
            UI/UX Designer focused on creating
            user-centered digital experiences,
            modern interfaces, and creative design solutions.
          </p>

        </div>

        {/* CENTER */}
        <div className="footer-links">

          <h3>Quick Links</h3>

          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();

              window.scrollTo({
                top: 0,
                behavior: "smooth"
              });
            }}
          >
            Home
          </a>

          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>

        </div>

        {/* RIGHT */}
        <div className="footer-contact">

          <h3>Connect</h3>

          <p>
            📧 mujalkutty11@gmail.com
          </p>

          <p>
            📍 Sanathy Kovil Road, Thondaimanaru
          </p>

          <div className="footer-socials">

            <a
              href="https://www.figma.com/design/FvpbHvt290zMBTwNSaGcfS/Untitled?t=WEeTxyIFd4iii1KZ-1"
              target="_blank"
              rel="noreferrer"
            >
              <SiFigma />
            </a>

            

          </div>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">

        <p>
          © 2026 Tharmika — Designed & Built
          with React.js
        </p>

        <button
          className="scroll-top"
          onClick={scrollTop}
        >
          <FaArrowUp />
        </button>

      </div>

    </footer>
  );
};

export default Footer;