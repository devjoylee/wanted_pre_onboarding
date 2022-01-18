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

const ImageListBlock = styled.ul``;

export default ImageList;
