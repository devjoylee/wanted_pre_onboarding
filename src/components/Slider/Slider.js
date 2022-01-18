import React from 'react';
import styled from 'styled-components';
import ImageList from './ImageList';

function Slider() {
  return (
    <SliderBlock>
      <ImageList />
    </SliderBlock>
  );
}

const SliderBlock = styled.section`
  margin-top: 25px;
`;

export default Slider;
