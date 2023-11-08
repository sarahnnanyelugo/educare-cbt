import { blueGrey } from "@material-ui/core/colors";
import React from "react";
import { Col, Row } from "react-bootstrap";

export const AnswerSummary = ({ data }) => {
  const { bg, bg2 } = data;
  return (
    <div className="flexy">
      <div className="col-md-10">
        <h6>{data.questionNum}</h6>
        <hr />
        <p>{data.question}</p>
        <div className="flexy flexyM">
          <h6>Your Answer:</h6>
          <p>{data.yourAnswer}</p>
        </div>{" "}
        <div className="flexy flexyM">
          <h6>Correct Answer:</h6>
          <p>{data.correctAnswer}</p>
        </div>
        <div className="flexy flexyM">
          <h6>Mark Obtained:</h6>
          <button style={{ background: bg }}>{data.markObtained}</button>
        </div>
        <div className="flexy flexyM">
          <h6>Answer Explanation:</h6>
          <p>{data.answerExplanation}</p>
        </div>
        <div className="flexy flexyM">
          <h6>Difficulty</h6>
          <button style={{ background: bg2 }}>{data.difficulty}</button>
        </div>
      </div>
    </div>
  );
};
