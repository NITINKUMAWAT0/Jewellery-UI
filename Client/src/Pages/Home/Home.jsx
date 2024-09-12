import React from 'react';
import './Home.scss';
import Carousel from '../../Components/Carousel_Component/Carousel';
import HomeProducts from '../../Components/Home_Products/HomeProducts';
const Home = () => {
  return (
    <div className='home'>
      <Carousel />
      <HomeProducts/>
    </div>
  )
}

export default Home