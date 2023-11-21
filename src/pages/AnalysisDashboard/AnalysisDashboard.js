import React, { useState, lazy, Suspense } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Badge } from "../../components/Badge/Badge";
import { Navbar } from "../../components/Navbar/Navbar";
import { examSummary, questions } from "../../TestData";
import "./analysis-dashboard.scss";
import { AnswerSummary } from "./AnswerSummary";
import QuestionChart from "./QuestionChart.js/QuestionChart";
import SubjectChart from "./SubjectChart/SubjectChart";
import TimeChart from "./TimeChart/TimeChart";
export const AnalysisDashboard = () => {
  const [activeIndex2, setActiveIndex2] = useState(1);
  const handleClick = (index) => setActiveIndex2(index);

  const checkActive = (index, className) =>
    activeIndex2 === index ? className : "";
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
      <Navbar />
      <div className="col-md-10 offset-md-1 mt5">
        <Link to={"/test-analysis"}>Back</Link>
        <h4>Test Analysis</h4>
        <div className="analysis-tab ">
          {" "}
          <div className="tabs ">
            <button
              className={`tab ${checkActive(1, "active2")}`}
              onClick={() => handleClick(1)}
            >
              Analysis
            </button>
            <button
              className={`tab ${checkActive(2, "active2")}`}
              onClick={() => handleClick(2)}
              style={{ marginLeft: "20px" }}
            >
              Questions and Answers
            </button>
          </div>
          <div className="panels">
            <div className={`panel ${checkActive(1, "active2")}`}>
              <div className="profile-div">
                <h6>Test Details</h6>

                <hr />
                <div className="flexy">
                  <div className="col-md-4">
                    <div className="flexy flexyM">
                      <h6>Subject: </h6>
                      <p>Chemistry</p>
                    </div>
                    <div className="flexy  flexyM">
                      <h6>Test Title:</h6>
                      <p>2010 Chemistry Jamb Practice</p>
                    </div>
                    <div className="flexy  flexyM">
                      <h6>Date Attempted:</h6>
                      <p>30-Oct-2023 1:37 PM</p>
                    </div>
                    <div className="flexy  flexyM">
                      <h6>Result Status:</h6>
                      <div>
                        {" "}
                        <Badge
                          text="Published"
                          border="solid 1px #5EAA42"
                          color="#5EAA42"
                          background="#5EAA421A"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="flexy  flexyM">
                      <h6>Total Mark:</h6>
                      <p>50</p>
                    </div>
                    <div className="flexy  flexyM">
                      <h6>Duration:</h6>
                      <p>30mins</p>
                    </div>
                    <div className="flexy  flexyM">
                      <h6>Questions:</h6>
                      <p>50</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="flexy  flexyM">
                      <h6>Percentage Mark:</h6>
                      <p>2.04%</p>
                    </div>
                    <div className="flexy  flexyM">
                      <h6>Mark per Question:</h6>
                      <p>1</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row row-cols-1 row-cols-lg-2 g-2 g-lg-3">
                <div className="col">
                  {" "}
                  <div className=" chart-div">
                    <h6>Question Chart (Performance)</h6>
                    <hr />
                    <div className="col-md-9 col-12">
                      <QuestionChart />
                    </div>
                  </div>
                </div>
                <div className="col">
                  {" "}
                  <div className=" chart-div">
                    <h6>Test Overview</h6>
                    <hr />
                    <Row>
                      <Col>Total Questions:</Col>
                      <Col>50</Col>
                    </Row>
                    <Row>
                      <Col>Total Multiple Choice Questions:</Col>
                      <Col>45</Col>
                    </Row>
                    <Row>
                      <Col>Total Sub-questions:</Col>
                      <Col>2</Col>
                    </Row>
                    <Row>
                      <Col>Total Time Elapsed (Min):</Col>
                      <Col>0.25s</Col>
                    </Row>
                    <Row>
                      <Col>Total Questions Attempted:</Col>
                      <Col>2</Col>
                    </Row>
                    <Row>
                      <Col>Total Questions Unanswered:</Col>
                      <Col>25</Col>
                    </Row>
                    <Row>
                      <Col>Total Correct Answers:</Col>
                      <Col>14</Col>
                    </Row>
                    <Row>
                      <Col>Total Incorrect Answers:</Col>
                      <Col>11</Col>
                    </Row>
                  </div>
                </div>
              </div>
              <div className=" chart-div2">
                <h6>Time on Question Chart</h6>
                <hr />
                <TimeChart />
              </div>{" "}
              <div className=" chart-div2">
                <h6>Time on Question Chart</h6>
                <hr />
                <SubjectChart />
              </div>
            </div>
            <div className={`panel ${checkActive(2, "active2")}`}>
              <div className="offset-md-8 badges">
                <center>
                  <Badge text="Correct" cls="correct" />
                  <Badge text="Incorrect" cls="incorrect" />
                  <Badge text="Unanswered" cls="unanswered" />
                </center>
              </div>
              <div className=" questions-div2">
                <div className="row ">
                  {state.list.map((data, index) => (
                    <AnswerSummary
                      data={data}
                      key={index}
                      answer={() => getAnswer(data.id)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
