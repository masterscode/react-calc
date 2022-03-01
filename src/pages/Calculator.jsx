import React from "react";
import DisplayBox from "../components/DisplayBox";
import CalculatorKey from "../components/CalculatorKey";

import "../style/calculator.css";
import Navs from "../components/Nav";

const Calculator = () => {
  const [result, setResult] = React.useState("");
  const [operations, setOperations] = React.useState("");

  const numberKeys = [...Array(10).keys(), "+", "-", "*", "/"];

  const handleKeyClick = (label) => {
    setOperations((operations) => operations.concat(label));
  };

  const handleDelete = (v) => {
    setOperations((operations) =>
      operations.substring(0, operations.length - 1)
    );
  };

  const handleEquals = (v) => {
    setResult(result => eval(operations));
  };

  const handleClear = () => {};

  const operators = [
    { label: "Del", fn: handleDelete },
    { label: "=", fn: handleEquals },
    { label: "Clr", fn: handleClear },
  ];

  return (
    <section className="calculator">
      <Navs />
      <DisplayBox value={operations} />
      <DisplayBox value={result} rightAlign />

      <div className="calculator__keys">
        {numberKeys.map((calcKey, i) => (
          <CalculatorKey
            label={calcKey}
            clickHandler={handleKeyClick}
            key={i}
          />
        ))}

        {operators.map(({ label, fn }, i) => (
          <CalculatorKey label={label} clickHandler={fn} key={i + 100} />
        ))}
      </div>
    </section>
  );
};

export default Calculator;
