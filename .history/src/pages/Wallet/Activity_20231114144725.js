import React from "react";

export const Activity = ({ data }) => {
  const { color } = data;
  return (
    <div className="activity-div flexy">
      <div className="flexy flexyM">
        <div className="col-md-1">
          <img src={data.icon} alt="icon" />
        </div>
        <div className="" style={{ flexGrow: "1" }}>
          <small>{data.timedate}</small>
          <h6 style={{ marginTop: "-10px" }}>{data.activity}</h6>
          <p>{data.activityDetail}</p>
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <h6 style={{ color: color }}>{data.usedUnits}</h6>
        <p>{data.unitTotal}</p>
      </div>
    </div>
  );
};
