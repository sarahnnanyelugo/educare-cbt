import React from "react";

export const Published = (props) => {
  const { bg, color, border, text } = props;
  return (
    <button style={{ background: bg, color: color, border: border }}>
      {text}
    </button>
  );
};
