import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faTrash,
  faCalendar,
  faClock,
  faMapMarkerAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import AddEditQuotation from "./AddEditQuotation";

const tableData = [
  {
    id: "QT000058",
    title: "Maha Kumbh 2N - Non-Snan Package",
    details: "Adults: 2 | Childs: 0 | Infants: 0",
    services: "Hotel",
    packageType: "Complete Package",
    location: "Uttar Pradesh",
    startDate: "13 Feb 2025",
    endDate: "15 Feb 2025",
    duration: "2 Nights & 3 Days",
    dateAdded: "27 Jan 2025",
    addedBy: "Sarthak Singh",
  },
  {
    id: "QT000057",
    title: "Thailand query",
    details: "Adults: 3 | Childs: 0 | Infants: 0",
    services: "Hotel+Sightseeing+Transfer",
    packageType: "Complete Package",
    location: "Phuket, Pattaya, Bangkok",
    startDate: "15 Feb 2025",
    endDate: "22 Feb 2025",
    duration: "7 Nights & 8 Days",
    dateAdded: "25 Jan 2025",
    addedBy: "Sarthak Singh",
  },
  {
    id: "QT000056",
    title: "Thailand query",
    details: "Adults: 3 | Childs: 0 | Infants: 0",
    services: "Hotel+Sightseeing+Transfer",
    packageType: "Complete Package",
    location: "Pattaya, Bangkok",
    startDate: "15 Feb 2025",
    endDate: "20 Feb 2025",
    duration: "5 Nights & 6 Days",
    dateAdded: "25 Jan 2025",
    addedBy: "Sarthak Singh",
  },
];

const QuotationTable = () => {
  const [isActive, setIsActive] = useState(false);
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
                ID
              </th>
              <th className="px-4 py-2 border border-gray-300 min-w-[300px] text-nowrap">
                Package Title
              </th>
              <th className="px-4 py-2 border border-gray-300 w-[250px] text-nowrap">
                Type
              </th>
              <th className="px-4 py-2 border border-gray-300 min-w-[200px] text-nowrap">
                Destination Covered
              </th>
              <th className="px-4 py-2 border border-gray-300 min-w-[300px] text-nowrap">
                Duration
              </th>
              <th className="px-4 py-2 border border-gray-300 w-[200px] text-nowrap">
                Created Date
              </th>
              <th className="px-4 py-2 border border-gray-300 w-[150px] text-nowrap">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700 divide-y divide-gray-300">
            {tableData.map((item, index) => (
              <tr
                key={index}
                className="hover:bg-gray-100 transition duration-200"
              >
                <td className="p-2 text-center border border-gray-300">
                  <a href="#" onClick={() => setIsActive(true)}>
                    <FontAwesomeIcon
                      icon={faPen}
                      className="text-blue-500 cursor-pointer hover:text-blue-700"
                    />
                  </a>
                </td>

                <td className="p-2 text-blue-600 font-semibold border border-gray-300 cursor-pointer">
                  {item.id}
                </td>

                <td className="p-2 border border-gray-300">
                  <p className="text-blue-700 font-semibold">{item.title}</p>
                  <p className="text-gray-500 text-xs">{item.details}</p>
                  <p className="text-gray-500 text-xs">{item.services}</p>
                </td>

                <td className="p-2 text-center border border-gray-300">
                  {item.packageType}
                </td>

                <td className="p-2 text-center border border-gray-300">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="text-gray-600 mr-1"
                  />{" "}
                  {item.location}
                </td>

                <td className="p-2 text-center border border-gray-300">
                  <FontAwesomeIcon
                    icon={faCalendar}
                    className="text-gray-500 mr-1"
                  />{" "}
                  {item.startDate} - {item.endDate}
                  <br />
                  <FontAwesomeIcon
                    icon={faClock}
                    className="text-gray-500 mr-1"
                  />{" "}
                  {item.duration}
                </td>

                <td className="p-2 text-center border border-gray-300">
                  <FontAwesomeIcon
                    icon={faCalendar}
                    className="text-gray-500 mr-1"
                  />{" "}
                  {item.dateAdded}
                  <br />
                  <FontAwesomeIcon
                    icon={faUser}
                    className="text-gray-500 mr-1"
                  />{" "}
                  <span className="font-semibold">{item.addedBy}</span>
                </td>

                <td className="p-2 text-center border border-gray-300">
                  <button className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-700 transition-all">
                    Make Archive
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <AddEditQuotation isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
};

export default QuotationTable;
