import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import ArrowButton from './ArrowButton';
import ImageList from './ImageList';
import { slideData } from '../../data/slideData';

const width = 1060;

function Slider() {
  const [slides, setSlides] = useState(slideData);
  const [translate, setTranslate] = useState(width * 2);
  const [currentSlide, setCurrentSlide] = useState(3);
  const [autoPlay, setAutoPlay] = useState(true);

  const slideRef = useRef(null);
  const autoPlayRef = useRef(null);

  // slide 양 옆에 slide 2장씩 추가
  useEffect(() => {
    setSlides([...slides.slice(-2), ...slides, ...slides.slice(0, 2)]);
  }, []);

  // setInterval로 autoPlay 설정
  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  useEffect(() => {
    let interval = null;
    const play = () => autoPlayRef.current();

    if (autoPlay) interval = setInterval(play, 3000);

    return () => {
      if (autoPlay) clearInterval(interval);
    };
  }, [autoPlay]);

  // 첫번째 or 마지막 슬라이드 도달하면 translate 이동
  useEffect(() => {
    if (currentSlide === slides.length - 2) {
      slideRef.current.ontransitionend = () => {
        removeTransition();
        setCurrentSlide(2);
        setTranslate(width);
        slideRef.current.ontransitionend = null;
      };
    } else if (currentSlide === 2) {
      slideRef.current.ontransitionend = () => {
        removeTransition();
        setCurrentSlide(slides.length - 2);
        setTranslate(width * (slides.length - 3));
        slideRef.current.ontransitionend = null;
      };
    }
  }, [currentSlide]);

  const prevSlide = () => {
    if (currentSlide > 2) {
      addTransition();
      setCurrentSlide(currentSlide - 1);
      setTranslate(translate - width);
    }
  };

  const nextSlide = () => {
    if (currentSlide < slides.length - 2) {
      addTransition();
      setCurrentSlide(currentSlide + 1);
      setTranslate(translate + width);
    }
  };

  const addTransition = () => (slideRef.current.style.transition = `all 400ms ease`);
  const removeTransition = () => (slideRef.current.style.transition = '0s');

  const handleMouseEnter = () => setAutoPlay(false);
  const handleMouseLeave = () => setAutoPlay(true);

  if (!Array.isArray(slides) || slides.length <= 0) return null;

  return (
    <SliderBlock onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <ImageList ref={slideRef} translate={translate} currentSlide={currentSlide} slides={slides} width={width} />
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
