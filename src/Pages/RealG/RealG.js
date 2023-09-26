import React from 'react';
import './RealG.css';
import diceGif from '../../Assets/dice.gif'; // Import the GIF image

const RealG = () => {
  return (
    <div className='outer'>
      <div className="real-g-container">
        <h1 className="real-g-heading">Child Rights Games</h1>

        {/* Game 1 */}
        <div className="game">
          <div className='text1'>
            <h2>Rights Bingo</h2>
            <div className="game-content">
              <p>
                <strong>Materials Needed:</strong> Bingo cards, markers
              </p>
              <p>
                <strong>Instructions:</strong>
              </p>
              <ol>
                <li>Prepare bingo cards with child rights terms.</li>
                <li>Distribute cards and markers to children.</li>
                <li>Designate a bingo caller to read descriptions.</li>
                <li>Children mark terms matching the description.</li>
                <li>First to complete a row shouts "Rights Bingo!"</li>
              </ol>
            </div>
            <div className="game-gif">
              <img src={diceGif} alt="Dice GIF" />
            </div>
          </div>
        </div>

        {/* Game 2 */}
        <div className="game">
          <div className='text1'>
            <h2>Rights Scavenger Hunt</h2>
            <div className="game-content">
              <p>
                <strong>Materials Needed:</strong> List of child rights items, timer
              </p>
              <p>
                <strong>Instructions:</strong>
              </p>
              <ol>
                <li>Create a list of child rights items or concepts.</li>
                <li>Set a timer and share the list with children.</li>
                <li>Children search for items and explain their rights.</li>
                <li>Discuss their findings at the end.</li>
              </ol>
            </div>
            <div className="game-gif">
              <img src={diceGif} alt="Dice GIF" />
            </div>
          </div>
        </div>

        {/* Game 3 */}
        <div className="game">
          <div className='text1'>
            <h2>Rights Relay Race</h2>
            <div className="game-content">
              <p>
                <strong>Materials Needed:</strong> Child rights flashcards, open space
              </p>
              <p>
                <strong>Instructions:</strong>
              </p>
              <ol>
                <li>Create flashcards with child rights terms and explanations.</li>
                <li>Divide children into teams and set up a relay race.</li>
                <li>Teams pass and explain rights cards in a relay.</li>
                <li>Continue until all team members participate.</li>
              </ol>
            </div>
            <div className="game-gif">
              <img src={diceGif} alt="Dice GIF" />
            </div>
          </div>
        </div>

        {/* Game 4 */}
        <div className="game">
          <div className='text1'>
            <h2>Rights Board Game</h2>
            <div className="game-content">
              <p>
                <strong>Materials Needed:</strong> Child rights-themed board game
              </p>
              <p>
                <strong>Instructions:</strong>
              </p>
              <ol>
                <li>Create a unique board game centered around child rights.</li>
                <li>Players answer questions related to rights.</li>
                <li>Earn tokens or rewards based on their answers.</li>
                <li>The player with the most tokens wins.</li>
              </ol>
            </div>
            <div className="game-gif">
              <img src={diceGif} alt="Dice GIF" />
            </div>
          </div>
        </div>

        {/* Game 5 */}
        <div className="game">
          <div className='text1'>
            <h2>Rights Card Match</h2>
            <div className="game-content">
              <p>
                <strong>Materials Needed:</strong> Pairs of cards with rights terms and illustrations
              </p>
              <p>
                <strong>Instructions:</strong>
              </p>
              <ol>
                <li>Create a set of cards with rights terms and illustrations.</li>
                <li>Players flip over cards to match terms with illustrations.</li>
                <li>Earn points for correct matches.</li>
                <li>The player with the most points wins.</li>
              </ol>
            </div>
            <div className="game-gif">
              <img src={diceGif} alt="Dice GIF" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealG;
