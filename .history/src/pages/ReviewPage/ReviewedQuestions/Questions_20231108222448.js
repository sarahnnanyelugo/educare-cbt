import React from "react";
import { Badge } from "../../../components/Badge/Badge";
import "./questions.scss";
export const ReviewedQuestions = ({ data, setChecked }) => {
  const handleSelected = (e) => {
    return setChecked(data.id, e.target.value);
  };
  return (
    <div className="col-md-12 ">
      <div className="title-div ">
        {" "}
        <div className="flexy flexyM">
          <h6 style={{ flexGrow: "1" }}>Question {data.questionNum}</h6>
          <Badge
            text="Answered"
            color="#5EAA42"
            border="solid 1px #5EAA42"
            bg="#5EAA421A"
          />
        </div>
        <hr />
      </div>
      <div className="flexy">
        <div style={{ height: "180px" }} className="col-md-9">
          {" "}
          <p>{data.question}</p>
          {data.options.map((item, index) => {
            return (
              <div>
                <input
                  type="radio"
                  id="answer-{item.label}"
                  name="answers{index}"
                  value={index}
                  onClick={handleSelected}
                />
                <label for="answer-a">
                  {item.label}. {item.text}
                </label>
              </div>
            );
          })}
        </div>
        <div className="mt offset-md-1 " style={{ float: "right" }}>
          <Badge
            text="Go to question"
            color="#2F67D8"
            border="solid 1px #2F67D8"
            bg="#5EAA421A"
          />
        </div>
      </div>
      <hr />
    </div>
  );
};
