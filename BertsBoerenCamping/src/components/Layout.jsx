import React from 'react';
import Navbar from './Navbar';
import CallToAction from './CallToAction';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="layout-container">{children}</div>
      <CallToAction />
    </div>
  );
};

export default Layout;