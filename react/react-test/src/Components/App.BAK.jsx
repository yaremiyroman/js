import { useState } from 'react';
// redux

// redux forms

// lodash

// container
import Counter from '../Containers/Counter.jsx';
// components
import { Hello, Button, Welcome, Card, Paragraph } from './index.jsx';

// styles
import './App.css';


const GrandParentComponent = () => {
  return (
    <div>
      <ParentComponent fromGrandParentText="Hello from Granny" />
    </div>
  )
}


// props
// state
const ParentComponent = ({ fromGrandParentText }) => {
  // Створюємо стан у батьківському компоненті
  const [count, setCount] = useState(0)

  const handleCounter = () => {
    setCount(count + 1);
  }

  return (
    <div>
      {fromGrandParentText}
      Лічильник: {count}
      {/* Передаємо функцію оновлення стану як props */}
      <ChildComponent counterHandler={handleCounter} counterValue={count} />
    </div>
  )
}

// Дочірній компонент отримує функцію через props
const ChildComponent = ({ counterHandler, counterValue }) => {
  return (
    <button onClick={counterHandler}>
      Збільшити {counterValue}
    </button>
  )
}


function App() {
  const [data, setData] = useState('IMPOTANT DATA123');

  function handleClick() {
    alert('Hello, React!');
  }

  // Функції обробники в camelCase
  const handleUserClick = () => {
    console.log('Користувач натиснув кнопку');
  };

  const handleAppContainerClick = (e) => {
    handleClick();
    handleUserClick();
  };

  // const ClonedParagraph = Paragraph;

  // JSX
  // return (
  //   <div id="App">
  //     <GrandParentComponent />
  //   </div>
  // );
  return (
    <div id="App">
      <Hello />
      <Counter />
      <Welcome name="Користувач" />


      <Paragraph text="TEXT PARAGRAPH" />


      <Button text={data} buttonClickHandler={handleUserClick} stateControlHandler={setData} />
      <Card
        title="Продукт 1"
        description="Опис продукту 1"
      />
      <Card
        title="Продукт 2"
        description="Опис продукту 2"
      />
    </div>
  );
}

export default App;





{/* <div id="App" onClick={() => { handleClick(); handleUserClick(); }}></div> */ }