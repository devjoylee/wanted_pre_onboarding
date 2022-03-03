import React, { forwardRef } from 'react';
import styled from 'styled-components';
import ImageItem from './ImageItem';

const ImageList = forwardRef(({ currentSlide, translate, slides, width, handleMouseEnter, handleMouseLeave }, ref) => {
  return (
    <ImageListBlock
      ref={ref}
      translate={translate}
      totalWidth={width * slides.length}
      width={width}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {slides.map((slide, i) => (
        <ImageItem slide={slide} key={i} width={width} currentSlide={currentSlide} />
      ))}
    </ImageListBlock>
  );
});

const ImageListBlock = styled.ul`
  display: flex;
  height: 100%;
  width: ${({ totalWidth }) => totalWidth}px;
  transform: translateX(-${({ translate }) => translate}px);
  transition: transform ease-out 0.4s;
  position: absolute;
  left: calc((100% - ${({ width }) => width}px) / 2);
`;

export default ImageList;
