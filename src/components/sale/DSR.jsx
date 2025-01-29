import React from "react";
import { Link } from "react-router-dom";

const DSR = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      
      <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="bg-slate-950 my-2 p-1">
        <h1 className="text-white font-bold text-xl">DSR</h1>
      </div>
        <div className="flex justify-between items-center mb-4">
          <Link to="/sale/adddrs" className="bg-red-500 text-white px-4 py-2 rounded">+ Add New DSR</Link>
          <div className="flex gap-2">
            <input
              type="date"
              className="border px-3 py-2 rounded text-gray-700"
              placeholder="Start Date"
            />
            <input
              type="date"
              className="border px-3 py-2 rounded text-gray-700"
              placeholder="End Date"
            />
            <select className="border px-3 py-2 rounded text-gray-700">
              <option>Select Users</option>
            </select>
            <input
              type="text"
              className="border px-3 py-2 rounded text-gray-700"
              placeholder="Search Company, Contact, Email"
            />
            <select className="border px-3 py-2 rounded text-gray-700">
              <option>Active</option>
            </select>
            <button className="bg-green-500 text-white px-4 py-2 rounded">Search</button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300">
            <thead className="bg-blue-950 text-white">
              <tr>
                {[
                  "Date", "Type", "Company Name", "Category", "Contact Person", "Contact Info",
                  "Address", "Remarks", "Source", "Added By", "Action", "Convert To Agent"
                ].map((header) => (
                  <th key={header} className="p-2 text-left border border-gray-300">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={12} className="p-4 text-center border border-gray-300">
                  
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center ">
          <div>Showing 10 to 0 of 0 entries</div>
          <div className="flex justify-end mt-4">
          <button className="bg-gray-300 text-gray-700 px-3 py-1 rounded mr-2">Previous</button>
          <button className="bg-gray-300 text-gray-700 px-3 py-1 rounded">Next</button>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default DSR;