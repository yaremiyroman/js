import { NavLink } from 'react-router';

import menu from '../menu';

import styled from 'styled-components';

const MenuContainer = styled.nav`
`;

const MenuList = styled.ul`
  display: flex;
`;

const MenuItem = styled.li`
  margin-right: 20px;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;

  &.active {
    color: red;
  }
`;

const MainMenu = () => {
  return (
    <MenuContainer className="main-menu">
      <MenuList>
        {menu.map(({ href, title, blank }) => (
          <MenuItem key={title}>
            <StyledNavLink to={href} end>{title}</StyledNavLink>
          </MenuItem>
        ))}
      </MenuList>
    </MenuContainer>
  );
};

export default MainMenu;
