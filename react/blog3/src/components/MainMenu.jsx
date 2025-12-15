import { NavLink } from 'react-router';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { Menu } from 'antd';

import { setLanguage } from '../slices/languageSlice.js';

import menu from '../menu';

const MenuContainer = styled.nav`
  display: flex;
  align-items: center;

  ul.ant-menu {
      background: transparent;
  }

  li.ant-menu-item {
    margin: 0 10px;
    font-size: 20px;
    color: white;

    &:hover {
    a {
        color: white;
      }
    }

    a.active {
      color: red;
    }
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

const menuItems = menu.map(({ href, title }) => {
  return {
    key: title,
    label: <StyledNavLink to={href} end>{title}</StyledNavLink>,
  };
});

const MainMenu = () => {
  const dispatch = useDispatch();

  return (
    <MenuContainer className="main-menu">
      <Menu mode="horizontal" items={menuItems} />
      <Languages>
        <Language onClick={() => dispatch(setLanguage('en'))}>🇺🇸</Language>
        <Language onClick={() => dispatch(setLanguage('uk'))}>🇺🇦</Language>
      </Languages>
    </MenuContainer>
  );
};

export default MainMenu;
