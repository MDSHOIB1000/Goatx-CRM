import React from "react";
import VoucherTable from "./VoucherTable";
import VoucherForm from "./VoucherForm";

const VoucherInformation = () => {
  return (
    <div className="border  p-4 shadow-sm m-2 mt-2 rounded">
      <div className="bg-black py-2 px-2 flex items-center justify-between">
        <h2 className=" text-white font-semibold text-lg">Voucher</h2>
      </div>
      <VoucherForm />
      <VoucherTable />
    </div>
  );
};
export default VoucherInformation;
