import React from "react";

const TourMasterForm = () => {
  return (
    <form>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-4">
        <div className="flex flex-col">
          <label htmlFor="start-date" className="text-sm font-medium mb-1">
            To date
          </label>
          <input
            type="date"
            id=""
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="start-date" className="text-sm font-medium mb-1">
            From date
          </label>
          <input
            type="date"
            id=""
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
              Transfer
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="lead-source" className="text-sm font-medium mb-1">
            Meal
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
            SIC/PVT
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
            Guide
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
            Driver
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
          <label htmlFor="start-date" className="text-sm font-medium mb-1">
            Search by Guest Name
          </label>
          <input
            type="text"
            id=""
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="start-date" className="text-sm font-medium mb-1">
            Seach by Query Id
          </label>
          <input
            type="text"
            id=""
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
      <div className="flex items-center gap-3 justify-center">
          <button
            type="button"
            className="py-1 px-8 bg-green-700 text-white rounded-md hover:bg-green-900 mt-3"
          >
            Search
          </button>
          <button
            type="button"
            className="py-1 px-8 bg-green-700 text-white rounded-md hover:bg-green-900 mt-3"
          >
            all
          </button>
          <button
            type="button"
            className="py-1 px-8 bg-green-700 text-white rounded-md hover:bg-green-900 mt-3"
          >
            Save
          </button>
        </div>
    </form>
  );
};

export default TourMasterForm;
