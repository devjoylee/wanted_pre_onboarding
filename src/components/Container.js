import React from 'react';
import styled from 'styled-components';

function Container({ children }) {
  return <ContainerBlock>{children}</ContainerBlock>;
}

const ContainerBlock = styled.div`
  max-width: 1060px;
  height: 100%;
  margin: 0 auto;
`;

export default Container;
