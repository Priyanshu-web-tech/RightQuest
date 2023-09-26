import React from 'react';
import './About.css';
import AU from '../../Assets/AU.png'; // Import your PNG image
import { motion } from 'framer-motion';


const About = () => {
  return (
    <section className="about">
      <div className="about-title">
        <h2>About Us</h2>
      </div>
      <div className="about-content">
        <div className="about-text">
          <p className="about-description">
            At RightQuest, we are on a mission to empower children with knowledge about their rights. We believe that every child deserves to understand and assert their rights. Our platform provides a gamified learning experience that educates and engages children in a fun and interactive way.
          </p>
          <p className="about-description">
            Our team is passionate about creating a safe and inclusive space where children can learn about their rights and how to protect themselves. Through our platform, we aim to raise awareness, promote legal literacy, and make a positive impact on the lives of children in India.
          </p>
        </div>
        <motion.div
        animate={{ y: [-10, 0, -10] }} transition={{ repeat: Infinity, duration: 2 }}
        className="about-image">
          <img  src={AU} alt="About Us" className="image" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
