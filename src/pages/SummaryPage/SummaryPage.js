import React from "react";
import "./summary.scss";
import Alert from "../../assets/images/alert.svg";
import { Link } from "react-router-dom";

export const SummaryPage = () => {
  return (
    <div lassName="test-instructions-div">
      {" "}
      <div className="test-instructions-div col-md-12">
        <div className="test-body col-md-4 offset-md-4">
          <div className="col-md-10 offset-md-1 summary-body">
            <div className="submit-query flexy flexyM">
              {" "}
              <h3 className="col-md-5">Your answers were submitted</h3>
              <button className="summary-btn  offset-md-4">
                Your Score
                <br />
                30/50
              </button>
            </div>
            <div className="flexy flexyM">
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
            <div className="flexy flexyM">
              {" "}
              <div className="col-md-6">
                <h6>Incorrect Answers</h6>
                <p>15</p>
              </div>
              <div className="">
                <h6>Unanswered Question</h6>
                <p>5</p>
              </div>
            </div>{" "}
            <div style={{ borderTop: "solid 1px #e7e7e7" }} className="mt4">
              {" "}
              <center>
                {" "}
                <Link to={"/"}>
                  {" "}
                  <button className="return-btn mt3">
                    Return to Main Windows
                  </button>
                </Link>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
