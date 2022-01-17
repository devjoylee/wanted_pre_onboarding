import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BetaIcon from '../../assets/icons/icon-beta.svg';
import NewIcon from '../../assets/icons/icon-new.svg';

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
  padding: 0 15px;
  display: inline-block;
  color: #444;

  & > svg {
    position: absolute;
    top: -1px;
    right: -4px;
    pointer-events: none;
    font-style: normal;
  }
`;

export default MenuItem;
