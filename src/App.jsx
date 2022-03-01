import React from "react";
import { BrowserRouter } from "react-router-dom";
import CalculatorRoutes from "./components/CalculatorRoutes";

function App() {
  return (
    <BrowserRouter>
      <CalculatorRoutes />
    </BrowserRouter>
  );
}

export default App;
