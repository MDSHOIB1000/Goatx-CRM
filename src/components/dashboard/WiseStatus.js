import React from "react";
import FunnelChart from "react-funnel-chart";

const data = {
  displayPercent: true,
  labels: ["PENDING", "REVERTED", "LOST", "CONFIRM", "CANCEL", "FOLLOWUP'S"],
  values: [25.8, 22.6, 22.6, 12.9, 9.7, 6.5],
};

const options = {
  colors: ["#1C1C5E", "#E63946", "#F7685B", "#FC8D62", "#FABD81", "#FDEBD3"],
  labelStyle: {
    fontSize: "12px",
    fill: "#000",
  },
};

const QueryWiseStatus = () => {
  return (
    <div className="p-4">
      <div className="p-6 bg-white shadow-lg rounded-2xl">
        <h5 className="text-center text-xl font-semibold text-gray-700 mb-6">
          QUERY WISE STATUS
        </h5>
        <FunnelChart data={data} options={options} />
      </div>
    </div>
  );
};

export default QueryWiseStatus;
