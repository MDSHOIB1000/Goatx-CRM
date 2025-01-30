import { faPenToSquare, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import EditDeletMealPlan from "./EditDeletMealPlan";

const MealPlanTable = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="mt-4">
      <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-headerBg scrollbar-track-gray-100">
        <table className="min-w-full table-auto border-collapse text-sm border border-gray-300">
          <thead className="bg-headerBg text-white">
            <tr>
              <th className="px-4 py-2 border border-gray-300 -w-[200px]">
                Name
              </th>
              <th className="px-4 py-2 border border-gray-300 -w-[200px] text-nowrap">
                Status
              </th>
              <th className="px-4 py-2 border border-gray-300 w-[200px] text-nowrap">
                Date
              </th>
              <th className="px-4 py-2 border border-gray-300 w-[250px] text-nowrap">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border border-gray-300 ">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 flex items-center justify-center rounded-full bg-indigo-200 text-white text-lg">
                    <FontAwesomeIcon icon={faUser} className="text-sm" />
                  </span>
                  <span>Ajay</span>
                </div>
              </td>
              <td className="p-2 border border-gray-300 text-center">
                {" "}
                <span className="bg-green-700 px-2 text-white text-[12px] px-4 rounded">
                  Active
                </span>
              </td>
              <td className="p-2 border border-gray-300">
                <div className="flex flex-col">
                  <span>15 Feb 2024</span>
                  <span>Sarthak Singh</span>
                </div>
              </td>
              <td className="p-2 border border-gray-300 text-center">
                <a href="#" onClick={() => setIsActive(true)}>
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    className="text-lg text-green-700"
                  />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <EditDeletMealPlan isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
};

export default MealPlanTable;
