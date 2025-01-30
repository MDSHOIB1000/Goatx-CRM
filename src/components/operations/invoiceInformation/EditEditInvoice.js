import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog } from "@headlessui/react";

const EditEditInvoice = ({ isActive, setIsActive }) => {
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
          <div className="grid grid-cols-1 lg:grid-cols-2 mt-4 gap-x-4">
            <div className="flex flex-col">
              <label htmlFor="lead-source" className="text-sm font-medium mb-1">
                Invoice Type*
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
                Due Date*
              </label>
              <input
                type="date"
                id="end-date"
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
              Update
            </button>
          </div>
        </form>
      </Dialog.Panel>
    </Dialog>
  );
};

export default EditEditInvoice;
