import Table from "react-bootstrap/Table";
import "./analysis.scss";
export const Analysis = ({ data }) => {
  return (
    <>
      <div className="analysis-div  col-12">
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
                <p>{data.examYearTypeSubject}</p>
                <p>{data.examDetails}</p>
              </td>
              <td className="col-md-2 col-4">
                {" "}
                <small>Chemistry</small>
                <div className="flexy">
                  <small>{data.questionNum}</small>
                </div>
              </td>
              <td className="col-md-4">
                {" "}
                <div className="flexy">
                  <small>{data.examMarks}</small>
                </div>
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
