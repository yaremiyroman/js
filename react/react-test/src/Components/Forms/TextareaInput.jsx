import { useState } from "react";

import styles from '../../styles/modules/TextAreaInput.module.scss'; // Імпорт CSS модуля

const TextareaInput = ({ name }) => {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  }

  return <textarea
    name={name}
    value={text}
    onChange={handleTextChange}
    className={styles.textarea}
  />;
};

export default TextareaInput;
