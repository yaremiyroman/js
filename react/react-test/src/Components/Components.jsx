import { useState } from 'react';
import CounterPrevState from '../Containers/CounterPrevState';
import List from '../Containers/List';
import TextInput from './Forms/TextInput';
import TextareaInput from './Forms/TextareaInput';
import Select from './Forms/Select';
import Checkbox from './Forms/Checkbox';
import Radio from './Forms/Radio';


import { createUseStyles } from 'react-jss';

// Визначення стилів за допомогою хука
const userStyles = createUseStyles({


  // border-radius
  // borderRadius

  button: {
    padding: '10px 20px',
    background: 'linear-gradient(45deg, blue, red)',
    border: 'none',
    borderRadius: '5px',
    color: 'white',

    '&:hover': {
      background: 'linear-gradient(45deg, red, blue)',
    },
  },


  label: {
    fontStyle: 'italic',
  },


  input: {
    border: '3px solid green',
    height: '40px',
    backgroundColor: 'blue',
  },

  someClass: {
    border: '20px solid gold',
    appearance: 'none',
    width: '100px',
    height: '100px',
  }



});



import './styles/notBasic.scss';

import styles from './styles/modules/TextInput.module.css'; // Імпорт CSS модуля
import stylesTextArea from './styles/modules/TextAreaInput.module.scss'; // Імпорт CSS модуля

const radios = [
  { value: 'first', label: 'first' },
  { value: 'second', label: 'second' },
  { value: 'third', label: 'third' },
  { value: 'fourth', label: 'fourth' },
];

// Компонент Card, який використовує props.children для відображення вмісту, що передається всередині
function Card({ children }) {
  return <div className="card">{children}</div>;
}

const App2 = () => {
  // console.log('userStyles > ', userStyles);

  const classes = userStyles();

  return (
    <>
      <Card>
        <h1>Привіт, світ!</h1>
        <p>Це приклад вмісту всередині картки.</p>
      </Card>

      <Card>
        <img src="path/to/image.png" alt="Зображення" />
      </Card>

      <TextInput name="testInput" inputStyles={classes.input} />
      <TextareaInput name="testTextarea" />
      <Select name="testSelect" />
      <Checkbox inputStyles={classes.someClass} name="testCheckbox" label="Some Checkbox Label" />
      <Radio name="testRadio" radios={radios} />
    </>
  );
}

export default App2;



