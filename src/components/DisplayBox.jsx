import React from "react";

const DisplayBox = (props) => {
  const classList = props.rightAlign
    ? "calculator__display calculator__display--result"
    : "calculator__display calculator__display--operations";

  return <div className={classList}>{props.value}</div>;
};

export default DisplayBox;
