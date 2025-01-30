import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const MealPlanHeader = () => {
  return (
    <>
      <div className="bg-black py-2 px-2 flex items-center justify-between">
        <h2 className=" text-white font-semibold text-lg">Meal Plan</h2>
        <div>
          <button
            type="button"
            className="py-[6px] px-5 bg-gradient-to-r from-blue-500 to-blue-800 text-white 
             rounded shadow-md hover:shadow-lg hover:from-blue-700 hover:to-blue-900 
             transition-all duration-300 flex items-center gap-2 text-[14px] font-semibold"
          >
            <FontAwesomeIcon icon={faCirclePlus} className="" />
            Add New Meal Plan
          </button>
        </div>
      </div>
      {/* <AddHotelOwn isActive={isActive} setIsActive={setIsActive}/> */}
    </>
  );
};

export default MealPlanHeader;
