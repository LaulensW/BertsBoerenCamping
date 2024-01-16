import React from 'react';
import BookingForm from '../components/bookingForm';
import Layout from '../components/Layout';
import Footer from '../components/Footer';

const Booking = () => {
  return (
    <div>
      <Layout> 
      <h2></h2>
      <BookingForm />
      </Layout> 
      <Footer/>
    </div>
  );
};

export default Booking;