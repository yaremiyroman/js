import { Outlet } from 'react-router';
import styled from 'styled-components';

import { Header, CookieBanner } from './components';


const Container = styled.main`
`;

function App() {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <CookieBanner />
    </>
  );
}

export default App;
