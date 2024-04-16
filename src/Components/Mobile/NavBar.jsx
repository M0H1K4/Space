import React, { useState } from "react";
import { Link } from "react-router-dom";
import HamBurger from "../../../assets/shared/icon-hamburger.svg";
import Logo from "../../../assets/shared/logo.svg";
import "./Mobile.css";

export default function NavBar() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className={`navbar ${isActive ? "" : "hidden"}`}>
      <div className="mobileHeader">
        <img className="logo" src={Logo} alt="logo" />
        <img
          src={HamBurger}
          alt="hamburger"
          className="hamburger"
          onClick={toggleMenu}
        />
      </div>
      <ul className={`navbar-menu ${isActive ? "active" : ""}`}>
        <div className="liDiv">

        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            00 HOME
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/about" className="navbar-link">
            01 DESTINATION
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/about" className="navbar-link">
            02 CREW
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/about" className="navbar-link">
            03 TECHNOLOGY
          </Link>
        </li>
        </div>
      </ul>
    </nav>
  );
}
