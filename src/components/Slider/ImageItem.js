import React from 'react';
import styled from 'styled-components';

function ImageItem({ slide }) {
  const { title, description, image } = slide;

  return (
    <ImageItemBlock>
      <SlideImage src={image} alt={title} />
    </ImageItemBlock>
  );
}

const ImageItemBlock = styled.li``;

const SlideImage = styled.img``;

export default ImageItem;
