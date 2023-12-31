import { useState } from "react";
import "./form.scss";
import { Password } from "./Password";
import ShowAndHidePassword from "./Password";
import { Link } from "react-router-dom";
import { GoogleButton } from "../GoogleButton/GoogleButton";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SuccessModal } from "./SuccessModal";
function LoginForm(props) {
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user")));
  //   const [login, setLogin] = useState("show");

  const [isChecked, setIsChecked] = useState(false);

  const [form, setForm] = useState({
    email: " ",
    password: " ",
  });
  function handleChange(e) {
    console.log(e.target.name, e.target.value);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(form);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (form?.email === user?.email && form?.password === user?.password) {
      sessionStorage.setItem("logged_in", 1);
      toast.success("You have successfully logged in");
      setInterval(() => {
        window.location = "./exam-list";
      }, 1000);
    } else {
      toast.error("Email/Password is incorrect or You are not yet registered.");
    }
  }
  const handleChecked = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <>
      <ToastContainer />
      <form className=" form-container" action="" onSubmit={handleSubmit}>
        <h6 className="form-heading">
          Log in to access <br />
          your account
        </h6>
        <div class="form">
          <input type="email" name="email" onChange={handleChange} />
          <label for="text" class="label-name">
            <span class="content-name">Email *</span>
          </label>
        </div>{" "}
        <Password
          placeholder="Password"
          onChange={handleChange}
          name="password"
          type="password"
        />
        <Link className="offset-md-7 link mt2"> Forgot Password?</Link>
        <button className="formButton">Continue</button>
        <div className="or flexy flexyM">
          <div className="col-md-5 bodda col-5"></div>
          <div className="col-md-2 col-2">
            <center>
              {" "}
              <p style={{ fontSize: "10px" }}>Or</p>
            </center>
          </div>
          <div className="col-md-5 bodda col-5"></div>
        </div>
        <center>
          <small>Login using</small>
        </center>
        <GoogleButton />
        <center>
          <small style={{ fontSize: "12px" }}>
            Dont have an account?{" "}
            <Link className="link2" to={"/authenticate"}>
              Signup here
            </Link>
          </small>
        </center>
      </form>
    </>
  );
}

export default LoginForm;
