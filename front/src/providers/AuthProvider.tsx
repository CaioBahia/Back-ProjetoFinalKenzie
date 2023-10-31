import React from "react";
import { ReactNode, createContext, useEffect, useState } from "react";
import { loginData } from "../pages/LoginPage/validator";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextValues {
  signIn: (data: loginData) => void;
  loading: boolean;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextValues>(
  {} as AuthContextValues
);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("@motors-shop:token");
    if (!token) {
      setLoading(false);
      return;
    }

    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    setLoading(false);
  }, []);

  const signIn = async (data: loginData) => {
    try {
      const response = await api.post("/login", data);

      const { token } = response.data;

      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      localStorage.setItem("@motors-shop:token", token);
      console.log(token);

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const logout = () => {
    localStorage.removeItem("@motors-shop:token");
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ signIn, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
