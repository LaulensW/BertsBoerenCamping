import React from 'react';
import BookingForm from '../components/bookingForm';
import Layout from '../components/Layout';

const Booking = () => {
  return (
    <div>
      <Layout> 
      <h2>Booking Page</h2>
      <BookingForm />
      </Layout> 
    </div>
  );
};

export default Booking;