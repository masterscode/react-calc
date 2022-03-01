import React from "react";

const CalculatorKey = ({ label, clickHandler }) => (
  <button
    className="calculator__key"
    onClick={(e) => clickHandler(e.currentTarget.textContent.trim())}
  >
    {label}
  </button>
);

export default CalculatorKey;
