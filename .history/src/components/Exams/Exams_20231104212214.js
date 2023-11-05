import React from "react";
import "./exams.scss";
import Time from "../../assets/images/time.svg";
import Question from "../../assets/images/question.svg";
import Tick from "../../assets/images/tick.svg";
import Table from "react-bootstrap/Table";

export const Exams = ({ data }) => {
  return (
    <>
      <div className="questions-div  ">
        <Table>
          <tbody>
            <tr>
              <td>
                {" "}
                <h6>{data.num}.</h6>
              </td>
              <td className="col-md-1">
                {" "}
                <img
                  src={data.examType}
                  alt="logo"
                  width="50px"
                  height="50px"
                  className="examlogo"
                />
              </td>
              <td className="col-md-3">
                {" "}
                <h6>{data.examYearTypeSubject}</h6>
                <p>{data.examDetails}</p>
              </td>
              <td className="col-md-2">
                {" "}
                <div className="flexy">
                  <img src={Time} alt="logo" width="22px" height="22px" />
                  <small>{data.examDuration}</small>
                </div>
                <div className="flexy">
                  <img src={Question} alt="logo" width="22px" height="22px" />
                  <small>{data.questionNum}</small>
                </div>
              </td>
              <td className="col-md-2">
                {" "}
                <div className="flexy">
                  <img src={Tick} alt="logo" width="22px" height="22px" />
                  <small>{data.examMarks}</small>
                </div>
              </td>
              <td className="col-md-2">
                {" "}
                <small>{data.unitNum}</small>
              </td>
              <td>
                <button>Practice</button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};