// import React from "react";
// import { motion } from "framer-motion";
// import {
//   FaCode,
//   FaLaptopCode,
//   FaTools,
//   FaUsers
// } from "react-icons/fa";

// import "./Experience.css";

// const experiences = [
//   {
//   title: "Freelance Full stack Developer",
//   company: "Self-Employed (2026)",
//   icon: <FaCode />,
//   desc: "Designed and developed modern responsive websites, portfolio platforms, and full-stack web applications for clients using MERN Stack technologies. Worked on UI/UX improvements, frontend development, backend integration, database management, and performance optimization to deliver scalable digital solutions.",
//   skills: [
//     "React.js",
//     "Node.js",
//     "MongoDB",
//     "Express.js",
//     "C#",
//     "Sql",
//     "UI/UX Design",
//     "Responsive Design"
//   ]
// },
//   {
//     title: "Full Stack Web Development Program",
//     company: "UKI (2024)",
//     icon: <FaLaptopCode />,
//     desc: "Built modern MERN stack web applications with responsive frontend development, backend APIs, database integration, authentication systems, and real-world project development.",
//     skills: ["React.js", "Node.js", "Express.js", "MongoDB", "REST API"]
//   },
//   {
//   title: "Volunteer",
//   company: "Yarl IT Hub",
//   icon: <FaUsers />,
//   desc: "Contributed as a volunteer in technology workshops, innovation festivals, and community-driven IT events by supporting event coordination, technical activities, participant engagement, and digital innovation initiatives.",
//   skills: [
//     "Event Coordination",
//     "Team Collaboration",
//     "Technical Support",
//     "Innovation Events",
//     "Communication"
//   ]
// },

//   {
//     title: "IT Technician Intern",
//     company: "Northern Province Council (2019)",
//     icon: <FaTools />,
//     desc: "Managed and organized office data using MS Access and MS Excel while creating professional office documents, reports, and official letters with MS Word. Supported daily administrative operations, maintained system performance, handled troubleshooting, provided software and technical support, and resolved IT-related issues to ensure smooth business operations.",
//     skills: ["System Maintenance", "Troubleshooting", "Software Support"]
//   }
// ];

// const Experience = () => {
//   return (
//     <section id="experience" className="experience-section">

//       {/* HEADER */}
//       <motion.div
//         className="experience-header"
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//         viewport={{ once: true }}
//       >
//         <span className="experience-badge">
//           EXPERIENCE
//         </span>

//         <h2 className="experience-title">
//           Professional Journey & <span>Technical Experience</span>
//         </h2>

//         <p className="experience-subtitle">
//           Hands-on experience building scalable web applications,
//           backend systems & IT solutions.
//         </p>
//       </motion.div>

//       {/* TIMELINE */}
//       <div className="experience-container">

//         {experiences.map((exp, index) => (
//           <motion.div
//             key={index}
//             className="experience-card"
//             initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7, delay: index * 0.2 }}
//             viewport={{ once: true }}
//             whileHover={{ y: -8 }}
//           >

//             {/* ICON */}
//             <div className="experience-icon">
//               {exp.icon}
//             </div>

//             {/* CONTENT */}
//             <div className="experience-content">

//               <h3>{exp.title}</h3>

//               <h4>{exp.company}</h4>

//               <p>{exp.desc}</p>

//               {/* SKILLS */}
//               <div className="experience-skills">
//                 {exp.skills.map((skill, i) => (
//                   <span key={i}>{skill}</span>
//                 ))}
//               </div>

//             </div>

//           </motion.div>
//         ))}

//       </div>

//     </section>
//   );
// };

// export default Experience;

//new chnage


import React from "react";
import { motion } from "framer-motion";
import {
  FaPaintBrush,
  FaUsers
} from "react-icons/fa";

import "./Experience.css";

const experiences = [
  {
    title: "UI/UX Design Workshop",
    company: "Workshop Participant (2025)",
    icon: <FaPaintBrush />,
    desc: "Participated in an intensive UI/UX design workshop focused on user-centered design principles, wireframing, prototyping, usability testing, and creating modern digital interfaces for web and mobile applications.",
    skills: [
      "Figma",
      "Wireframing",
      "Prototyping",
      "User Research",
      "Design Thinking"
    ]
  },
  {
    title: "UI/UX Design Competition",
    company: "Competition Participant (2025)",
    icon: <FaUsers />,
    desc: "Participated in a UI/UX design competition by designing creative and user-friendly digital product interfaces. Collaborated on problem-solving, design strategy, and presentation of innovative design solutions.",
    skills: [
      "UI Design",
      "UX Strategy",
      "Problem Solving",
      "Team Collaboration",
      "Presentation"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">

      {/* HEADER */}
      <motion.div
        className="experience-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <span className="experience-badge">
          EXPERIENCE
        </span>

        <h2 className="experience-title">
          Professional Journey & <span>Design Experience</span>
        </h2>

        <p className="experience-subtitle">
          Hands-on experience in UI/UX design,
          creative problem solving, and digital product design.
        </p>
      </motion.div>

      {/* TIMELINE */}
      <div className="experience-container">

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="experience-card"
            initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
          >

            {/* ICON */}
            <div className="experience-icon">
              {exp.icon}
            </div>

            {/* CONTENT */}
            <div className="experience-content">

              <h3>{exp.title}</h3>

              <h4>{exp.company}</h4>

              <p>{exp.desc}</p>

              {/* SKILLS */}
              <div className="experience-skills">
                {exp.skills.map((skill, i) => (
                  <span key={i}>{skill}</span>
                ))}
              </div>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default Experience;