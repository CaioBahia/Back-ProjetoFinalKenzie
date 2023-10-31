import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage/login";
import { HomePage } from "../pages/HomePage";
import { RegisterPage } from "../pages/RegisterPage";
import { ProductPage } from "../pages/ProductPage";
import { ProfilePage } from "../pages/ProfilePage";
import { NotFoundPage } from "../pages/NotFound";

export const RoutesMain = () => {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<HomePage />} />
      {/* login */}
      <Route path="/login" element={<LoginPage />} />
      {/*  Register */}
      <Route path="" element={<RegisterPage />} />
      {/* Product */}
      <Route path="" element={<ProductPage />} />
      {/* Profile */}
      <Route path="" element={<ProfilePage />} />
      {/* 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
