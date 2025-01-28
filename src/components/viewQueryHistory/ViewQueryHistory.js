import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog } from "@headlessui/react";

const ViewQueryHistory = ({ isOpen, setIsOpen }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <Dialog.Panel className="bg-white p-6 rounded-lg shadow-lg sm:w-[100%] lg:w-[70%] relative h-screen overflow-auto">
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
          View Query History
        </Dialog.Title>
        <>
          <span>24 Jan 2025 18:02 - Karan Sharma</span>
          <h5>Query Updated</h5>
          <div className="border p-5 rounded-md my-3 shadow-2xl">
            {/* table sec  */}
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-collapse text-sm border border-gray-300">
                <thead className="bg-headerBg text-white">
                  <tr>
                    <th className="border border-gray-300">Destination</th>
                    <th className="border border-gray-300">From Date</th>
                    <th className="border border-gray-300">To Date</th>
                    <th className="border border-gray-300">Nights</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300">Pattaya</td>
                    <td className="border border-gray-300">15-02-2025</td>
                    <td className="border border-gray-300">18-02-2025</td>
                    <td className="border border-gray-300">3</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300">Bangkok</td>
                    <td className="border border-gray-300">15-02-2025</td>
                    <td className="border border-gray-300">18-02-2025</td>
                    <td className="border border-gray-300">2</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* content sec */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 mt-4">
              <div className="flex flex-col gpa-2">
                <span className="text-">Agent/B2C</span>
                <span className="font-light text-sm">B2C</span>
              </div>
              <div className="flex flex-col gpa-2">
                <span className="text-">Company/Client Name</span>
                <span className="font-light text-sm">Manish</span>
              </div>

              <div className="flex flex-col gpa-2">
                <span className="text-">Contact Person Name</span>
                <span className="font-light text-sm">Manish</span>
              </div>
              <div className="flex flex-col gpa-2">
                <span className="text-">Contact Person Email</span>
                <span className="font-light text-sm"></span>
              </div>

              <div className="flex flex-col gpa-2">
                <span className="text-">Landline Number</span>
                <span className="font-light text-sm">7860601111</span>
              </div>

              <div className="flex flex-col gpa-2">
                <span className="text-">Mobile Number</span>
                <span className="font-light text-sm">7860601111</span>
              </div>

              <div className="flex flex-col gpa-2">
                <span className="text-">Guest Name</span>
                <span className="font-light text-sm">Manish</span>
              </div>

              <div className="flex flex-col gpa-2">
                <span className="text-">Query Title</span>
                <span className="font-light text-sm">Thailand query</span>
              </div>

              <div className="flex flex-col gpa-2">
                <span className="text-">Add CC Mails</span>
                <span className="font-light text-sm">sarthak@viaggioo.com</span>
              </div>

              <div className="flex flex-col gpa-2">
                <span className="text-">Adult</span>
                <span className="font-light text-sm">3</span>
              </div>

              <div className="flex flex-col gpa-2">
                <span className="text-">Child</span>
                <span className="font-light text-sm">5</span>
              </div>

              <div className="flex flex-col gpa-2">
                <span className="text-">Infant</span>
                <span className="font-light text-sm"></span>
              </div>

              <div className="flex flex-col gpa-2">
                <span className="text-">Lead Source</span>
                <span className="font-light text-sm">Call</span>
              </div>
              <div className="flex flex-col gpa-2">
                <span className="text-">Operation Person</span>
                <span className="font-light text-sm">Karan Sharma</span>
              </div>
              <div className="flex flex-col gpa-2">
                <span className="text-">Sales Person</span>
                <span className="font-light text-sm"></span>
              </div>
              <div className="flex flex-col gpa-2">
                <span className="text-">Company *</span>
                <span className="font-light text-sm">
                  Viaggio World Pvt Ltd
                </span>
              </div>
              <div className="flex flex-col gpa-2">
                <span className="text-">Lead Source</span>
                <span className="font-light text-sm">Call</span>
              </div>
            </div>
            <div className="mt-5">
              <h5 className="">Other Informations</h5>
              <ul>
                <li className="flex items-center gap-2">
                  <span className="text-">Duration :</span>
                  <span className="font-light text-sm">5 Nights / 6 Days</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-">Travel Date :</span>
                  <span className="font-light text-sm">15th February 2025</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-">Itinerary :</span>

                  <span className="font-light text-sm">
                    Pattaya: 3 Nights,{" "}
                  </span>
                  <span className="font-light text-sm">Bangkok: 2 Nights</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-">Hotel :</span>
                  <span className="font-light text-sm">
                    3 & 4 Star with breakfast
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-">Inclusions :</span>
                  <span className="font-light text-sm">All sightseeing, </span>
                  <span className="font-light text-sm">Private transfers</span>
                </li>
              </ul>
            </div>
          </div>
        </>

        <>
          <span>24 Jan 2025 18:02 - Karan Sharma</span>
          <h5>Quotation Updated</h5>
          <div className="border p-5 rounded-md my-3 shadow-2xl">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 mt-4">
              <div className="flex flex-col gpa-2">
                <span className="text-">Adults</span>
                <span className="font-light text-sm">3</span>
              </div>
              <div className="flex flex-col gpa-2">
                <span className="text-">Childs</span>
                <span className="font-light text-sm">0</span>
              </div>
              <div className="flex flex-col gpa-2">
                <span className="text-">Infants</span>
                <span className="font-light text-sm">0</span>
              </div>
              <div className="flex flex-col gpa-2">
                <span className="text-">Service Type</span>
                <span className="font-light text-sm">Complete Package</span>
              </div>
            </div>
            {/* table sec  */}
            <div className="overflow-x-auto mt-3">
              <table className="min-w-full table-auto border-collapse text-sm border border-gray-300">
                <thead className="bg-headerBg text-white">
                  <tr>
                    <th className="border border-gray-300">Destination</th>
                    <th className="border border-gray-300">From Date</th>
                    <th className="border border-gray-300">To Date</th>
                    <th className="border border-gray-300">Nights</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300">Pattaya</td>
                    <td className="border border-gray-300">15-02-2025</td>
                    <td className="border border-gray-300">18-02-2025</td>
                    <td className="border border-gray-300">3</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300">Bangkok</td>
                    <td className="border border-gray-300">15-02-2025</td>
                    <td className="border border-gray-300">18-02-2025</td>
                    <td className="border border-gray-300">2</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* content sec */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 mt-4">
              <div className="flex flex-col gpa-2">
                <span className="text-">SGL Room</span>
                <span className="font-light text-sm"></span>
              </div>
              <div className="flex flex-col gpa-2">
                <span className="text-">DBL Room</span>
                <span className="font-light text-sm"></span>
              </div>
              <div className="flex flex-col gpa-2">
                <span className="text-">TRPL Room</span>
                <span className="font-light text-sm">1</span>
              </div>
              <div className="flex flex-col gpa-2">
                <span className="text-">Quad Room</span>
                <span className="font-light text-sm"></span>
              </div>
              <div className="flex flex-col gpa-2">
                <span className="text-">ADULT EXT BED Room</span>
                <span className="font-light text-sm"></span>
              </div>
              <div className="flex flex-col gpa-2">
                <span className="text-">CWB Room</span>
                <span className="font-light text-sm"></span>
              </div>
              <div className="flex flex-col gpa-2">
                <span className="text-">CNB Room</span>
                <span className="font-light text-sm"></span>
              </div>
              <div className="flex flex-col gpa-2">
                <span className="text-">INF Room</span>
                <span className="font-light text-sm"></span>
              </div>
            </div>
          </div>
        </>

        <>
          <span>24 Jan 2025 18:27 - Karan Sharma</span>
          <h5>Manual Hotel Added</h5>
          <div className="border p-5 rounded-md my-3 shadow-2xl">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-4 mt-4">
              <div className="flex flex-col gpa-2">
                <span className="text-">Hotel Name</span>
                <span className="font-light text-sm">
                  Courtyard by Marriott North Pattaya
                </span>
              </div>
              <div className="flex flex-col gpa-2">
                <span className="text-">Destination</span>
                <span className="font-light text-sm">Pattaya</span>
              </div>
              <div className="flex flex-col gpa-2">
                <span className="text-">Supplier</span>
                <span className="font-light text-sm">TRAVELBULLZ</span>
              </div>
              <div className="flex flex-col gpa-2">
                <span className="text-">Check-In</span>
                <span className="font-light text-sm">15 Feb 2025</span>
              </div>
              <div className="flex flex-col gpa-2">
                <span className="text-">Check-Out</span>
                <span className="font-light text-sm">18 Feb 2025</span>
              </div>
              <div className="flex flex-col gpa-2">
                <span className="text-">Currency</span>
                <span className="font-light text-sm">INR</span>
              </div>
              <div className="flex flex-col gpa-2">
                <span className="text-">Category</span>
                <span className="font-light text-sm">4 Star</span>
              </div>
              <div className="flex flex-col gpa-2">
                <span className="text-">Room Type</span>
                <span className="font-light text-sm">Room Type</span>
              </div>
              <div className="flex flex-col gpa-2">
                <span className="text-">Meal Plan</span>
                <span className="font-light text-sm">Breakfast</span>
              </div>
              <div className="flex flex-col gpa-2">
                <span className="text-">SGL Cost</span>
                <span className="font-light text-sm"></span>
              </div>
              <div className="flex flex-col gpa-2">
                <span className="text-">TRPL Cost</span>
                <span className="font-light text-sm"></span>
              </div>
              <div className="flex flex-col gpa-2">
                <span className="text-">QUAD Cost</span>
                <span className="font-light text-sm"></span>
              </div>
              <div className="flex flex-col gpa-2">
                <span className="text-">Adult Extra Bed Cost</span>
                <span className="font-light text-sm"></span>
              </div>
              <div className="flex flex-col gpa-2">
                <span className="text-">CWB Cost</span>
                <span className="font-light text-sm"></span>
              </div>
              <div className="flex flex-col gpa-2">
                <span className="text-">CNB Room <i>(Above Yrs)</i> </span>
                <span className="font-light text-sm"></span>
              </div>
              <div className="flex flex-col gpa-2">
                <span className="text-">CNB Cost <i>(Above Yrs)</i></span>
                <span className="font-light text-sm"></span>
              </div>
              <div className="flex flex-col gpa-2">
                <span className="text-">CNB Room <i>(Below Yrs)</i></span>
                <span className="font-light text-sm"></span>
              </div>
              <div className="flex flex-col gpa-2">
                <span className="text-">CNB Cost <i>(Below Yrs)</i></span>
                <span className="font-light text-sm"></span>
              </div>
              <div className="flex flex-col gpa-2">
                <span className="text-">INF Cost</span>
                <span className="font-light text-sm"></span>
              </div>
            </div>
          </div>
        </>
      </Dialog.Panel>
    </Dialog>
  );
};

export default ViewQueryHistory;
