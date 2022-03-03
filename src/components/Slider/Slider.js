import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import ArrowButton from './ArrowButton';
import ImageList from './ImageList';
import { slideData } from '../../data/slideData';

const width = 1060;

function Slider() {
  const [slides, setSlides] = useState(slideData);
  const [translate, setTranslate] = useState(1060 * 2);
  const [currentSlide, setCurrentSlide] = useState(3);
  const [autoPlay, setAutoPlay] = useState(true);

  const slideRef = useRef(null);
  // const { activeSlide, translate } = current;

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
      // interval = setInterval(play, 3000);
    }

    return () => {
      if (autoPlay) {
        clearInterval(interval);
      }
    };
  }, [autoPlay]);

  useEffect(() => {
    setSlides([...slides.slice(-2), ...slides, ...slides.slice(0, 2)]);
  }, []);

  useEffect(() => {
    console.log(slideRef.current);
    if (currentSlide === slides.length - 2) {
      slideRef.current.ontransitionend = () => {
        console.log('transition 끝');
        nextSlide();
        slideRef.current.ontransitionend = null;
      };
      console.log(currentSlide);
    }
  }, [currentSlide]);

  const prevSlide = () => {};

  const nextSlide = () => {
    if (currentSlide === slides.length - 2) {
      setCurrentSlide(2);
      setTranslate(1060);
    } else if (currentSlide < slides.length - 2) {
      setCurrentSlide(currentSlide + 1);
      setTranslate(width * currentSlide);
    }
  };

  const handleMouseEnter = () => setAutoPlay(false);
  const handleMouseLeave = () => setAutoPlay(true);

  if (!Array.isArray(slides) || slides.length <= 0) return null;

  return (
    <SliderBlock>
      <ImageList
        ref={slideRef}
        translate={translate}
        currentSlide={currentSlide}
        slides={slides}
        width={width}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      />
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
