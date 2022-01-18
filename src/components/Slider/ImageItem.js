import React from 'react';
import styled from 'styled-components';
import { NextIcon } from '../../assets';

function ImageItem({ slide, activeSlide }) {
  const { id, title, description, image } = slide;

  return (
    <ImageItemBlock active={id === activeSlide}>
      <SlideImage src={image} alt={title} />
      <SlideInfo active={id === activeSlide}>
        <TextWrapper>
          <SlideTitle>{title}</SlideTitle>
          <SlideDescription>{description}</SlideDescription>
        </TextWrapper>
        <ButtonWrapper>
          <LinkButton>
            바로가기
            <NextIcon />
          </LinkButton>
        </ButtonWrapper>
      </SlideInfo>
    </ImageItemBlock>
  );
}

const ImageItemBlock = styled.li`
  position: relative;
  border-radius: 5px;
  filter: brightness(${({ active }) => (active ? 100 : 50)}%);
  cursor: pointer;

  & + li {
    margin-left: 24px;
  }
`;

const SlideImage = styled.img`
  display: block;
  border-radius: 4px;
  z-index: 10;
`;

const SlideInfo = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 25px;
  bottom: 30px;
  width: 330px;
  height: 146px;
  border-radius: 4px;
  background-color: #fff;
  cursor: default;
  z-index: 11;
  opacity: ${({ active }) => (active ? 1 : 0)};
  transition: opacity ease-in 0.2s;
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

  svg {
    width: 14px;
    height: 14px;
    fill: #36f;
    padding-top: 1px;
  }
`;

export default ImageItem;
