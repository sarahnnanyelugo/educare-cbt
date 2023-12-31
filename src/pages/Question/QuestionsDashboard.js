import React, { useEffect, useState } from "react";
import "./question.scss";
import Prev from "../../assets/images/previous.svg";
import Next from "../../assets/images/next.svg";
import { Link } from "react-router-dom";
import { questions } from "../../TestData";
import { Questions } from "../../components/Questions/Questions";
import { QuestionNum } from "../../components/QuestionNum/QuestionNum";
import { SubmitModal } from "../../components/SubmitModal/SubmitModal";
import Offcanvas from "react-bootstrap/Offcanvas";
export const QuestionsDashboard = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [countdown, setCountdown] = useState(30 * 60); // 30 minutes in seconds

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
  });
  const [lastQuestion, setLastQuestion] = useState(false);
  const [firstQuestion, setFirstQuestion] = useState(true);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [myArray, setMyArray] = useState([]);

  // useEffect(() => {
  //   // Get the existing data from local storage
  //   const storedArray = JSON.parse(localStorage.getItem("myArray"));

  //   // If there is existing data, update the state with it
  //   if (storedArray) {
  //     setMyArray(storedArray);
  //   } else {
  //     // If the array doesn't exist, initialize it and store in local storage
  //     const initialArray = [];
  //     setMyArray(initialArray);
  //     localStorage.setItem("myArray", JSON.stringify(initialArray));
  //   }
  // }, []);

  const updateLocalStorage = ({ newKey, newValue }) => {
    // Example: new key-value pair
    // const newKey = "newKey";
    // const newValue = "newValue";

    let updatedArray = myArray;

    // Check if the key already exists in the array
    const existingIndex = updatedArray.find((item) => item.id === newKey);
    console.log("existingIndex", existingIndex);

    if (existingIndex) {
      // If the key exists, update its value
      existingIndex.value = newValue;
      setMyArray(updatedArray);
      localStorage.setItem("myArray", JSON.stringify(updatedArray));
    } else {
      // If the key doesn't exist, add the new key-value pair to the array
      const newArray = [...myArray, { id: newKey, value: newValue }];
      setMyArray(newArray);
      localStorage.setItem("myArray", JSON.stringify(newArray));
    }
  };

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
    const gt = parseInt(localStorage.getItem("go_to_question")) || 0;
    if (gt > 0) setNewIndex(gt);
    setTimeout(() => {
      localStorage.removeItem("go_to_question");
    }, 500);
  }, []);
  useEffect(() => {
    setLastQuestion(questionNumber === state.list.length - 1);
    setFirstQuestion(questionNumber === 0);
  }, [questionNumber]);
  const setChecked = (id, index) => {
    console.log(id, index);
    const payload = { newKey: id, newValue: parseInt(index) };
    updateLocalStorage(payload);

    if (id !== null) {
      const ind = state.list.findIndex((item) => item.id === id);
      if (ind != -1) {
        // Update the selected property of the object at index `ind`
        const updatedList = [...state.list]; // Create a copy of the original array
        updatedList[ind].selected = parseInt(index);

        // Update the state with the modified array
        setState({ list: updatedList });
      }
    }
  };
  const resetAnswers = () => {
    localStorage.removeItem("myArray");
  };
  return (
    <>
      <div className="test-instructions-div22">
        <div className="col-md-8 offset-md-2 student-details flexy flexyM">
          <div className="col-md-5 col-9">
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
          <div className="timer offset-md-4 mt4 col-3 no-margin ">
            <button disabled={countdown > 0}> {formatTime(countdown)}</button>
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
              <div className="flexy pre-next-btns flexyM">
                <button
                  disabled={firstQuestion}
                  className="previous-btn btn"
                  onClick={() =>
                    questionNumber > 0
                      ? setQuestionNumber(questionNumber - 1)
                      : ""
                  }
                >
                  <img src={Prev} alt="icon" width="20px" /> Previous
                </button>

                {lastQuestion ? (
                  <button
                    onClick={handleShow}
                    className="mobileview offcanvas-btn"
                  >
                    More options
                  </button>
                ) : (
                  <button
                    onClick={handleShow}
                    className="mobileview offcanvas-btn"
                  >
                    Show numbers
                  </button>
                )}
                {lastQuestion ? (
                  <div className="">
                    <SubmitModal />
                  </div>
                ) : (
                  <button
                    className="next-btn  "
                    onClick={() =>
                      questionNumber < state.list.length - 1
                        ? setQuestionNumber(questionNumber + 1)
                        : ""
                    }
                  >
                    Next <img src={Next} alt="icon" />
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="col-md-4 instructions4">
            {" "}
            <Offcanvas
              show={show}
              onHide={handleClose}
              backdrop={false}
              responsive="lg"
              placement="bottom"
              scroll={true}
              style={{
                height: "auto",
                maxHeight: "100vh",
                width: "100%",
                maxWidth: "100%",
              }}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <div>
                  {" "}
                  <h6>Question Navigation</h6>
                  <hr />
                  <div className="row row-cols-10 row-cols-lg-10 g-1 g-lg-1 ">
                    {state.list.map((data, index) => (
                      <QuestionNum
                        data={data}
                        bg={getQuestionBg(index)}
                        callBack={setNewIndex}
                      />
                    ))}
                  </div>
                  {lastQuestion ? (
                    <div
                      className="flexy offset-md-2 offset-3"
                      style={{ marginTop: "40px" }}
                    >
                      {" "}
                      <button className="reset-btn " onClick={resetAnswers}>
                        Reset question
                      </button>{" "}
                      <Link to={"/review-page"}>
                        {" "}
                        <button className="review-btn ">Review answer</button>
                      </Link>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </Offcanvas.Body>
            </Offcanvas>
          </div>
        </div>
      </div>
    </>
  );
};
