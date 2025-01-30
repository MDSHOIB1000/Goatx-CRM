import React from "react";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import VisaRequestTable from "./VisaRequestTable";
import VisaRequestForm from "./VisaRequestForm";

const VisaRequestInformation = () => {
  return (
    <div className="border  p-4 shadow-sm m-2 mt-2 rounded">
      <div className="bg-black py-2 px-2 flex items-center justify-between">
        <h2 className=" text-white font-semibold text-lg">
        Visa Request
        </h2>
      </div>

      <VisaRequestForm />
      <VisaRequestTable />
    </div>
  );
};
 export default VisaRequestInformation