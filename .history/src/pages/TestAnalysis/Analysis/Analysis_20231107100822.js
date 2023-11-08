import Table from "react-bootstrap/Table";
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
            <th>Time Used (mins)</th>
          </tr>
          <tbody>
            <tr>
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
              <td className="col-md-2 col-6">
                {" "}
                <small>{data.examYearTypeSubject}</small>
                <small>{data.examDetails}</small>
              </td>
              <td className="col-md-2 col-4">
                {" "}
                <small>Chemistry</small>
              </td>
              <td className="col-md-2">
                {" "}
                <small>{data.examMarks}</small>
              </td>
              <td className="col-md-2">
                {" "}
                <small>{data.unitNum}</small>
              </td>
              <td>
                {/* <TestModal /> */}
                Modal
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};