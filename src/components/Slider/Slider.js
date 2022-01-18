import React, { useState, useEffect, useRef } from 'react';
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

  const [autoPlay, setAutoPlay] = useState(true);

  const { activeSlide, translate } = state;

  const autoPlayRef = useRef();

  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };

    let interval = null;

    if (autoPlay) {
      interval = setInterval(play, 3000);
    }

    return () => {
      if (autoPlay) {
        clearInterval(interval);
      }
    };
  }, [autoPlay, activeSlide]);

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

  const handleMouseEnter = () => setAutoPlay(false);
  const handleMouseLeave = () => setAutoPlay(true);

  if (!Array.isArray(slideData) || slideData.length <= 0) {
    return null;
  }

  return (
    <SliderBlock>
      <ImageList state={state} slides={slideData} slideWidth={slideWidth} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} />
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
