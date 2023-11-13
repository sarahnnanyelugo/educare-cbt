import { useState } from "react";
import "./form.scss";
import { Password } from "./Password";
import ShowAndHidePassword from "./Password";
import { Link } from "react-router-dom";
import { GoogleButton } from "../GoogleButton/GoogleButton";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function LoginForm(props) {
  const [createAccount, setCreateAccount] = useState("hide");
  const [login, setLogin] = useState("show");

  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [value, setValue] = useState();

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

    let user = JSON.parse(sessionStorage.getItem("user"));
    if (login?.email === user.email && login?.password === user.password) {
      setModalOpen(true);
    } else {
      toast.error("Wrong info");
    }
  }
  sessionStorage.setItem("user", JSON.stringify(form));
  const handleChecked = (event) => {
    setIsChecked(event.target.checked);
  };
  const createYourAccount = () => {
    setCreateAccount("show");
    setLogin("hide");
  };
  const loginYourAccount = () => {
    setCreateAccount("hide");
    setLogin("show");
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
          <div className="col-md-5 bodda"></div>
          <div className="col-md-2">
            <center>
              {" "}
              <p style={{ fontSize: "10px" }}>Or</p>
            </center>
          </div>
          <div className="col-md-5 bodda"></div>
        </div>
        <center>
          <small className={login}>Login using</small>
        </center>
        <GoogleButton />
        <center>
          <small className={login} style={{ fontSize: "12px" }}>
            Dont have an account?{" "}
            <Link
              onClick={createYourAccount}
              className="link2"
              to={"/authenticate"}
            >
              Signup here
            </Link>
          </small>
        </center>
      </form>
    </>
  );
}

export default LoginForm;
