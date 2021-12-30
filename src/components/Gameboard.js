import React, { useState } from 'react';
import './styles/Gameboard.css';
import Card from './Card';

const Gameboard = (props) => {
  const [clicked, setClicked] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);

  const resetCounter = () => {
    if (currentScore >= highestScore) {
      setHighestScore(currentScore);
    }
    setCurrentScore(0);
    setClicked([]);
  };

  const addToClicked = (card) => {
    if (clicked.includes(card)) {
      resetCounter();
    } else {
      setClicked(clicked.concat(card));
      setCurrentScore(currentScore + 1);
    }
  };

  const randomizeCards = () => {
    let list = [];
    for (let i = 0; i < 12; i++) {
      list.push(i);
    }

    list = list.sort(() => Math.random() - 0.5);
    return list.map((index) => {
      return <Card index={index} memory={addToClicked} key={index} />;
    });
  };

  const randomized = randomizeCards();

  return (
    <div className="gameboard">
      <div className="scoreboard">
        <span>Current score: {currentScore}</span>
        <span>Highest score: {highestScore}</span>
      </div>
      <div className="cards">{randomized}</div>
    </div>
  );
};

export default Gameboard;
