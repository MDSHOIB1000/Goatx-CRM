import React, { useState } from "react";
import { use } from "react";
import "react-quill/dist/quill.snow.css"; // Import the styles

const EditB2cForm = () => {
  const [SalesPerson, setSalesPerson] = useState(false);
  const [countory, setCountory] = useState(false);
  const [city, setCity] = useState(false);
  return (
    <form className="mt-4">
      {/* Client Information */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h2 className="text-lg font-semibold mb-3 text-blue-600">
            ➤ Client Information
          </h2>
          <div className="grid grid-cols-1  lg:grid-cols-2 gap-2">
            <div className="flex flex-col">
              <div>
                <label className="block text-sm font-medium">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2 "
                  placeholder="Enter Email"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded px-3 py-2 "
                placeholder="Enter Email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2 "
              />
            </div>
            <div className="">
              <label
                htmlFor="service-type"
                className="text-sm font-medium block"
              >
                Service Type
              </label>
              <div className="relative">
                {/* Button for Dropdown */}
                <button
                type="button"
                  onClick={() => setSalesPerson(!SalesPerson)}
                  className="w-full bg-white px-4 py-2 border border-gray-300 rounded flex items-center justify-between"
                >
                  <span>Select Service</span>
                  <span
                    className={`transition-transform ${
                      SalesPerson ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    ▾
                  </span>
                </button>

                {/* Dropdown List */}
                {SalesPerson && (
                  <div
                    className="absolute w-full bg-white border border-gray-300 rounded-md shadow-lg z-10 
                          overflow-hidden transition-all duration-300"
                  >
                    {/* Search Bar */}
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full px-3 py-2 border-b border-gray-200 focus:outline-none focus:border-blue-500"
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
            <div>
              <label className="block text-sm font-medium">
                GST/VAT Number
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2 "
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Status</label>
              <select className="w-full border border-gray-300 rounded px-3 py-2 f">
                <option>Active</option>
              </select>
            </div>
          </div>
        </div>

        {/* Other Information */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-blue-600">
            ➤ Other Information
          </h2>
          <div className="grid grid-cols-1  lg:grid-cols-2 gap-2">
            <div>
              <label className="block text-sm font-medium">Date Of Birth</label>
              <div className="relative">
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {/* <FontAwesomeIcon icon={faCalendar} className="absolute right-3 top-3 text-gray-400" /> */}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium">
                Anniversary Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
                {/* <FontAwesomeIcon icon={faCalendar} className="absolute right-3 top-3 text-gray-400" /> */}
              </div>
            </div>
            <div className="">
              <label
                htmlFor="service-type"
                className="text-sm font-medium block"
              >
                Service Type
              </label>
              <div className="relative">
                {/* Button for Dropdown */}
                <button
                type="button"
                  onClick={() => setCountory(!countory)}
                  className="w-full bg-white px-4 py-2 border border-gray-300 rounded flex items-center justify-between"
                >
                  <span>Select Service</span>
                  <span
                    className={`transition-transform ${
                      countory ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    ▾
                  </span>
                </button>

                {/* Dropdown List */}
                {countory && (
                  <div
                    className="absolute w-full bg-white border border-gray-300 rounded-md shadow-lg z-10 
                          overflow-hidden transition-all duration-300"
                  >
                    {/* Search Bar */}
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full px-3 py-2 border-b border-gray-200 focus:outline-none focus:border-blue-500"
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
            <div>
              <label className="block text-sm font-medium">State</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div className="">
              <label
                htmlFor="service-type"
                className="text-sm font-medium block"
              >
                city
              </label>
              <div className="relative">
                {/* Button for Dropdown */}
                <button
                 type="button"
                  onClick={() => setCity(!city)}
                  className="w-full bg-white px-4 py-2 border border-gray-300 rounded flex items-center justify-between"
                >
                  <span>Select Service</span>
                  <span
                    className={`transition-transform ${
                      city ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    ▾
                  </span>
                </button>

                {/* Dropdown List */}
                {city && (
                  <div
                    className="absolute w-full bg-white border border-gray-300 rounded-md shadow-lg z-10 
                          overflow-hidden transition-all duration-300"
                  >
                    {/* Search Bar */}
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full px-3 py-2 border-b border-gray-200 focus:outline-none focus:border-blue-500"
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
            <div>
              <label className="block text-sm font-medium">Zip</label>
              <input
                type="number"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Address</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="Enter Address"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3 justify-center">
        <button
          type="button"
          className="py-1 px-8 bg-indigo-900 text-white rounded hover:bg-headerBg mt-3"
        >
          Cancel
        </button>
        <button
          type="button"
          className="py-1 px-8 bg-indigo-900 text-white rounded hover:bg-headerBg mt-3"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default EditB2cForm;
