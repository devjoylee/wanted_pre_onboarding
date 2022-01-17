import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/logo.png';
import menuButton from '../../assets/icon-menu.png';

function HeaderLogo() {
  return (
    <HeaderLogoBlock>
      <MenuButton>
        <MenuIcon src={menuButton} />
      </MenuButton>
      <Link to='/'>
        <Logo src={logoImage} />
      </Link>
    </HeaderLogoBlock>
  );
}

const HeaderLogoBlock = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 15px 0;
  height: 60px;
  padding: 15px 20px;
`;

const MenuButton = styled.button`
  margin-right: 15px;
  cursor: pointer;
`;

const MenuIcon = styled.img`
  width: 17px;
  height: 14px;
`;

const Logo = styled.img`
  width: 75px;
  height: 17px;
`;

export default HeaderLogo;