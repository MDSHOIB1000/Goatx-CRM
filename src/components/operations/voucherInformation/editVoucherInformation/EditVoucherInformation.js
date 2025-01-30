import React from "react";
import EditVoucherHeader from "./EditVoucherHeader";
import EditVoucherForm from "./EditVoucherForm";
import EditVoucherTable from "./EditVoucherTable";

const EditVoucherInformation = () => {
  return (
    <div className="border  p-4 shadow-sm m-2 mt-2 rounded">
      <EditVoucherHeader />
      <EditVoucherForm />
      <EditVoucherTable />
    </div>
  );
};

export default EditVoucherInformation;
