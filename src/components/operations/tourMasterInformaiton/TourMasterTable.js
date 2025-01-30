import { faStar, faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const TourMasterTable = () => {
  return (
    <div className="mt-4">
      <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-headerBg scrollbar-track-gray-100">
        <table className="min-w-full table-auto border-collapse text-sm border border-gray-300">
          <thead className="bg-headerBg text-white">
            <tr>
              <th className="px-4 py-2 border border-gray-300 w-[200px]">
                QUERY
              </th>
              <th className="px-4 py-2 border border-gray-300 w-[200px] text-nowrap">
                DATE
              </th>
              <th className="px-4 py-2 border border-gray-300 w-[200px] text-nowrap">
                FLIGHT
              </th>
              <th className="px-4 py-2 border border-gray-300 w-[150px] text-nowrap">
                PICK UP TIME
              </th>
              <th className="px-4 py-2 border border-gray-300 w-[150px] text-nowrap">
                RETURN TIME
              </th>
              <th className="px-4 py-2 border border-gray-300 min-w-[150px] text-nowrap">
                TOUR
              </th>
              <th className="px-4 py-2 border border-gray-300 w-[150px] text-nowrap">
                GUEST
              </th>
              <th className="px-4 py-2 border border-gray-300 w-[150px] text-nowrap">
                PAX
              </th>
              <th className="px-4 py-2 border border-gray-300 w-[150px] text-nowrap">
                TYPE
              </th>
              <th className="px-4 py-2 border border-gray-300 w-[150px] text-nowrap">
                VEHICLE
              </th>
              <th className="px-4 py-2 border border-gray-300 min-w-[300px] text-nowrap">
                HOTEL
              </th>
              <th className="px-4 py-2 border border-gray-300 w-[150px] text-nowrap">
                DRIVER
              </th>
              <th className="px-4 py-2 border border-gray-300 w-[150px] text-nowrap">
                GUIDE
              </th>
              <th className="px-4 py-2 border border-gray-300 w-[150px] text-nowrap">
                SUPPLIER
              </th>
              <th className="px-4 py-2 border border-gray-300 w-[150px] text-nowrap">
                PRODUCT NOTE
              </th>
              <th className="px-4 py-2 border border-gray-300 w-[150px] text-nowrap">
                BOOKING STATUS
              </th>
              <th className="px-4 py-2 border border-gray-300 w-[150px] text-nowrap">
                TICKET
              </th>
              <th className="px-4 py-2 border border-gray-300 w-[150px] text-nowrap">
                FLIGHT TICKET
              </th>
              <th className="px-4 py-2 border border-gray-300 w-[150px] text-nowrap">
                PROCESS
              </th>
              <th className="px-4 py-2 border border-gray-300 w-[150px] text-nowrap">
                REMARK
              </th>
              <th className="px-4 py-2 border border-gray-300 w-[150px] text-nowrap">
                Booking PAYMENT STAUS
              </th>
              <th className="px-4 py-2 border border-gray-300 w-[150px] text-nowrap">
                OPERATION PERSON
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border border-gray-300">
                <div className="flex flex-col">
                  <span>#FIT000015</span>
                  <span className="bg-green-500 px-2 rounded-lg text-center text-white text-nowrap text-[12px]">
                    <FontAwesomeIcon icon={faStar} /> Viaggio World Pvt Ltd{" "}
                  </span>
                </div>
              </td>
              <td className="p-2 border border-gray-300 text-center">
                <input
                  type="date"
                  id=""
                  className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </td>
              <td className="p-2 border border-gray-300 text-center">
                <input
                  type="text"
                  id=""
                  className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </td>
              <td className="p-2 border border-gray-300 text-center">
                <div className="flex items-center gap-2">
                  <select
                    id="lead-source"
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="" selected disabled>
                      Open this select menu
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                  <select
                    id="lead-source"
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="" selected disabled>
                      Open this select menu
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                </div>
              </td>
              <td className="p-2 border border-gray-300 text-center">
                <select
                  id="lead-source"
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="" selected disabled>
                    Open this select menu
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </td>
              <td className="p-2 border border-gray-300 text-center">
                South Goa tour
              </td>
              <td className="p-2 border border-gray-300 text-center">
                Mr Nand
              </td>
              <td className="p-2 border border-gray-300 text-center">A- 2</td>
              <td className="p-2 border border-gray-300 text-center">PVT</td>
              <td className="p-2 border border-gray-300 text-center">
                Sadan x (1)
              </td>
              <td className="px-4 py-2 border border-gray-300 text-center">
                <div className="flex flex-col">
                  <span>Taj Cidade de Goa Heritage, Goa</span>
                  <span>Taj Cidade de Goa Heritage, Goa</span>
                </div>
              </td>
              <td className="p-2 border border-gray-300 text-center">
                <select
                  id="lead-source"
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="" selected disabled>
                    Open this select menu
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </td>
              <td className="p-2 border border-gray-300 text-center">
                <select
                  id="lead-source"
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="" selected disabled>
                    Open this select menu
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </td>
              <td className="p-2 border border-gray-300 text-center">
                <a href="#">
                  <FontAwesomeIcon icon={faUser} className="text-red-700" />
                </a>
              </td>
              <td className="p-2 border border-gray-300 text-center">
                <input
                  type="text"
                  id=""
                  className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </td>
              <td className="p-2 border border-gray-300 text-center">
                <select
                  id="lead-source"
                  className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="" selected disabled>
                    Open this select menu
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </td>
              <td className="p-2 border border-gray-300 text-center">Upload</td>
              <td className="p-2 border border-gray-300 text-center">
                Download
              </td>
              <td className="p-2 border border-gray-300 text-center"></td>
              <td className="p-2 border border-gray-300 text-center"></td>
              <td className="p-2 border border-gray-300 text-center">
                <sapn className="text-[10px] p-1 px-4 text-white bg-green-700 rounded-lg">
                  Fully Paid
                </sapn>
              </td>
              <td className="-2 border border-gray-300 text-center">
                <div className="flex flex-col">
                  <span>Karan Sharma</span>
                  <span>9810582289</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TourMasterTable;
