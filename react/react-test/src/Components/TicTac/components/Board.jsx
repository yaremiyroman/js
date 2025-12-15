import Cell from './Cell';

const Board = () => {
  const arr = Array(9).fill(null);

  return (
    <div id="board">
      {arr.map((item, i) => {
        <Cell key={item} />
      })}
    </div>
  );
};

export default Board;
