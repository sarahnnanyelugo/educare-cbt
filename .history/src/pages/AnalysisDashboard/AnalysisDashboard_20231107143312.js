import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";
import "./analysis-dashboard.scss";
export const AnalysisDashboard = () => {
  const [activeIndex2, setActiveIndex2] = useState(1);
  const handleClick = (index) => setActiveIndex2(index);

  const checkActive = (index, className) =>
    activeIndex2 === index ? className : "";
  return (
    <>
      <Navbar />
      <div className="col-md-10 offset-md-1 mt5">
        <Link to={"/test-analysis"}>Back</Link>
        <h4>Test Analysis</h4>
        <div className="analysis-tab ">
          {" "}
          <div className="tabs ">
            <button
              className={`tab ${checkActive(1, "active2")}`}
              onClick={() => handleClick(1)}
            >
              Analysis
            </button>
            <button
              className={`tab ${checkActive(2, "active2")}`}
              onClick={() => handleClick(2)}
              style={{ marginLeft: "20px" }}
            >
              Questions and Answers
            </button>
          </div>
          <div className="panels">
            <div className={`panel ${checkActive(1, "active2")}`}>
              <div className="profile-div">
                <h6>Test Details</h6>

                <hr />
                <div className="flexy">
                  <div className="col-md-4">
                    <div className="flexy">
                      <h6>Subject: </h6>
                      <p>Chemistry</p>
                    </div>
                    <div className="flexy">
                      <h6>Test Title:</h6>
                      <p>2010 Chemistry Jamb Practice</p>
                    </div>
                    <div className="flexy">
                      <h6>Date Attempted:</h6>
                      <p>30-Oct-2023 1:37 PM</p>
                    </div>
                    <div className="flexy">
                      <h6>Result Status:</h6>
                      <button>Published</button>
                    </div>
                  </div>
                  <div className="col-md-4"></div>
                  <div className="col-md-4"></div>
                </div>
              </div>
            </div>
            <div className={`panel ${checkActive(2, "active2")}`}>2</div>
          </div>
        </div>
      </div>
    </>
  );
};
