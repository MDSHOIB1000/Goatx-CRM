import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog } from "@headlessui/react";

const AddQuotation = ({ isqout, setQout }) => {
    return (
        <Dialog open={isqout} onClose={() => setQout(false)} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <Dialog.Panel className="bg-white p-6 rounded-lg shadow-lg w-full md:w-3/4 lg:w-1/2 relative">
                
                {/* Close Button */}
                <button className="absolute top-3 right-3 text-red-500" onClick={() => setQout(false)}>
                    <FontAwesomeIcon icon={faCircleXmark} className="text-2xl" />
                </button>

                {/* Dialog Title */}
                <Dialog.Title className="text-lg font-semibold bg-gray-800 text-white p-3 rounded-md">
                    Add New Quotation
                </Dialog.Title>

                {/* Form */}
                <form className="mt-4 space-y-4 h-[500px] overflow-auto ">
                    <div>
                        <label className="text-sm font-medium">Quotation Title</label>
                        <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" />
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                        {['Adults', 'Children', 'Infants'].map((label) => (
                            <div key={label}>
                                <label className="text-sm font-medium">{label}</label>
                                <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" />
                            </div>
                        ))}
                    </div>

                    <div>
                        <label className="text-sm font-medium">Package Type</label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500">
                            <option>Complete Package</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center space-x-2">
                            <input type="radio" name="package" className="focus:ring-2" />
                            <label className="text-sm">Ayodhya - 02 Mar 2025 to 03 Mar 2025 | 1 Night</label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <input type="radio" name="package" className="focus:ring-2" />
                            <label className="text-sm">Customize Destination</label>
                        </div>
                    </div>

                    <div className="grid grid-cols-12 gap-4">
                        <select className="border rounded p-2 col-span-3">
                            <option>Select Destination</option>
                            <option>Darjeeling</option>
                            <option>Goa</option>
                        </select>
                        <input type="date" className="border rounded p-2 col-span-3" />
                        <input type="date" className="border rounded p-2 col-span-3" />
                    <button type="button" className="bg-gray-600 col-span-3 text-white px-4 py-2 rounded">Add</button>
                    </div>
                    <div className="grid grid-cols-12 gap-4 mt-4">
                        <div className="text-center col-span-3">
                            <p className="font-semibold">SGL Room</p>
                            <input type="text" className="w-full border rounded p-2 bg-blue-100 text-center" placeholder="Enter Room" />
                        </div>
                        <div className="text-center col-span-3">
                            <p className="font-semibold">DBL Room</p>
                            <input type="text" className="w-full border rounded p-2 bg-blue-100 text-center" placeholder="Enter Room" />
                        </div>
                        <div className="text-center col-span-3 ">
                            <p className="font-semibold">TRPL Room</p>
                            <input type="text" className="w-full border rounded p-2 bg-blue-100 text-center" placeholder="Enter Room" />
                        </div>
                        <div className="text-center col-span-3">
                            <p className="font-semibold">Quad Room</p>
                            <input type="text" className="w-full border rounded p-2 bg-blue-100 text-center" placeholder="Enter Room" />
                        </div>
                        <div className="text-center col-span-3">
                            <p className="font-semibold">ADULT Room</p>
                            <input type="text" className="w-full border rounded p-2 bg-blue-100 text-center" placeholder="Enter Room" />
                        </div>
                        <div className="text-center col-span-3">
                            <p className="font-semibold">CWB Room</p>
                            <input type="text" className="w-full border rounded p-2 bg-blue-100 text-center" placeholder="Enter Room" />
                        </div>
                        <div className="text-center col-span-3">
                            <p className="font-semibold">CNB Room</p>
                            <input type="text" className="w-full border rounded p-2 bg-blue-100 text-center" placeholder="Enter Room" />
                        </div>
                        <div className="text-center col-span-3">
                            <p className="font-semibold">INF Room</p>
                            <input type="text" className="w-full border rounded p-2 bg-blue-100 text-center" placeholder="Enter Room" />
                        </div>

                    </div>

                    <button type="submit" className="py-2 px-4 bg-blue-700 text-white rounded-md hover:bg-blue-800">
                        Save
                    </button>
                </form>
            </Dialog.Panel>
        </Dialog>
    );
};

export default AddQuotation;
