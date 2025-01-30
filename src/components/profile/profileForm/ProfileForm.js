import React, { useState } from "react";
import JoditEditor from "jodit-react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";

const ProfileForm = () => {
  const [emailSignature, setEmailSignature] = useState("");
  const [terms, setTerms] = useState("");

  return (
    <div className="border rounded-lg shadow p-4 m-4">
      <div className="shadow p-2 my-4 bg-headerBg text-white flex justify-between">
        <h3 className="uppercase">Edit Profile</h3>
        <Link to="/profile" className="text-white flex items-center">
          <span>BACK PROFILE</span>
          <span className="bg-white text-headerBg px-2 mx-2 rounded">
            <FontAwesomeIcon icon={faBackward} />
          </span>
        </Link>
      </div>
      
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {/** Input Fields */}
          {[
            { label: "First Name", id: "first-name", type: "text" },
            { label: "Last Name", id: "last-name", type: "text" },
            { label: "Email", id: "email", type: "email" },
            { label: "Password", id: "password", type: "password" },
            { label: "Phone", id: "phone", type: "text" },
            { label: "Mobile", id: "mobile", type: "text" },
            { label: "Country", id: "country", type: "text" },
            { label: "State", id: "state", type: "text" },
            { label: "City", id: "city", type: "text" },
            { label: "Pin", id: "pin", type: "text" },
            { label: "Address", id: "address", type: "text" },
          ].map((field) => (
            <div key={field.id} className="flex flex-col">
              <label htmlFor={field.id} className="text-sm font-medium mb-1">
                {field.label}
              </label>
              <input
                type={field.type}
                id={field.id}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          ))}
          
          {/** File Upload Fields */}
          {[
            { label: "Company Logo", id: "company-logo" },
            { label: "Favicon", id: "favicon" },
          ].map((field) => (
            <div key={field.id} className="flex flex-col">
              <label htmlFor={field.id} className="text-sm font-medium mb-1">
                {field.label}
              </label>
              <input
                type="file"
                id={field.id}
                className="px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
          ))}
        </div>
        
        {/** Jodit Editors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Email Signature</label>
            <JoditEditor value={emailSignature} onChange={setEmailSignature} />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Terms & Conditions</label>
            <JoditEditor value={terms} onChange={setTerms} />
          </div>
        </div>
        
        {/** Buttons */}
        <div className="flex justify-end gap-4 mt-6">
          <button type="button" className="py-2 px-6 bg-red-600 text-white rounded-md hover:bg-red-800">
            Cancel
          </button>
          <button type="submit" className="py-2 px-6 bg-green-600 text-white rounded-md hover:bg-green-800">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;