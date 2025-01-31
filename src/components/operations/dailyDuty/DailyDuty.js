import React from "react";
import DailyDutyForm from "./DailyDutyForm";
import DailyDutyTable from "./DailyDutyTable";

const DailyDuty = () => {
  return (
    <div className="border rounded-lg shadow p-4 m-4">
    <h2 className="bg-black p-2 text-white font-semibold text-lg">Daily Duty Sheet</h2>
        <DailyDutyForm /> 
        <DailyDutyTable />
    </div>
  );
};

export default DailyDuty;
