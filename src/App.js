import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Pages/dashboard/index";
import Quary from "./Pages/quary";
import AddQuary from "./Pages/addQuary";
import Login from "./components/login/Login";
import Layout from "./commonComponents/header/layout/Layout"; import DailyDutySheet from "./Pages/operations/dailyDutySheet";
import HotelReservation from "./Pages/operations/hotelReservation";
import Profilepage from "./Pages/profile";


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
          <Route path="/" element={<Layout  setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated}/>}>
            <Route path="/" element={<Navigate to="dashboard" replace />} />
            <Route path="profile" element={<Profilepage />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="travel/query" element={<Quary />} />
            <Route path="travel/create-quary" element={<AddQuary />} />
            <Route path={`daily-duty-sheet`} element={<DailyDutySheet />} />
            <Route path={`hotel-reservation`} element={<HotelReservation />} />
          </Route>
        </>
      )}

    </Routes>
  );
}

export default App;
