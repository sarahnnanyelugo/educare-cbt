import React from "react";
import "./badge.scss";
export const Published = (props) => {
  const { bg, color, border, text } = props;
  return (
    <button style={{ background: bg, color: color, border: border }}>
      {text}
    </button>
  );
};
