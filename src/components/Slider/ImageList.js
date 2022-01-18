import React from 'react';
import styled from 'styled-components';
import { slideData } from '../../data/slideData';
import ImageItem from './ImageItem';

function ImageList() {
  return (
    <ImageListBlock>
      {slideData.map((slide) => (
        <ImageItem slide={slide} key={slide.id} />
      ))}
    </ImageListBlock>
  );
}

const ImageListBlock = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export default ImageList;
