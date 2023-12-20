import React from 'react';
import BookingForm from '../components/bookingForm';
import Layout from '../components/Layout';
import BookingBannerEnUitleg from '../components/BookingBannerEnUitleg';

const Booking = () => {
  return (
    <div>
      <Layout> 
      <h2></h2>
      <BookingBannerEnUitleg />
      <BookingForm />
      </Layout> 
      
    </div>
  );
};

export default Booking;