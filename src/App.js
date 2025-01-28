import { Route, Routes, Navigate } from "react-router-dom";
import Navigation from "./commonComponents/header/navigation/Navigation";
import Dashboard from "./Pages/dashboard/index"
import Quary from "./Pages/quary";
import AddQuary from "./Pages/addQuary";


function App() {
  return (
    <>

      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path={`travel/query`} element={<Quary />} />
        <Route path={`travel/create-quary`} element={<AddQuary  />} />
      </Routes>

    </>
  );
}

export default App;
