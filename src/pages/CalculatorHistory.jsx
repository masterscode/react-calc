import React from "react";
import Navs from "../components/Nav";
import { CalculatorHistoryContext} from '../contexts/CalculatorHistoryContext';

const CalculatorHistory = () => {
  const { history } = React.useContext(CalculatorHistoryContext);

  return (
    <>
      <Navs />
      <h1>History and Operations</h1>
      <div>
        {history.map((history, i) => (
          <li key={i}>
            <span>{history.operands}</span> =<span>{history.result}</span>
          </li>
        ))}
      </div>
    </>
  );
};

export default CalculatorHistory;
