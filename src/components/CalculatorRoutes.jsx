import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Calculator from "../pages/Calculator";
import CalculatorHistory from "../pages/CalculatorHistory";
import Registration from "../pages/Registration";


const CalculatorRoutes = () => {
  return (
    <Routes>
      <Route path="/history" element={<CalculatorHistory />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/" element={<Navigate replace to="/calculator" />} />
      <Route path="/register" element={<Registration />} />
      <Route path="*" element={<h1 align="center">404 </h1>} />
    </Routes>
  );
};

export default CalculatorRoutes;
