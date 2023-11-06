import React from "react";
import "./question-num.scss";
export const QuestionNum = ({ data }) => {
  const { bg } = data;
  return (
    <div className="col">
      {" "}
      <button className="question-btn" style={{ background: bg }}>
        {data.questionNum}
      </button>
    </div>
  );
};
