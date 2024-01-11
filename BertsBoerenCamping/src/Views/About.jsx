import React from 'react';
import Layout from '../components/Layout';
import Banner from '../components/AboutBanner';
import OnsTeam from '../components/AboutTeam';
import Bedrijven from '../components/AboutBenN';

const About = () => {
  return (
    <>
      <Layout>      
        < Banner />
      </Layout>  
        < OnsTeam /> 
        <Bedrijven/>
    </>
  );
};

export default About;