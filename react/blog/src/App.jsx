import { Outlet } from 'react-router';

import { Header } from './components';

import styled from 'styled-components';

const Container = styled.main`
`;

function App() {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default App;
