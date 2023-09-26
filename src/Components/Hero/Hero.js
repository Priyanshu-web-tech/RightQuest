import React from 'react';
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div class="parallax-bg"></div>
      <div className="hero-content">
        <h1 className="hero-title">Empowering Children's Rights</h1>
        <p className="hero-description">Join us on a journey to increase legal literacy and awareness among children in India.</p>
        <button className="hero-button">Get Started</button>
      </div>
    </section>
  );
};

export default Hero;
