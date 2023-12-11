import React from 'react';
import './Dashboard_Bento.css';
import BookingList from './BookingList';

const DashboardBento = () => {
  return (
    <div className="container">
      <div className="header-box">
        <header className="header">Dashboard</header>
      </div>
      <div className="grid-container">
        <div className="box">To Do</div>
        <div className="box">Boekingen
            <BookingList />
        </div>
        <div className="box">Anuleringen</div>
      </div>
    </div>
  );
};

export default DashboardBento;