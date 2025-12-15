import { useState, useMemo, useCallback } from "react";

import { CountButton } from '../components';

function factorial(n) {
  console.log('+++');
  if (n === 0 || n === 1)
    return 1;

  return n * factorial(n - 1);
};




const Contacts = () => {
  const [number, setNumber] = useState(1);

  const [number2, setNumber2] = useState(0);

  const fact = useMemo(
    () => factorial(number),
    [number]
  );

  const handleClick = useCallback(() => {
    console.log('Clicking...');
    setNumber2(number2 => number2 + 1);
  }, []);

  return (
    <>
      <h1>Contacts</h1>
      <input
        type="number"
        value={number}
        onChange={e => setNumber(+e.target.value)}
      />
      <p>Factorial: {fact}</p>
      <CountButton clickHandler={handleClick} value={number2}/> // Dumb
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem laboriosam consectetur id consequuntur consequatur iure optio quia omnis! Laboriosam ut odit ducimus nobis esse amet! Numquam natus ad architecto at!
      </p>
    </>
  );
};

export default Contacts;
