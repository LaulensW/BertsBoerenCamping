import React from 'react';
import BookingForm from '../components/bookingForm';
import Layout from '../components/Layout';
import BookingBannerEnUitleg from '../components/BookingBannerEnUitleg';
import PlattegrondWave from '../assets/booking-plattegrond-wave.svg';
import BookingPlattegrond from '../components/BookingPlattegrond';
import Footer from '../components/Footer';

const Booking = () => {
  return (
    <div>
      <img src={PlattegrondWave} style={{position: "absolute", marginTop:"685px"}}width="100%"/>
      <Layout> 
      <BookingBannerEnUitleg />
      <div style={{height: "157px"}}/>
      <BookingPlattegrond />
      <BookingForm />
      </Layout> 

    </div>
  );
};

export default Booking;