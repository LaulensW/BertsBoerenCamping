import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
      <nav className="navbar-container">
        <div className="navbar-left">
          <Link to="/" className="logo-link">
            <img src= "../images/Logo-Bertsboerencamping-new.png" alt="Logo" className="logo" />
          </Link>
        </div>
        <div className="navbar-right">
          <Link to="/booking" className="nav-button">Booking</Link>
          <Link to="/about" className="nav-button">About</Link>
          <input type="text" placeholder="Search" className="search-field" />
          <Link to="/dashboard" className="login-button">
          Login
        </Link>
        </div>
      </nav>
    );
  };
export default Navbar;