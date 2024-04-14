import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/shared/logo.svg";
import HamBurger from "../../../assets/shared/icon-hamburger.svg";
import "./Mobile.css";

export default function mobileHome() {
  return (
    <div className="mainMobile">
      <div className="mobileHeader">
        <img className="logo" src={Logo} alt="logo" />
        <img src={HamBurger} alt="logo" />
      </div>
      <div className="txts">
        <h4 className="mobileH4">SO, YOU WANT TO TRAVEL TO</h4>
        <h1 className="mobileH1">SPACE</h1>
        <h3 className="mobileH3">
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </h3>
      </div>
      <div className="homeButtonDiv">
        <button className="mobileHomeButton">EXPLORE</button>
      </div>
    </div>
  );
}