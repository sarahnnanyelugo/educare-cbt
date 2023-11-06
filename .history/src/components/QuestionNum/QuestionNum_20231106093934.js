import React from "react";
import "./question-num.scss";
export const QuestionNum = ({ data }) => {
  return <button className="question-btn">{data.questionNum}</button>;
};
