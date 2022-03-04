import React, { forwardRef } from 'react';
import styled from 'styled-components';
import ImageItem from './ImageItem';

const ImageList = forwardRef(({ currentSlide, translate, slides, width }, ref) => {
  const currentId = currentSlide === 2 ? slides.length - 5 : currentSlide - 3;
  return (
    <ImageListBlock ref={ref} translate={translate} totalWidth={width * slides.length} width={width}>
      {slides.map((slide, i) => (
        <ImageItem slide={slide} key={i} width={width} currentId={currentId} />
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
