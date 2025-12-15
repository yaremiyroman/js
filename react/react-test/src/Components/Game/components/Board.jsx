const Board = ({ children, gameOver }) => {
  return (
    <div
      id="board"
      className={gameOver ? 'final' : ''}
    >
      {children}
    </div >
  );
};

export default Board;
