import React from "react";
import "./question.scss";
import Alert from "../../assets/images/alert.svg";
import { Link } from "react-router-dom";

export const QuestionsDashboard = () => {
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
                  id="answer-a"
                  name="answers"
                  value="answer-a"
                />
                <label for="answer-a">A. Increase in screening effect</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="answer-b"
                  name="answers"
                  value="answer-b"
                />
                <label for="answer-b">B. Increase in nuclear charge</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="answer-c"
                  name="answers"
                  value="answer-c"
                />
                <label for="answer-c">C. Decrease in screening effect</label>
              </div>{" "}
              <div>
                <input
                  type="radio"
                  id="answer-d"
                  name="answers"
                  value="answer-d"
                />
                <label for="answer-d">D. Decrease in nuclear charge</label>
              </div>
              <div className="flexy mt">
                <button className="previous-btn">Previous</button>
                <button className="next-btn offset-md-9">Next</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 instructions"></div>
        </div>
      </div>
    </>
  );
};
