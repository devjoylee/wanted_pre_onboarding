import React from 'react';
import styled from 'styled-components';
import MenuItem from './MenuItem';

function MenuList({ menuItems }) {
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
