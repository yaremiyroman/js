import { useState } from 'react';
import Button from '../Components/Button.jsx';
import Paragraph from '../Components/Paragraph.jsx';

const Counter = () => {
  // Ініціалізація стану з початковим значенням 0
  const [count, setCount] = useState(0);

  // Функція для збільшення значення лічильника
  const increment = (event) => {
    event.stopPropagation(); // Запобігаємо спливанню події
    setCount(count + 1);
  };


  // button.addEventListern('click' (e) => e.stopPropagation());

  // Рендер компонента з поточним значенням та кнопкою
  return (
    <div>
      <Paragraph text={`Лічильник: ${count}`} />
      <Button onClick={increment} text="Збільшити" />
    </div>
  );
};

export default Counter;
