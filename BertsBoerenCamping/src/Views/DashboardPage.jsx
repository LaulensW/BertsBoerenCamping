import React from 'react';
import BookingList from '../components/BookingList';
import Layout from '../components/Layout';


function DashboardPage() {
  return (
    <div>
      <Layout>
      <  BookingList />
      </Layout>
    </div>
  );
}

export default DashboardPage;