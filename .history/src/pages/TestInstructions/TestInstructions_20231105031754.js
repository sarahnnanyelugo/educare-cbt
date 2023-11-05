import React from "react";
import "./test-instructions.scss";
export const TestInstructions = () => {
  return (
    <div className="test-instructions-div">
      <div className="col-md-8 offset-md-2 instructions">
        <div className="title-div">
          {" "}
          <h4>Test Instructions</h4>
        </div>
        <div className="flexy">
          <div className="col-md-4">
            <h6>Welcome Peter Olugbenga</h6>
            <div className="flexy flexyM">
              {" "}
              <h6>Subject:</h6>
              <p>Chemistry</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
