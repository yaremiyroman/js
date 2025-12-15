import { useState } from 'react';
import { Outlet } from 'react-router';

import { Header, Modal } from './components';

import styled from 'styled-components';

import memoizaFactorial from './memoization.js';

const memoFactorial = memoizaFactorial();

const Container = styled.main`
`;

function App() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Відкрити модальне вікно</button>
      <Header />
      <Container>
        <Outlet />
      </Container>
      {isOpen && (
        <Modal>
          <div className="modal-content">
            <h2>Модальне вікно</h2>
            <p>Це вміст модального вікна.</p>
            <button onClick={() => setOpen(false)}>Закрити</button>
          </div>
        </Modal>
      )}
    </>
  );
}

export default App;
