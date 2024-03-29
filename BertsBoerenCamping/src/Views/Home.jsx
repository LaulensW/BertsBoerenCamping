import React from 'react';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
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
    < BoekenInfo />
    < FAQs />
    < Reviews />  
    < Footer />
    </>
  );
};

export default Home;