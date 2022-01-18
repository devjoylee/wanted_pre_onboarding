import React from 'react';
import styled from 'styled-components';
import ImageItem from './ImageItem';

function ImageList({ state, slides, slideWidth, handleMouseEnter, handleMouseLeave }) {
  const { activeSlide, translate } = state;
  const totalWidth = slideWidth * slides.length;

  return (
    <ImageListBlock translate={translate} width={totalWidth} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {slides.map((slide) => (
        <ImageItem slide={slide} key={slide.id} activeSlide={activeSlide} />
      ))}
    </ImageListBlock>
  );
}

const ImageListBlock = styled.ul`
  display: flex;
  height: 100%;
  width: ${({ width }) => width}px;
  transform: translateX(-${({ translate }) => translate}px);
  transition: transform ease-out 0.4s;
  position: absolute;
  left: calc((100% - 1060px) / 2);
`;

export default ImageList;
