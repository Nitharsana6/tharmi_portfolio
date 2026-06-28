// import React from "react";
// import "./Specialization.css";

// const Specialization = () => {
//   return (
//     <section className="specialization-section">

//       <h2 className="specialization-title">
//         My Specializations
//       </h2>

//       <p className="specialization-subtitle">
//         Crafting modern, scalable and intelligent digital solutions
//       </p>

//       <div className="specialization-grid">

//         <div className="spec-card">🌐 Web Development</div>
//          <div className="spec-card">🖥️ Software Systems</div>
//            <div className="spec-card">🤖 AI & NLP Systems</div>
//         <div className="spec-card">📱 Mobile Development</div>
//         <div className="spec-card">🎨 UI/UX Design</div>
//         <div className="spec-card">🛒 E-Commerce Solutions</div>
//         <div className="spec-card">📊 Digital Marketing</div>
//           <div className="spec-card">🤖 AI & NLP Systems</div>

//       </div>

//     </section>
//   );
// };

// export default Specialization;


// import React from "react";
// import { motion } from "framer-motion";
// import {
//   FaLaptopCode,
//   FaMobileAlt,
//   FaBrain,
//   FaCogs,
//   FaPaintBrush,
//   FaShoppingCart,
//   FaBullhorn,
//   FaPalette
// } from "react-icons/fa";

// import "./Specialization.css";

// const items = [
//   { name: "Web Development", icon: <FaLaptopCode /> },
//   { name: "AI & NLP Systems", icon: <FaBrain /> },
//   { name: "Software Systems", icon: <FaCogs /> },
//   { name: "Mobile Development", icon: <FaMobileAlt /> },
//   { name: "UI/UX Design", icon: <FaPaintBrush /> },
//   { name: "Graphic Design", icon: <FaPalette /> }, // ✅ NEW ADDED
//   { name: "E-Commerce Solutions", icon: <FaShoppingCart /> },
//   { name: "Digital Marketing", icon: <FaBullhorn /> }
// ];

// const Specialization = () => {
//   return (
//     <section className="specialization-section">

//       {/* HEADER */}
//       <motion.div
//         className="specialization-header"
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//       >
//         <h2 className="specialization-title">
//           My Specializations
//         </h2>

//         <p className="specialization-subtitle">
//           Building modern, scalable & intelligent digital experiences
//         </p>
//       </motion.div>

//       {/* GRID */}
//       <div className="specialization-grid">

//         {items.map((item, index) => (
//           <motion.div
//             key={index}
//             className="spec-card"
//             initial={{ opacity: 0, y: 50, scale: 0.9 }}
//             whileInView={{ opacity: 1, y: 0, scale: 1 }}
//             transition={{
//               duration: 0.6,
//               delay: index * 0.1
//             }}
//             whileHover={{
//               scale: 1.08
//             }}
//             viewport={{ once: true }}
//           >
//             <div className="icon-box">
//               {item.icon}
//             </div>

//             <span>{item.name}</span>

//           </motion.div>
//         ))}

//       </div>

//     </section>
//   );
// };

// export default Specialization;

// after change mine

import React from "react";
import { motion } from "framer-motion";
import {
  FaDesktop,
  FaPaintBrush,
  FaBullhorn,
  FaKeyboard,
  FaPalette,
  FaMobileAlt,
  FaPenNib,
  FaSearch
} from "react-icons/fa";

import "./Specialization.css";

const items = [
  { name: "UI/UX Design", icon: <FaDesktop /> },
  { name: "Graphic Design", icon: <FaPalette /> },
  { name: "Digital Marketing", icon: <FaBullhorn /> },
  { name: "Data Entry", icon: <FaKeyboard /> },
  { name: "Mobile App Design", icon: <FaMobileAlt /> },
  { name: "Wireframing", icon: <FaPenNib /> },
  { name: "User Research", icon: <FaSearch /> },
  { name: "Brand Design", icon: <FaPaintBrush /> }
];

const Specialization = () => {
  return (
    <section className="specialization-section">

      {/* HEADER */}
      <motion.div
        className="specialization-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="specialization-title">
          My Specializations
        </h2>

        <p className="specialization-subtitle">
          Creating impactful designs and digital solutions for modern businesses
        </p>
      </motion.div>

      {/* GRID */}
      <div className="specialization-grid">

        {items.map((item, index) => (
          <motion.div
            key={index}
            className="spec-card"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1
            }}
            whileHover={{
              scale: 1.08
            }}
            viewport={{ once: true }}
          >
            <div className="icon-box">
              {item.icon}
            </div>

            <span>{item.name}</span>

          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default Specialization;