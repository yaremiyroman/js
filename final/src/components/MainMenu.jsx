import { NavLink } from 'react-router';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { setLanguage } from '../slices/languageSlice.js';

import menu from '../menu';

const MenuContainer = styled.nav`
  display: flex;
  align-items: center;
`;

const MenuList = styled.ul`
  display: flex;
`;

const MenuItem = styled.li`
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;

  &.active {
    color: red;
  }
`;

const Languages = styled.div`
  display: flex;
  gap: 10px;
  margin-left: 20px;
`;

const Language = styled.div`
  cursor: pointer;
  user-select: none;
  font-size: 30px;
`;

const MainMenu = () => {
  const dispatch = useDispatch();

  return (
    <MenuContainer className="main-menu">
      <MenuList>
        {menu.map(({ href, title, blank }) => (
          <MenuItem key={title}>
            <StyledNavLink to={href} end>{title}</StyledNavLink>
          </MenuItem>
        ))}
      </MenuList>
      <Languages>
        <Language onClick={() => dispatch(setLanguage('en'))}>🇺🇸</Language>
        <Language onClick={() => dispatch(setLanguage('uk'))}>🇺🇦</Language>
      </Languages>
    </MenuContainer>
  );
};

export default MainMenu;
