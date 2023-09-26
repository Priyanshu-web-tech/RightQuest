import React from 'react';
import "./Cards.css";

const Cards = () => {
  return (
    <section className="cards">
      <h1 className="cards-heading">Game Modules</h1>
      <div className="card-container">
        {/* Card 1 */}
        <a href="/Videos" className="card card-blue">
          <h2 className="card-title">Videos</h2>
          <p className="card-description">Learning Videos Modules</p>
        </a>
        
        {/* Card 2 */}
        <a href="/RealG" className="card card-green">
          <h2 className="card-title">Real Games</h2>
          <p className="card-description">Real time games for learning</p>
        </a>
        
        {/* Card 3 */}
        <a href="https://6511e72899a8f606c99c76b8--cheerful-cheesecake-7a2394.netlify.app/" className="card card-purple">
          <h2 className="card-title">Quiz</h2>
          <p className="card-description">Educational Quiz </p>
        </a>
        
        {/* Card 4 */}
        <a href="https://6511e790b5ff0c0a41cacab5--gorgeous-faloodeh-8a1681.netlify.app/" className="card card-red">
          <h2 className="card-title">Scramble Word</h2>
          <p className="card-description">Align the jumble words</p>
        </a>
        
        {/* Card 5 */}
        <a href="https://6511e7c7ad6cec029d56aa7c--papaya-baklava-0cca83.netlify.app/" className="card card-orange">
          <h2 className="card-title">Save the Man</h2>
          <p className="card-description">Learn by helping your friend</p>
        </a>
        
        {/* Card 6 */}
        <a href="/module6" className="card card-yellow">
          <h2 className="card-title">AdventureStories</h2>
          <p className="card-description">Description for Module 6</p>
        </a>
      </div>
    </section>
  );
};

export default Cards;
