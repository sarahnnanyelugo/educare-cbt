import React, { useState } from "react";
import "./exams.scss";
import Time from "../../assets/images/time.svg";
import Question from "../../assets/images/question.svg";
import Tick from "../../assets/images/tick.svg";
import Table from "react-bootstrap/Table";
import { TestModal } from "../TestModal/TestModal";
import { Link } from "react-router-dom";

export const Exams = ({ data }) => {
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user")));
  const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem("logged_in"));
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
              <td className="col-md-1 col-4">
                {" "}
                <img
                  src={data.examType}
                  alt="logo"
                  width="50px"
                  height="50px"
                  className="examlogo"
                />
              </td>
              <td className="col-md-4 ">
                {" "}
                <div className="row1">
                  {" "}
                  <h6>{data.examYearTypeSubject}</h6>
                  <p>{data.examDetails}</p>
                </div>
              </td>
              <td className="col-md-2 ">
                {" "}
                <div className="flexy row2" style={{ marginBottom: "7px" }}>
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
                <div className="flexy row3">
                  <img src={Tick} alt="logo" width="22px" height="22px" />
                  <small>{data.examMarks}</small>
                </div>
              </td>
              <td className="col-md-2">
                {" "}
                <small>{data.unitNum}</small>
              </td>
              <td>
                {user !== null && loggedIn === "1" ? (
                  <TestModal />
                ) : (
                  <Link to={"/authenticate"}>
                    {" "}
                    <button>Practice</button>
                  </Link>
                )}
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};
