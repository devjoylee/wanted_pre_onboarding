import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function MenuItem({ menuItem }) {
  const { menuName } = menuItem;

  return (
    <MenuItemBlock>
      <MenuLink to='/'>{menuName}</MenuLink>
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
  font-size: 14px;
  font-weight: 600;
  padding: 0 15px;
  display: inline-block;
  color: #444;
`;

export default MenuItem;
