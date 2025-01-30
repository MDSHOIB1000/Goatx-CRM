import React from "react";

const VoucherForm = () => {
  return (
    <form>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        <div className="flex flex-col">
          <label htmlFor="start-date" className="text-sm font-medium mb-1">
            Voucher Id, Query Id, Guest Name, Company Name
          </label>
          <input
            type="date"
            id=""
            className="px-3 py-2 border border-gray-300 rounded-md"
          />
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
          <label htmlFor="lead-source" className="text-sm font-medium mb-1">
            Type
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
        </div>
      </div>

      {/* Save Button */}
    </form>
  );
};

export default VoucherForm;
