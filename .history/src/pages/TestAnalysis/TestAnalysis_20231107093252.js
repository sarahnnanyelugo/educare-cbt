import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";
import "./test-analysis.scss";
export const TestAnalysis = () => {
  return (
    <>
      <Navbar />
      <div className="test-analysis-div col-md-10 offset-md-1">
        <div className="flexy flexyM search-bar">
          <h5>Test List</h5>"
          <input type="search" placeholder="search" />
        </div>
      </div>
    </>
  );
};
