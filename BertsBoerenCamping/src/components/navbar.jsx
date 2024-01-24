import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
      <nav className="navbar-container">
        <div className="navbar-left">
          <NavLink to="/" className="logo-link">
            <img src= "../images/BBC_LOGO.png" alt="Logo" className="logo" />
          </NavLink>
        </div>
        <div className="navbar-right">
          <NavLink to="/booking" className="nav-button">BOEKEN</NavLink>
          <NavLink to="/about" className="nav-button">OVER ONS</NavLink>
          <input type="text" placeholder="Zoeken" className="search-field" />
          <NavLink to="/Login" className="login-button">
          Login
        </NavLink>
        </div>
      </nav>
    );
  };
export default Navbar;