import React from 'react';
import NavBar from '../../Home/NavBar/NavBar';
import PreviousOrders from './PreviousOrders/PreviousOrders';
import UserProfile from './UserProfile/UserProfile';
import Footer from '../../Home/Footer/Footer'

const UserDashboard = () => {
  return (
    <>
      <NavBar/>
      <UserProfile/>
      <PreviousOrders/>
      <Footer/>
    </>
  );
};

export default UserDashboard;