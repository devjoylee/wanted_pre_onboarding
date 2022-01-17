import React from 'react';
import HeaderLogo from './HeaderLogo';
import styled from 'styled-components';
import Container from '../Container';

function Header() {
  return (
    <HeaderBlock>
      <Container>
        <HeaderLogo />
      </Container>
    </HeaderBlock>
  );
}

const HeaderBlock = styled.header`
  width: 100%;
  background-color: #fff;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
`;

export default Header;
