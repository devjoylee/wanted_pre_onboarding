import React from 'react';
import styled from 'styled-components';
import { NewBgIcon } from '../../assets';

function NewBadge() {
  return (
    <NewBadgeWrapper>
      <NewBgIcon />
    </NewBadgeWrapper>
  );
}

const NewBadgeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -1px;
  right: -5px;
  width: 13px;
  height: 13px;
  background: #36f;
  border-radius: 5px;
`;

export default NewBadge;
