import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Blog from '../../Components/Home/Blog/Blog';
import Footer from '../../Components/Home/Footer/Footer';
import Hero from '../../Components/Home/Hero/Hero';
import Header from '../../Components/Home/NavBar/Header';
import NavBar from '../../Components/Home/NavBar/NavBar';
import OfferCard from '../../Components/Home/OfferCard/OfferCard';
import PictureUpload from '../../Components/Home/PictureUpload/PictureUpload';
import ShopCard from '../../Components/Home/ShopCard/ShopCard';
import VendorCTA from '../../Components/Home/VendorCTA/VendorCTA';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>E-Pharmacy</title>
        <meta name='' content='' />
      </Helmet>
      {/* Background Image with 3 sections */}
      <div
        className="bg-center bg-no-repeat bg-cover min-h-auto lg:min-h-screen"
        style={{
          backgroundImage: `url(https://i.ibb.co/9hFrQqt/medicine-home-banner.png)`,
        }}
      >
        <Header />
        <NavBar />
        <Hero />
      </div>
      <OfferCard />
      <ShopCard />
      <PictureUpload />
      <VendorCTA />
      <Blog />
      <Footer />
    </>
  );
};

export default Home;
