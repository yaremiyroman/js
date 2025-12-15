import { memo } from 'react';

const CountButton = memo(({ clickHandler, value }) => {
  return (
    <button onClick={clickHandler}>Increment Number2: {value}</button>
  );
});

export default CountButton;
