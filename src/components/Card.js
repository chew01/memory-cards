import React from 'react';
import './styles/Card.css';
import images from './ImageLoader';

const Card = (props) => {
  const addThisCardToMemory = () => {
    const memoryConnector = props.memory;
    memoryConnector(props.index);
  };

  const callImage = (number) => {
    return images[number];
  };

  return (
    <div className="card" onClick={addThisCardToMemory}>
      <img src={callImage(props.index)} alt={props.index}></img>
    </div>
  );
};

export default Card;
