import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
      <nav className="navbar-container">
        <div className="navbar-left">
          <Link to="/" className="logo-link">
            <img src= "../images/BBC_LOGO.png" alt="Logo" className="logo" />
          </Link>
        </div>
        <div className="navbar-right">
          <Link to="/booking" className="nav-button">Boeken</Link>
          <Link to="/about" className="nav-button">Over ons</Link>
          <input type="text" placeholder="Zoeken" className="search-field" />
          <Link to="/Login" className="login-button">
          Login
        </Link>
        </div>
      </nav>
    );
  };
export default Navbar;