import Paragraph from "./Paragraph";
import { Fragment } from 'react';

const Button = ({ text, buttonClickHandler, stateControlHandler }) => {
  return (
    <>
      <button onClick={buttonClickHandler}>
        <Paragraph text={text} />
      </button>
      <button onClick={buttonClickHandler}>
        <Paragraph text={text} />
      </button>
      <button onClick={buttonClickHandler}>
        <Paragraph text={text} />
      </button>
      <button onClick={buttonClickHandler}>
        <Paragraph text={text} />
      </button>
    </>
  );


  // return [
  //   <div>DIV 1</div>,
  //   <div>DIV 2 </div>,
  //   <div>DIV 3</div>
  // ];
};

export default Button;
