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
              <td colSpan={3}>
                {" "}
                <h6>{data.examYearTypeSubject}</h6>
                <p>{data.examDetails}</p>
              </td>
              <td>
                {" "}
                <div className="flexy">
                  <img src={Time} alt="logo" width="10%" />
                  <small>{data.examDuration}</small>
                </div>
                <div className="flexy">
                  <img src={Question} alt="logo" width="10%" />
                  <small>{data.questionNum}</small>
                </div>
              </td>
              <td>
                {" "}
                <div className="flexy">
                  <img src={Tick} alt="logo" width="13%" />
                  <small>{data.examMarks}</small>
                </div>
              </td>
              <td>
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
