import React from "react";
import "./exams.scss";
import Time from "../../assets/images/time.svg";
import Question from "../../assets/images/question.svg";
import Tick from "../../assets/images/tick.svg";
import Table from "react-bootstrap/Table";

export const Exams = ({ data }) => {
  return (
    <>
      <div className="questions-div flexy ">
        <h6>{data.num}.</h6>
        <img
          src={data.examType}
          alt="logo"
          width="50px"
          height="50px"
          className="examlogo"
        />
        <div>
          <h6>{data.examYearTypeSubject}</h6>
          <p>{data.examDetails}</p>
        </div>
        <div>
          <div className="flexy">
            <img src={Time} alt="logo" width="20%" />
            <small>{data.examDuration}</small>
          </div>
          <div className="flexy">
            <img src={Question} alt="logo" width="20%" />
            <small>{data.questionNum}</small>
          </div>
        </div>
        <div className="flexy">
          <img src={Tick} alt="logo" width="20%" />
          <small>{data.examMarks}</small>
        </div>
        <small>{data.unitNum}</small>
        <button>Practice</button>
      </div>
      <Table>
        <tbody>
          <tr>
            <td>
              {" "}
              <h6>{data.num}.</h6>
            </td>
            <td>
              {" "}
              <img
                src={data.examType}
                alt="logo"
                width="50px"
                height="50px"
                className="examlogo"
              />
            </td>
            <td>
              {" "}
              <h6>{data.examYearTypeSubject}</h6>
            </td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};