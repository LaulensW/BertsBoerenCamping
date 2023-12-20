import React from 'react';
import BookingForm from '../components/bookingForm';
import Layout from '../components/Layout';
import BookingBannerEnUitleg from '../components/BookingBannerEnUitleg';
import PlattegrondWave from '../assets/booking-plattegrond-wave.svg';

const Booking = () => {
  return (
    <div>
      <Layout> 
      <h2></h2>
      <BookingBannerEnUitleg />
      <br/> 
      <img src={PlattegrondWave} width="100%"/>
      <BookingForm />
      </Layout> 
      
    </div>
  );
};

export default Booking;