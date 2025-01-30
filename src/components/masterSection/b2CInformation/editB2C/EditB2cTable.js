import { faMessage, faStar, faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const EditB2cTable = () => {
  return (
    <div className="overflow-x-auto mt-4 scrollbar-thin scrollbar-thumb-headerBg scrollbar-track-gray-100">
      <table className="min-w-full table-auto border-collapse text-sm border border-gray-300">
        <thead className="bg-headerBg text-white">
          <tr>
            <th className="px-4 py-2 border border-gray-300 w-[200px] sm:w-[250px]">
              ID
            </th>
            <th className="px-4 py-2 border border-gray-300 w-[250px] sm:w-[300px]">
              Title
            </th>
            <th className="px-4 py-2 border border-gray-300 w-[250px] sm:w-[300px]">
              Destination
            </th>
            <th className="px-4 py-2 border border-gray-300 w-[200px] sm:w-[250px]">
              Agent/Client
            </th>
            <th className="px-4 py-2 border border-gray-300 w-[200px] sm:w-[250px]">
              Query Date
            </th>
            <th className="px-4 py-2 border border-gray-300 w-[150px] sm:w-[200px]">
              Status
            </th>
            <th className="px-4 py-2 border border-gray-300 w-[150px] sm:w-[200px]">
              Operation
            </th>
            <th className="px-4 py-2 border border-gray-300 w-[150px] sm:w-[200px]">
              Sales
            </th>
            <th className="px-4 py-2 border border-gray-300 w-[150px] sm:w-[200px]">
            Selling
            </th>
            <th className="px-4 py-2 border border-gray-300 w-[150px] sm:w-[200px]">
            Purchasing
            </th>
            <th className="px-4 py-2 border border-gray-300 w-[150px] sm:w-[200px]">
            Profit
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* <td className="px-4 py-2 border border-gray-300"></td> */}
            <td className="p-2 border border-gray-300 whitespace-nowrap">
              <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faStopwatch}  className="text-red-500"/>
                <div className="flex items-center gap-1">
                <FontAwesomeIcon icon={faMessage}  className="text-green-700"/>
                <span>#FIT00029</span>
                </div>
              </div>
              <div className="flex flex-col text-sm">
                <span  className="text-sm bg-green-500 text-white px-2 rounded">
                <FontAwesomeIcon icon={faStar} /> Viaggio World Pvt Ltd
                </span>
              </div>
            </td>
            <td className="-2 border border-gray-300 whitespace-nowrap">
              <div className="flex flex-col">
                <strong>Thailand query</strong>
                <span>
                  <i className="fa-solid fa-calendar-days"></i> Travel Date: 15
                  Feb - 20 Feb 2025
                </span>
                <span>
                  <i className="fa-solid fa-clock"></i> Duration: 6 Days
                </span>
                <span>
                  <i className="fa-solid fa-person"></i> Adults: 3 |{" "}
                  <i className="fa-solid fa-person"></i> Childs: 0 |{" "}
                  <i className="fa-solid fa-person"></i> Infants: 0
                </span>
              </div>
            </td>
            <td className="p-2 border border-gray-300 whitespace-nowrap">
              <div className="flex flex-col">
                <span>
                  <i className="fa-solid fa-location-dot"></i> Pattaya, Bangkok
                </span>
                <span>
                  <i className="fa-solid fa-box"></i> Complete Package
                </span>
                <span>
                  <i className="fa-solid fa-filter"></i> Lead Source: Call
                </span>
              </div>
            </td>
            <td className="p-2 border border-gray-300 whitespace-nowrap">
              <div className="flex flex-col">
                <strong>Manish Srivastava</strong>
                <span>
                  <i className="fa-solid fa-user"></i> Manish Srivantava
                </span>
                <span>
                  <i className="fa-solid fa-envelope"></i> Email:
                </span>
                <span>
                  <i className="fa-solid fa-mobile"></i> Mobile No.: 7860601111
                </span>
                <span>
                  <i className="fa-solid fa-phone"></i> Landline No.: 7860601111
                </span>
              </div>
            </td>
            <td className="p-2 border border-gray-300 whitespace-nowrap">
              <div className="flex flex-col">
                <span>
                  <i className="fa-solid fa-calendar-days"></i> Date: 24 Jan
                  2025
                </span>
                <span>
                  <i className="fa-solid fa-clock"></i> Time: 18:01 pm
                </span>
                <span>
                  <i className="fa-solid fa-user"></i> Added By: Sarthak Singh
                </span>
                <span>
                  <i className="fa-solid fa-clock"></i> Last Updated: 25 Jan
                  2025 14:30 pm
                </span>
              </div>
            </td>
            <td className="p-2 border border-gray-300 whitespace-nowrap">
              <div className="flex flex-col">
                <span className="bg-yellow-400 text-center text-sm text-black px-2 rounded-md">
                  Pending
                </span>
              </div>
            </td>
            <td className="p-2 border border-gray-300 whitespace-nowrap">
              <div className="flex flex-col">
                <span className="bg-teal-500 text-sm text-white px-2 rounded-md">
                  Sarthak Singh
                </span>
              </div>
            </td>
            <td className="p-2 border border-gray-300 whitespace-nowrap">
              <div className="flex flex-col">
                <span className="bg-gray-800 text-white px-2 text-sm rounded-md">
                  Sarthak Singh
                </span>
              </div>
            </td>
            <td className="p-2 border border-gray-300">
             0
            </td>
            <td className="p-2 border border-gray-300">
              0
            </td>
            <td className="p-2 border border-gray-300">
              0
            </td>
           
          </tr>
        </tbody>
      </table>
      {/* <ViewQueryHistory isOpen={isOpen} setIsOpen={setIsOpen} /> */}
    </div>
  );
};

export default EditB2cTable;
