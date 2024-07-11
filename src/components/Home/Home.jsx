import React from 'react';
import Hero from '../Hero/Hero'; // Adjust the path if necessary
import Banner from '../Banner/Banner'; // Adjust the path if necessary
import Clients from '../Client/Client.jsx'; // Adjust the path if necessary
import Footer from '../Footer/Footer.jsx'; // Adjust the path if necessary
import Choose from '../Choose/Choose.jsx'
import MainService from '../MainService/HeroParallaxComponent.jsx';

const Home = () => {
  return (
    <>
      <Hero />
      <Choose />
      <Banner />
      <Clients />
      <Footer />
    </>
  );
};

export default Home;
