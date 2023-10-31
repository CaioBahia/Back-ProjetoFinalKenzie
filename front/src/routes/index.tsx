import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/Login/login";
import { HomePage } from "../pages/HomePage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
};
