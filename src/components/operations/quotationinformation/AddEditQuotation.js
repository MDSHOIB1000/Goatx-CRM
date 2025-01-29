import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog } from "@headlessui/react";
import { useState } from "react";
import EditQuotationTable from "./EditQuotationTable";

const AddEditQuotation = ({ isActive, setIsActive, quotation }) => {
  const [serviceType, setServiceType] = useState(false);

  return (
    <Dialog
      open={isActive}
      onClose={() => setIsActive(false)}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 "
    >
      <Dialog.Panel className="scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 overflow-y-scroll overflow-x-hidden bg-white p-6 rounded-lg mx-2 md:mx-0 shadow-lg w-[100%] md:w-[70%] relative h-[calc(100vh-200px)] lg:h-[calc(100vh-100px)]">
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
        <div className="text-md font-semibold bg-black text-white py-1 px-2 ">
          {quotation === true ? "Add New Quotation" : "Edit Quotation"}
        </div>

        {/* Form Content */}
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 gap-4">
            <div className="flex flex-col">
              <label htmlFor="end-date" className="text-sm font-medium mb-1">
                Quotation Title
              </label>
              <input
                type="text"
                id="end-date"
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="end-date" className="text-sm font-medium mb-1">
                Adults
              </label>
              <input
                type="text"
                id=""
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="end-date" className="text-sm font-medium mb-1">
                Childs
              </label>
              <input
                type="text"
                id=""
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="end-date" className="text-sm font-medium mb-1">
                Infants
              </label>
              <input
                type="text"
                id=""
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                  onClick={() => setServiceType(!serviceType)}
                  className="w-full bg-white px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 
                     focus:ring-blue-500 focus:border-blue-500 flex items-center justify-between"
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
          </div>
          
            {/* edit table */}
          {!quotation && <EditQuotationTable />}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 gap-4">
            <div className="flex flex-col">
              <label htmlFor="lead-source" className="text-sm font-medium mb-1">
                Destination*
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
              <label htmlFor="end-date" className="text-sm font-medium mb-1">
                From Date *
              </label>
              <input
                type="date"
                id=""
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="end-date" className="text-sm font-medium mb-1">
                To Date *
              </label>
              <input
                type="date"
                id=""
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <button
                type="button"
                className="py-1 bg-slate-500 text-white rounded-md hover:bg-slate-700 mt-3 text-center"
              >
                Add
              </button>
            </div>
            <div className="flex flex-col">
              <label htmlFor="end-date" className="text-sm font-medium mb-1">
                SGL Room
              </label>
              <input
                type="text"
                id=""
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="end-date" className="text-sm font-medium mb-1">
                DBL Room
              </label>
              <input
                type="text"
                id=""
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="end-date" className="text-sm font-medium mb-1">
                TRPL Room
              </label>
              <input
                type="text"
                id=""
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="end-date" className="text-sm font-medium mb-1">
                Quad Room
              </label>
              <input
                type="text"
                id=""
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="end-date" className="text-sm font-medium mb-1">
                ADULT EXT BED Room
              </label>
              <input
                type="text"
                id=""
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="end-date" className="text-sm font-medium mb-1">
                CWB Room
              </label>
              <input
                type="text"
                id=""
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="end-date" className="text-sm font-medium mb-1">
                CNB Room
              </label>
              <input
                type="text"
                id=""
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="end-date" className="text-sm font-medium mb-1">
                INF Room
              </label>
              <input
                type="text"
                id=""
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          {/* Save Button */}
          <div className="flex items-center gap-2 justify-center">
            <button
              type="button"
              className="py-1 px-2 bg-red-500 text-white rounded hover:bg-red-700 mt-3 text-center"
              onClick={() => setIsActive(false)}
            >
              Cancel
            </button>
            <button
              type="button"
              className="py-1 px-2 bg-blue-700 text-white rounded hover:bg-blue-900 mt-3 text-center"
            >
              {quotation === true ? "Add Quotation" : "Update Quotation"}
            </button>
          </div>
        </form>
      </Dialog.Panel>
    </Dialog>
  );
};

export default AddEditQuotation;
