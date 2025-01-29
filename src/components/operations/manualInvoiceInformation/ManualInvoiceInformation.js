import React from "react";
import ManualInvoiceForm from "./ManualInvoiceForm";
import ManualInvoiceTable from "./ManualInvoiceTable";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ManualInvoiceInformation = () => {
  return (
    <div className="border  p-4 shadow-sm m-2 mt-2 rounded">
      <div className="bg-black py-2 px-2 flex items-center justify-between">
        <h2 className=" text-white font-semibold text-lg">
          Manual Invoice
        </h2>
        <div>
          <button
            type="button"
            className="py-[5px] px-4 bg-red-500 text-white rounded-md hover:bg-red-700"
          >
          <FontAwesomeIcon icon={faCirclePlus} className="mr-2" />
            Add Manual Invoice
          </button>
        </div>
      </div>

      <ManualInvoiceForm />
      <ManualInvoiceTable />
    </div>
  );
};

export default ManualInvoiceInformation;
