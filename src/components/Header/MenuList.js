import React from 'react';
import styled from 'styled-components';
import { menuItems } from '../../data/menuItems';
import MenuItem from './MenuItem';

function MenuList() {
  return (
    <MenuListBlock>
      {menuItems.map((item) => (
        <MenuItem menuItem={item} key={item.id} />
      ))}
    </MenuListBlock>
  );
}

const MenuListBlock = styled.ul`
  display: flex;
`;

export default MenuList;
