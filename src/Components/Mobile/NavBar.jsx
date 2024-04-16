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
      <div className={`navbar-menu ${isActive ? "active" : ""}`}>
        <h1 className="navbar-item">
          <Link to="/" className="navbar-link">
            00 HOME
          </Link>
        </h1>
        <h1 className="navbar-item">
          <Link to="/about" className="navbar-link">
            01 DESTINATION
          </Link>
        </h1>
        <h1 className="navbar-item">
          <Link to="/about" className="navbar-link">
            02 CREW
          </Link>
        </h1>
        <h1 className="navbar-item">
          <Link to="/about" className="navbar-link">
            03 TECHNOLOGY
          </Link>
        </h1>
        </div>
    </nav>
  );
}
