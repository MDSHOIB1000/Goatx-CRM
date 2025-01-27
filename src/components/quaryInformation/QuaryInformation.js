import React from "react";
import { Link } from "react-router-dom";
import QuaryForm from "./QuaryForm";
import QuaryCard from "./QuaryCard";
import QuaryTable from "./QuaryTable";

const QuaryInformation = () => {
  return (
    <div className="border rounded-lg shadow p-4 m-2">
      <div className="flex flex-wrap items-center bg-black justify-between p-2">
        <h3 className="text-white text-2xl font-semibold">Quary</h3>
        <div className="flex items-center gap-3">
          <Link to="#" className="flex items-center px-4 text-white text-lg">
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </Link>
          <button
            type="button"
            className="btn bg-red-500 text-white px-5 py-2 rounded hover:bg-red-700 transition"
          >
            Add Query
          </button>
          <button
            type="button"
            className="btn bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
          >
            Search
          </button>
        </div>
      </div>
      <div>
        <QuaryForm />
      </div>
      <div>
        <QuaryCard />
      </div>
      <div>
        <QuaryTable />
      </div>
    </div>
  );
};

export default QuaryInformation;
