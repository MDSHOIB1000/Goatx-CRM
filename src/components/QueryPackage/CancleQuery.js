import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog } from "@headlessui/react";

const CancelQuery = ({ isOpen, setIsOpen }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <Dialog.Panel className="bg-white p-6 rounded-lg mx-2 md:mx-0 shadow-lg w-[100%] md:w-[70%] lg:w-[50%] relative">
        {/* Close Button */}
        <button
          className="absolute top-[-8px] right-[-8px] text-white rounded-full flex items-center justify-center z-10"
          onClick={() => setIsOpen(false)}
        >
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="text-xl bg-red-500 rounded-full w-6 h-6"
          />
        </button>

        {/* Dialog Title */}
        <Dialog.Title className="text-lg font-semibold bg-black text-white p-2">
        Change Status
        </Dialog.Title>

        {/* Form Content */}
        <form>
          

          <div className="flex flex-col mt-3">
            <label htmlFor="name" className="text-sm font-medium mb-1">
            Add a comment about this status Change:
            </label>
            <textarea
              type="text"
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          {/* Save Button */}
          <button
            type="button"
            className="py-2 px-8 bg-blue-700 text-white rounded-md hover:bg-blue-800 mt-3"
          >
            Save
          </button>
        </form>
      </Dialog.Panel>
    </Dialog>
  );
};

export default CancelQuery;