import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Calculator from "../pages/Calculator";
import CalculatorHistory from "../pages/CalculatorHistory";

const CalculatorRoutes = () => {
  return (<Routes>
    <Route path="/history" element={<CalculatorHistory />} />
    <Route path="/calculator" element={<Calculator />} />
    <Route path="/" element = {<Navigate replace to="/calculator" />} />
  </Routes>);
};

export default CalculatorRoutes;
