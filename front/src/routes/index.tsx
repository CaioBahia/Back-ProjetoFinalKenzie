import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login/login";
import { Dashboard } from "../pages/dashboard";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};
