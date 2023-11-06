import React from "react";
import "./questions.scss";
export const Questions = ({ data }) => {
  return (
    <div>
      {" "}
      <div className="col-md-12 ">
        <div className="title-div">
          {" "}
          <h6>Question {data.questionNum}</h6>
        </div>
        <p>{data.question}</p>
        <div>
          <input type="radio" id="answer-a" name="answers" value="answer-a" />
          <label for="answer-a">A.{data.optionA}</label>
        </div>
        <div>
          <input type="radio" id="answer-b" name="answers" value="answer-b" />
          <label for="answer-b">B. {data.optionB}</label>
        </div>
        <div>
          <input type="radio" id="answer-c" name="answers" value="answer-c" />
          <label for="answer-c">C.{data.optionC}</label>
        </div>{" "}
        <div>
          <input type="radio" id="answer-d" name="answers" value="answer-d" />
          <label for="answer-d">D. {data.optionD}</label>
        </div>
        <div className="flexy mt">
          <button className="previous-btn">Previous</button>
          <button className="next-btn offset-md-9">Next</button>
        </div>
      </div>
    </div>
  );
};
