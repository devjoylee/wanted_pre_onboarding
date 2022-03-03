import React from 'react';
import styled from 'styled-components';
import ImageItem from './ImageItem';

function ImageList({ current, slides, width, handleMouseEnter, handleMouseLeave }) {
  const { activeSlide, translate } = current;

  return (
    <ImageListBlock
      translate={translate}
      totalWidth={width * slides.length}
      width={width}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {slides.map((slide) => (
        <ImageItem slide={slide} key={slide.id} width={width} activeSlide={activeSlide} />
      ))}
    </ImageListBlock>
  );
}

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
