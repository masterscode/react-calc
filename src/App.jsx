import React from "react";
import { BrowserRouter } from "react-router-dom";
import CalculatorHistoryContextProvider from "./contexts/CalculatorHistoryContext";
import CalculatorRoutes from "./components/CalculatorRoutes";

function App() {
  return (
    <BrowserRouter>
      <CalculatorHistoryContextProvider>
        <CalculatorRoutes />
      </CalculatorHistoryContextProvider>
    </BrowserRouter>
  );
}

export default App;
