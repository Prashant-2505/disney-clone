import React from 'react';
import { useLocation } from 'react-router-dom';
import backgroundImg from '../images/home-background.png';

const Home = () => {
  return (
    <div style={{ backgroundImage: `url(${backgroundImg})`, height: '100vh', width: '100vw' }}>
      {/* Your content here */}
    </div>
  );
};

export default Home;
