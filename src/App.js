import { Route, Routes, Navigate } from "react-router-dom";
import Navigation from "./commonComponents/header/navigation/Navigation";
import Dashboard from "./Pages/dashboard/index"
import Quary from "./Pages/quary";
import AddQuary from "./Pages/addQuary";
import DailyDutySheet from "./Pages/operations/dailyDutySheet";
import HotelReservation from "./Pages/operations/hotelReservation";
import Invoice from "./Pages/operations/invoice";
import ManualInvoice from "./Pages/operations/manualInvoice";
import Quotation from "./Pages/operations/quotation";
import TourMasterSheet from "./Pages/operations/tourMasterSheet";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path={`travel/query`} element={<Quary />} />
        <Route path={`travel/create-quary`} element={<AddQuary  />} />
        <Route path={"daily-duty"} element={<DailyDutySheet />} />
        <Route path={`hotel-reservation`} element={<HotelReservation />} />
        <Route path={`invoice`} element={<Invoice />} />
        <Route path={`manual-invoice`} element={<ManualInvoice />} />
        <Route path={"quotation"} element={<Quotation />} />
        <Route path={"tour-master"} element={<TourMasterSheet />} />
      </Routes>

    </>
  );
}

export default App;
