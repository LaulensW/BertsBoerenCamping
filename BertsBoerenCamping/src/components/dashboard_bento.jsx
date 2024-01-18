import React from 'react';
import './Dashboard_Bento.css';
import BookingList from './BookingList';
import Wave from '../assets/about-banner-wave.svg';
import TodoList from './TodoList';

const DashboardBento = () => {
  return (
    <div className="container">
      <div className="header-box">
      <div className="banner">
            <p className="banner-title-cursive">Dashboard</p>
            <h className="banner-title">DASHBOARD</h>
            <img src={Wave} alt="Wave" className="banner-wave"/>
            <img src="../images/Banner_Background.png" alt="Banner" className="banner-background"/>
        </div>
      </div>
      <div className="grid-container">
        <div className="box">
          To Do lijst
          <TodoList />
        </div>
        <div className="box">Boekingen
            <BookingList />
        </div>
        <div className="box">Anuleringen</div>
      </div>
    </div>
  );
};

export default DashboardBento;