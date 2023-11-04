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
        </tbody>
      </Table>
    </>
  );
};
