import React, { useEffect, useRef, useState } from "react";
import "./navbar.scss";
import Logo from "../../assets/images/logo.png";
import Menu from "../../assets/images/menu.svg";
import Person from "../../assets/images/person.svg";
import Bell from "../../assets/images/bell.svg";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export const Navbar = () => {
  const location = useLocation();
  const prevUrlRef = useRef(null);
  const [showNav, setShowNav] = useState(true);
  const logoutSet = () => {
    console.log(sessionStorage.removeItem("user"));
    toast.success("You have successfully logged out!");
    setInterval(() => {
      window.location = "/";
    }, 1000);
  };
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
          case "/question":
            setShowNav(false);
            break;
          case "/summary-page":
            setShowNav(false);
            break;

          default:
            setShowNav(false);
            break;
        }
        localStorage.setItem("showNav", showNav);
      }, 200);
    }
  });
  return (
    <>
      <ToastContainer />
      <div className={`nav-container flexy flexyM${showNav ? "" : "hide"} `}>
        <div className="logo-holder  col-md-1 flexy col-2">
          {" "}
          <Link to={"/"}>
            {" "}
            <img className="   logo" src={Logo} alt="Scholar" />
          </Link>
        </div>
        <div className="flexy navs">
          <NavLink
            activeclassName="active"
            className="navlinks"
            to={"/exam-list"}
          >
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
          </NavLink>{" "}
          {/* <NavLink activeclassName="active" className="navlinks" to={"/sample"}>
          <button> Sample</button>
        </NavLink> */}
        </div>
        <div>
          {" "}
          <img className="   logo" src={Bell} alt="Scholar" />
        </div>
        <div className="meu-holder" onClick={logoutSet}>
          <img className="menu-icon" src={Menu} alt="Scholar" />
          <img className="   person" src={Person} alt="Scholar" />
        </div>
      </div>
    </>
  );
};
