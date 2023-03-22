import React, { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';
import ImgSlider from '../Components/ImgSlider';
import Recomend from '../Components/Recomend';
import Viewers from '../Components/Viewers';
import NewDisney from '../Components/NewDisney';
import backgroundImg from '../images/home-background.png';
import Original from '../Components/Original';
import Trending from '../Components/Trending';
import { db } from "../firebase"
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';

const Home = () => {


  return (

    <div className="h-auto w-screen  justify-center items-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <span className=' invisible'>h</span>
      <ImgSlider />
      <Viewers />
      <Recomend />
      <NewDisney />
      <Trending/>
      <Original />
      {/* <Trending /> */}
    </div>



  );
};

export default Home;
