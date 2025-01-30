import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog } from "@headlessui/react";

const EditDeletMealPlan = ({ isActive, setIsActive }) => {
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
          Edit Meal Plan
        </Dialog.Title>

        {/* Form Content */}
        <form>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2 "
                placeholder="Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Status</label>
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
                Close
              </button>
              <button
                type="button"
                className="py-1 px-8 bg-indigo-900 text-white rounded hover:bg-headerBg mt-3"
              >
                Save
              </button>
            </div>
          </div>

          {/* Save Button */}
        </form>
      </Dialog.Panel>
    </Dialog>
  );
};

export default EditDeletMealPlan;
