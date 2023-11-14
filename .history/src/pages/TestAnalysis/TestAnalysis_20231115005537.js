import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";
import { analysis } from "../../TestData";
import { Analysis } from "./Analysis/Analysis";
import "./test-analysis.scss";
import Icon from "../../assets/images/search.svg";

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
          <div className="lisxt ">
            {" "}
            <h5>Test List</h5>
          </div>
          <div className="col-md-2 search-input offset-md-9 offset-2">
            {" "}
            <input type="search" placeholder="search" />
            <img src={Icon} alt="" />
          </div>
        </div>
        <div className="row analysis-table">
          <Table>
            <tr>
              <th className="col-md-1">
                <div className="row3" style={{ color: "#fff" }}>
                  {" "}
                  logooo
                </div>
              </th>
              <th className="col-md-3 ">
                <div className="row3">Name</div>
              </th>
              <th className="col-md-2">
                <div className="row3"> Subjects</div>
              </th>
              <th>
                <div className="row3">Date Attempted</div>
              </th>
              <th>
                <div className="row3"> Total Score</div>
              </th>
              <th>
                {" "}
                <div className="row3">Time Used (mins)</div>
              </th>
              <th>
                <div className="row3"> Action</div>
              </th>
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
