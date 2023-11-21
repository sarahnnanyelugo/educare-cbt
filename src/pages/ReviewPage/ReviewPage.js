import React, { useEffect, useState } from "react";
import { Questions } from "../../components/Questions/Questions";
import { questions } from "../../TestData";
import "./review.scss";
import { ReviewedQuestions } from "./ReviewedQuestions/Questions";
export const ReviewPage = () => {
  // const [questionNumber, setQuestionNumber] = useState(6);
  // const [activeIndex2, setActiveIndex2] = useState(1);
  // const handleClick = (index) => setActiveIndex2(index);
  // const checkActive = (index, className) =>
  //   activeIndex2 === index ? className : "";
  const [countdown, setCountdown] = useState(30 * 60);
  const setChecked = (id, index) => {
    console.log(id, index);
    if (id !== null) {
      const ind = state.list.findIndex((item) => item.id === id);
      if (ind != -1) {
        const updatedList = [...state.list];
        updatedList[ind].selected = index;

        setState({ list: updatedList });
      }
    }
  };
  useEffect(() => {
    const timer = setInterval(() => {
      if (countdown > 0) {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }
    }, 1000);

    // Clean up the timer when the component unmounts
    return () => clearInterval(timer);
  }, []);

  // Format the countdown time in hours, minutes, and seconds
  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };
  const [state, setState] = useState({
    query: "",
    list: questions,
    answers: JSON.parse(localStorage.getItem("myArray")) || [],
  });
  function getAnswer(id) {
    const index = state.answers?.find((item) => item.id === id);
    return index?.value || null;
  }
  return (
    <>
      <div className="test-instructions-div">
        {" "}
        <div className="col-md-8 offset-md-2 student-details flexy">
          <div className="col-md-5 ">
            <div className="flexy flexyM">
              {" "}
              <h6 className="col-md-3 col-3">Students:</h6>
              <p style={{ color: "#2F67D8" }}>Peter Olugbenga</p>
            </div>
            <div className="flexy flexyM">
              {" "}
              <h6 className="col-md-3 col-3">Subject:</h6>
              <p style={{ color: "#C32BD6" }}>Chemistry</p>
            </div>{" "}
            <div className="flexy flexyM">
              {" "}
              <h6 className="col-md-3 col-3">Test Title:</h6>
              <p>2010 MATHEMATICS JAMB PRACTICE 2</p>
            </div>
          </div>
          <div className="timer offset-md-4 mt4">
            <button disabled={countdown > 0}> {formatTime(countdown)}</button>
          </div>
        </div>
        <div className="col-md-8 offset-md-2 review-board">
          <div className="row ">
            {state.list.map((data, index) => (
              <ReviewedQuestions
                data={data}
                key={index}
                answer={() => getAnswer(data.id)}
                setChecked={setChecked}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
