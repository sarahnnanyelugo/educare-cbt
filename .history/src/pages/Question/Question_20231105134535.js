import React from "react";
import "./test-instructions.scss";
import Alert from "../../assets/images/alert.svg";
import { Link } from "react-router-dom";

export const Question = () => {
  return (
    <div className="test-instructions-div">
      <div className="col-md-8 offset-md-2 instructions"></div>
    </div>
  );
};
