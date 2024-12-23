import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login";
import Registration from "../pages/auth/Registration";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import Dashboard from "../containers/Dashboard";
const AppRouter = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const PrivateRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          {/* authentication and authorize  */}
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />

          <Route
            path="/:name/:path?"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
};

export default AppRouter;
