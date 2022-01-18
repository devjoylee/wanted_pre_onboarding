import React from 'react';
import styled from 'styled-components';
import { device } from '../data/device';

function Container({ children }) {
  return <ContainerBlock>{children}</ContainerBlock>;
}

const ContainerBlock = styled.div`
  max-width: 1060px;
  height: 100%;
  margin: 0 auto;

  @media ${device.laptop} {
    width: 90%;
  }

  @media ${device.mobile} {
    width: 100%;
    padding: 0 15px;
  }
`;

export default Container;
