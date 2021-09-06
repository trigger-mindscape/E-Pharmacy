import React from 'react';
import Hero from '../../Components/Home/Hero/Hero';
import Header from '../../Components/Home/NavBar/Header';
import NavBar from '../../Components/Home/NavBar/NavBar';
import VendorCTA from '../../Components/Home/VendorCTA/VendorCTA';

const Home = () => {
  return (
    <>
      {/* Background Image with 3 sections */}
      <div
        className="min-h-auto lg:min-h-screen bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(https://i.ibb.co/9hFrQqt/medicine-home-banner.png)`,
        }}
      >
        <Header />
        <NavBar />
        <Hero />
      </div>
      <VendorCTA/>
    </>
  );
};

export default Home;
