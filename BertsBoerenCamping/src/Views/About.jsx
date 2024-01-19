import React from 'react';
import Layout from '../components/Layout';
import Banner from '../components/AboutBanner';
import OnsTeam from '../components/AboutTeam';
import Bedrijven from '../components/AboutBenN';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      <Layout>      
        < Banner />
      </Layout>  
        < OnsTeam /> 
        <Bedrijven/>
        <Footer />
    </>
  );
};

export default About;