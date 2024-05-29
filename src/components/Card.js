import React from 'react';
import './styles/Card.css';

const Card = ({ title, description, imageUrl, onCardClick }) => {
  return (
    <div
      className="card"
      onClick={() => onCardClick({ title, description, imageUrl })}
    >
      <img src={imageUrl} alt={title} />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;