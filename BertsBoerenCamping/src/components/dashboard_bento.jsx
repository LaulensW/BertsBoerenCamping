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
          <section className='title-combo-dashboard'>
            <h className='dashboard-title'>TO DO LIJST</h>
            <p className='dashboard-title-cursive'>To do lijst</p>
          </section>
          <TodoList />
        </div>
        <div className="box">
          <section className='title-combo-dashboard'>
            <h className='dashboard-title'>BOEKINGEN</h>
            <p className='dashboard-title-cursive'>Boekingen</p>
          </section>
            <BookingList />
        </div>
        <div className="box">
          <section className='title-combo-dashboard'>
            <h className='dashboard-title'>ANNULERINGEN</h>
            <p className='dashboard-title-cursive'>Annuleringen</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DashboardBento;