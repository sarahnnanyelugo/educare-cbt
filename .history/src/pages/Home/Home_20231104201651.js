import React from "react";
import "./home.scss";
export const Home = () => {
  return (
    <>
      <div className="home-div col-md-10 offset-md-1">
        <div className="flexy flexyM unit">
          <h3>Search Questions</h3>
          <button>Units balance: 50,000</button>
        </div>
        <div className="flexy question-type-div">
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
        <div className="flexy">
          <h3>Explore Past Questions</h3>
        </div>
      </div>
    </>
  );
};
