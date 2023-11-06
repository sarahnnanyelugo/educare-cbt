import React, { useEffect, useRef, useState } from "react";
import "./navbar.scss";
import Logo from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  const prevUrlRef = useRef(null);
  const [showNav, setShowNav] = useState(true);
  useEffect(() => {
    const currentUrl = window.location.pathname;
    if (prevUrlRef.current !== currentUrl) {
      prevUrlRef.current = currentUrl;
      console.log(currentUrl);
      setTimeout(() => {
        switch (currentUrl) {
          case "/":
            setShowNav(false);
            break;
          case "/test-instructions":
            setShowNav(false);
            break;
          case "/test-instructions":
            setShowNav(false);
            break;

          default:
            setShowNav(true);
            break;
        }
        localStorage.setItem("showNav", showNav);
      }, 200);
    }
  });
  return (
    <div className={`nav-container flexy ${showNav ? "" : "hide"} `}>
      <div className="logo-holder  col-md-1 flexy ">
        {" "}
        <Link to={"/"}>
          {" "}
          <img className="   logo" src={Logo} alt="Scholar" width="50%" />
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
