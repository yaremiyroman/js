import styled from 'styled-components';

import { mobile } from '../breakpoints.js';

const SidebarContainer = styled.aside`
  max-width: 25%;
  width: 25%;

  @media (max-width: ${mobile}px) {
    max-width: 100%;
    width: 100%;
  }
`;

const Sidebar = ({ children }) => {
  return (
    <SidebarContainer>
      {children}
    </SidebarContainer>
  );
};

export default Sidebar;
