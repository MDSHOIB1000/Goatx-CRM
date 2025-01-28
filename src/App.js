import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./commonComponents/header/navigation/Navigation";
import Dashboard from "./Pages/dashboard/index";
import Quary from "./Pages/quary";
import AddQuary from "./Pages/addQuary";
import Login from "./components/login/Login";
import Layout from "./commonComponents/header/layout/Layout";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Routes>
      {!isAuthenticated ? (
        <>
          <Route
            path="/"
            element={<Navigate to="login" replace />}
          />
          <Route
            path="login"
            element={<Login setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} />}
          />
        </>
      ) : (
        <>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="travel/query" element={<Quary />} />
            <Route path="travel/create-quary" element={<AddQuary />} />
          </Route>
        </>
      )}
    </Routes>
  );
}

export default App;
