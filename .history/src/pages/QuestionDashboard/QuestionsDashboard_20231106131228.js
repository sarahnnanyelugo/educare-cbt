import React, { useEffect, useState } from "react";
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
  const [lastQuestion, setLastQuestion] = useState(false);
  const [firstQuestion, setFirstQuestion] = useState(true);
  const [questionNumber, setQuestionNumber] = useState(0);
  const getQuestionBg = (index) => {
    const lst = state.list[index];
    if (index > questionNumber)
      return lst.selected == null ? "white" : "#5EAA42";
    else if (index === questionNumber) return "#2F67D8";
    else if (index < questionNumber) {
      if (lst.selected == null) return "#CECBCB";
      else return "#5EAA42";
    }
  };
  const setNewIndex = (id) => {
    if (id != null) {
      const ind = state.list.findIndex((item) => item.id === id);
      if (ind !== -1) {
        setQuestionNumber(ind);
      }
    }
  };

  useEffect(() => {
    setLastQuestion(questionNumber === state.list.length - 1);
    setFirstQuestion(questionNumber === 0);
  }, [questionNumber]);
  const setChecked = (id, index) => {
    console.log(id, index);
    if (id !== null) {
      const ind = state.list.findIndex((item) => item.id === id);
      if (ind != -1) {
        // Update the selected property of the object at index `ind`
        const updatedList = [...state.list]; // Create a copy of the original array
        updatedList[ind].selected = index;

        // Update the state with the modified array
        setState({ list: updatedList });
      }
    }
  };
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
                <Questions
                  data={state.list[questionNumber]}
                  setChecked={setChecked}
                />
              </div>
              <div className="flexy mt">
                <button
                  disabled={firstQuestion}
                  className="previous-btn btn"
                  onClick={() =>
                    questionNumber > 0
                      ? setQuestionNumber(questionNumber - 1)
                      : ""
                  }
                >
                  Previous
                </button>
                {lastQuestion ? (
                  <button className="next-btn offset-md-9">Submit</button>
                ) : (
                  <button
                    className="next-btn offset-md-9"
                    onClick={() =>
                      questionNumber < state.list.length - 1
                        ? setQuestionNumber(questionNumber + 1)
                        : ""
                    }
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="col-md-4 instructions2">
            {" "}
            <div className="row row-cols-10 row-cols-lg-10 g-1 g-lg-1">
              {state.list.map((data, index) => (
                <QuestionNum
                  data={data}
                  bg={getQuestionBg(index)}
                  callBack={setNewIndex}
                />
              ))}
            </div>
            {lastQuestion ? (
              <button
                className="next-btn offset-md-9"
                style={{ marginTop: "80px" }}
              >
                Submit
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};
