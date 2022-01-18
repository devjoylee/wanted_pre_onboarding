import React from 'react';
import styled from 'styled-components';
import { PrevIcon, NextIcon } from '../../assets';

function ArrowButton({ direction, handleClick }) {
  return (
    <ArrowButtonBlock direction={direction} onClick={handleClick}>
      {direction === 'left' ? <PrevIcon /> : <NextIcon />}
    </ArrowButtonBlock>
  );
}

const ArrowButtonBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 60px;
  border-radius: 15px;
  background-color: #fff;
  opacity: 0.5;
  z-index: 20;
  position: absolute;
  top: 50%;
  ${({ direction }) => (direction === 'left' ? 'left' : 'right')}: calc((100% - 1200px) / 2);
  transform: translateY(-50%);
  cursor: pointer;

  svg {
    width: 16px;
    height: 16px;
  }
`;

export default ArrowButton;
