import { Route, Routes, Navigate } from "react-router-dom";
import Navigation from "./commonComponents/header/navigation/Navigation";
import Dashboard from "./Pages/dashboard/index"
import QueryPackage from "./Pages/QueryPackage";
import SaleDSR from "./Pages/Saledsr";
import DSRForm from "./components/sale/AddNewDrs";
import SaleCalls from "./Pages/SalesCalls";
import AddCalls from "./components/salescalls/AddCalls";
import Meeting from "./Pages/Meetings";
import AddMeeting from "./components/meeting/AddMeeting";
import Quary from "./Pages/quary";
import AddQuary from "./Pages/addQuary";
import DailyDutySheet from "./Pages/operations/dailyDutySheet";
import HotelReservation from "./Pages/operations/hotelReservation";


function App() {
  return (
    <>

      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="dashboard" replace />} />

        {/* ............... Atif nezami .............. */}
        <Route path="/" element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path={`travel/query`} element={<Quary />} />
        <Route path={`travel/create-quary`} element={<AddQuary  />} />
        <Route path={`daily-duty`} element={<DailyDutySheet />} />
        <Route path={`hotel-reservation`} element={<HotelReservation />} />
      </Routes>

    </>
  );
}

export default App;
