import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import "./analysis.scss";
export const Analysis = ({ data }) => {
  return (
    <>
      <div className="analysis-div  col-12">
        <Table>
          <tr>
            <tr></tr>
            <th>Name</th>
            <th>Subjects</th>
            <th>Date Attempted</th>
            <th>Total Score</th>
            <th>Time Used (mins)</th>
            <th>Action</th>
          </tr>
          <tbody>
            <tr>
              <td className="col-md-1">
                {" "}
                <img
                  src={data.examLogo}
                  alt="logo"
                  width="50px"
                  height="50px"
                  className="examlogo"
                />
              </td>
              <td className="col-md-2 col-6">
                {" "}
                <small>{data.examType}</small>
              </td>
              <td className="col-md-2 col-4">
                {" "}
                <small>{data.subject}</small>
              </td>
              <td className="col-md-2">
                {" "}
                <small>{data.date}</small>
                <br />
                <small>{data.time}</small>
              </td>
              <td className="col-md-2">
                {" "}
                <small>{data.score}</small>
              </td>
              <td>
                {/* <TestModal /> */}
                <small> {data.duration}</small>
              </td>
              <td>
                <Link to={"/analysis-dashboard"}>
                  <button></button>
                </Link>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};