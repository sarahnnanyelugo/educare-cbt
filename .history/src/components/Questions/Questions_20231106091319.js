import React from "react";
import "./questions.scss";
export const Questions = () => {
  return (
    <div>
      {" "}
      <div className="col-md-12 ">
        <div className="title-div">
          {" "}
          <h6>Question 11</h6>
        </div>
        <p>
          Moving from left to right across a period, the general rise in the
          first ionization energy can be attributed to the
        </p>
        <div>
          <input type="radio" id="answer-a" name="answers" value="answer-a" />
          <label for="answer-a">A. Increase in screening effect</label>
        </div>
        <div>
          <input type="radio" id="answer-b" name="answers" value="answer-b" />
          <label for="answer-b">B. Increase in nuclear charge</label>
        </div>
        <div>
          <input type="radio" id="answer-c" name="answers" value="answer-c" />
          <label for="answer-c">C. Decrease in screening effect</label>
        </div>{" "}
        <div>
          <input type="radio" id="answer-d" name="answers" value="answer-d" />
          <label for="answer-d">D. Decrease in nuclear charge</label>
        </div>
        <div className="flexy mt">
          <button className="previous-btn">Previous</button>
          <button className="next-btn offset-md-9">Next</button>
        </div>
      </div>
    </div>
  );
};
