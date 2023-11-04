import { useState } from "react";
import "./form.scss";
import { Password } from "./Password";
import ShowAndHidePassword from "./Password";
import { Link } from "react-router-dom";
import { GoogleButton } from "../GoogleButton/GoogleButton";

function Form(props) {
  const { bg, text, body } = props;
  const [createAccount, setCreateAccount] = useState("hide");
  const [login, setLogin] = useState("show");

  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [value, setValue] = useState();
  const handleChange = (event) => {
    setNameValue(event.target.value);
    console.log(nameValue);
  };
  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
    console.log(emailValue);
  };
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
      <form className=" form-container" style={{ backgroundColor: body }}>
        <h6 className={login}>
          Log in to access <br />
          your account
        </h6>
        <h6 className={createAccount}>
          Create an account <br />
          to continue
        </h6>{" "}
        <div class="form">
          <input
            type="email"
            name="email"
            autocomplete="new-password"
            required
            value={emailValue}
            onChange={handleEmailChange}
          />
          <label for="text" class="label-name">
            <span class="content-name">Email *</span>
          </label>
        </div>{" "}
        <div style={{ marginBottom: "20px" }}>
          {" "}
          <Password placeholder="Password" />
          <Link className={`offset-md-7 link ${login}`}> Forgot Password?</Link>
          {/* <Password placeholder="Confirm password" /> */}
        </div>
        <span
          style={{
            fontFamily: " rebondG-Medium",
            color: "black",
            fontSize: "12px",
          }}
          className={createAccount}
        >
          {" "}
          I agree to educare{" "}
          <strong>
            <Link to={"/terms"}>Terms of Service</Link>
          </strong>{" "}
          and
          <strong>
            {" "}
            <Link to={"/privacy"}>Privacy Policy</Link>.
          </strong>
        </span>
        <button className="formButton">Continue</button>
        <div className="or flexy flexyM">
          <div className="col-md-5 bodda"></div>
          <div className="col-md-2">
            <center>
              {" "}
              <p>Or</p>
            </center>
          </div>
          <div className="col-md-5 bodda"></div>
        </div>
        <center>
          <small>Login using</small>
        </center>
        <GoogleButton />
        <center>
          <small className={login}>
            Dont have an account?{" "}
            <Link onClick={createYourAccount}>Signup here</Link>
          </small>
        </center>
        <center>
          <small className={createAccount}>
            Already have an account?{" "}
            <Link onClick={loginYourAccount}>Login here</Link>
          </small>
        </center>
      </form>
    </>
  );
}

export default Form;
