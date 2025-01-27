import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/dashboard";
import Quary from "./Pages/quary";
import AddQuary from "./Pages/addQuary";


function App() {
  return (
    <>
      <Routes>
        <Route path={`dashboard`} element={<Dashboard />} />
        <Route path={`quary`} element={<Quary />} />
        <Route path={`add-quary`} element={<AddQuary  />} />
      </Routes>
    </>
  );
}

export default App;
