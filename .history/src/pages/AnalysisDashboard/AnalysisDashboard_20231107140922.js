import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";

export const AnalysisDashboard = () => {
  return (
    <>
      <Navbar />
      <div className="col-md-10 offset-md-1 mt5">
        <Link to={"/test-analysis"}>Back</Link>
        <h4>Test Analysis</h4>
      </div>
    </>
  );
};
