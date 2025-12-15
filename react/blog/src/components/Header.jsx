import { Logo, MainMenu } from './';

import styled from 'styled-components';

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <MainMenu />
    </HeaderContainer>
  );
};

export default Header;
