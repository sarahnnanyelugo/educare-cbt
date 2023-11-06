import React from "react";
import "./summary.scss";
import Alert from "../../assets/images/alert.svg";
import { Link } from "react-router-dom";

export const SummaryPage = () => {
  return (
    <div className="test-instructions-div col-md-12">
      <div className="test-body col-md-4 offset-md-4">
        <div className="col-md-10 offset-md-1 summary-body">
          <div className="submit-query">
            {" "}
            <h6>Are You Sure?</h6>
            <p>
              Clicking <span>YES</span> will End the Test. Make sure you have
              answered all the question(s).
            </p>
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
