import React, { useState } from "react";
import { Exams } from "../../components/Exams/Exams";
import { exams } from "../../TestData";
import "./home.scss";
import Table from "react-bootstrap/Table";

export const Home = () => {
  const [state, setState] = useState({
    query: "",
    list: exams,
  });
  return (
    <>
      <div className="home-div col-md-10 offset-md-1">
        <div className="flexy flexyM unit">
          <h3>Search Questions</h3>
          <button>Units balance: 50,000</button>
        </div>
        <div className="flexy question-type-div">
          <div className="col-md-11 flexy">
            {" "}
            <div className="col-md-4">
              <h6>Exam Type:</h6>
              <input placeholder="JAMB, WAEC..." />
            </div>
            <div className="col-md-4">
              <h6>Exam Subject:</h6>
              <input placeholder="Chemistry, Physics" />
            </div>
            <div className="col-md-4">
              <h6>Exam Year:</h6>
              <input placeholder="2023" />
            </div>
          </div>
          <div className="col-md-1 ">
            <button>Search</button>
          </div>
        </div>
        <div className="flexy sort flexyM">
          <h3>Explore Past Questions</h3>
          <div className="flexy flexyM">
            <h6>Sort by:</h6>
            <select>
              <option>Newest</option>
              <option>Oldest</option>
              <option>Subject</option>
              <option>Year</option>
            </select>
          </div>
        </div>
        <div className="row ">
          {state.list.map((data, index) => (
            <Exams data={data} />
          ))}
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
      </div>
    </>
  );
};
