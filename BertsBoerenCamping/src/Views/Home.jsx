import React from 'react';
import Layout from '../components/Layout';
import CallToAction from '../components/CallToAction';
import Campingplekken from '../components/Campingplekken';
import BoekenInfo from '../components/BoekenInfo';
import FAQs from '../components/FAQs';
import Reviews from '../components/Reviews';

const Home = () => {
  return (
    <>
    <Layout>
      {/* Home-specific content */}
    </Layout>
    < CallToAction />
    < Campingplekken />
    <img src='.../assets/campingplek-wave.svg'/>
    < BoekenInfo />
    < FAQs />
    < Reviews />
    </>
  );
};

export default Home;