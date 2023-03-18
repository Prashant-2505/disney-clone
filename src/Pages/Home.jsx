import React from 'react';
import { useLocation } from 'react-router-dom';
import ImgSlider from '../Components/ImgSlider';
import Recomend from '../Components/Recomend';
import Viewers from '../Components/Viewers';
import backgroundImg from '../images/home-background.png';

const Home = () => {
  return (

    <div style={{ backgroundImage: `url(${backgroundImg})`, height: '100vh', width: '100vw', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <span className=' invisible'>h</span>
      <ImgSlider />
      <Viewers/>
      <Recomend/>
    </div>


  );
};

export default Home;
