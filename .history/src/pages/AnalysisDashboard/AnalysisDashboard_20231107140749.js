import React from "react";
import { Link } from "react-router-dom";

export const AnalysisDashboard = () => {
  return (
    <>
      <div className="col-md-10 col-offset-1">
        <Link to={"/test-analysis"}>Back</Link>
      </div>
    </>
  );
};
