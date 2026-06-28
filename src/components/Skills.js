import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaJs, FaDatabase } from "react-icons/fa";

const Skills = () => {
  return (
    <section className="section">
      <motion.div
        className="glass skills-box"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Skills</h2>

        <div className="skills">
          <div><FaReact /> React</div>
          <div><FaNodeJs /> Node.js</div>
          <div><FaJs /> JavaScript</div>
          <div><FaDatabase /> MongoDB</div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;