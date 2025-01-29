import React from 'react'

const ManualInvoiceTable = () => {
    return (
        <div className="mt-4">
          <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            <table className="min-w-full table-auto border-collapse text-sm border border-gray-300">
              <thead className="bg-headerBg text-white">
                <tr>
                  <th className="px-4 py-2 border border-gray-300 -w-[200px]">
                    Edit
                  </th>
                  <th className="px-4 py-2 border border-gray-300 -w-[200px] text-nowrap">
                  Invoice No.
                  </th>
                  <th className="px-4 py-2 border border-gray-300 w-[200px] text-nowrap">
                  Type
                  </th>
                  <th className="px-4 py-2 border border-gray-300 w-[250px] text-nowrap">
                  Bill To
                  </th>
                  <th className="px-4 py-2 border border-gray-300 min-w-[200px] text-nowrap">
                  Email
                  </th>
                  <th className="px-4 py-2 border border-gray-300 w-[200px] text-nowrap">
                  Phone
                  </th>
                  <th className="px-4 py-2 border border-gray-300 w-[200px] text-nowrap">
                  Address
                  </th>
                  <th className="px-4 py-2 border border-gray-300 w-[150px] text-nowrap">
                  Invoice Date
                  </th>
                  <th className="px-4 py-2 border border-gray-300 min-w-[150px]">
                  Total Amount
                  </th>
                  <th className="px-4 py-2 border border-gray-300 min-[150px] text-nowrap">
                  Created
                  </th>
                </tr>
              </thead>
                <tbody>
                    
                </tbody>
            </table>
          </div>
        </div>
      );
}

export default ManualInvoiceTable