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

function App() {
  return (
    <>

      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="dashboard" replace />} />

        {/* ............... Atif nezami .............. */}
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="querypackage" element={<QueryPackage />} />
        <Route path="sale/dsr" element={<SaleDSR />} />
        <Route path="sale/adddrs" element={<DSRForm />} />
        <Route path="sale/calls" element={<SaleCalls />} />
        <Route path="sale/addcalls" element={<AddCalls />} />
        <Route path="sale/meeting" element={<Meeting />} />
        <Route path="sale/addmeeting" element={<AddMeeting />} />
      </Routes>

    </>
  );
}

export default App;
