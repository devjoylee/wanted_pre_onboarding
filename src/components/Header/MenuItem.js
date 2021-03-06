import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BetaIcon, NewIcon } from '../../assets';
import { DEVICE } from '../../data/device';

function MenuItem({ menuItem }) {
  const { menuName, icon, isVisibleOnMobile } = menuItem;

  return (
    <MenuItemBlock isVisible={isVisibleOnMobile}>
      <MenuLink to='/'>
        {menuName}
        {icon && (icon === 'beta' ? <BetaIcon /> : <NewIcon />)}
      </MenuLink>
    </MenuItemBlock>
  );
}

const MenuItemBlock = styled.li`
  height: inherit;
  display: inline-block;
  &:first-child {
    display: none;
  }

  @media ${DEVICE.SMALL} {
    display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};

    &:first-child {
      display: block;
      a {
        padding-left: 0;
      }
    }
  }
`;

const MenuLink = styled(Link)`
  position: relative;
  font-size: 14px;
  font-weight: 600;
  padding: 15px;
  display: inline-block;
  color: #444;

  & > svg {
    position: absolute;
    top: 14px;
    right: -4px;
    pointer-events: none;
    font-style: normal;
  }

  @media (max-width: 1100px) {
    font-size: 13px;
    padding: 15px 10px;
  }

  @media ${DEVICE.SMALL} {
    font-size: 14px;
  }
`;

export default MenuItem;
