import React from 'react';
import styled from 'styled-components';
import Container from '../Container';
import HeaderLogo from './HeaderLogo';
import MenuList from './MenuList';
import HeaderButtons from './HeaderButtons';
import { DEVICE } from '../../data/device';

function Header({ menuItems }) {
  return (
    <HeaderBlock>
      <Container>
        <HeaderInner>
          <HeaderLogo />
          <MenuList menuItems={menuItems} />
          <HeaderButtons />
        </HeaderInner>
      </Container>
    </HeaderBlock>
  );
}

const HeaderBlock = styled.header`
  width: 100%;
  height: 50px;
  background-color: #fff;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);

  @media ${DEVICE.MEDIUM} {
    height: 110px;
  }
`;

const HeaderInner = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default Header;
