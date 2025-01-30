import React, { useState } from "react";
import "react-quill/dist/quill.snow.css"; // Import the styles
import ReactQuill from "react-quill";
import AddNewAgent from "../addNewAgent/AddNewAgent";

const AddQuaryInformation = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(false);

  const toggleDropdown = (dropdownId) => {
    setOpenDropdown((prev) => (prev === dropdownId ? null : dropdownId));
  };

  //poppup open & close
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };


  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ align: [] }],
      ["link", "image", "video"],
      ["clean"],
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
    <div className="border rounded-lg shadow p-4 m-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="flex  bg-headerBg text-white align-middle justify-between rounded-md p-2">
            <h2 className="text-lg font-semibold">Query Information</h2>
            <button  onClick={() => togglePopup()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full uppercase">
              Add New Agent/Client
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border p-5 rounded-md my-3 shadow-xl ">

            <div className="flex flex-col">
              <label htmlFor="lead-source" className="text-sm font-medium mb-1">
                Agent/B2C
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

            <div className="flex flex-col">
              <label htmlFor="start-date" className="text-sm font-medium mb-1">
                Agent
              </label>
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("Agent")}
                  className="w-full bg-white px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <span className="float-right">▾</span>
                </button>
                {openDropdown === "Agent" && (
                  <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-md">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full px-3 py-2 border-b border-gray-200 focus:outline-none"
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
                  className="w-full bg-white  px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <span className="float-right">▾</span>
                </button>
                {openDropdown === "ContactPerson" && (
                  <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-md">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full px-3 py-2 border-b border-gray-200 focus:outline-none"
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
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="mobile-number"
                  className="text-sm font-medium text-gray-700"
                >
                  Mobile Number
                </label>
                <input
                  type="number"
                  id="mobile-number"
                  placeholder="Enter your mobile number"
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
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
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="start-date" className="text-sm font-medium mb-1">
                Service Type
              </label>
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("ServiceType")}
                  className="w-full bg-white  px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <span className="float-right">▾</span>
                </button>
                {openDropdown === "ServiceType" && (
                  <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-md">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full px-3 py-2 border-b border-gray-200 focus:outline-none"
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
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>


          </div>

          <div className="border p-2 rounded-md  shadow-xl">
            <div className="flex gap-2">
              <input
                type="checkbox"
                id=""
                placeholder="Enter Query Title"
                className="w-5 h-5 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
          <div className=" bg-headerBg text-white align-middle justify-between rounded-md p-2">
            <h2 className="text-lg font-semibold mb-4">Other Information</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border p-5 rounded-md my-3 shadow-xl ">
            <div className="flex flex-col">
              <label htmlFor="start-date" className="text-sm font-medium mb-1">
                Destination
              </label>
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("Destination")}
                  className="w-full bg-white px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <span className="float-right">▾</span>
                </button>
                {openDropdown === "Destination" && (
                  <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-md">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full px-3 py-2 border-b border-gray-200 focus:outline-none"
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
              <input type="date" id="" className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="subject-company"
                className="text-sm font-medium mb-1"
              >
                To Date
              </label>
              <input type="date" id="" className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
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
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="start-date" className="text-sm font-medium mb-1">
                Lead Source
              </label>
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("LeadSource")}
                  className="w-full bg-white px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <span className="float-right">▾</span>
                </button>
                {openDropdown === "LeadSource" && (
                  <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-md">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full px-3 py-2 border-b border-gray-200 focus:outline-none"
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
                  className="w-full bg-white px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <span className="float-right">▾</span>
                </button>
                {openDropdown === "Operation" && (
                  <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-md">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full px-3 py-2 border-b border-gray-200 focus:outline-none"
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
                  className="w-full bg-white px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <span className="float-right">▾</span>
                </button>
                {openDropdown === "SalesPerson" && (
                  <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-md">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full px-3 py-2 border-b border-gray-200 focus:outline-none"
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
      </div>
      <div className="p-5 rounded-md my-3 shadow-xl">
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
            className="h-60  rounded-md"
            
          />


        </div>

      </div>
      {/* Submit Button */}
      <div className="flex justify-end gap-5 mt-6">
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
     
          <AddNewAgent isOpen={isOpen} setIsOpen={setIsOpen}/>
    </div>
  );
};

export default AddQuaryInformation;
