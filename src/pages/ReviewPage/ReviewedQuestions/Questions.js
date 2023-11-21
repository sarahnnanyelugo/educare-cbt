import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "../../../components/Badge/Badge";
import "./questions.scss";
export const ReviewedQuestions = ({ data, setChecked, answer }) => {
  const handleSelected = (e) => {
    return setChecked(data.id, e.target.value);
  };
  const [numId, setNumId] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [yourAnswer, setYourAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  useEffect(() => {
    setNumId(data.id);
  });
  const setQuestionDataID = (event) => {
    localStorage.setItem("go_to_question", data.id);
  };
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
    <div className="col-md-12 ">
      <div className="title-div ">
        {" "}
        <div className="flexy flexyM">
          <h6 style={{ flexGrow: "1" }}>Question {data.questionNum}</h6>
          <Badge
            text={
              isCorrect === null
                ? "Unanswered"
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
        <hr />
      </div>
      <div className="flexy">
        <div style={{ height: "180px", flexGrow: "1" }} className="col-md-9">
          {" "}
          <p>{data.question}</p>
          {data.options?.map((item, index) => {
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
        <div className="mt offset-md-1 ">
          <Link to={"/questions-dashboard"} onClick={setQuestionDataID}>
            {" "}
            <Badge text="Go to question" cls="plain" />
          </Link>
        </div>
      </div>
      <hr />
    </div>
  );
};
