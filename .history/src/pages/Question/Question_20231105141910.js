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
            <div className="col-md-11  instructions">
              <div className="title-div">
                {" "}
                <h6>Question 11</h6>
              </div>
              <p>
                Moving from left to right across a period, the general rise in
                the first ionization energy can be attributed to the
              </p>
              <div>
                <input
                  type="radio"
                  id="vanilla"
                  name="flavor"
                  value="vanilla"
                />
                <label for="vanilla">A. Increase in screening effect</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="chocolate"
                  name="flavor"
                  value="chocolate"
                />
                <label for="chocolate">B. Increase in nuclear charge</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="strawberry"
                  name="flavor"
                  value="strawberry"
                />
                <label for="strawberry">C. Decrease in screening effect</label>
              </div>{" "}
              <div>
                <input
                  type="radio"
                  id="strawberry"
                  name="flavor"
                  value="strawberry"
                />
                <label for="strawberry">C. Decrease in screening effect</label>
              </div>
            </div>
          </div>
          <div className="col-md-4 instructions"></div>
        </div>
      </div>
    </>
  );
};