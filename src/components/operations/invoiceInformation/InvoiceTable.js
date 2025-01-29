import React, { useState } from "react";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPenToSquare, faStar } from "@fortawesome/free-regular-svg-icons";
import { faDownload, faPrint } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EditEditInvoice from "./EditEditInvoice";

const InvoiceTable = () => {
    const [isActive, setIsActive] = useState(false)

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
                Query Id
              </th>
              <th className="px-4 py-2 border border-gray-300 w-[200px] text-nowrap">
                Invoice No.
              </th>
              <th className="px-4 py-2 border border-gray-300 w-[250px] text-nowrap">
                Guest Name
              </th>
              <th className="px-4 py-2 border border-gray-300 min-w-[200px] text-nowrap">
                Company Name
              </th>
              <th className="px-4 py-2 border border-gray-300 w-[200px] text-nowrap">
                Invoice Type
              </th>
              <th className="px-4 py-2 border border-gray-300 w-[200px] text-nowrap">
                Currency
              </th>
              <th className="px-4 py-2 border border-gray-300 w-[150px] text-nowrap">
                Sales Person
              </th>
              <th className="px-4 py-2 border border-gray-300 min-w-[150px]">
                Date
              </th>
              <th className="px-4 py-2 border border-gray-300 min-[150px] text-nowrap">
                Social icon
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border border-gray-300 text-center">
              <a href="#" onClick={() => setIsActive(true)}>
              <FontAwesomeIcon icon={faPenToSquare} className="text-lg text-green-700" />
              </a>
              </td>
              <td className="p-2 border border-gray-300">
                <div className="flex flex-col">
                  <span>#FIT000015</span>
                  <span className="bg-green-500 px-2 rounded-lg text-center text-white text-nowrap text-[12px]">
                    <FontAwesomeIcon icon={faStar} /> Viaggio World Pvt Ltd{" "}
                  </span>
                </div>
              </td>
              <td className="p-2 border border-gray-300">BV1401253</td>
              <td className="p-2 border border-gray-300">Mr Nand Lal</td>
              <td className="p-2 border border-gray-300">
                <div className="flex flex-col">
                  <span>Rahul Wadhwa</span>
                  <span> 9810104343</span>
                </div>
              </td>
              <td className="p-2 border border-gray-300">Proforma</td>
              <td className="p-2 border border-gray-300">INR</td>
              <td className="p-2 border border-gray-300">Sarthak Singh</td>
              <td className="p-2 border border-gray-300">
                <div className="flex flex-col">
                  <span>14 Jan 2025</span>
                  <span>Sarthak Singh</span>
                </div>
              </td>
              <td className="p-2 border border-gray-300">
                <div className="flex items-center gap-2">
                  <a href="#" className="w-7 h-7 bg-green-500 flex items-center justify-center rounded ">
                    <FontAwesomeIcon icon={faWhatsapp} className="text-lg text-white"/>
                  </a>
                  <a href="#" className="w-7 h-7 bg-red-500 flex items-center justify-center rounded ">
                  <FontAwesomeIcon icon={faDownload} className="text-lg text-white" />
                  </a>
                  <a href="#" className="w-7 h-7 bg-blue-500 flex items-center justify-center rounded ">
                  <FontAwesomeIcon icon={faPrint} className="text-lg text-white"  />
                  </a>
                  <a href="#" className="w-7 h-7 bg-orange-500 flex items-center justify-center rounded ">
                    <FontAwesomeIcon icon={faEnvelope} className="text-lg text-white" />
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <EditEditInvoice isActive={isActive} setIsActive={setIsActive}/>
    </div>
  );
};

export default InvoiceTable;
