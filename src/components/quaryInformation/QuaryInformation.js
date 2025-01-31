import React from "react";

import QuaryForm from "./QuaryForm";
import QuaryCard from "./QuaryCard";
import QuaryTable from "./QuaryTable";

import QueryFormHeader from "./QueryFormHeader";
import InputField from "../../commonComponents/inputField/InputField";

const QuaryInformation = () => {
  return (
    <div className="border rounded-lg shadow p-4 m-4">
      <QueryFormHeader />
      <QuaryForm />
      <QuaryCard />
      <QuaryTable />
    </div>
  );
};

export default QuaryInformation;
