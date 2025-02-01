import React from "react";

const MealPlanForm = () => {
  return (
    <form>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        <div>
          <label className="block text-sm font-medium">
            Name
          </label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded px-3 py-2 "
            placeholder="Name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">
            Active
          </label>
          <select className="w-full border border-gray-300 rounded px-3 py-2">
            <option>1</option>
            <option>2</option>
          </select>
        </div>

        <div className="flex items-center gap-3 justify-center">
          <button
            type="button"
            className="py-1 px-8 bg-indigo-900 text-white rounded hover:bg-headerBg mt-3"
          >
            Search
          </button>
        </div>
      </div>

      {/* Save Button */}
    </form>
  );
};

export default MealPlanForm;
