import React from "react";
import "./navbar.scss";
import Logo from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-holder  col-md-2 flexy ">
        {" "}
        <Link to={"/"}>
          {" "}
          <img className="   logo" src={Logo} alt="Scholar" width="50%" />
        </Link>
      </div>
      <div className="flexy">
        <NavLink activeclassName="active" className="navlinks" to={"/home"}>
          Home
        </NavLink>{" "}
        <NavLink
          activeclassName="active"
          className="navlinks"
          to={"/test-analysis"}
        >
          Test Analysis
        </NavLink>{" "}
        <NavLink activeclassName="active" className="navlinks" to={"/wallet"}>
          Wallet
        </NavLink>
      </div>
    </div>
  );
};
