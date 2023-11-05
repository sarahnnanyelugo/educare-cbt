import React from "react";
import "./questions.scss";
export const Questions = ({ data }) => {
  return (
    <div className="questions-div flexy ">
      <h6>{data.num}</h6>
      <img src={data.examType} alt="logo" />
      <div>
        <h6>{data.examYearTypeSubject}</h6>
      </div>
    </div>
  );
};