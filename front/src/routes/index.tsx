import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage/login";
import { HomePage } from "../pages/HomePage";

export const RoutesMain = () => {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<HomePage />} />
      {/* login */}
      <Route path="/login" element={<LoginPage />} />
      {/*  Register */}
      <Route path="" element={} />
      {/* Product */}
      <Route path="" element={} />
      {/* Profile */}
      <Route path="" element={} />
      {/* 404 */}
      <Route path="*" element={} />
    </Routes>
  );
};
