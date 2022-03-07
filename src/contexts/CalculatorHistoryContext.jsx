import React, { createContext } from "react";

export const CalculatorHistoryContext = createContext();

CalculatorHistoryContext.displayName = "Calculator History Context";

const CalculatorHistoryContextProvider = ({ children }) => {
  const [history, setHistory] = React.useState([]);

  const addToHistory = (result)=>{
    history.push(result)
      setHistory(history=>([...history]))
      console.log(history);
  };

  return (
    <CalculatorHistoryContext.Provider value={{history:history, addToHistory}}>
      {children}
    </CalculatorHistoryContext.Provider>
  );
};

export default CalculatorHistoryContextProvider;
