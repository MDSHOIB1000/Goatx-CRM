import React, { useState } from "react";

const VisaRequestForm = () => {
    const [serviceType, setServiceType] = useState(false)
  return (
    <form>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        <div className="flex flex-col">
          <label htmlFor="start-date" className="text-sm font-medium mb-1">
            Start Date
          </label>
          <input
            type="date"
            id=""
            className="px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="start-date" className="text-sm font-medium mb-1">
            End Date
          </label>
          <input
            type="date"
            id=""
            className="px-3 py-2 border border-gray-300 "
          />
        </div>

        <div className="flex flex-col w-full">
          <label
            htmlFor="service-type"
            className="text-sm font-medium mb-1 text-gray-700"
          >
            Service Type
          </label>
          <div className="relative">
            {/* Button for Dropdown */}
            <button
            type="button"
              onClick={() => setServiceType(!serviceType)}
              className="w-full bg-white px-4 py-2 border border-gray-300 rounded-md flex items-center justify-between"
            >
              <span>Select Service</span>
              <span
                className={`transition-transform ${
                  serviceType ? "rotate-180" : "rotate-0"
                }`}
              >
                ▾
              </span>
            </button>

            {/* Dropdown List */}
            {serviceType && (
              <div
                className="absolute mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10 
                          overflow-hidden transition-all duration-300"
              >
                {/* Search Bar */}
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-3 py-2 border-b border-gray-200"
                />
                <ul className="max-h-48 overflow-y-auto">
                  <li className="p-2 cursor-pointer hover:bg-blue-100 transition ">
                    select option
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="lead-source" className="text-sm font-medium mb-1">
            Company Name
          </label>
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
        </div>

        <div className="flex flex-col">
          <label htmlFor="start-date" className="text-sm font-medium mb-1">
            Serch by visa, Query Id
          </label>
          <input
            type="text"
            id=""
            className="px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="flex items-center gap-3 justify-center">
          <button
            type="button"
            className="py-1 px-8 bg-indigo-900 text-white rounded hover:bg-headerBg mt-3"
          >
            Search
          </button>
          <button
            type="button"
            className="py-1 px-8 bg-indigo-900 text-white rounded hover:bg-headerBg mt-3"
          >
            all 
          </button>
          <button
            type="button"
            className="py-1 px-8 bg-indigo-900 text-white rounded hover:bg-headerBg mt-3"
          >
            Save 
          </button>
        </div>
      </div>

      {/* Save Button */}
    </form>
  );
};

export default VisaRequestForm;
