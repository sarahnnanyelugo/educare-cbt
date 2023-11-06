import React from "react";
import "./exams.scss";
import Time from "../../assets/images/time.svg";
import Question from "../../assets/images/question.svg";
import Tick from "../../assets/images/tick.svg";
import Table from "react-bootstrap/Table";
import { TestModal } from "../TestModal/TestModal";

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
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};
