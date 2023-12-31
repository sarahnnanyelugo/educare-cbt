import React, { useState } from "react";
import "./test-instructions.scss";
import Alert from "../../assets/images/alert.svg";
import { Link } from "react-router-dom";
export const TestInstructions = () => {
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user")));

  const resetAnswers = () => {
    localStorage.removeItem("myArray");
  };
  return (
    <div className="test-instructions-div">
      <div className="col-md-8 offset-md-2 T-instructions">
        <div className="title-div">
          {" "}
          <h4>Test Instructions</h4>
        </div>
        <div className="flexy inner">
          <div className="col-md-5">
            <h6>
              Welcome <span>Peter Olugbenga</span>
            </h6>
            <div className="flexy flexyM">
              {" "}
              <h6 className="col-md-3 col-3">Subject:</h6>
              <p>Chemistry</p>
            </div>
            <div className="flexy flexyM">
              <h6 className="col-md-3 col-3">Test Title:</h6>
              <p>
                2010 MATHEMATICS JAMB PRACTICE 2 (2010 MATHEMATICS JAMB PRACTICE
                2)
              </p>
            </div>
            <ul className="list-unstyled">
              <li>
                <img src={Alert} alt="logo" width="18px" height="18px" />
                Attempt all questions
              </li>
              <li>
                {" "}
                <img src={Alert} alt="logo" width="18px" height="18px" />
                You can’t leave once you start
              </li>
              <li>
                <img src={Alert} alt="logo" width="18px" height="18px" />
                If you close this window, we assume you’re done with your test.
              </li>
            </ul>
          </div>
          <div className="col-md-2 offset-md-2">
            <div className="flexy flexyM">
              {" "}
              <h6 className="col-md-7 col-4">Total Mark:</h6>
              <p>50</p>
            </div>{" "}
            <div className="flexy flexyM">
              {" "}
              <h6 className="col-md-7 col-4">Duration:</h6>
              <p>30mins</p>
            </div>{" "}
            <div className="flexy flexyM">
              {" "}
              <h6 className="col-md-7 col-4">Questions:</h6>
              <p>50</p>
            </div>
          </div>
          <div className="col-md-3 instruction-btns">
            {" "}
            <center>
              <Link to={"/home"}>
                {" "}
                <button className="back-btn">Go back</button>
              </Link>{" "}
              <Link to={"/questions-dashboard"} onClick={resetAnswers}>
                {" "}
                <button className="proceed-btn">Proceed</button>
              </Link>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
};
