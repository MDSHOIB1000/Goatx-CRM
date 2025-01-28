import React, { useState } from "react";
import "react-quill/dist/quill.snow.css"; // Import the styles
import ReactQuill from "react-quill";

const AddQuaryInformation = () => {
    const [openDropdown, setOpenDropdown] = useState(null); // State for open dropdown
  
    const toggleDropdown = (dropdownId) => {
      setOpenDropdown((prev) => (prev === dropdownId ? null : dropdownId));
    };

  const [value, setValue] = useState("");

  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"], // Text styles
      [{ list: "ordered" }, { list: "bullet" }], // Lists
      [{ align: [] }],
      ["link", "image", "video"], // Media
      ["clean"], // Clear formatting
    ],
  };

  const formats = [
    "header",
    "font",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "align",
    "link",
    "image",
    "video",
  ];

  return (
    <div className="border p-4 m-2 shadow-sm rounded-md">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Query Information */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Query Information</h2>
          <button className="bg-gradient-to-r from-sky-400 to-blue-800 text-white font-bold w-full py-1 ">
            Add New Agent/Client
          </button>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
            <div className="flex flex-col">
              <label htmlFor="lead-source" className="text-sm font-medium mb-1">
                Agent/B2C
              </label>
              <select
                id="lead-source"
                className="p-2 border rounded-md bg-white"
              >
                <option value="" selected disabled>
                  Open this select menu
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="start-date" className="text-sm font-medium mb-1">
              Agent
              </label>
              <div className="relative">
              <button
                  onClick={() => toggleDropdown("Agent")}
                  className="w-full bg-white border border-gray-300 rounded-md p-2 text-left focus:outline-none"
                >
                  <span className="float-right">▾</span>
                </button>
                {openDropdown === "Agent" && (
                  <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-md">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full p-2 border-b border-gray-200 focus:outline-none"
                    />
                    <ul className="max-h-40 overflow-y-auto">
                      <li className="p-2 hover:bg-gray-100 cursor-pointer">select Agent</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="start-date" className="text-sm font-medium mb-1">
                Contact Person Name
              </label>
              <div className="relative">
              <button
                  onClick={() => toggleDropdown("ContactPerson")}
                  className="w-full bg-white border border-gray-300 rounded-md p-2 text-left focus:outline-none"
                >
                  <span className="float-right">▾</span>
                </button>
                {openDropdown === "ContactPerson" && (
                  <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-md">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full p-2 border-b border-gray-200 focus:outline-none"
                    />
                    <ul className="max-h-40 overflow-y-auto">
                      <li className="p-2 hover:bg-gray-100 cursor-pointer">select Agent</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="start-date" className="text-sm font-medium mb-1">
                Contact Person Email
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                id=""
                className="p-2 border rounded-md"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="end-date" className="text-sm font-medium mb-1">
                Landline Number
              </label>
              <input
                type="number"
                placeholder="Enter Number"
                id=""
                className="p-2 border rounded-md"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="query-id" className="text-sm font-medium mb-1">
                Mobile Number
              </label>
              <input
                type="number"
                id=""
                placeholder="Mobile Number"
                className="p-2 border rounded-md"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="quotationry-id"
                className="text-sm font-medium mb-1"
              >
                Guest Name
              </label>
              <input
                type="text"
                id="quotationry-id"
                placeholder="Enter Guest Name"
                className="p-2 border rounded-md"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="start-date" className="text-sm font-medium mb-1">
                Service Type
              </label>
              <div className="relative">
              <button
                  onClick={() => toggleDropdown("ServiceType")}
                  className="w-full bg-white border border-gray-300 rounded-md p-2 text-left focus:outline-none"
                >
                  <span className="float-right">▾</span>
                </button>
                {openDropdown === "ServiceType" && (
                  <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-md">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full p-2 border-b border-gray-200 focus:outline-none"
                    />
                    <ul className="max-h-40 overflow-y-auto">
                      <li className="p-2 hover:bg-gray-100 cursor-pointer">select Agent</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="quotationry-id"
                className="text-sm font-medium mb-1"
              >
                Query Title
              </label>
              <input
                type="text"
                id=""
                placeholder="Enter Query Title"
                className="p-2 border rounded-md"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="quotationry-id"
                className="text-sm font-medium mb-1"
              >
                Add CC Mails
              </label>
              <input
                type="text"
                id=""
                placeholder="Enter Query Title"
                className="p-2 border rounded-md"
              />
            </div>

            <div className="flex gap-2">
              <input
                type="checkbox"
                id=""
                placeholder="Enter Query Title"
                className="p-2 border rounded-md"
              />
              <label
                htmlFor="quotationry-id"
                className="text-sm font-medium mb-1"
              >
                Send Acknowledgement Mail
              </label>
            </div>
          </div>
        </div>

        {/* Other Information */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Other Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="start-date" className="text-sm font-medium mb-1">
                Destination
              </label>
              <div className="relative">
              <button
                  onClick={() => toggleDropdown("Destination")}
                  className="w-full bg-white border border-gray-300 rounded-md p-2 text-left focus:outline-none"
                >
                  <span className="float-right">▾</span>
                </button>
                {openDropdown === "Destination" && (
                  <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-md">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full p-2 border-b border-gray-200 focus:outline-none"
                    />
                    <ul className="max-h-40 overflow-y-auto">
                      <li className="p-2 hover:bg-gray-100 cursor-pointer">select Agent</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="subject-company"
                className="text-sm font-medium mb-1"
              >
                From Date
              </label>
              <input type="date" id="" className="p-2 border rounded-md" />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="subject-company"
                className="text-sm font-medium mb-1"
              >
                To Date
              </label>
              <input type="date" id="" className="p-2 border rounded-md" />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="subject-company"
                className="text-sm font-medium mb-1"
              >
                Adult
              </label>
              <input
                type="text"
                id="subject-company"
                placeholder="Enter No. of Adult"
                className="p-2 border rounded-md"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="subject-company"
                className="text-sm font-medium mb-1"
              >
                Child ( Above 2 Yrs )
              </label>
              <input
                type="Number"
                id=""
                placeholder="Enter No. Of Child"
                className="p-2 border rounded-md"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="subject-company"
                className="text-sm font-medium mb-1"
              >
                Infant ( Below 2 Yrs )
              </label>
              <input
                type="number"
                id="subject-company"
                placeholder="Enter No. Of Infant"
                className="p-2 border rounded-md"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="start-date" className="text-sm font-medium mb-1">
                Lead Source
              </label>
              <div className="relative">
              <button
                  onClick={() => toggleDropdown("LeadSource")}
                  className="w-full bg-white border border-gray-300 rounded-md p-2 text-left focus:outline-none"
                >
                  <span className="float-right">▾</span>
                </button>
                {openDropdown === "LeadSource" && (
                  <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-md">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full p-2 border-b border-gray-200 focus:outline-none"
                    />
                    <ul className="max-h-40 overflow-y-auto">
                      <li className="p-2 hover:bg-gray-100 cursor-pointer">select Agent</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="start-date" className="text-sm font-medium mb-1">
                Operation Person *
              </label>
              <div className="relative">
              <button
                  onClick={() => toggleDropdown("Operation")}
                  className="w-full bg-white border border-gray-300 rounded-md p-2 text-left focus:outline-none"
                >
                  <span className="float-right">▾</span>
                </button>
                {openDropdown === "Operation" && (
                  <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-md">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full p-2 border-b border-gray-200 focus:outline-none"
                    />
                    <ul className="max-h-40 overflow-y-auto">
                      <li className="p-2 hover:bg-gray-100 cursor-pointer">select Agent</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="start-date" className="text-sm font-medium mb-1">
                Sales Person *
              </label>
              <div className="relative">
              <button
                  onClick={() => toggleDropdown("SalesPerson")}
                  className="w-full bg-white border border-gray-300 rounded-md p-2 text-left focus:outline-none"
                >
                  <span className="float-right">▾</span>
                </button>
                {openDropdown === "SalesPerson" && (
                  <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-md">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full p-2 border-b border-gray-200 focus:outline-none"
                    />
                    <ul className="max-h-40 overflow-y-auto">
                      <li className="p-2 hover:bg-gray-100 cursor-pointer">select Agent</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="all-company" className="text-sm font-medium mb-1">
                Company *
              </label>
              <select
                id="all-company"
                className="p-2 border rounded-md bg-white"
              >
                <option value="" selected disabled>
                  Open this select menu
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col mt-5">
            <label htmlFor="all-company" className="text-sm font-medium mb-1">
              Other Informations
            </label>
            <ReactQuill
              theme="snow"
              value={value}
              onChange={setValue}
              modules={modules}
              formats={formats}
              placeholder="Type your content here..."
            />
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center gap-5 mt-6">
      <button
          type="button"
          className="py-2 px-8 bg-red-700 text-white rounded-md hover:bg-red-800"
        >
          Cancel
        </button>
        <button
          type="button"
          className="py-2 px-8 bg-green-700 text-white rounded-md hover:bg-green-800"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default AddQuaryInformation;
