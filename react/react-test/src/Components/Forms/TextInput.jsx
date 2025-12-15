import { useState } from "react";

const TextInput = ({ name, inputStyles }) => {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  }

  return <input
      type="text"
      name={name}
      value={text}
      onChange={handleTextChange}
      className={inputStyles}
    />;
};

export default TextInput;
