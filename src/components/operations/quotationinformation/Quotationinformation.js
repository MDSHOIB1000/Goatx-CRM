import React from "react";
import QuotationForm from "./QuotationForm";
import QuotationTable from "./QuotationTable";
import QuotationHeader from "./QuotationHeader";

const Quotationinformation = () => {
  return (
    <div className="border rounded-lg shadow p-4 m-4">
      <QuotationHeader />
      <QuotationForm />
      <QuotationTable />
    </div>
  );
};

export default Quotationinformation;
