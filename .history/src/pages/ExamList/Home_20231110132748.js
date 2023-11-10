import React, { useState } from "react";
import { Exams } from "../../components/Exams/Exams";
import { exams } from "../../TestData";
import "./home.scss";
import Table from "react-bootstrap/Table";
import { Navbar } from "../../components/Navbar/Navbar";

export const ExamList = () => {
  const [state, setState] = useState({
    query: "",
    list: exams,
  });
  return (
    <>
      <Navbar />
      <div className="home-div col-md-10 offset-md-1">
        <div className="flexy flexyM unit">
          <h3>Search Questions</h3>
          <button>Units balance: 50,000</button>
        </div>
        <div className="flexy question-type-div">
          <div className="col-md-11 flexy">
            {" "}
            <div className="col-md-4">
              <h6>Exam Type:</h6>
              <input placeholder="JAMB, WAEC..." />
            </div>
            <div className="col-md-4">
              <h6>Exam Subject:</h6>
              <input placeholder="Chemistry, Physics" />
            </div>
            <div className="col-md-4">
              <h6>Exam Year:</h6>
              <input placeholder="2023" />
            </div>
          </div>
          <div className="col-md-1 ">
            <button>Search</button>
          </div>
        </div>
        <div className="flexy sort flexyM">
          <h3>Explore Past Questions</h3>
          <div className="flexy flexyM">
            <h6>Sort by:</h6>
            <select>
              <option>Newest</option>
              <option>Oldest</option>
              <option>Subject</option>
              <option>Year</option>
            </select>
          </div>
        </div>
        <div className="row ">
          {state.list.map((data, index) => (
            <Exams data={data} />
          ))}
        </div>
      </div>
    </>
  );
};
