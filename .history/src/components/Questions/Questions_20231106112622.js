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
        {data.options.map((item, index) => {
          return (
            <div>
              <input
                type="radio"
                id="answer-{item.label}"
                name="answers{index}"
                value="{data.id}-{index}"
              />
              <label for="answer-a">
                {item.label}.{item.text}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
