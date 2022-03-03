import React from 'react';
import styled from 'styled-components';
import { DEVICE } from '../data/device';

function Container({ children }) {
  return <ContainerBlock>{children}</ContainerBlock>;
}

const ContainerBlock = styled.div`
  max-width: 1060px;
  height: 100%;
  margin: 0 auto;

  @media ${DEVICE.LARGE} {
    width: 90%;
  }

  @media ${DEVICE.SMALL} {
    width: 100%;
    padding: 0 15px;
  }
`;

export default Container;
