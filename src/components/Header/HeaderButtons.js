import React from 'react';
import styled from 'styled-components';
import { AlertIcon, SearchIcon, ProfileImage } from '../../assets';
import NewBadge from './NewBadge';

function HeaderButtons() {
  return (
    <ButtonList>
      <ButtonItem>
        <SearchIcon />
      </ButtonItem>
      <ButtonItem>
        <AlertIcon />
        <NewBadge />
      </ButtonItem>
      <ButtonItem>
        <Profile src={ProfileImage} />
        <NewBadge />
      </ButtonItem>
      <ButtonItem>
        <Dashboard>기업 서비스</Dashboard>
      </ButtonItem>
    </ButtonList>
  );
}

const ButtonList = styled.ul`
  display: flex;
  align-items: center;
`;

const ButtonItem = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  height: 30px;
  & + li {
    margin-left: 20px;
  }

  &:last-child::before {
    content: '';
    width: 1px;
    height: 10px;
    background-color: #e1e2e3;
    margin-left: 10px;
    margin-right: 30px;
  }

  & > *:first-child {
    cursor: pointer;
  }
`;

const Profile = styled.img`
  width: 32px;
  height: 32px;
  padding: 1px;
  border-radius: 50%;
  border: 1px solid #e1e2e3;
`;

const Dashboard = styled.button`
  padding: 0 10px;
  height: 30px;
  line-height: 30px;
  font-size: 13px;
  font-weight: 400;
  color: #666;
  border: 1px solid #e1e2e3;
  border-radius: 15px;
  cursor: pointer;
`;

export default HeaderButtons;
