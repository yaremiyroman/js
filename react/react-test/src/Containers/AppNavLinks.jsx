import { Outlet, NavLink } from 'react-router';
import { useState, useEffect } from 'react';

import styled from 'styled-components';

const MenuContainer = styled.nav`
  margin-bottom: 40px;
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

const App = () => {
  return (
    <>
      <MenuContainer className="main-menu">
        <MenuList>
          <MenuItem>
            <StyledNavLink to="/" end>Головна</StyledNavLink> {/* end - щоб не підсвічувався для дочірніх маршрутів */}
          </MenuItem>
          <MenuItem>
            <StyledNavLink to="/about">Про нас</StyledNavLink> {/* Посилання на сторінку "Про нас" */}
          </MenuItem>
          <MenuItem>
            <StyledNavLink to="/contacts">Контакти</StyledNavLink> {/* Посилання на сторінку "Контакти" */}
          </MenuItem>
          <MenuItem>
            <StyledNavLink to="/info">Info</StyledNavLink> {/* Посилання на сторінку "Контакти" */}
          </MenuItem>
          <MenuItem>
            <StyledNavLink to="/details">Деталі</StyledNavLink> {/* Посилання на сторінку "Контакти" */}
          </MenuItem>
        </MenuList>
      </MenuContainer>
      <Outlet />
    </>
  );
};

export default App;
