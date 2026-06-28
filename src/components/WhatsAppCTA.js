import React from "react";
import { motion } from "framer-motion";

import {
  FaWhatsapp,
  FaArrowRight
} from "react-icons/fa";

import "./WhatsAppCTA.css";

const WhatsAppCTA = () => {
  return (

    <section className="whatsapp-section">

      {/* BACKGROUND GLOW */}
      <div className="whatsapp-glow"></div>

      <motion.div
        className="whatsapp-card"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        {/* LEFT CONTENT */}
        <div className="whatsapp-content">

          <span className="whatsapp-tag">
            AVAILABLE FOR OPPORTUNITIES
          </span>

          <h2 className="whatsapp-title">
            Let’s Build Something
            <span> Innovative Together</span>
          </h2>

          <p className="whatsapp-text">
            Open to Full-Stack Development opportunities,
            freelance projects, startup collaborations,
            AI-powered systems, and professional networking.
          </p>

          {/* BUTTONS */}
          <div className="whatsapp-actions">

            <a
              href="https://wa.me/94742002621"
              target="_blank"
              rel="noreferrer"
              className="whatsapp-btn"
            >
              <FaWhatsapp />
              Chat on WhatsApp
            </a>

            <a
              href="#projects"
              className="secondary-btn"
            >
              View Projects
              <FaArrowRight />
            </a>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <motion.div
          className="whatsapp-side"
          animate={{
            y: [0, -15, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity
          }}
        >

          <div className="whatsapp-circle">
            <FaWhatsapp />
          </div>

        </motion.div>

      </motion.div>

    </section>
  );
};

export default WhatsAppCTA;