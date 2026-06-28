// import React from "react";
// import { motion } from "framer-motion";

// const Contact = () => {
//   return (
//     <section id="contact" className="section">
//       <motion.div
//         className="glass"
//         initial={{ opacity: 0, y: 80 }}
//         whileInView={{ opacity: 1, y: 0 }}
//       >
//         <h2>Contact</h2>
//         <p>Email: nishanitharshana6@gmail.com</p>
//         <p>GitHub: github.com/nitharsana6</p>
//         <p>LinkedIn: linkedin.com/in/nitharshana</p>
//       </motion.div>
//     </section>
//   );
// };

// export default Contact;

// import React, { useRef } from "react";
// import { motion } from "framer-motion";
// import emailjs from "emailjs-com";

// import {
//   FaEnvelope,
//   FaGithub,
//   FaLinkedin,
//   FaPaperPlane
// } from "react-icons/fa";

// import "./Contact.css";

// const Contact = () => {

//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm(
//       "service_atzljon",
//       "template_z8793lk",
//       form.current,
//       "49kBpoG5QAou1smzI"
//     )

//     .then(() => {
//       alert("✅ Message sent successfully!");
//       form.current.reset();
//     })

//     .catch(() => {
//       alert("❌ Failed to send message.");
//     });
//   };

//   return (

//     <section id="contact" className="contact-section">

//       {/* GLOW */}
//       <div className="contact-glow"></div>

//       <motion.div
//         className="contact-container"
//         initial={{ opacity: 0, y: 80 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//       >

//         {/* LEFT SIDE */}
//         <div className="contact-left">

//           <span className="contact-badge">
//             CONTACT
//           </span>

//           <h2 className="contact-title">
//   Have a Project,
//   <span> Opportunity or Collaboration?</span>
// </h2>

//           <p className="contact-text">
//             Open to Full-Stack Development opportunities,
//             freelance projects, collaborations, and
//             innovative digital solutions.
//           </p>

//           {/* CONTACT INFO */}
//           <div className="contact-info">

//             <a
//               href="mailto:nishanitharshana6@gmail.com"
//               className="info-card"
//             >
//               <FaEnvelope />
//               <span>nishanitharshana6@gmail.com</span>
//             </a>

//             <a
//               href="https://github.com/nitharsana6"
//               target="_blank"
//               rel="noreferrer"
//               className="info-card"
//             >
//               <FaGithub />
//               <span>github.com/nitharsana6</span>
//             </a>

//             <a
//               href="https://linkedin.com/in/nitharshana"
//               target="_blank"
//               rel="noreferrer"
//               className="info-card"
//             >
//               <FaLinkedin />
//               <span>linkedin.com/in/nitharshana</span>
//             </a>

//           </div>

//         </div>

//         {/* RIGHT SIDE */}
//         <motion.div
//           className="contact-card"
//           initial={{ opacity: 0, x: 80 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >

//           <form
//             ref={form}
//             onSubmit={sendEmail}
//             className="contact-form"
//           >

//             <div className="input-group">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Your Name"
//                 required
//               />
//             </div>

//             <div className="input-group">
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Your Email"
//                 required
//               />
//             </div>

//             <div className="input-group">
//               <textarea
//                 name="message"
//                 rows="6"
//                 placeholder="Write your message..."
//                 required
//               ></textarea>
//             </div>

//             <button type="submit" className="send-btn">
//               <FaPaperPlane />
//               Send Message
//             </button>

//           </form>

//         </motion.div>

//       </motion.div>

//     </section>
//   );
// };

// export default Contact;

// after mine change


import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

import {
  FaEnvelope,
  FaFigma,
  FaPaperPlane
} from "react-icons/fa";

import "./Contact.css";

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_7chu01n",
      "template_0lqxndd",
      form.current,
      "49kBpoG5QAou1smzI"
    )

    .then(() => {
      alert("✅ Message sent successfully!");
      form.current.reset();
    })

    .catch(() => {
      alert("❌ Failed to send message.");
    });
  };

  return (

    <section id="contact" className="contact-section">

      <div className="contact-glow"></div>

      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        {/* LEFT SIDE */}
        <div className="contact-left">

          <span className="contact-badge">
            CONTACT
          </span>

          <h2 className="contact-title">
            Have a Project,
            <span> Opportunity or Collaboration?</span>
          </h2>

          <p className="contact-text">
            Open to Full-Stack Development opportunities,
            freelance projects, collaborations, and
            innovative digital solutions.
          </p>

          {/* CONTACT INFO */}
          <div className="contact-info">

            {/* EMAIL (FRIEND EMAIL UPDATED) */}
            <a
              href="mailto:mujalkutty11@gmail.com"
              className="info-card"
            >
              <FaEnvelope />
              <span>mujalkutty11@gmail.com</span>
            </a>

            {/* FIGMA LINK */}
            <a
              href="https://www.figma.com/design/FvpbHvt290zMBTwNSaGcfS/Untitled?t=WEeTxyIFd4iii1KZ-1"
              target="_blank"
              rel="noreferrer"
              className="info-card"
            >
              <FaFigma />
              <span>Figma Profile</span>
            </a>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <motion.div
          className="contact-card"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <form
            ref={form}
            onSubmit={sendEmail}
            className="contact-form"
          >

            <div className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="input-group">
              <textarea
                name="message"
                rows="6"
                placeholder="Write your message..."
                required
              ></textarea>
            </div>

            <button type="submit" className="send-btn">
              <FaPaperPlane />
              Send Message
            </button>

          </form>

        </motion.div>

      </motion.div>

    </section>
  );
};

export default Contact;