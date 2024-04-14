import React from "react";
import { Link } from "react-router-dom";
import HamBurger from "../../../assets/shared/icon-hamburger.svg";
import Logo from "../../../assets/shared/logo.svg";
import "./Mobile.css";

export default function NavBar({ isOpen, toggle }) {
  return (
    <nav className="navbar">
      <div className="mobileHeader">
        <img className="logo" src={Logo} alt="logo" />
        <img
          src={HamBurger}
          alt="hamburger"
          className="hamburger"
          onClick={toggle} // Add onClick event handler here
        />
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/about" className="navbar-link">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
