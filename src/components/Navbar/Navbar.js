import React, { useEffect, useRef, useState } from "react";
import "./navbar.scss";
import Logo from "../../assets/images/logo.png";
import Menu from "../../assets/images/menu.svg";
import Person from "../../assets/images/person.svg";
import Bell from "../../assets/images/bell.svg";
import Bell2 from "../../assets/images/bell2.svg";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Dropdown from "react-bootstrap/Dropdown";

export const Navbar = () => {
  const location = useLocation();
  const prevUrlRef = useRef(null);
  const [showNav, setShowNav] = useState(true);
  const logoutSet = () => {
    console.log(sessionStorage.setItem("logged_in", 0));
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
        <div className="flexy navs dn">
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
        </div>
        <div className="flexyM flexy last-menu">
          <Dropdown>
            <Dropdown.Toggle align="start" id="dropdown-menu-align-start">
              <img className="  " src={Bell} alt="Scholar" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <div className="col-md-2 notification-body">
                  <div className="flexy flexyM">
                    {" "}
                    <h6>Notifications</h6>
                    <small>Mark as read</small>
                  </div>
                  <hr />
                  <center>
                    <img className="mt5  " src={Bell2} alt="Scholar" />
                    <p>
                      No notifications yet <br />
                      Messages and alerts about your account will show up here.
                    </p>
                  </center>
                </div>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle align="start" id="dropdown-menu-align-start">
              <div className="menu-holder">
                <img className="menu-icon" src={Menu} alt="Scholar" />
                <img className="   person" src={Person} alt="Scholar" />
              </div>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <div className="navs dnW">
                  <NavLink
                    activeclassName="active"
                    className="navlinks"
                    to={"/exam-list"}
                  >
                    <button> Home</button>
                  </NavLink>{" "}
                </div>
              </Dropdown.Item>
              <Dropdown.Item>
                <div className="navs dnW">
                  <NavLink
                    activeclassName="active"
                    className="navlinks"
                    to={"/test-analysis"}
                  >
                    <button> Test Analysis</button>
                  </NavLink>{" "}
                </div>
              </Dropdown.Item>
              <Dropdown.Item>
                <div className="navs dnW">
                  {" "}
                  <NavLink
                    activeclassName="active"
                    className="navlinks"
                    to={"/wallet"}
                  >
                    <button> Wallet</button>
                  </NavLink>{" "}
                </div>
              </Dropdown.Item>

              <Dropdown.Item href="/wallet">
                <h6 style={{ fontSize: "14px" }}>My Account</h6>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2" onClick={logoutSet} text-danger>
                <p style={{ color: "#DE1E1E" }}> Sign out</p>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </>
  );
};
