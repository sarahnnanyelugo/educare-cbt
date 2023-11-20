import React from "react";
import "./badge.scss";
export const Badge = ({ cls, text }) => {
  return <button className={` badge ${cls}`}>{text}</button>;
};
