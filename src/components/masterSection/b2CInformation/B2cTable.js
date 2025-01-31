import { faEnvelope, faMobileScreenButton, faPenToSquare, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const B2cTable = () => {
  return (
    <div className="mt-4">
      <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-headerBg scrollbar-track-gray-100">
        <table className="min-w-full table-auto border-collapse text-sm border border-gray-300">
          <thead className="bg-headerBg text-white">
            <tr>
              <th className="px-4 py-2 border border-gray-300 -w-[200px]">
                Client Name
              </th>
              <th className="px-4 py-2 border border-gray-300 -w-[200px] text-nowrap">
                Contact Info
              </th>
              <th className="px-4 py-2 border border-gray-300 w-[200px] text-nowrap">
                Address
              </th>
              <th className="px-4 py-2 border border-gray-300 w-[250px] text-nowrap">
                Sales Person
              </th>
              <th className="px-4 py-2 border border-gray-300 min-w-[200px] text-nowrap">
                Status
              </th>
              <th className="px-4 py-2 border border-gray-300 w-[200px] text-nowrap">
                Date
              </th>
              <th className="px-4 py-2 border border-gray-300 w-[150px] text-nowrap">
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
              <td className="p-2 border border-gray-300">
                <div className="flex flex-col">
                  <span>
                  <FontAwesomeIcon icon={faEnvelope} className="text-sm me-1"/>
                  asolanki091978</span>
                  <span>
                  <FontAwesomeIcon icon={faMobileScreenButton} className="text-sm me-1"/>
                  9899994356</span>
                </div>
              </td>
              <td className="p-2 border border-gray-300 text-center">''</td>
              <td className="p-2 border border-gray-300"></td>
              <td className="p-2 border border-gray-300 text-center">
                <span className="bg-green-700 p-1 text-white text-[12px] px-4 rounded-lg">
                  Active
                </span>
              </td>
              <td className="p-2 border border-gray-300">23/12/2025</td>
              <td className="p-2 border border-gray-300 text-center">
                <Link to="/edit-B2C">
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    className="text-lg text-green-700"
                  />
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* <EditEditInvoice isActive={isActive} setIsActive={setIsActive}/> */}
    </div>
  );
};

export default B2cTable;
