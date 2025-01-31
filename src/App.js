import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Pages/dashboard/index";
import QueryPackage from "./Pages/QueryPackage";
import SaleDSR from "./Pages/Saledsr";
import DSRForm from "./components/sale/AddNewDrs";
import SaleCalls from "./Pages/SalesCalls";
import AddCalls from "./components/salescalls/AddCalls";
import Meeting from "./Pages/Meetings";
import AddMeeting from "./components/meeting/AddMeeting";
import Quary from "./Pages/quary";
import AddQuary from "./Pages/addQuary";
import Login from "./components/login/Login";
import Layout from "./commonComponents/header/layout/Layout";
import DailyDutySheet from "./Pages/operations/dailyDutySheet";
import HotelReservation from "./Pages/operations/hotelReservation";
import Profilepage from "./Pages/profile";
import Invoice from "./Pages/operations/invoice";
import ManualInvoice from "./Pages/operations/manualInvoice";
import Quotation from "./Pages/operations/quotation";
import TourMasterSheet from "./Pages/operations/tourMasterSheet";
import VisaRequest from "./Pages/operations/visaRequest";
import Voucher from "./Pages/operations/voucher";
import EditVoucher from "./Pages/operations/editVoucher";
import B2Cmaster from "./Pages/masterPages/b2Cmaster";
import EditB2Cmaster from "./Pages/masterPages/editB2Cmaster";
import MealPlan from "./Pages/masterPages/mealPlan";
import   ProfileForm from "./components/profile/profileForm/ProfileForm"

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Routes>
      {!isAuthenticated ? (
        <>
          <Route path="/" element={<Navigate to="login" replace />} />
          <Route
            path="login"
            element={
              <Login
                setIsAuthenticated={setIsAuthenticated}
                isAuthenticated={isAuthenticated}
              />
            }
          />
        </>
      ) : (
        <>
          <Route
            path="/"
            element={
              <Layout
                setIsAuthenticated={setIsAuthenticated}
                isAuthenticated={isAuthenticated}
              />
            }
          >
            <Route path="/" element={<Navigate to="dashboard" replace />} />
            <Route path="profile" element={<Profilepage />} />
            <Route path="profile/edit-profile" element={<ProfileForm />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="travel/query" element={<Quary />} />
            <Route path="travel/create-quary" element={<AddQuary />} />
            <Route path={`daily-duty-sheet`} element={<DailyDutySheet />} />
            <Route path={`hotel-reservation`} element={<HotelReservation />} />
            <Route path={`invoice`} element={<Invoice />} />
            <Route path={`manual-invoice`} element={<ManualInvoice />} />
            <Route path={"quotation"} element={<Quotation />} />
            <Route path={"tour-master"} element={<TourMasterSheet />} />
            <Route path="querypackage" element={<QueryPackage />} />
            <Route path="sale/dsr" element={<SaleDSR />} />
            <Route path="sale/adddrs" element={<DSRForm />} />
            <Route path="sale/calls" element={<SaleCalls />} />
            <Route path="sale/addcalls" element={<AddCalls />} />
            <Route path="sale/meeting" element={<Meeting />} />
            <Route path="sale/addmeeting" element={<AddMeeting />} />
            <Route path={"visa-request"} element={<VisaRequest />} />
            <Route path={"voucher"} element={<Voucher />} />
            <Route path={"edit-voucher"} element={<EditVoucher />} />

            {/* ........ Master pages start .................... */}
            <Route path="B2C" element={<B2Cmaster />} />
            <Route path="edit-B2C" element={<EditB2Cmaster />} />
            <Route path="meal-plan" element={<MealPlan />} />

            {/* ........ Master pages End ...................... */}
          </Route>
        </>
      )}
    </Routes>
  );
}

export default App;
