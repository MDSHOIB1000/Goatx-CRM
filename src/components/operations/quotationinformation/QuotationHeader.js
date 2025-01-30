import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import AddEditQuotation from "./AddEditQuotation";

const QuotationHeader = () => {
  const [isActive, setIsActive] = useState(false);
  const [quotation, setQuotation] = useState(true);
  
  return (
    <>
      <div className="bg-black py-2 px-2 flex items-center justify-between">
        <h2 className=" text-white font-semibold text-lg">Quotation</h2>
        <div>
          <button
            onClick={() => setIsActive(true)}
            type="button"
            className="py-[6px] px-5 bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold 
         rounded-md shadow-md hover:shadow-lg hover:from-red-600 hover:to-red-800 
         transition-all duration-300 flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faCirclePlus} className="mr-2" />
            Add Quotation
          </button>
        </div>
      </div>
      <AddEditQuotation
        isActive={isActive}
        setIsActive={setIsActive}
        quotation={quotation}
        setQuotation={setQuotation}
      />
    </>
  );
};

export default QuotationHeader;
