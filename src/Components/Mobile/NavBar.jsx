// Navbar.js

import React from "react";
import { Link } from "react-router-dom";
import HamBurger from "../../../assets/shared/icon-hamburger.svg"; 
import Logo from '../../../assets/shared/logo.svg';

const Navbar = ({ isOpen, toggle }) => {
  return (
    <nav className={isOpen ? "navbar active" : "navbar"}>
      <div className="mobileHeader">
        <img className="logo" src={Logo} alt="logo" />
        <img src={HamBurger} alt="hamburger" className="hamburger" onClick={toggle} />
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="/" className="navbar-link" onClick={toggle}>
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/about" className="navbar-link" onClick={toggle}>
            About
          </Link>
        </li>
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
};

export default Navbar;
