import React from "react";
import "./question-num.scss";
export const QuestionNum = ({ data, bg, callBack }) => {
    const handleClick=(e)=>{
        return callBack(data.id)
    }
  return (
    <div className="col">
      {" "}
      <button
        className="question-btn"
        onClick={handleClick)}
        style={{ background: bg, color: bg == "white" ? "#000" : "#fff" }}
      >
        {data.questionNum}
      </button>
    </div>
  );
};
