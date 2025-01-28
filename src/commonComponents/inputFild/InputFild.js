import React from "react";

const InputFild = () => {
  return (
    <div className="flex flex-col relative">
      <div className="relative">
        <input
          type="number"
          id="subject-company"
          className="peer p-2 border rounded-md placeholder-transparent"
          placeholder=" "
        />
        <label
          htmlFor="subject-company"
          className="absolute text-sm font-medium mb-1 left-2 top-2 bg-white px-1 transition-all duration-200 peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 peer-focus:top-[-25%] peer-focus:left-[1%]"
        >
          Infant ( Below 2 Yrs )
        </label>
      </div>
    </div>
  );
};

export default InputFild;
