import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const B2cHeader = () => {
  return (
    <>
      <div className="bg-black py-2 px-2 flex items-center justify-between">
        <h2 className=" text-white font-semibold text-lg">B2C</h2>
        <div>
          <Link to={"/edit-B2C"}>
            <button
              type="button"
              className="py-[6px] px-5 bg-gradient-to-r from-blue-500 to-blue-800 text-white 
               rounded-md shadow-md hover:shadow-lg hover:from-blue-700 hover:to-blue-900 
               transition-all duration-300 flex items-center gap-2 text-[14px] font-semibold"
            >
              <FontAwesomeIcon icon={faCirclePlus} className="" />
              Add New B2C
            </button>
          </Link>
        </div>
      </div>
      {/* <AddHotelOwn isActive={isActive} setIsActive={setIsActive}/> */}
    </>
  );
};

export default B2cHeader;
