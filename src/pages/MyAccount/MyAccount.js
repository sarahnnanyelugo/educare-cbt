import React, { useState } from "react";
import { Link } from "react-router-dom";
import EducareNavBar from "../../components/EducareNavBar/EducareNavBar";
import { Password } from "../../components/Form/Password";
import { Navbar } from "../../components/Navbar/Navbar";
import "./my-account.scss";
export const MyAccount = () => {
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user")));
  const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem("logged_in"));
  const [activeIndex2, setActiveIndex2] = useState(1);
  const handleClick = (index) => setActiveIndex2(index);
  const [newPassword, setNewPassword] = useState("hide");
  //   const [unsetPassword, setUnsetPassword] = useState("");

  const [form, setForm] = useState({
    email: " ",
    password: " ",
  });
  const checkActive = (index, className) =>
    activeIndex2 === index ? className : "";
  function changePassword() {
    setNewPassword("show");
  }
  function unsetPassword() {
    setNewPassword("hide");
  }
  function handleChange(e) {
    console.log(e.target.name, e.target.value);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(form);
  }
  return (
    <>
      <div>
        {user !== null && loggedIn === "1" ? <Navbar /> : <EducareNavBar />}
      </div>

      <div className="col-md-10 offset-md-1 mt7">
        <Link to={"/"}>Back</Link>
        <h3>My Account</h3>
        <div className="analysis-tab ">
          <div className="tabs ">
            <button
              className={`tab ${checkActive(1, "active2")}`}
              onClick={() => handleClick(1)}
            >
              My profile
            </button>
            {/* <button
              className={`tab ${checkActive(2, "active2")}`}
              onClick={() => handleClick(2)}
              style={{ marginLeft: "20px" }}
            >
              Questions and Answers
            </button> */}
          </div>
          <div className="panels">
            <div className={`panel ${checkActive(1, "active2")}`}>
              <div className="acc-card">
                <h6>Personal Information</h6>
                <hr />
                <form className=" flexy">
                  <div className="col-md-4">
                    <div class="form">
                      <input
                        type="email"
                        name="email"
                        //   onChange={handleChange}
                      />
                      <label for="text" class="label-name">
                        <span class="content-name">Email *</span>
                      </label>
                    </div>{" "}
                    <div class="form">
                      <input
                        type="email"
                        name="email"
                        //   onChange={handleChange}
                      />
                      <label for="text" class="label-name">
                        <span class="content-name">Email *</span>
                      </label>
                    </div>{" "}
                    <div class="form">
                      <input
                        type="email"
                        name="email"
                        //   onChange={handleChange}
                      />
                      <label for="text" class="label-name">
                        <span class="content-name">Email *</span>
                      </label>
                    </div>{" "}
                  </div>
                  <div className="col-md-4 " style={{ paddingLeft: "30px" }}>
                    {" "}
                    <div class="form">
                      <input
                        type="email"
                        name="email"
                        //   onChange={handleChange}
                      />
                      <label for="text" class="label-name">
                        <span class="content-name">Email *</span>
                      </label>
                    </div>{" "}
                  </div>
                </form>
              </div>
              <div className="acc-card ">
                <h6>Password</h6>
                <hr />
                <div className="flexy">
                  {" "}
                  <form className="col-md-4">
                    {" "}
                    <Password
                      placeholder="Password"
                      name="password"
                      type="password"
                      onChange={handleChange}
                    />
                    <div className={`${newPassword}`}>
                      <Password
                        placeholder="New Password"
                        name="password"
                        type="password"
                        onChange={handleChange}
                      />
                      <Password
                        placeholder="Confirm Password"
                        name="password"
                        onChange={handleChange}
                        type="password"
                      />
                    </div>
                  </form>
                  <p className="change-password" onClick={changePassword}>
                    Change Password
                  </p>
                </div>
                <div className={`flexy flexyM offset-md-10 ${newPassword}`}>
                  <button className="cancel-btn" onClick={unsetPassword}>
                    Cancel
                  </button>
                  <button className="save-btn">Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
