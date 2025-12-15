import { useState } from 'react';

const Card = ({ title, description, image }) => {
  const [color, setColor] = useState('red');

  const changeColor = (event) => {
    event.stopPropagation(); // Запобігаємо спливанню події
    setColor(color === 'red' ? 'blue' : 'red');
  }

  const cardClassName = "card";

  // return null;

  return (
    <div className={cardClassName + '123123123123'} style={{ backgroundColor: color }} onClick={changeColor}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
