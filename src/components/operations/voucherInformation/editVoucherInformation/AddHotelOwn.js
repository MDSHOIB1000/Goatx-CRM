import React, { useState } from "react";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog } from "@headlessui/react";

const AddHotelOwn = ({ isActive, setIsActive }) => {
    const [hotelName, setHotelName] = useState(false)
  return (
    <Dialog
      open={isActive}
      onClose={() => setIsActive(false)}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 "
    >
      <Dialog.Panel
        className="bg-white p-6 rounded-lg mx-2 md:mx-0 shadow-lg w-[100%] md:w-[50%] relative 
        "
      >
        {/* Close Button */}
        <button
          className="absolute top-[-8px] right-[-8px] text-white rounded-full flex items-center justify-center z-10"
          onClick={() => setIsActive(false)}
        >
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="text-xl bg-red-500 rounded-full w-6 h-6"
          />
        </button>

        {/* Dialog Title */}
        <Dialog.Title className="text-md font-semibold bg-black text-white py-1 px-2 ">
          Edit Edit Invoice
        </Dialog.Title>

        {/* Form Content */}
        <form>
          <div className="grid grid-cols-1 lg:grid-cols-2 mt-4 gap-4">
            <div className="flex flex-col w-full">
              <label
                htmlFor="service-type"
                className="text-sm font-medium mb-1 text-gray-700"
              >
                Hotel Name
              </label>
              <div className="relative">
                {/* Button for Dropdown */}
                <button
                type="button"
                  onClick={() => setHotelName(!hotelName)}
                  className="w-full bg-white px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 
                     focus:ring-blue-500 focus:border-blue-500 flex items-center justify-between"
                >
                  <span>Select Service</span>
                  <span
                    className={`transition-transform ${
                      hotelName ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    ▾
                  </span>
                </button>

                {/* Dropdown List */}
                {hotelName && (
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
                      <li className="px-2 py-1 cursor-pointer hover:bg-blue-100 transition ">
                        select option
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="end-date" className="text-sm font-medium mb-1">
              Hotel Name Manual
              </label>
              <input
                type="text"
                id=""
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="end-date" className="text-sm font-medium mb-1">
              Check-In
              </label>
              <input
                type="date"
                id=""
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="end-date" className="text-sm font-medium mb-1">
              Check-Out
              </label>
              <input
                type="date"
                id=""
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="end-date" className="text-sm font-medium mb-1">
              Confirmation No
              </label>
              <input
                type="number"
                id=""
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="end-date" className="text-sm font-medium mb-1">
              Special Request
              </label>
              <input
                type="number"
                id=""
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          {/* Save Button */}
          <div className="flex items-center gap-2 justify-center">
            <button
              type="button"
              className="py-2 px-8 bg-red-500 text-white rounded-md hover:bg-red-700 mt-3 text-center"
            >
              Cancel
            </button>
            <button
              type="button"
              className="py-2 px-8 bg-blue-500 text-white rounded-md hover:bg-blue-700 mt-3 text-center"
            >
              Save
            </button>
          </div>
        </form>
      </Dialog.Panel>
    </Dialog>
  );
};

export default AddHotelOwn;
