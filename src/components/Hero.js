// import React from "react";
// import { motion } from "framer-motion";
// import profile from "../assets/profile.jpg";

// const Hero = () => {
//   return (
//     <section className="section hero">
//       <motion.div
//         className="glass hero-box"
//         initial={{ opacity: 0, y: 80 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         <img src={profile} alt="profile" className="profile" />

//         <h1>Nitharsana Vigneswaran</h1>
//         <h3>Full-Stack Developer (MERN + AI)</h3>

//         <p>
//           I build modern web apps, AI systems and scalable solutions for real-world problems.
//         </p>

//         <div className="btns">
//           <a href="#projects">View Projects</a>
//           <a href="#contact">Hire Me</a>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;

// import React from "react";
// import { motion } from "framer-motion";
// import profile from "../assets/profile.png";
// import "./Hero.css";

// const Hero = () => {
//   return (
//     <section className="hero-ultra">

//       {/* BACKGROUND BLUR */}
//       <div className="bg-blur"></div>

//       {/* LEFT CONTENT */}
//       <motion.div
//         className="hero-text"
//   initial={{ opacity: 0, y: 30 }}
//   animate={{ opacity: 2, y: 0 }}
//   transition={{ duration: 2 }}
//       >

//         {/* BADGE */}
// <span className="hero-badge">
//   AVAILABLE FOR OPPORTUNITIES
// </span>

// {/* TITLE (FIXED STRUCTURE) */}
// <h1 className="hero-title">

//   <span className="title-line">
//     Full-Stack Developer
//   </span>

//   <span className="hero-subline">
//     Building <span className="gradient-text">Modern Web & AI Solutions </span>
//   </span>

// </h1>
//         {/* DESCRIPTION */}
//         <p>
//   I'm <strong>Nitharsana Vigneswaran</strong>, a passionate Software Engineer(Full-Stack) 
//   specializing in MERN stack,
//   C#, AI-powered systems, and modern web applications focused
//   on solving real-world problems.
// </p>

//         {/* TECH TAGS */}
//         <div className="hero-tags">

//           <span>MERN Stack</span>

//           <span>C#</span>

//           {/* <span>React.js</span>

//           <span>Node.js</span>

//           <span>MongoDB</span> */}

//           <span>Sql</span>

//           <span>MySql</span>

//           {/* <span>ASP.NET Core</span> */}

//           <span>AI Systems</span>

//           <span>UI/UX</span>

//         </div>

//         {/* BUTTONS */}
//         <div className="btns">

//           <a href="#projects" className="btn-primary">
//             View my projects
//           </a>

//           <a href="#contact" className="btn-glow">
//           Connect Me
//           </a>

//         </div>

//       </motion.div>

//       {/* RIGHT IMAGE */}
//       <motion.div
//         className="hero-image"
//         initial={{ opacity: 0, scale: 0.7 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1 }}
//       >

//         <div className="image-wrapper">

//           <img src={profile} alt="profile" />

//           {/* FLOATING CARD */}
//           <div className="floating-card">
//             <h4>Full-Stack Developer</h4>
//             <p>Open to Opportunities</p>
//           </div>

//         </div>

//       </motion.div>

//     </section>
//   );
// };

// export default Hero;


// after change mine

import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/Project/covo.png";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-ultra">

      {/* BACKGROUND BLUR */}
      <div className="bg-blur"></div>

      {/* LEFT CONTENT */}
      <motion.div
        className="hero-text"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 2, y: 0 }}
        transition={{ duration: 2 }}
      >

        {/* BADGE */}
        <span className="hero-badge">
          AVAILABLE FOR OPPORTUNITIES
        </span>

        {/* TITLE */}
        <h1 className="hero-title">

          <span className="title-line">
            UI/UX Designer
          </span>
</h1>
          <span className="hero-subline">
            Designing <span className="gradient-text">Beautiful Digital Experiences</span>
          </span>

        

        {/* DESCRIPTION */}
        <p>
          I'm <strong>Tharmika</strong>, a passionate <strong>UI/UX Designer</strong>
          specializing in user-centered design, wireframing, prototyping,
          and crafting intuitive digital experiences for web and mobile applications.
        </p>

        {/* TECH TAGS */}
        <div className="hero-tags">

          <span>Figma</span>

          <span>Wireframing</span>

          <span>Prototyping</span>

          <span>User Research</span>

          <span>UI/UX Design</span>

          <span>Canva</span>

        </div>

        {/* BUTTONS */}
        <div className="btns">

          <a href="#projects" className="btn-primary">
            View My Designs
          </a>

          <a href="#contact" className="btn-glow">
            Connect Me
          </a>

        </div>

      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        className="hero-image"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1.4 }}
        transition={{ duration: 1 }}
      >

        <div className="image-wrapper">

          <img src={profile} alt="profile" />

          {/* FLOATING CARD */}
          <div className="floating-card">
            <h4>UI/UX Designer</h4>
            
          </div>

        </div>

      </motion.div>

    </section>
  );
};

export default Hero;