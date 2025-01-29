import React from "react";
import QuotationForm from "./QuotationForm";
import QuotationTable from "./QuotationTable";
import QuotationHeader from "./QuotationHeader";

const Quotationinformation = () => {
  return (
    <div className="border  p-4 shadow-sm m-2 mt-2 rounded">
      <QuotationHeader />
      <QuotationForm />
      <QuotationTable />
    </div>
  );
};

export default Quotationinformation;
