import React from 'react';
// import { Pagination } from 'react-bootstrap';

const CrmTable = () => {
  return (
    <div className="m-4 border p-0 bg-white shadow rounded">
      <div className="overflow-x-auto">
        <div className="flex items-center justify-between p-4 border-b">
          <h4 className="text-lg font-semibold">Tour Master Sheet</h4>
        </div>
        <div className='w-full overflow-auto'>
        <table className="min-w-full w-max table-auto border-collapse border border-gray-200">
          <thead>
            <tr className="bg-blue-950 font-normal text-white">
              <th className="border px-4 py-2 text-left">QUERY</th>
              <th className="border px-4 py-2 text-left">DATE</th>
              <th className="border px-4 py-2 text-left">FLIGHT</th>
              <th colSpan={2} className="border px-4 py-2 text-left">PICK UP TIME</th>
              <th className="border px-4 py-2 text-left">RETURN TIME</th>
              <th className="border px-4 py-2 text-left">TOUR</th>
              <th className="border px-4 py-2 text-left">GUEST</th>
              <th className="border px-4 py-2 text-left">PAX</th>
              <th className="border px-4 py-2 text-left">TYPE</th>
              <th className="border px-4 py-2 text-left">HOTEL</th>
              <th className="border px-4 py-2 text-left">DRIVER</th>
              <th className="border px-4 py-2 text-left">GUIDE</th>
            </tr>
          </thead>
          <tbody>
            <tr className='bg-gray-50 '>
              <td className="border px-4 py-2">#FIT000021</td>
              <td className="border px-4 py-2">26 Jan 2025</td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2">23:45 Hrs.</td>
              <td className="border px-4 py-2">23:45 Hrs</td>
              <td className="border px-4 py-2">23:45 Hrs.</td>
              <td className="border px-4 py-2">Coral Island Tour By Speedboat With Indian Lunch Package</td>
              <td className="border px-4 py-2">test<br />1234567890</td>
              <td className="border px-4 py-2">A- 2</td>
              <td className="border px-4 py-2">SIC</td>
              <td className="border px-4 py-2">Nova Platinum</td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
            </tr>
          </tbody>
        </table>
        </div>
        <div className="flex items-center justify-between p-4">
          <span className="text-sm text-gray-600">Total 0 entries</span>
          {/* <div>
            <Pagination
            // defaultCurrent={1}
            // onChange={onChangeVal}
            // total={totalCount}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CrmTable;
