import { useState, useEffect } from 'react';

import { Board, Info, Cell } from './components';

import './styles.scss';

const Game = () => {
  const [board, setBoard] = useState(
    [
      [null, null, null], // data-row 0
      [null, null, null], // data-row 1
      [null, null, null], // data-row 2
    ]
  );



  const [currentUser, setCurrentUser] = useState(true);




  
  const [gameOver, setGameOver] = useState(false);

  const handleCellClick = (rowIndex, colIndex) => {
    if (!gameOver) {
      const updatedBoard = [...board];
      updatedBoard[rowIndex][colIndex] = currentUser ? 'X' : 'O';
      setBoard(updatedBoard);
      setCurrentUser(!currentUser);
    }
  };

  useEffect(() => {
    if (!gameOver) {
      checkBoard();
    }
  }, [board]);

  useEffect(() => {
    if (gameOver) {
      setCurrentUser(!currentUser);
    }
  }, [gameOver]);

  const overGame = (user) => {
    setGameOver(true);
    console.log(`%c${!currentUser ? 'X' : 'O'} WIN!!!`, `color: red;`)
  }

  const checkBoard = () => {
    const flatBoard = board.flat();

    // rows
    if (!!flatBoard[0] && flatBoard[0] === flatBoard[1] && flatBoard[1] === flatBoard[2])
      overGame();

    if (!!flatBoard[3] && flatBoard[3] === flatBoard[4] && flatBoard[4] === flatBoard[5])
      overGame();

    if (!!flatBoard[6] && flatBoard[6] === flatBoard[7] && flatBoard[7] === flatBoard[8])
      overGame();

    // cols
    if (!!flatBoard[0] && flatBoard[0] === flatBoard[3] && flatBoard[3] === flatBoard[6])
      overGame();

    if (!!flatBoard[1] && flatBoard[1] === flatBoard[4] && flatBoard[4] === flatBoard[7])
      overGame();

    if (!!flatBoard[2] && flatBoard[2] === flatBoard[5] && flatBoard[5] === flatBoard[8])
      overGame();

    // curve
    if (!!flatBoard[0] && flatBoard[0] === flatBoard[4] && flatBoard[4] === flatBoard[8])
      overGame();

    if (!!flatBoard[6] && flatBoard[6] === flatBoard[4] && flatBoard[4] === flatBoard[2])
      overGame();
  }

  return (
    <>
      <Info
        activeUser={currentUser}
      />

      <Board gameOver={gameOver}>
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              value={cell}
              handleCellClick={handleCellClick}
              rowIndex={rowIndex}
              colIndex={colIndex}
            />
          ))
        )}
      </Board>


    </>
  );
};

export default Game;
