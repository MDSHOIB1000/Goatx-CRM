import React from "react";

const QuaryForm = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mt-4">
      <div className="flex flex-col">
        <label htmlFor="start-date" className="text-sm font-medium mb-1">
          Start Date
        </label>
        <input
          type="date"
          id="start-date"
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="end-date" className="text-sm font-medium mb-1">
          End Date
        </label>
        <input
          type="date"
          id="end-date"
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="query-id" className="text-sm font-medium mb-1">
          Search Query ID
        </label>
        <input
          type="text"
          id="query-id"
          placeholder="Search Query ID"
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="quotationry-id" className="text-sm font-medium mb-1">
          Search Quotationry ID
        </label>
        <input
          type="text"
          id="quotationry-id"
          placeholder="Search Quotationry ID"
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="lead-source" className="text-sm font-medium mb-1">
          All Lead Source
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
        <label htmlFor="agent-type" className="text-sm font-medium mb-1">
          Agent Type
        </label>
        <select
          id="agent-type"
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
        <label htmlFor="all-company" className="text-sm font-medium mb-1">
          All Company
        </label>
        <select
          id="all-company"
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
        <label htmlFor="subject-company" className="text-sm font-medium mb-1">
          Subject, Company
        </label>
        <input
          type="text"
          id="subject-company"
          placeholder="Transfer"
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="all-status" className="text-sm font-medium mb-1">
          All Status
        </label>
        <select
          id="all-status"
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
        <label htmlFor="select-ops" className="text-sm font-medium mb-1">
          Select OPS
        </label>
        <select
          id="select-ops"
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
        <label htmlFor="all-sales" className="text-sm font-medium mb-1">
          All Sales
        </label>
        <select
          id="all-sales"
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="" selected disabled>
            Open this select menu
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>

      <div className="flex flex-col mt-6">
        <button
          type="button"
         className="py-1 px-8 bg-indigo-900 text-white rounded hover:bg-headerBg mt-3"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default QuaryForm