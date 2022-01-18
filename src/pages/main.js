import React from 'react';
import { Header, Slider } from '../components';
import { menuItems } from '../data/menuItems';
import { slideData } from '../data/slideData';

function MainPage() {
  return (
    <>
      <Header menuItems={menuItems} />
      <Slider slides={slideData} />
    </>
  );
}

export default MainPage;
