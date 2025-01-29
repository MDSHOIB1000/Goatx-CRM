import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog } from "@headlessui/react";

const EditSupplierPayment = ({ isActive, setIsActive }) => {
  return (
    <Dialog
      open={isActive}
      onClose={() => setIsActive(false)}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <Dialog.Panel
        className="bg-white p-6 rounded-lg mx-2 md:mx-0 shadow-lg w-[100%] md:w-[70%] relative h-full overflow-auto
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
        <Dialog.Title className="text-lg font-semibold bg-black text-white p-2">
        Edit Supplier Payment
        </Dialog.Title>

        {/* Form Content */}
        <form>
          <div className="grid grid-cols-1 lg:grid-cols-2 mt-4 gap-x-4">
            <div>
              <table className="min-w-full table-auto border-collapse text-sm border border-gray-300">
                <tbody>
                  <tr className="bg-gray-400 text-white w-full">
                    <th className="text-left px-4 py-2 text-lg font-semibold">
                      HOTEL
                    </th>
                  </tr>

                  <tr className="border border-gray-300">
                    <td className="px-4 py-2 text-sm">
                      Taj Cidade de Goa Heritage, Goa{" "}
                      <span className="text-red-500 font-semibold">
                        (5 Star)
                      </span>
                    </td>
                  </tr>

                  <tr className="">
                    <td className="border border-gray-300 px-4 py-2 text-sm font-medium w-1/2">
                      Check-In
                    </td>
                    <td className="border border-gray-300 p-2 text-sm w-1/2">
                      28-01-2025
                    </td>
                  </tr>
                  <tr className="">
                    <td className="border border-gray-300 px-4 py-2 text-sm font-medium w-1/2">
                      Check-Out
                    </td>
                    <td className="border border-gray-300 p-2 text-sm w-1/2">
                      {" "}
                      30-01-2025
                    </td>
                  </tr>
                  <tr className="">
                    <td className="border border-gray-300 px-4 py-2 text-sm font-medium w-1/2">
                      Nights
                    </td>
                    <td className="border border-gray-300 p-2 text-sm w-1/2">
                      2
                    </td>
                  </tr>
                  <tr className="">
                    <td className="border border-gray-300 px-4 py-2 text-sm font-medium w-1/2">
                      Room Type
                    </td>
                    <td className="border border-gray-300p-2 text-sm w-1/2">
                      {" "}
                      Luxury King Bed Garden View
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="grid grid-cols-1 gap-x-4 mt-5">
                <div className="flex flex-col gap-2">
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
                <div className="flex flex-col mt-3">
                  <label
                    htmlFor="lead-source"
                    className="text-sm font-medium mb-1"
                  >
                    Supplier
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
              </div>
            </div>
            <div>
              <div className="grid grid-cols-1 gap-x-4">
                <div className="flex flex-col ">
                  <label htmlFor="name" className="text-sm font-medium mb-1">
                    DBL Room
                  </label>
                  <input
                    type="text"
                    placeholder="DBL Room"
                    id="name"
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="flex flex-col mt-3">
                  <label htmlFor="email" className="text-sm font-medium mb-1">
                    Per Night DBL Cost
                  </label>
                  <input
                    type="text"
                    placeholder="Per Night DBL Cost"
                    id="email"
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="flex flex-col mt-3">
                  <label htmlFor="mobile" className="text-sm font-medium mb-1">
                    Miscellaneous
                  </label>
                  <input
                    type="text"
                    placeholder="Miscellaneous"
                    id="mobile"
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="flex flex-col mt-3">
                  <label htmlFor="mobile" className="text-sm font-medium mb-1">
                    Total Amt With Tax
                  </label>
                  <input
                    type="text"
                    placeholder="Total Amt With Tax"
                    id="mobile"
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="flex flex-col mt-3">
                  <label htmlFor="mobile" className="text-sm font-medium mb-1">
                    Tax Amt
                  </label>
                  <input
                    type="number"
                    placeholder="Tax Amt"
                    id="mobile"
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="flex flex-col mt-3">
                  <label htmlFor="mobile" className="text-sm font-medium mb-1">
                    Selling Cost
                  </label>
                  <input
                    type="number"
                    placeholder="Selling Cost"
                    id="mobile"
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="flex flex-col mt-3">
                  <label htmlFor="mobile" className="text-sm font-medium mb-1">
                    Hotel Tax Invoice
                  </label>
                  <input
                    type="file"
                    placeholder=""
                    id=""
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="flex flex-col mt-3">
                  <label htmlFor="mobile" className="text-sm font-medium mb-1">
                    Credit Note Amt
                  </label>
                  <input
                    type="text"
                    placeholder="Credit Note Amt"
                    id="mobile"
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Save Button */}
          <button
            type="button"
            className="py-2 px-8 bg-blue-700 text-white rounded-md hover:bg-blue-800 mt-3 text-center"
          >
            Save
          </button>
        </form>
      </Dialog.Panel>
    </Dialog>
  );
};

export default EditSupplierPayment;
