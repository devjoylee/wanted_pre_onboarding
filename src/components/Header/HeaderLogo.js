import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MenuIcon, LogoImage } from '../../assets';
import { device } from '../../data/device';

function HeaderLogo() {
  return (
    <HeaderLogoBlock>
      <MenuButton>
        <MenuIconImg src={MenuIcon} />
      </MenuButton>
      <Link to='/'>
        <Logo src={LogoImage} />
      </Link>
    </HeaderLogoBlock>
  );
}

const HeaderLogoBlock = styled.div`
  display: flex;
  align-items: center;

  @media ${device.tabletS} {
    flex-basis: 100%;
    padding-top: 15px;
  }
`;

const MenuButton = styled.button`
  display: flex;
  margin-right: 15px;
  cursor: pointer;
`;

const MenuIconImg = styled.img`
  width: 17px;
  height: 14px;
`;

const Logo = styled.img`
  width: 75px;
  height: 17px;
  margin-top: 4px;
`;

export default HeaderLogo;
