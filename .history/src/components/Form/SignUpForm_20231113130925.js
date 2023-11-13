import { useState } from "react";
import "./form.scss";
import { Password } from "./Password";
import ShowAndHidePassword from "./Password";
import { Link } from "react-router-dom";
import { GoogleButton } from "../GoogleButton/GoogleButton";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function SignUpForm(props) {
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

    console.log(form?.password?.length);
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!form?.email) {
      toast.error("email is required");
    } else if (!form?.password) {
      toast.error("password is required");
    } else if (form.password.length < 4) {
      toast.error("password must be more than 4 characters");
    } else if (form.password.length > 10) {
      toast.error("password must be less than 10 characters");
    } else if (!regex.test(form?.email)) {
      toast.error("This is not a valid email");
    } else {
      toast.success("You have successfully signed in");
      setInterval(() => {
        window.location = "./exam-list";
      }, 1000);
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
        {/* <h6 className={`form-heading ${login}`}>
          Log in to access <br />
          your account
        </h6> */}
        <h6 className="form-heading">
          Create an account <br />
          to continue
        </h6>{" "}
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
        {/* <Link className={`offset-md-7 link mt2 ${login}`}>
          {" "}
          Forgot Password?
        </Link> */}
        <span
          style={{
            fontFamily: " rebondG-Medium",
            color: "black",
            fontSize: "10px",
            marginTop: "20px",
          }}
          className={createAccount}
        >
          <input
            type="checkbox"
            onChecked={handleChecked}
            style={{ marginRight: "5px" }}
          />
          I agree to the{" "}
          <strong>
            <Link to={"/terms"} className="link">
              Terms of Service
            </Link>
          </strong>{" "}
          and
          <strong>
            {" "}
            <Link to={"/privacy"} className="link">
              Privacy Policy
            </Link>
            .
          </strong>
        </span>
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
          <small>Signup using</small>
        </center>
        <GoogleButton />
        <center>
          <small style={{ fontSize: "12px" }}>
            Already have an account?{" "}
            <Link className="link2" to={"/login"}>
              Login here
            </Link>
          </small>
        </center>
      </form>
    </>
  );
}

export default SignUpForm;
