import React from "react";

const CustomInputField = ({ id, label, type, value, onChange }) => {
  return (
    <div className="relative w-full mt-6">
      <input
        type={type}
        id={id}
        value={value}
        // onChange={onChange}
        className="peer w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-black placeholder-transparent"
        placeholder=""
      />

      <label
        htmlFor={id} className="absolute left-3 top-2 text-gray-500 text-base bg-white px-1 transition-all duration-200
                   peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500
                   peer-focus:-top-3 peer-focus:text-sm peer-focus:text-black pointer-events-none"
      >
        {label}
      </label>
    </div>
  );
};

export default CustomInputField;
