import React from "react";

const Task = () => {
  return (
    <div className="mt-4 mx-2">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Recent Tasks & Follow-ups */}
        <div className="bg-white shadow rounded-lg">
          <div className="bg-blue-600 text-white p-4 rounded-t-lg">
            <h5 className="text-lg font-semibold">Recent Tasks & Follow-up's</h5>
          </div>
          <div className="p-2">
            <div className="mb-3 p-2 border rounded flex justify-between items-center bg-gray-50">
              <div>
                <p className="font-bold mb-1">18 January 2025 14:00</p>
                <p className="text-gray-600">Test</p>
                <small>Saurav Sharma</small>
              </div>
              <span className="text-green-600 font-medium">Task Completed</span>
            </div>
            <div className="mb-3 p-2 border rounded flex justify-between items-center">
              <div>
                <p className="font-bold mb-1">18 January 2025 02:00</p>
                <p className="text-gray-600">Complete Flyer</p>
                <small>Saurav Sharma</small>
              </div>
              <span className="text-gray-500 font-medium">Task Not Completed</span>
            </div>
            <div className="mb-3 p-2 border rounded flex justify-between items-center">
              <div>
                <p className="font-bold mb-1">15 January 2025 14:00</p>
                <p className="text-gray-600">Agents want to add flight as well</p>
                <small>Karan Sharma</small>
              </div>
              <span className="text-gray-500 font-medium">Task Not Completed</span>
            </div>
            <div className="p-2 border rounded flex justify-between items-center">
              <div>
                <p className="font-bold mb-1">14 August 2024 10:00</p>
                <p className="text-gray-600">VISA Details Update</p>
                <small>Karan Sharma</small>
              </div>
              <span className="text-gray-500 font-medium">Task Not Completed</span>
            </div>
          </div>
        </div>

        {/* Scheduled Payments */}
        <div className="bg-white shadow rounded-lg">
          <div className="bg-green-600 text-white p-4 rounded-t-lg">
            <h5 className="text-lg font-semibold">Scheduled Payment's</h5>
          </div>
          <div className="p-4">
            <div className="mb-3 p-2 border rounded flex justify-between items-center">
              <div>
                <p className="font-bold mb-1">#FIT000028</p>
                <p className="text-gray-600">Payer: Manish Srivastava</p>
                <small>03-01-2025</small>
              </div>
              <div>
                <span className="text-green-600 font-medium">Active</span>
                <p className="text-right font-bold">₹49,850.00</p>
              </div>
            </div>
            <div className="mb-3 p-2 border rounded flex justify-between items-center">
              <div>
                <p className="font-bold mb-1">#FIT000003</p>
                <p className="text-gray-600">Payer: Sarthak Singh</p>
                <small>18-01-2025</small>
              </div>
              <div>
                <span className="text-green-600 font-medium">Active</span>
                <p className="text-right font-bold">₹1,000.00</p>
              </div>
            </div>
            <div className="mb-3 p-2 border rounded flex justify-between items-center">
              <div>
                <p className="font-bold mb-1">#F000025</p>
                <p className="text-gray-600">Payer: Shivam</p>
                <small>21-01-2025</small>
              </div>
              <div>
                <span className="text-green-600 font-medium">Active</span>
                <p className="text-right font-bold">₹2,000.00</p>
              </div>
            </div>
            <div className="p-2 border rounded flex justify-between items-center">
              <div>
                <p className="font-bold mb-1">#FIT000021</p>
                <p className="text-gray-600">Payer: Mansi</p>
                <small>31-01-2025</small>
              </div>
              <div>
                <span className="text-green-600 font-medium">Active</span>
                <p className="text-right font-bold">₹80,000.00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Login Users */}
        <div className="bg-white shadow rounded-lg">
          <div className="bg-blue-400 text-white p-4 rounded-t-lg">
            <h5 className="text-lg font-semibold">Login User's</h5>
          </div>
          <div className="p-4">
            <div className="mb-3 p-2 border rounded flex justify-between items-center bg-gray-50">
              <div>
                <strong>Ishika Bhargava</strong>
                <p className="text-gray-600">Operation Person</p>
              </div>
              <span className="text-red-600 font-medium">11 minutes ago</span>
            </div>
            <div className="mb-3 p-2 border rounded flex justify-between items-center bg-gray-50">
              <div>
                <strong>Saurav Sharma</strong>
                <p className="text-gray-600">Customer Service</p>
              </div>
              <span className="text-red-600 font-medium">1 day ago</span>
            </div>
            <div className="mb-3 p-2 border rounded flex justify-between items-center bg-gray-50">
              <div>
                <strong>Sanjana Tiwari</strong>
                <p className="text-gray-600">Accounts</p>
              </div>
              <span className="text-red-600 font-medium">4 days ago</span>
            </div>
            <div className="p-2 border rounded flex justify-between items-center bg-gray-50">
              <div>
                <strong>Sarthak Singh</strong>
                <p className="text-gray-600">Sales Person</p>
              </div>
              <span className="text-red-600 font-medium">1 week ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
