import React from "react";
import "./summary.scss";
import Alert from "../../assets/images/alert.svg";
import { Link } from "react-router-dom";

export const SummaryPage = () => {
  return (
    <div className="test-instructions-div col-md-12">
      <div className="test-body col-md-4 offset-md-4">
        <div className="col-md-10 offset-md-1 summary-body">
          <div className="submit-query flexy flexyM">
            {" "}
            <h6 className="col-md-5">Your answers were submitted</h6>
            <button className="attempts-btn ">
              Your Score
              <br />
              30/50
            </button>
          </div>
          <div className="flexy">
            {" "}
            <div className="col-md-6">
              <h6>Attempted Questions</h6>
              <p>35</p>
            </div>
            <div className="">
              <h6>Unattempted Questions</h6>
              <p>15</p>
            </div>
          </div>{" "}
          <div className="flexy ">
            {" "}
            <button className="not-done-btn ">No, I’m not done</button>
            <button className="done-btn offset-md-5">Yes, I’m done</button>
          </div>
        </div>
      </div>
    </div>
  );
};
