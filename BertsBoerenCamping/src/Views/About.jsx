import React from 'react';
import Layout from '../components/Layout';
import Banner from '../components/AboutBanner';
import OnsTeam from '../components/AboutTeam';

const About = () => {
  return (
    <>
      <Layout>      
        < Banner />
      </Layout>  
      < OnsTeam />      
    </>
  );
};

export default About;