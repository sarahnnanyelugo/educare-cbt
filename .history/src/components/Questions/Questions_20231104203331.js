import React from "react";
import "./questions.scss";
import Time from "../../assets/images/time.svg";
import Question from "../../assets/images/question.svg";
import Tick from "../../assets/images/tick.svg";

export const Questions = ({ data }) => {
  return (
    <div className="questions-div flexy ">
      <h6>{data.num}</h6>
      <img src={data.examType} alt="logo" />
      <div>
        <h6>{data.examYearTypeSubject}</h6>
        <p>{data.examDetails}</p>
      </div>
      <div>
        <div className="flexy">
          <img src={Time} alt="logo" width="10%" />
          <small>{data.examDuration}</small>
        </div>
        <div className="flexy">
          <img src={Question} alt="logo" width="10%" />
          <small>{data.questionNum}</small>
        </div>
      </div>
      <div className="flexy">
        <img src={Tick} alt="logo" width="10%" />
        <small>{data.examMarks}</small>
      </div>
      <small>{data.unitNum}</small>
      <button>Practice</button>
    </div>
  );
};