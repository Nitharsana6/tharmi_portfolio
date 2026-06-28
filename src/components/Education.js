// import React from "react";
// import { motion } from "framer-motion";

// import {
//   FaGraduationCap,
//   FaCertificate,
//   FaLaptopCode
// } from "react-icons/fa";

// import "./Education.css";

// const educationData = [
//   {
//     title: "BEng (Hons) Software Engineering",
//     place: "London Metropolitan University (2025)",
//     icon: <FaGraduationCap />,
//     desc: "Focused on software engineering principles, full-stack development, database systems, software architecture, and modern application development."
//   },

//   {
//     title: "National Diploma in ICT",
//     place: "College of Technology - Jaffna (2021/2024)",
//     icon: <FaLaptopCode />,
//     desc: "Completed practical and theoretical training in Information & Communication Technology, programming, networking, and software systems."
//   },

//   {
//     title: "NVQ Level 4 in ICT",
//     place: "Vocational Training Authority - Jaffna (2020)",
//     icon: <FaCertificate />,
//     desc: "Developed technical knowledge in computer systems, office applications, troubleshooting, and IT support services."
//   }
// ];

// const certificates = [
//   "Responsive Web Design - FreeCodeCamp",
//   "Getting Started with MongoDB",
//   "UI & UX Design Workshop Certificate"
// ];

// const Education = () => {
//   return (
//     <section id="education" className="education-section">

//       {/* HEADER */}
//       <motion.div
//         className="education-header"
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//         viewport={{ once: true }}
//       >

//         <span className="education-badge">
//           EDUCATION
//         </span>

//         <h2 className="education-title">
//           Academic Background & <span>Certifications</span>
//         </h2>

//         <p className="education-subtitle">
//           Building strong technical expertise through academic studies,
//           practical learning, and industry-focused certifications.
//         </p>

//       </motion.div>

//       {/* EDUCATION CARDS */}
//       <div className="education-grid">

//         {educationData.map((edu, index) => (
//           <motion.div
//             key={index}
//             className="education-card"
//             initial={{ opacity: 0, y: 70 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.2 }}
//             whileHover={{ y: -10 }}
//             viewport={{ once: true }}
//           >

//             <div className="education-icon">
//               {edu.icon}
//             </div>

//             <h3>{edu.title}</h3>

//             <h4>{edu.place}</h4>

//             <p>{edu.desc}</p>

//           </motion.div>
//         ))}

//       </div>

//       {/* CERTIFICATES */}
//       <motion.div
//         className="certificate-section"
//         initial={{ opacity: 0, y: 60 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//         viewport={{ once: true }}
//       >

//         <h3 className="certificate-title">
//           Certifications & Workshops
//         </h3>

//         <div className="certificate-grid">

//           {certificates.map((item, index) => (
//             <div key={index} className="certificate-card">
//               <FaCertificate className="certificate-icon" />
//               <span>{item}</span>
//             </div>
//           ))}

//         </div>

//       </motion.div>

//     </section>
//   );
// };

// export default Education;

// after cghange

import React from "react";
import { motion } from "framer-motion";

import {
  FaGraduationCap,
  FaCertificate,
  FaLaptopCode
} from "react-icons/fa";

import "./Education.css";

const educationData = [
  {
    title: "Higher National Diploma in Software Engineering",
    place: "ESU Jaffna / London Metropolitan University (2024–2026)",
    icon: <FaGraduationCap />,
    desc: "Focused on software engineering concepts, programming fundamentals, system analysis, software development, and modern application technologies."
  },

  {
    title: "Diploma in Technology",
    place: "ESU Jaffna (2024)",
    icon: <FaLaptopCode />,
    desc: "Completed practical and theoretical studies in technology-related subjects including digital tools, technical foundations, and modern computing concepts."
  },

  {
    title: "Diploma in English",
    place: "ESU Jaffna (2024)",
    icon: <FaCertificate />,
    desc: "Improved communication, professional writing, grammar, speaking, and presentation skills for academic and professional environments."
  }
];


const Education = () => {
  return (
    <section id="education" className="education-section">

      {/* HEADER */}
      <motion.div
        className="education-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >

        <span className="education-badge">
          EDUCATION
        </span>

        <h2 className="education-title">
          Academic Background & <span>Certifications</span>
        </h2>

        <p className="education-subtitle">
          Building professional skills through academic studies,
          practical learning, workshops, and certifications.
        </p>

      </motion.div>

      {/* EDUCATION CARDS */}
      <div className="education-grid">

        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="education-card"
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -10 }}
            viewport={{ once: true }}
          >

            <div className="education-icon">
              {edu.icon}
            </div>

            <h3>{edu.title}</h3>

            <h4>{edu.place}</h4>

            <p>{edu.desc}</p>

          </motion.div>
        ))}

      </div>

  
    </section>
  );
};

export default Education;