import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus,
  faSave,
  faDownload,
  faPrint,
  faEye,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const EditVoucherForm = () => {
  return (
    <form>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        <div className="flex flex-col">
          <label htmlFor="start-date" className="text-sm font-medium mb-1">
            Emergency Contact No.
          </label>
          <input
            type="number"
            id=""
            className="px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="lead-source" className="text-sm font-medium mb-1">
            Meal Preference
          </label>
          <select
            id="lead-source"
            className="px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="" selected disabled>
              Voucher Details
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
      </div>

      {/* Save Button */}
      <div className="flex items-center justify-end mt-4 flex-wrap gap-2">
        <button className="bg-red-500 text-white px-4 py-2 rounded ">
        <FontAwesomeIcon icon={faXmark} className="mr-2" />
          Cancel
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded ">
          <FontAwesomeIcon icon={faSave} className="mr-2" />
          Save Voucher Details
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded ">
          <FontAwesomeIcon icon={faDownload} className="mr-2" />
          Download
        </button>
        <button className="bg-gray-700 text-white px-4 py-2 rounded ">
          <FontAwesomeIcon icon={faPrint} className="mr-2" />
          Print
        </button>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded">
          <FontAwesomeIcon icon={faEye} className="mr-2" />
          Preview
        </button>
      </div>
    </form>
  );
};

export default EditVoucherForm;
