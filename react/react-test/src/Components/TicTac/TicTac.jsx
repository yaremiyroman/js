import { useState, useEffect } from 'react';

import Board from './components/Board';
import Info from './components/Info';

import './styles.scss';

const TicTac = () => {
  // const [showProfile, setShowProfile] = useState(true);

  return (
    <>
      <Info />
      <Board />
    </>
  );
};

export default TicTac;
