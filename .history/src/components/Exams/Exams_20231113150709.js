import React from "react";
import "./exams.scss";
import Time from "../../assets/images/time.svg";
import Question from "../../assets/images/question.svg";
import Tick from "../../assets/images/tick.svg";
import Table from "react-bootstrap/Table";
import { TestModal } from "../TestModal/TestModal";
import { Link } from "react-router-dom";

export const Exams = ({ data, user }) => {
  return (
    <>
      <div className="questions-div  col-12">
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
              <td className="col-md-4 col-6">
                {" "}
                <h6>{data.examYearTypeSubject}</h6>
                <p>{data.examDetails}</p>
              </td>
              <td className="col-md-2 col-4">
                {" "}
                <div className="flexy" style={{ marginBottom: "7px" }}>
                  <img src={Time} alt="logo" width="22px" height="22px" />
                  <small>{data.examDuration}</small>
                </div>
                <div className="flexy">
                  <img src={Question} alt="logo" width="22px" height="22px" />
                  <small>{data.questionNum}</small>
                </div>
              </td>
              <td className="col-md-4">
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
                <TestModal />
                <div>
                  {user !== undefined ? (
                    <Link to={"/authenticate"}>
                      {" "}
                      <button>Practice</button>
                    </Link>
                  ) : (
                    <TestModal />
                  )}
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};
