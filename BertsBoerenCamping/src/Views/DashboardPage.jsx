import React from 'react';
import DashboardBento from '../components/dashboard_bento.jsx';
import Layout from '../components/Layout';
import Footer from '../components/Footer';

function DashboardPage() {
  return (
    <div>
      <Layout>
      <  DashboardBento />
      </Layout>
      <Footer/>
    </div>
  );
}

export default DashboardPage;