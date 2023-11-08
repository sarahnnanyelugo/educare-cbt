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
        <Row>
          <Col>
            <h6>Your Answer:</h6>
            <p>{data.yourAnswer}</p>
          </Col>
        </Row>{" "}
        <Row>
          <Col>
            <h6>Correct Answer:</h6>
            <p>{data.correctAnswer}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h6>Mark Obtained:</h6>
            <button style={{ background: bg }}>{data.markObtained}</button>
          </Col>
        </Row>{" "}
        <Row>
          <Col>
            <h6>Answer Explanation:</h6>
            <button>{data.answerexplanation}</button>
          </Col>
        </Row>
        <Row>
          <Col>
            <h6>Difficulty</h6>
            <button style={{ background: bg2 }}>{data.difficulty}</button>
          </Col>
        </Row>
      </div>
    </div>
  );
};
