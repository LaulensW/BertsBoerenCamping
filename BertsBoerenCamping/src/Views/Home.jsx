import React from 'react';
import Layout from '../components/Layout';
import CallToAction from '../components/CallToAction';
import Campingplekken from '../components/Campingplekken';
import BoekenInfo from '../components/BoekenInfo';

const Home = () => {
  return (
    <>
    <Layout>
      {/* Home-specific content */}
    </Layout>
    < CallToAction />
    < Campingplekken />
    < BoekenInfo />
    </>
  );
};

export default Home;