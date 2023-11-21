// import { blueGrey } from "@material-ui/core/colors";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Badge } from "../../components/Badge/Badge";

export const AnswerSummary = ({ data, answer }) => {
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [yourAnswer, setYourAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  useEffect(() => {
    if (!data.options) {
      return;
    }
    const correct = data.options?.findIndex(
      (answer) => answer?.correct_answer === true
    );
    const answerd = answer();
    console.log(answerd);
    if (answerd == undefined || answerd == null) setIsCorrect(null);
    else {
      if (answerd === correct) setIsCorrect(true);
      else setIsCorrect(false);
    }
    setCorrectAnswer(data.options[correct]);
    setYourAnswer(data.options[answerd]);
  }, []);

  useEffect(() => {
    console.log(yourAnswer);
  }, [yourAnswer]);
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
              <p>{yourAnswer?.text}</p>
            </div>{" "}
            <div className="flexy flexyM">
              <h6 className="col-md-2 col-6">Correct Answer:</h6>
              <p>{correctAnswer?.text}</p>
            </div>
            <div className="flexy flexyM">
              <h6 className="col-md-2 col-6">Mark Obtained:</h6>

              <Badge
                cls={isCorrect ? "num" : "zero"}
                text={isCorrect ? data.markObtained : 0}
              />
            </div>
            <div className="flexy ">
              <h6 className="col-md-2">Answer Explanation:</h6>
              <div>
                <p>{data.answerExplanation}</p>
                {data.options?.map((item, index) => {
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
            <Badge
              text={
                isCorrect === null
                  ? "UnAnswered"
                  : isCorrect
                  ? "Correct"
                  : "Incorrect"
              }
              cls={
                isCorrect === null
                  ? "unanswered"
                  : isCorrect
                  ? "correct"
                  : "incorrect"
              }
            />
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};
