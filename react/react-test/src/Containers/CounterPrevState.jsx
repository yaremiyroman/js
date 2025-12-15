import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  // Неправильно: може призвести до втрати оновлень
  // const incrementWrong = () => {
  // setCount(count + 1);
  // setCount(count + 1);
  // };

  // Правильно: використовує prevState для надійного оновлення
  const incrementRight = () => {
    setCount(prevCount => {
      console.log('prevCount > ', prevCount);
      return prevCount + 1;
    });
    setCount(prevCount => {
      console.log('prevCount > ', prevCount);
      return prevCount + 1;
    });
  };

  return (
    <div>
      <h1>Лічильник: {count}</h1>
      {/* <button onClick={incrementWrong}>
        Додати 2 (неправильно)
      </button> */}
      <button onClick={incrementRight}>
        Додати 2 (правильно)
      </button>
    </div>
  );
};

export default Counter;
