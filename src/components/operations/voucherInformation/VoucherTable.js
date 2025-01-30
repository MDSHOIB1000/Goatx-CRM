import React, { useState } from "react";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPenToSquare,
  faStar,
} from "@fortawesome/free-regular-svg-icons";
import { faDownload, faPrint } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
// import EditEditInvoice from "./EditEditInvoice";

const VoucherTable = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="mt-4">
      <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-headerBg scrollbar-track-gray-100">
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
                Voucher No.
              </th>
              <th className="px-4 py-2 border border-gray-300 w-[250px] text-nowrap">
                Itinerary
              </th>
              <th className="px-4 py-2 border border-gray-300 min-w-[200px] text-nowrap">
                Guest Name
              </th>
              <th className="px-4 py-2 border border-gray-300 w-[200px] text-nowrap">
                Company Name
              </th>
              <th className="px-4 py-2 border border-gray-300 w-[150px] text-nowrap">
                Voucher Type
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
                <Link to="/edit-voucher">
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    className="text-lg text-green-700"
                  />
                </Link>
              </td>
              <td className="p-2 border border-gray-300">
                <div className="flex flex-col">
                  <span>#FIT000015</span>
                  <span className="bg-green-500 px-2 rounded-lg text-center text-white text-nowrap text-[12px]">
                    <FontAwesomeIcon icon={faStar} /> Viaggio World Pvt Ltd{" "}
                  </span>
                </div>
              </td>
              <td className="p-2 border border-gray-300">VHR000006</td>
              <td className="p-2 border border-gray-300 text-center">
                <button className="px-4 p-1 bg-blue-500 rounded text-white">
                  Download
                </button>
              </td>
              <td className="p-2 border border-gray-300">Mr Nand Lal</td>
              <td className="p-2 border border-gray-300">Rahul Wadhwa</td>
              <td className="p-2 border border-gray-300">Own</td>
              <td className="p-2 border border-gray-300">
                <div className="flex flex-col">
                  <span>14 Jan 2025</span>
                  <span>Sarthak Singh</span>
                </div>
              </td>
              <td className="p-2 border border-gray-300">
                <div className="flex items-center gap-2">
                  <a
                    href="#"
                    className="w-7 h-7 bg-green-500 flex items-center justify-center rounded "
                  >
                    <FontAwesomeIcon
                      icon={faWhatsapp}
                      className="text-lg text-white"
                    />
                  </a>
                  <a
                    href="#"
                    className="w-7 h-7 bg-red-500 flex items-center justify-center rounded "
                  >
                    <FontAwesomeIcon
                      icon={faDownload}
                      className="text-lg text-white"
                    />
                  </a>
                  <a
                    href="#"
                    className="w-7 h-7 bg-blue-500 flex items-center justify-center rounded "
                  >
                    <FontAwesomeIcon
                      icon={faPrint}
                      className="text-lg text-white"
                    />
                  </a>
                  <a
                    href="#"
                    className="w-7 h-7 bg-orange-500 flex items-center justify-center rounded "
                  >
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="text-lg text-white"
                    />
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* <EditEditInvoice isActive={isActive} setIsActive={setIsActive}/> */}
    </div>
  );
};

export default VoucherTable;
