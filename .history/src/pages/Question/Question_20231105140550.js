import React from "react";
import "./question.scss";
import Alert from "../../assets/images/alert.svg";
import { Link } from "react-router-dom";

export const Question = () => {
  return (
    <>
      <div className="test-instructions-div">
        <div className="col-md-8 offset-md-2 student-details flexy">
          <div className="col-md-5 ">
            <div className="flexy flexyM">
              {" "}
              <h6 className="col-md-3 ">Students:</h6>
              <p style={{ color: "#2F67D8" }}>Peter Olugbenga</p>
            </div>
            <div className="flexy flexyM">
              {" "}
              <h6 className="col-md-3">Subject:</h6>
              <p style={{ color: "#C32BD6" }}>Chemistry</p>
            </div>{" "}
            <div className="flexy flexyM">
              {" "}
              <h6 className="col-md-3">Test Title:</h6>
              <p>2010 MATHEMATICS JAMB PRACTICE 2</p>
            </div>
          </div>
          <div className="timer offset-md-4 mt4">
            <button>00 : 29 : 59</button>
          </div>
        </div>
        <div className="col-md-8 offset-md-2 flexy">
          {" "}
          <div className="col-md-8 ">
            <div className="col-md-10  instructions"></div>
          </div>
          <div className="col-md-4 instructions"></div>
        </div>
      </div>
    </>
  );
};
