import React from "react";
import DailyDutyForm from "./DailyDutyForm";
import DailyDutyTable from "./DailyDutyTable";

const DailyDuty = () => {
  return (
    <div className="border p-4 shadow-sm container mt-2 rounded">
    <h2 className="bg-black p-2 text-white font-semibold text-lg">Daily Duty Sheet</h2>
        <DailyDutyForm /> 
        <DailyDutyTable />
    </div>
  );
};

export default DailyDuty;
