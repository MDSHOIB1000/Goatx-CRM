import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog } from "@headlessui/react";

const EditSupplier = ({ isActive, setIsActive }) => {
  return (
    <Dialog
      open={isActive}
      onClose={() => setIsActive(false)}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <Dialog.Panel className="scrollbar-thin scrollbar-thumb-headerBg scrollbar-track-gray-100 overflow-y-scroll overflow-x-hidden bg-white p-6 rounded-lg mx-2 md:mx-0 shadow-lg w-[100%] md:w-[70%] relative h-[calc(100vh-200px)] lg:h-[calc(100vh-100px)]">
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
        <Dialog.Title className="text-lg font-semibold bg-black text-white p-2">
          Edit Supplier Payment - Transfer
        </Dialog.Title>

        {/* Form Content */}
        <form>
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-4 gap-x-4">
              <div>
                <table className="w-full border-collapse border border-gray-300">
                  <tbody>
                    <tr className="bg-gray-200 ">
                      <th
                        colspan="2"
                        className="text-left p-3 text-lg font-semibold"
                      >
                        Transfer
                      </th>
                    </tr>

                    <tr className="">
                      <td className="border border-gray-300 p-2 text-sm font-medium">
                        Adult Cost
                      </td>
                      <td className="border border-gray-300 p-2 text-sm text-center">
                        0
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2 text-sm font-medium">
                        Child Cost
                      </td>
                      <td className="border border-gray-300 p-2 text-sm text-center">
                        0
                      </td>
                    </tr>
                    <tr className="">
                      <td className="border border-gray-300 p-2 text-sm font-medium">
                        Infant Cost
                      </td>
                      <td className="border border-gray-300 p-2 text-sm text-center">
                        0
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2 text-sm font-medium">
                        Vehicle Cost
                      </td>
                      <td className="border border-gray-300 p-2 text-sm text-center">
                        0
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className="flex flex-col gap-2 mt-4">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-700"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Type your message here..."
                    rows="4"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                  ></textarea>
                </div>
              </div>
              <div>
                <div className="grid grid-cols-1 gap-x-4">
                  <h7 className="font-semibold">
                    Departure transfer from GOA Airport to hotel on Private
                    basis
                  </h7>
                  <div className="flex flex-col">
                    <label
                      htmlFor="lead-source"
                      className="text-sm font-medium mb-1"
                    >
                      Driver
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

                  <div className="flex flex-col ">
                    <label htmlFor="name" className="text-sm font-medium mb-1">
                      Total Adults
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      id=""
                      className="px-3 py-2 border border-gray-300 rounded-md "
                    />
                  </div>

                  <div className="flex flex-col mt-3">
                    <label htmlFor="email" className="text-sm font-medium mb-1">
                      Per Person Adult Cost
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      id=""
                      className="px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="flex flex-col mt-3">
                    <label
                      htmlFor="mobile"
                      className="text-sm font-medium mb-1"
                    >
                      Total Amount
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      id=""
                      className="px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="flex flex-col mt-3">
                    <label
                      htmlFor="mobile"
                      className="text-sm font-medium mb-1"
                    >
                      Tax Amount
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      id=""
                      className="px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="flex flex-col mt-3">
                    <label
                      htmlFor="mobile"
                      className="text-sm font-medium mb-1"
                    >
                      Selling Amount
                    </label>
                    <input
                      type="number"
                      placeholder=""
                      id=""
                      className="px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <button
                    type="button"
                    className="py-2 px-8 bg-blue-700 text-white rounded-md hover:bg-blue-800 mt-3 text-center"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <p className="bg-cyan-100 p-2 rounded text-[12px] font-semibold">
                Activity Supplier Guide No of Adult Adult Cost No of Child Child
                Cost No of Infant Infant Cost Guide Cost Vehicle Cost Total Tax
                Amt Selling Amt Remarks
              </p>
            </div>
          </div>
          <button
          onClick={() => setIsActive(false)}
            type="button"
            className="p-1 px-8 bg-red-500 text-white rounded-md hover:bg-red-700 mt-3 text-center"
          >
            Cancel
          </button>
        </form>
      </Dialog.Panel>
    </Dialog>
  );
};

export default EditSupplier;
