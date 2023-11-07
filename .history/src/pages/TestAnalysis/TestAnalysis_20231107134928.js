import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";
import { analysis } from "../../TestData";
import { Analysis } from "./Analysis/Analysis";
import "./test-analysis.scss";
import Table from "react-bootstrap/Table";

export const TestAnalysis = () => {
  const [state, setState] = useState({
    query: "",
    list: analysis,
  });
  return (
    <>
      <Navbar />
      <div className="test-analysis-div col-md-10 offset-md-1">
        <div className="flexy flexyM search-bar mt6">
          <h5>Test List</h5>
          <div className="col-md-2">
            {" "}
            <input type="search" placeholder="search" />
          </div>
        </div>
        <div className="row analysis-table">
          <Table>
            <tr>
              <tr>ffffddddd</tr>
              <th>Name</th>
              <th>Subjects</th>
              <th>Date Attempted</th>
              <th>Total Score</th>
              <th>Time Used (mins)</th>
              <th>Action</th>
            </tr>
          </Table>
          {state.list.map((data, index) => (
            <Analysis data={data} />
          ))}
        </div>
      </div>
    </>
  );
};
