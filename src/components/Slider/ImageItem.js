import React from 'react';
import styled from 'styled-components';

function ImageItem({ slide }) {
  const { title, description, image } = slide;

  return (
    <ImageItemBlock>
      <SlideImage src={image} alt={title} />
      <SlideInfo>
        <TextWrapper>
          <SlideTitle>{title}</SlideTitle>
          <SlideDescription>{description}</SlideDescription>
        </TextWrapper>
        <ButtonWrapper>
          <LinkButton>바로가기</LinkButton>
        </ButtonWrapper>
      </SlideInfo>
    </ImageItemBlock>
  );
}

const ImageItemBlock = styled.li`
  position: relative;
  margin: 0 12px;
  border-radius: 5px;
`;

const SlideImage = styled.img`
  border-radius: 4px;
  z-index: 10;
`;

const SlideInfo = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 25px;
  bottom: 35px;
  width: 330px;
  height: 146px;
  border-radius: 4px;
  background-color: #fff;
  z-index: 11;
`;

const TextWrapper = styled.div`
  padding: 20px;
`;

const SlideTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 2px;
`;

const SlideDescription = styled.p`
  font-size: 14px;
  color: #333;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  padding-left: 20px;
  border-top: 1px solid #e1e2e3;
`;

const LinkButton = styled.button`
  font-size: 14px;
  font-weight: 700;
  color: #36f;
  cursor: pointer;
`;

export default ImageItem;