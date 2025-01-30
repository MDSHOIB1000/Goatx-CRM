import React from "react";

const EditVoucherTable = () => {
  return (
    <div className="mt-2">
    {/* first table */}
      <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-headerBg scrollbar-track-gray-100 p-4">
        <table className="min-w-full table-auto border-collapse text-sm border border-gray-300">
          <thead className="bg-headerBg text-white">
            <tr>
              <th className="border border-gray-300 p-2 text-nowrap">
                Hotel Name
              </th>
              <th className="border border-gray-300 p-2 text-nowrap">
                Category
              </th>
              <th className="border border-gray-300 p-2 text-nowrap">
                Check-In Date
              </th>
              <th className="border border-gray-300 p-2 text-nowrap">
                Check-Out Date
              </th>
              <th className="border border-gray-300 p-2 text-nowrap">
                Total Nights
              </th>
              <th className="border border-gray-300 p-2 text-nowrap">
                Room Type
              </th>
              <th className="border border-gray-300 p-2 text-nowrap">
                Meal Plan
              </th>
              <th className="border border-gray-300 p-2 text-nowrap">
                Special Request
              </th>
              <th className="border border-gray-300 p-2 text-nowrap">
                Confirmation No.
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">
                Taj Cidade de Goa Heritage, Goa
              </td>
              <td className="border border-gray-300 p-2">5 Star</td>
              <td className="border border-gray-300 p-2">27-01-2025</td>
              <td className="border border-gray-300 p-2">30-01-2025</td>
              <td className="border border-gray-300 p-2">3</td>
              <td className="border border-gray-300 p-2">
                Luxury King Bed Garden View
              </td>
              <td className="border border-gray-300 p-2">Breakfast</td>
              <td className="border border-gray-300 p-2">
                <input
                  type="text"
                  id=""
                  className="px-3 py-2 border border-gray-300 rounded-md"
                />
              </td>
              <td className="border border-gray-300 p-2">8071SE191671</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Second Table */}
      <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-headerBg scrollbar-track-gray-100 p-4">
        <table className="min-w-full table-auto border-collapse text-sm border border-gray-300">
          <thead className="bg-headerBg text-white">
            <tr>
              <th className="border border-gray-300 p-2 text-nowrap min-w-[200px]">
                Activity Name
              </th>
              <th className="border border-gray-300 p-2 text-nowrap min-w-[150px]">
                Type
              </th>
              <th className="border border-gray-300 p-2 text-nowrap">Date</th>
              <th className="border border-gray-300 p-2 text-nowrap">
                Pickup From
              </th>
              <th className="border border-gray-300 p-2 text-nowrap">
                From Time
              </th>
              <th className="border border-gray-300 p-2 text-nowrap">
                To Time
              </th>
              <th className="border border-gray-300 p-2 text-nowrap">
                Drop At
              </th>
              <th className="border border-gray-300 p-2 text-nowrap">
                Drop Up Time
              </th>
              <th className="border border-gray-300 p-2 text-nowrap">
                Remarks
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">North Goa tour</td>
              <td className="border border-gray-300 p-2">PVT Basis</td>
              <td className="border border-gray-300 p-2">
                <input
                  type="date"
                  id=""
                  className="px-3 py-2 border border-gray-300 rounded-md"
                />
              </td>
              <td className="border border-gray-300 p-2">
                <input
                  type="text"
                  id=""
                  className="px-3 py-2 border border-gray-300 rounded-md"
                />
              </td>

              <td className="border border-gray-300 p-2">
                <select
                  id="lead-source"
                  className="px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="" selected disabled>
                    Open this select menu
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </td>
              <td className="border border-gray-300 p-2">
                <select
                  id="lead-source"
                  className="px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="" selected disabled>
                    Open this select menu
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </td>
              <td className="border border-gray-300 p-2">
                <input
                  type="text"
                  id=""
                  className="px-3 py-2 border border-gray-300 rounded-md"
                />
              </td>
              <td className="border border-gray-300 p-2">
                <select
                  id="lead-source"
                  className="px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="" selected disabled>
                    Open this select menu
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </td>
              <td className="border border-gray-300 p-2">
                <input
                  type="text"
                  id=""
                  className="px-3 py-2 border border-gray-300 rounded-md"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* third table */}
      <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-headerBg scrollbar-track-gray-100 p-4">
        <table className="min-w-full table-auto border-collapse text-sm border border-gray-300">
          <thead className="bg-headerBg text-white">
            <tr>
              <th className="border border-gray-300 p-2 text-nowrap min-w-[220px]">
                Transfer Name
              </th>
              <th className="border border-gray-300 p-2 text-nowrap min-w-[150px]">
                Type
              </th>
              <th className="border border-gray-300 p-2 text-nowrap">Date</th>
              <th className="border border-gray-300 p-2 text-nowrap">
                Pickup From
              </th>
              <th className="border border-gray-300 p-2 text-nowrap">
                Flight No.
              </th>
              <th className="border border-gray-300 p-2 text-nowrap">
                Departure Time
              </th>
              <th className="border border-gray-300 p-2 text-nowrap">
                Arrival Time
              </th>
              <th className="border border-gray-300 p-2 text-nowrap">
                Transfer
              </th>
              <th className="border border-gray-300 p-2 text-nowrap">
                Drop At
              </th>
              <th className="border border-gray-300 p-2 text-nowrap">
                Remarks
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">
                Arrival transfer from GOA Airport to hotel on Private basis
              </td>
              <td className="border border-gray-300 p-2">PVT Basis</td>
              <td className="border border-gray-300 p-2">
                <input
                  type="date"
                  id=""
                  className="px-3 py-2 border border-gray-300 rounded-md"
                />
              </td>
              <td className="border border-gray-300 p-2">
                <select
                  id=""
                  className="px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="" selected disabled>
                    Open this select menu
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </td>
              <td className="border border-gray-300 p-2">
                <input
                  type="text"
                  id=""
                  className="px-3 py-2 border border-gray-300 rounded-md"
                />
              </td>

              <td className="border border-gray-300 p-2">
                <select
                  id=""
                  className="px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="" selected disabled>
                    Open this select menu
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </td>
              <td className="border border-gray-300 p-2">
                <select
                  id="lead-source"
                  className="px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="" selected disabled>
                    Open this select menu
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </td>
              <td className="border border-gray-300 p-2">
                <select
                  id=""
                  className="px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="" selected disabled>
                    Open this select menu
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </td>
              <td className="border border-gray-300 p-2">
                <select
                  id="lead-source"
                  className="px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="" selected disabled>
                    Open this select menu
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </td>
              <td className="border border-gray-300 p-2">
                <input
                  type="text"
                  id=""
                  className="px-3 py-2 border border-gray-300 rounded-md"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EditVoucherTable;
