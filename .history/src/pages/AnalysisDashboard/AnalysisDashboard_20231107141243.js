import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";

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
        <div className="business-pricing-tab ">
          {" "}
          <div className="tabs offset-md-5">
            <button
              className={`tab ${checkActive(1, "active2")}`}
              onClick={() => handleClick(1)}
            >
              Business
            </button>
            <button
              className={`tab ${checkActive(2, "active2")}`}
              onClick={() => handleClick(2)}
              style={{ marginLeft: "20px" }}
            >
              School
            </button>
          </div>
          <div className="panels">
            <div className={`panel ${checkActive(1, "active2")}`}>1</div>
            <div className={`panel ${checkActive(2, "active2")}`}>2</div>
          </div>
        </div>
      </div>
    </>
  );
};