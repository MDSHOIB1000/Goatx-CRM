import React from "react";

const VisaRequestTable = () => {
  return (
    <div className="mt-4">
      <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-headerBg scrollbar-track-gray-100">
        <table className="min-w-full table-auto border-collapse text-sm border border-gray-300">
          <thead className="bg-headerBg text-white">
            <tr>
              <th className="px-4 py-2 border border-gray-300 -w-[200px]">
              QUERY	
              </th>
              <th className="px-4 py-2 border border-gray-300 -w-[200px] text-nowrap">
              DATE
              </th>
              <th className="px-4 py-2 border border-gray-300 w-[200px] text-nowrap">
              GUEST
              </th>
              <th className="px-4 py-2 border border-gray-300 w-[250px] text-nowrap">
              TOTAL PAX
              </th>
              <th className="px-4 py-2 border border-gray-300 min-w-[200px] text-nowrap">
              VISA REQUIRED
              </th>
              <th className="px-4 py-2 border border-gray-300 w-[200px] text-nowrap">
              AGENT
              </th>
              <th className="px-4 py-2 border border-gray-300 w-[200px] text-nowrap">
              TRAVEL DATE
              </th>
              <th className="px-4 py-2 border border-gray-300 w-[150px] text-nowrap">
              REMARK
              </th>
              <th className="px-4 py-2 border border-gray-300 min-w-[150px]">
              SUPPLIER
              </th>
              <th className="px-4 py-2 border border-gray-300 min-[150px] text-nowrap">
              VISA RECEIVED
              </th>
              <th className="px-4 py-2 border border-gray-300 min-w-[150px]">
              VISA PENDING
              </th>
              <th className="px-4 py-2 border border-gray-300 min-w-[150px]">
              VISA REJECTED
              </th>
              <th className="px-4 py-2 border border-gray-300 min-w-[150px]">
              VISA STATUS
              </th>
              <th className="px-4 py-2 border border-gray-300 min-w-[150px] text-nowrap">
              AGENT PAYMENT STAUS
              </th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};

export default VisaRequestTable;
