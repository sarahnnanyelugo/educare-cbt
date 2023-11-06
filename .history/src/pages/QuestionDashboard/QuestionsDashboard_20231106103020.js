import React, { useState } from "react";
import "./question.scss";
import Alert from "../../assets/images/alert.svg";
import { Link } from "react-router-dom";
import { num, questions } from "../../TestData";
import { Questions } from "../../components/Questions/Questions";
import { QuestionNum } from "../../components/QuestionNum/QuestionNum";

export const QuestionsDashboard = () => {
  const [state, setState] = useState({
    query: "",
    list: questions,
    list2: num,
  });
  const [questionNumber, setQuestionNumber] = useState(0);
  return (
    <>
      <div className="test-instructions-div">
        <div className="col-md-8 offset-md-2 student-details flexy">
          <div className="col-md-5 ">
            <div className="flexy flexyM">
              {" "}
              <h6 className="col-md-3 ">Students:</h6>
              <p style={{ color: "#2F67D8" }}>Peter Olugbenga</p>
            </div>
            <div className="flexy flexyM">
              {" "}
              <h6 className="col-md-3">Subject:</h6>
              <p style={{ color: "#C32BD6" }}>Chemistry</p>
            </div>{" "}
            <div className="flexy flexyM">
              {" "}
              <h6 className="col-md-3">Test Title:</h6>
              <p>2010 MATHEMATICS JAMB PRACTICE 2</p>
            </div>
          </div>
          <div className="timer offset-md-4 mt4">
            <button>00 : 29 : 59</button>
          </div>
        </div>
        <div className="col-md-8 offset-md-2 flexy">
          {" "}
          <div className="col-md-8 ">
            <div className="col-md-11  instructions">
              <div className="row ">
                <Questions data={state.list[questionNumber]} />
              </div>
              <div className="flexy mt">
                <button className="previous-btn">Previous</button>
                <button className="next-btn offset-md-9">Next</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 instructions2">
            {" "}
            <div className="row row-cols-10 row-cols-lg-10 g-1 g-lg-1">
              {state.list2.map((data, index) =>
                index === 0 ? <QuestionNum data={data} /> : null
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
