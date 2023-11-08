import React from "react";
import { Col, Row } from "react-bootstrap";

export const AnswerSummary = ({ data }) => {
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
            <button>{data.markObtained}</button>
          </Col>
        </Row>
      </div>
    </div>
  );
};
