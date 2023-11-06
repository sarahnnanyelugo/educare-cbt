import React from "react";
import "./question.scss";
import Alert from "../../assets/images/alert.svg";
import { Link } from "react-router-dom";

export const Question = () => {
  return (
    <>
      <div className="test-instructions-div">
        <div className="col-md-8 offset-md-2 student-details">
          <div className="flexy flexyM">
            {" "}
            <h6 className="col-md-7 ">Students:</h6>
            <p>Peter Olugbenga</p>
          </div>
          <div className="flexy flexyM">
            {" "}
            <h6 className="col-md-7 ">Subject:</h6>
            <p>Chemistry</p>
          </div>{" "}
          <div className="flexy flexyM">
            {" "}
            <h6 className="col-md-7 ">Subject:</h6>
            <p>Chemistry</p>
          </div>
        </div>
        <div className="col-md-8 offset-md-2 instructions"></div>
      </div>
    </>
  );
};