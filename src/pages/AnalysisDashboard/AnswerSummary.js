// import { blueGrey } from "@material-ui/core/colors";
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
              <h6 className="col-md-2 col-6">Your Answer:</h6>
              <p>{data.yourAnswer}</p>
            </div>{" "}
            <div className="flexy flexyM">
              <h6 className="col-md-2 col-6">Correct Answer:</h6>
              <p>{data.correctAnswer}</p>
            </div>
            <div className="flexy flexyM">
              <h6 className="col-md-2 col-6">Mark Obtained:</h6>
              {/* <div
                className="num"
                style={{
                  background: bg,
                  color: "#fff",
                  border: "solid 1px grey",
               
                }}
              >
                <small> {data.markObtained}</small>
              </div> */}
              <Badge cls="num" text={data.markObtained} />
            </div>
            <div className="flexy ">
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
              <h6 className="col-md-2 col-4"> Difficulty:</h6>
              <Badge cls="level" text={data.difficulty} />
            </div>
          </div>
          <div className="offset-md-1">
            {" "}
            <Badge text={data.status} cls="incorrect" />
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};
