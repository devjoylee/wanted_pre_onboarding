import React, { useState } from 'react';
import styled from 'styled-components';
import { slideData } from '../../data/slideData';
import ArrowButton from './ArrowButton';
import ImageList from './ImageList';

const slideWidth = 1060 + 24; // width + margin

function Slider() {
  const [state, setState] = useState({
    activeSlide: 1,
    translate: slideWidth,
  });

  const { activeSlide, translate } = state;

  const prevSlide = () => {
    setState({
      ...state,
      translate: translate - slideWidth,
      activeSlide: activeSlide === 0 ? slideData.length - 1 : activeSlide - 1,
    });
  };

  const nextSlide = () => {
    if (activeSlide < slideData.length - 1) {
      setState({
        ...state,
        translate: translate + slideWidth,
        activeSlide: activeSlide === slideData.length - 1 ? 0 : activeSlide + 1,
      });
    }
  };

  if (!Array.isArray(slideData) || slideData.length <= 0) {
    return null;
  }

  return (
    <SliderBlock>
      <ImageList state={state} slides={slideData} slideWidth={slideWidth} />
      <ArrowButton direction='left' handleClick={prevSlide} />
      <ArrowButton direction='right' handleClick={nextSlide} />
    </SliderBlock>
  );
}

const SliderBlock = styled.section`
  position: relative;
  margin-top: 25px;
  height: 300px;
`;

export default Slider;
