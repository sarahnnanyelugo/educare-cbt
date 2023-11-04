import React from "react";
import "./navbar.scss";
import Logo from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="nav-container flexy">
      <div className="logo-holder  col-md-1 flexy ">
        {" "}
        <Link to={"/"}>
          {" "}
          <img className="   logo" src={Logo} alt="Scholar" width="100%" />
        </Link>
      </div>
      <div className="flexy navs">
        <NavLink activeclassName="active" className="navlinks" to={"/home"}>
          <button> Home</button>
        </NavLink>{" "}
        <NavLink
          activeclassName="active"
          className="navlinks"
          to={"/test-analysis"}
        >
          <button> Test Analysis</button>
        </NavLink>{" "}
        <NavLink activeclassName="active" className="navlinks" to={"/wallet"}>
          <button> Wallet</button>
        </NavLink>
      </div>
    </div>
  );
};
