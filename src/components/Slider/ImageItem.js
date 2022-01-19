import React from 'react';
import styled from 'styled-components';
import { NextIcon } from '../../assets';
import { device } from '../../data/device';

function ImageItem({ slide, activeSlide }) {
  const { id, title, description, image } = slide;

  return (
    <ImageItemBlock>
      <SlideImage imageUrl={image} active={id === activeSlide} />
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
  width: 100%;
  cursor: pointer;
  margin: 0 10px;
`;

const SlideImage = styled.div`
  width: 100%;
  height: 100%;
  filter: brightness(${({ active }) => (active ? 100 : 50)}%);
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
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

  @media ${device.laptop} {
    width: 100%;
    height: auto;
    left: 0;
    bottom: 0;
    border-radius: 0;
    text-align: center;
    justify-content: center;
    opacity: 1;
  }
`;

const TextWrapper = styled.div`
  padding: 20px;
  @media ${device.laptop} {
    font-size: 18px;
    padding-bottom: 5px;
  }
`;

const SlideTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 2px;
  @media ${device.laptop} {
    font-size: 18px;
  }
`;

const SlideDescription = styled.p`
  font-size: 14px;
  color: #333;
  @media ${device.laptop} {
    font-size: 13px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  padding-left: 20px;
  border-top: 1px solid #e1e2e3;

  @media ${device.laptop} {
    border: none;
    padding-left: 0;
    padding-bottom: 20px;
    justify-content: center;
  }
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
