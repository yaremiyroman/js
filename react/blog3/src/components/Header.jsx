import { Logo, MainMenu } from './';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
`;

const BackButton = styled.div`
    font-size: 40px;
    cursor: pointer;
`;

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <Logo />
      <BackButton onClick={() => navigate(-1)}>🔙</BackButton>
      <MainMenu />
    </HeaderContainer>
  );
};

export default Header;
