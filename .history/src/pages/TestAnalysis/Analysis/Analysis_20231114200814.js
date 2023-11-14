import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import Icon from "../../../assets/images/analyse.svg";

import "./analysis.scss";
export const Analysis = ({ data }) => {
  return (
    <>
      <div className="analysis-div  col-12">
        <Table bordered hover>
          <tbody>
            <tr>
              <td className="col-md-1 ">
                {" "}
                <div className=" row4">
                  {" "}
                  <img
                    src={data.examLogo}
                    alt="logo"
                    width="50px"
                    height="50px"
                    className="examlogo"
                  />
                </div>
              </td>
              <td className="col-md-3 ">
                {" "}
                <div className="row1">
                  {" "}
                  <small>{data.examType}</small>
                </div>
              </td>
              <td className="col-md-2 ">
                {" "}
                <div className="row4">
                  {" "}
                  <small>{data.subject}</small>
                </div>
              </td>
              <td className="col-md-2">
                {" "}
                <div className="row4">
                  {" "}
                  <small>{data.date}</small>
                  <br />
                  <small>{data.time}</small>
                </div>
              </td>
              <td className="col-md-1">
                {" "}
                <div className="row2">
                  {" "}
                  <small>{data.score}</small>
                </div>
              </td>
              <td className="col-md-2">
                {/* <TestModal /> */}
                <small> {data.duration}</small>
              </td>
              <td>
                <Link to={"/analysis-dashboard"}>
                  <button>
                    <img src={Icon} alt="icon" />
                    Details
                  </button>
                </Link>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};
