import { Route, Routes, Navigate } from "react-router-dom";
import Navigation from "./commonComponents/header/navigation/Navigation";
import Dashboard from "./Pages/dashboard/index"

function App() {
  return (
    <>

      <Navigation />
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>

    </>
  );
}

export default App;
