import React from "react";

const DSRForm = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className=" w-full m-4 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Add DSR</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-2">Company Information</h3>
            <div className="gap-2 grid grid-cols-2">
              <div className="col-span-1">
                <label className="block text-sm font-medium">Client Type *</label>
                <select className="w-full p-2 border rounded">
                  <option>Agent</option>
                  <option>Customer</option>
                </select>
              </div>
              <div className="col-span-1">
                <label className="block text-sm font-medium">Company Name *</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="Enter Company Name" />
              </div>
              <div className="col-span-1">
                <label className="block text-sm font-medium">Landline Number</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="Enter Landline Number" />
              </div>
              <div className="col-span-1">
                <label className="block text-sm font-medium">Company Logo</label>
                <input type="file" className="w-full p-2 border rounded" />
              </div>
              <div className="col-span-1">
                <label className="block text-sm font-medium">Contact Person</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="Contact Person" />
              </div>
              <div className="col-span-1"> 
                <label className="block text-sm font-medium">Designation</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="Designation" />
              </div>
              <div className="col-span-1">
                <label className="block text-sm font-medium">Email</label>
                <input type="email" className="w-full p-2 border rounded" placeholder="Email" />
              </div>
              <div className="col-span-1">
                <label className="block text-sm font-medium">Mobile</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="Phone" />
              </div>
              <div className="col-span-1">
                <label className="block text-sm font-medium">Company Category</label>
                <select className="w-full p-2 border rounded">
                  <option>Big</option>
                  <option>Small</option>
                </select>
              </div>
              <div className="col-span-1">
                <label className="block text-sm font-medium">Lead Source</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="Facebook" />
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-2">Other Information</h3>
            <div className="gap-2 grid grid-cols-2">
              <div className="col-span-1">
                <label className="block text-sm font-medium">Country</label>
                <select className="w-full p-2 border rounded">
                  <option>Albania</option>
                  <option>USA</option>
                </select>
              </div>
              <div className="col-span-1" >
                <label className="block text-sm font-medium">State</label>
                <select className="w-full p-2 border rounded">
                  <option>Select State</option>
                </select>
              </div>
              <div className="col-span-1">
                <label className="block text-sm font-medium">City</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="Enter City" />
              </div>
              <div className="col-span-1">
                <label className="block text-sm font-medium">Zip</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="Enter Zip" />
              </div>
              <div className="col-span-1">
                <label className="block text-sm font-medium">State GST Code *</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="Enter State GST Code" />
              </div>
              <div className="col-span-1">
                <label className="block text-sm font-medium">GST Number</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="Enter GST Number" />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium">Address</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="Enter Address" />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium">Remarks</label>
                <textarea className="w-full p-2 border rounded" placeholder="Enter Remarks"></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end space-x-4 mt-6">
          <button className="bg-red-500 text-white px-4 py-2 rounded">Cancel</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded">Save</button>
        </div>
      </div>
    </div>
  );
};

export default DSRForm;
