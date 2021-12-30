import React from 'react';
import './styles/Card.css';

const Card = (props) => {
  const addThisCardToMemory = () => {
    const memoryConnector = props.memory;
    memoryConnector(props.index);
  };

  return (
    <div className="card" onClick={addThisCardToMemory}>
      {props.index}
    </div>
  );
};

export default Card;
