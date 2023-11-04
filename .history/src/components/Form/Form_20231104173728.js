import { useState } from "react";
import "./form.scss";
import { Password } from "./Password";
import ShowAndHidePassword from "./Password";
import { CountrySelect } from "./CountrySelect";
import PhoneInput from "react-phone-number-input"; // import "react-phone-input-2/lib/bootstrap.css";
import { Link } from "react-router-dom";

function Form(props) {
  const { bg, text, body } = props;
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
  return (
    <>
      <form className=" form-container" style={{ backgroundColor: body }}>
        <h6 style={{ color: "black" }} className="col-md-8">
          <strong>{props.formHeading}</strong>
        </h6>{" "}
        <div class="form">
          <input
            type="text"
            name="name"
            autocomplete="new-password"
            required
            value={nameValue}
            onChange={handleChange}
          />
          <label for="text" class="label-name">
            <span class="content-name">Organisation Name *</span>
          </label>
        </div>{" "}
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
        <div class="form">
          <PhoneInput
            placeholder="Phone number *"
            value={value}
            onChange={setValue}
          />
        </div>{" "}
        <div style={{ marginBottom: "20px" }}>
          {" "}
          <Password placeholder="Password" />
          <Password placeholder="Confirm password" />
        </div>
        <CountrySelect />
        <input
          type="checkbox"
          name="color"
          checked={isChecked}
          onChange={handleChecked}
          style={{
            marginTop: "40px",
          }}
        />
        <span
          style={{
            fontFamily: " rebondG-Medium",
            color: "black",
            fontSize: "12px",
            marginTop: "90px",
          }}
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
        <button className="overviewButton" style={{ backgroundColor: bg }}>
          {text}
        </button>
      </form>
    </>
  );
}

export default Form;
