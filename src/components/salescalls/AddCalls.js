import React from "react";

const AddCalls = () => {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="w-[800px] mx-auto bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Add Call</h2>
                <div className="grid grid-cols-1 gap-6">
                    <div className="col-span-1">
                        <div className="gap-2 grid grid-cols-6">
                            <div className="col-span-2">
                                <label className="block text-sm font-medium">Agent/B2C *</label>
                                <select className="w-full p-2 border rounded">
                                    <option>Agent</option>
                                    <option>Customer</option>
                                </select>
                            </div>
                            <div className="col-span-2">
                                <label className="block text-sm font-medium">Agent*</label>
                                <select className="w-full p-2 border rounded">
                                    <option>Agent</option>
                                    <option>Customer</option>
                                </select>
                            </div>
                            <div className="col-span-2">
                                <label className="block text-sm font-medium">Contact Person Name *</label>
                                <input type="text" className="w-full p-2 border rounded"  />
                            </div>
                            <div className="col-span-2">
                                <label className="block text-sm font-medium">Contact Person Email  *</label>
                                <input type="email" className="w-full p-2 border rounded"  />
                            </div>
                            <div className="col-span-2">
                                <label className="block text-sm font-medium">Landline Number</label>
                                <input type="number" className="w-full p-2 border rounded"  />
                            </div>
                            <div className="col-span-2">
                                <label className="block text-sm font-medium">Mobile Number </label>
                                <input type="number" className="w-full p-2 border rounded" />
                            </div>
                            <div className="col-span-3">
                                <label className="block text-sm font-medium">Assign To</label>
                                <input type="text" className="w-full p-2 border rounded"  />
                            </div>
                            <div className="col-span-3">
                                <label className="block text-sm font-medium">Due Date </label>
                                <input type="text" className="w-full p-2 border rounded"  />
                            </div>
                            <h3 className="col-span-6 my-2 bg-gray-300 p-1 text-gray-500">
                                Set Remainder
                            </h3>
                            <div className="col-span-3">
                                <label className="block text-sm font-medium">Reminder Date</label>
                                <input type="date" className="w-full p-2 border rounded"  />
                            </div>
                            <div className="col-span-3">
                                <label className="block text-sm font-medium">Reminder Time</label>
                                <input type="time" className="w-full p-2 border rounded"  />
                            </div>
                            <h3 className="col-span-6 my-2 bg-gray-300 p-1 text-gray-500">
                            Additional Information
                            </h3>
                            <div className="col-span-3">
                                <label className="block text-sm font-medium">Status</label>
                                <select className="w-full p-2 border rounded">
                                    <option>--- None ---</option>
                                    <option></option>
                                </select>
                            </div>
                            <div className="col-span-3">
                                <label className="block text-sm font-medium">Priority</label>
                                <select className="w-full p-2 border rounded">
                                    <option>--- None ---</option>
                                    <option></option>
                                </select>
                            </div>
                            <div className="col-span-6">
                                <label className="block text-sm font-medium">Remarks</label>
                                <textarea type="text" className="w-full p-2 border rounded" placeholder="Facebook" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end space-x-4 mt-6">
                    <button className="bg-green-500 text-white px-4 py-2 rounded">Save</button>
                </div>
            </div>
        </div>
    );
};

export default AddCalls;
