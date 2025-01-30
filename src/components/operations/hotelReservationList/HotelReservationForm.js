import React from "react";

const HotelReservationForm = () => {
  return (
    <div>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          <div className="flex flex-col">
            <label htmlFor="start-date" className="text-sm font-medium mb-1">
              To Date
            </label>
            <input
              type="date"
              id="start-date"
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="end-date" className="text-sm font-medium mb-1">
              From Date
            </label>
            <input
              type="date"
              id="end-date"
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="lead-source" className="text-sm font-medium mb-1">
              Activity
            </label>
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

          <div className="flex flex-col">
            <label htmlFor="lead-source" className="text-sm font-medium mb-1">
              Transfer
            </label>
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

          <div className="flex flex-col">
            <label
              htmlFor="quotationry-id"
              className="text-sm font-medium mb-1"
            >
              Quey Id
            </label>
            <input
              type="text"
              id="quotationry-id"
              placeholder="Search by Query Id"
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Save Button */}
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
            All
          </button>
          <button
            type="button"
            className="py-1 px-8 bg-indigo-900 text-white rounded hover:bg-headerBg mt-3"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default HotelReservationForm;
