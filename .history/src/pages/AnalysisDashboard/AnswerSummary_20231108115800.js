import { blueGrey } from "@material-ui/core/colors";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { Badge } from "../../components/Badge/Badge";

export const AnswerSummary = ({ data }) => {
  const { bg, bg2 } = data;
  return (
    <div className="flexy summary-div2">
      <div className="col-md-12">
        <h6 className="col-md-2">{data.questionNum}</h6>
        <hr />
        <div className="flexy">
          <div className="col-md-10">
            {" "}
            <p>{data.question}</p>
            <div className="flexy flexyM">
              <h6 className="col-md-2">Your Answer:</h6>
              <p>{data.yourAnswer}</p>
            </div>{" "}
            <div className="flexy flexyM">
              <h6 className="col-md-2">Correct Answer:</h6>
              <p>{data.correctAnswer}</p>
            </div>
            <div className="flexy flexyM">
              <h6 className="col-md-2">Mark Obtained:</h6>
              <button
                style={{
                  background: bg,
                  color: "#fff",
                  border: "solid 1px grey",
                  //   height: "30px",
                  //   width: "36px",
                }}
              >
                {data.markObtained}
              </button>
            </div>
            <div className="flexy flexyM">
              <h6 className="col-md-2">Answer Explanation:</h6>
              <div>
                <p>{data.answerExplanation}</p>
                {data.options.map((item, index) => {
                  return (
                    <div>
                      <label for="answer-a">
                        {item.label}. {item.text}
                      </label>
                    </div>
                  );
                })}
                <p>{data.explanationSummary}</p>
              </div>
            </div>
            <div className="flexy flexyM">
              <h6 className="col-md-2"> Difficulty</h6>
              <button
                style={{
                  background: bg2,
                  color: "#2F67D8",
                  border: "solid 1px #2F67D8",
                  //   height: "30px",
                  //   width: "46px",
                }}
              >
                {data.difficulty}
              </button>
            </div>
          </div>
          <div>
            {" "}
            <Badge
              text="Correct"
              color="#5EAA42"
              background="#5EAA421A"
              border="solid 1px #5EAA42"
            />
          </div>
        </div>
      </div>
    </div>
  );
};