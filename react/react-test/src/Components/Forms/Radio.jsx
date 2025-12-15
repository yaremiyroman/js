import { useState } from "react";

const Radio = ({ name, radios }) => {
  const [radioValue, setRadio] = useState('first');

  const handleRadioChange = (e) => {
    setRadio(e.target.value);
  }

  return (
    <div>
      {radios.map((radio) => (
        <label key={radio.value}>
          <input
            type="radio"
            name={name}
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={handleRadioChange}
          />
          {radio.label}
        </label>
      ))}
    </div>
  );
};

export default Radio;
