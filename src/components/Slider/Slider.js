import React from 'react';
import styled from 'styled-components';
import ArrowButton from './ArrowButton';
import ImageList from './ImageList';

function Slider() {
  return (
    <SliderBlock>
      <ImageList />
      <ArrowButton direction='left' />
      <ArrowButton direction='right' />
    </SliderBlock>
  );
}

const SliderBlock = styled.section`
  position: relative;
  margin-top: 25px;
  height: 300px;
`;

export default Slider;
