import { useState } from "react";

const Select = ({ name }) => {
  const [option, setOption] = useState('');

  const handleSelectChange = (e) => {
    setOption(e.target.value);
  }

  return (
    <select
      name={name}
      value={option}
      onChange={handleSelectChange}
    >
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </select>
  );
};

export default Select;
