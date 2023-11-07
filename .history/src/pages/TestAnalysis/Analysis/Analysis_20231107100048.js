import Table from "react-bootstrap/Table";
import "./analysis.scss";
export const Analysis = ({ data }) => {
  return (
    <>
      <div className="analysis-div  col-12">
        <Table>
          <tr>
            <th></th>
            <th></th>
            <th></th>
          </tr>
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
              </td>
              <td className="col-md-4">
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
