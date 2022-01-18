import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BetaIcon, NewIcon } from '../../assets';

function MenuItem({ menuItem }) {
  const { menuName, icon } = menuItem;

  return (
    <MenuItemBlock>
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
`;

export default MenuItem;
