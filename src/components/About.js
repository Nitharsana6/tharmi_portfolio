// import React from "react";
// import { motion } from "framer-motion";

// const About = () => {
//   return (
//     <section id="about" className="section">
//       <motion.div
//         className="glass"
//         initial={{ opacity: 0, x: -80 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1 }}
//       >
//         <h2>About Me</h2>
//         <p>
//           I am a passionate Full-Stack Developer with expertise in MERN stack,
//           C#, and AI systems. I build intelligent applications including ATS
//           resume analysis and chatbot systems using NLP and machine learning.
//         </p>
//       </motion.div>
//     </section>
//   );
// };

// export default About;


// import React from "react";
// import "./About.css";
// import { motion } from "framer-motion";

// import {
//   FaReact,
//   FaNodeJs,
//   FaBrain,
//   FaGithub,
//   FaMicrosoft,
//   FaAws,
//   FaDatabase
// } from "react-icons/fa";

// import {
//   SiMongodb,
//   SiExpress,
//   SiPostman,
//   SiHtml5,
//   SiTailwindcss,
//   SiFlutter
// } from "react-icons/si";


// const About = () => {
//   return (
//     <section id="about" className="about-section">

//       {/* BACKGROUND BLUR */}
//       <div className="about-blur"></div>

//       <motion.div
//         className="about-container"
//         initial={{ opacity: 0, y: 80 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         viewport={{ once: true }}
//       >

//         {/* LEFT CONTENT */}
//         <div className="about-left">

//           <span className="about-badge">
//             ABOUT ME
//           </span>

//           <h2 className="about-heading">
//   Transforming Ideas Into <br />
//   <span className="about-highlight">
//     Scalable Digital Experiences
//   </span>
// </h2>

//           <p className="about-description">
//             I’m <strong>Nitharsana</strong>,
//             a passionate <strong>Software Engineer (Full-Stack)</strong>
//             focused on building scalable web applications,
//             intelligent systems, and modern digital experiences.
//           </p>

//           <p className="about-description">
//             I specialize in frontend development,
//             backend APIs, and AI-powered systems
//             using clean and scalable architecture.
//           </p>

//           <p className="about-description">
//             My main project <strong>ResumeLinker</strong>
//             is an AI-powered ATS Resume Analysis platform
//             that matches users with relevant job opportunities.
//           </p>

//           {/* TECH STACK */}
//           <div className="tech-stack">

//             <div className="tech-item">
//               <FaReact />
//               <span>React</span>
//             </div>

//             <div className="tech-item">
//               <SiHtml5 />
//               <span>HTML</span>
//             </div>

//             <div className="tech-item">
//               <SiTailwindcss />
//               <span>Tailwind CSS</span>
//             </div>

//             <div className="tech-item">
//               <FaNodeJs />
//               <span>Node.js</span>
//             </div>

//           <div className="tech-item">
//               <SiExpress />
//               <span>Express.js</span>
//             </div>
            
//             <div className="tech-item">
//               <SiMongodb />
//               <span>MongoDB</span>
//             </div>

//             <div className="tech-item">
//               <FaDatabase />
//               <span>SQL</span>
//             </div>

//             <div className="tech-item">
//               <FaMicrosoft/>
//               <span>ASP.NET</span>
//             </div>

//             <div className="tech-item">
//   <SiFlutter />
//   <span>Flutter</span>
// </div>

//             <div className="tech-item">
//               <FaGithub />
//               <span>GitHub</span>
//             </div>

//             <div className="tech-item">
//               <SiPostman />
//               <span>Postman</span>
//             </div>

//             <div className="tech-item">
//               < FaAws />
//               <span>AWS</span>
//             </div>

//           </div>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="about-right">

//           <motion.div className="about-card" whileHover={{ y: -10 }}>
//             <div className="card-icon">
//               <FaReact />
//             </div>
//             <h3>Frontend Development</h3>
//             <p>
//               Building responsive, modern UI using React.js
//               with animations and component-based architecture.
//             </p>
//           </motion.div>

//           <motion.div className="about-card" whileHover={{ y: -10 }}>
//             <div className="card-icon">
//               <FaNodeJs />
//             </div>
//             <h3>Backend Development</h3>
//             <p>
//               Creating scalable APIs, authentication systems
//               and backend services using Node.js & ASP.NET Core.
//             </p>
//           </motion.div>

//           <motion.div className="about-card" whileHover={{ y: -10 }}>
//             <div className="card-icon">
//               <FaBrain />
//             </div>
//             <h3>AI & Smart Systems</h3>
//             <p>
//               Developing ATS resume analysis,
//               chatbot systems and intelligent recommendations.
//             </p>
//           </motion.div>

//         </div>

//       </motion.div>

//     </section>
//   );
// };

// export default About;


// After change mine

import React from "react";
import "./About.css";
import { motion } from "framer-motion";

import {
  FaMicrosoft,
  FaPalette,
  FaCode,
  FaCss3Alt
} from "react-icons/fa";

import {
  SiHtml5,
  SiFigma
} from "react-icons/si";

const About = () => {
  return (
    <section id="about" className="about-section">

      <div className="about-blur"></div>

      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >

        <div className="about-left">

          <span className="about-badge">
            ABOUT ME
          </span>

          <h2 className="about-heading">
            Transforming Ideas Into <br />
            <span className="about-highlight">
              Meaningful User Experiences
            </span>
          </h2>

          <p className="about-description">
            I’m <strong>Tharmika</strong>,
            a passionate <strong>UI/UX Designer</strong>
            focused on creating modern, user-friendly,
            and visually engaging digital experiences.
          </p>

          <p className="about-description">
            I specialize in interface design, wireframing,
            prototyping, frontend design, and creating
            intuitive digital products.
          </p>

          <p className="about-description">
            My goal is to design accessible, beautiful,
            and user-centered solutions that solve real problems.
          </p>

          <div className="tech-stack">

            <div className="tech-item">
              <SiFigma />
              <span>Figma</span>
            </div>

<div className="tech-item">
              <FaPalette />
              <span>Canva</span>
            </div>

            <div className="tech-item">
              <FaPalette />
              <span>Graphic Design</span>
            </div>
            
            <div className="tech-item">
              <SiHtml5 />
              <span>HTML</span>
            </div>

            <div className="tech-item">
              <FaCss3Alt />
              <span>CSS</span>
            </div>

            <div className="tech-item">
              <FaMicrosoft />
              <span>C#</span>
            </div>

            

          </div>
        </div>

        <div className="about-right">

          <motion.div className="about-card" whileHover={{ y: -10 }}>
            <div className="card-icon">
              <SiFigma />
            </div>
            <h3>UI Design</h3>
            <p>
              Creating visually appealing interfaces
              with modern layouts, colors, and typography.
            </p>
          </motion.div>

          <motion.div className="about-card" whileHover={{ y: -10 }}>
            <div className="card-icon">
              <FaCode />
            </div>
            <h3>Frontend Development</h3>
            <p>
              Building responsive interfaces using
              HTML, CSS, and modern frontend technologies.
            </p>
          </motion.div>

          <motion.div className="about-card" whileHover={{ y: -10 }}>
            <div className="card-icon">
              <FaPalette />
            </div>
            <h3>Prototype & Branding</h3>
            <p>
              Designing interactive prototypes and
              visual assets for digital products.
            </p>
          </motion.div>

        </div>

      </motion.div>

    </section>
  );
};

export default About;