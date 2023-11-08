import React from "react";

export const Activity = ({ data }) => {
  const { color } = data;
  return (
    <div className="activity-div flexy">
      <div className="col-md-1">
        <img src={data.icon} alt="icon" />
      </div>
      <div className="" style={{ flexGrow: "1" }}>
        <small>{data.timedate}</small>
        <h6>{data.activity}</h6>
        <p>{data.activityDetail}</p>
      </div>
      <div>
        <h6 style={{ color: color }}>{data.usedUnits}</h6>
        <small>{data.unitTotal}</small>
      </div>
    </div>
  );
};
