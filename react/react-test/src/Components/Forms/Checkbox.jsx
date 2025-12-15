import { useState } from "react";

const Checkbox = ({ name, label, inputStyles }) => {
  const [box, setCheckbox] = useState(false);

  console.log('>>>> ', inputStyles);

  const handleSelectChange = (e) => {
    setCheckbox(e.target.checked);
  }

  return (
    <label>
      <input
        type="checkbox"
        name={name}
        checked={box}
        onChange={handleSelectChange}
        className={inputStyles}
      />
      {label}
    </label>
  );
};

export default Checkbox;
