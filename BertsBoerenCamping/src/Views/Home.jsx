import React from 'react';
import Layout from '../components/Layout';
import CallToAction from '../components/CallToAction';
import Campingplekken from '../components/Campingplekken';
import BoekenInfo from '../components/BoekenInfo';
import FAQs from '../components/FAQs';
import Reviews from '../components/Reviews';
import CampingWave from '../assets/campingplek-wave.svg';

const Home = () => {
  return (
    <>
    <Layout>
      {/* Home-specific content */}
    </Layout>
    < CallToAction />
    < Campingplekken />
      <img src={CampingWave}  alt='campingwave' className='campingwave' width='100%'/>
    < BoekenInfo />
    < FAQs />
    < Reviews />
    </>
  );
};

export default Home;