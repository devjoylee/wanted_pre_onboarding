import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import ArrowButton from './ArrowButton';
import ImageList from './ImageList';

const width = 1060;

function Slider({ slides }) {
  const [autoPlay, setAutoPlay] = useState(true);
  const [current, setCurrent] = useState({
    activeSlide: 1,
    translate: width,
  });

  const { activeSlide, translate } = current;

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
    setCurrent({
      ...current,
      translate: translate - width,
      activeSlide: activeSlide === 0 ? slides.length - 1 : activeSlide - 1,
    });
  };

  const nextSlide = () => {
    if (activeSlide < slides.length - 1) {
      setCurrent({
        ...current,
        translate: translate + width,
        activeSlide: activeSlide === slides.length - 1 ? 0 : activeSlide + 1,
      });
    }
  };

  const handleMouseEnter = () => setAutoPlay(false);
  const handleMouseLeave = () => setAutoPlay(true);

  if (!Array.isArray(slides) || slides.length <= 0) return null;

  return (
    <SliderBlock>
      <ImageList current={current} slides={slides} width={width} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} />
      <ArrowButton direction='left' handleClick={prevSlide} />
      <ArrowButton direction='right' handleClick={nextSlide} />
    </SliderBlock>
  );
}

const SliderBlock = styled.section`
  position: relative;
  margin-top: 25px;
  height: 300px;
  overflow-x: hidden;
`;

export default Slider;
