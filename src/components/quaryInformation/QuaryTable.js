import { faCalendarCheck, faClock, faEdit, faEnvelope, faStar } from "@fortawesome/free-regular-svg-icons";
import { faBox,  faFilter, faLocationDot, faPerson, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import ViewQueryHistory from "../viewQueryHistory/ViewQueryHistory";

const QuaryTable = () => {
  const [isOpen, setIsOpen] = useState(false)
  function onClickPop(){
    setIsOpen(!isOpen)
  }
  
  return (
    <div className="overflow-x-auto mt-4 scrollbar-thin scrollbar-thumb-headerBg scrollbar-track-gray-100">
      <table className="min-w-full table-auto border-collapse text-sm border border-gray-300">
        <thead className="bg-headerBg text-white">
          <tr>
            <th className="px-4 py-2 border border-gray-300">
              <input className="form-check-input" type="checkbox" value="" />
            </th>
            <th className="px-4 py-2 border border-gray-300 w-[200px] sm:w-[250px]">ID</th>
            <th className="px-4 py-2 border border-gray-300 w-[250px] sm:w-[300px]">Title</th>
            <th className="px-4 py-2 border border-gray-300 w-[250px] sm:w-[300px]">Destination</th>
            <th className="px-4 py-2 border border-gray-300 w-[200px] sm:w-[250px]">Agent/Client</th>
            <th className="px-4 py-2 border border-gray-300 w-[200px] sm:w-[250px]">Query Date</th>
            <th className="px-4 py-2 border border-gray-300 w-[150px] sm:w-[200px]">Status</th>
            <th className="px-4 py-2 border border-gray-300 w-[150px] sm:w-[200px]">Operation</th>
            <th className="px-4 py-2 border border-gray-300 w-[150px] sm:w-[200px]">Sales</th>
            <th className="px-4 py-2 border border-gray-300 w-[150px] sm:w-[200px]">Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border border-gray-300"></td>
            <td className="px-4 py-2 border border-gray-300 whitespace-nowrap">
              <div className="flex items-center">
                <i className="fa-solid fa-clock text-red-600 mr-3"></i>
                <i className="fa-solid fa-message text-blue-500 mr-2"></i>
                <span>#FIT00029</span>
              </div>
              <div className="flex flex-col">
                <span className="bg-green-500 text-white px-2 py-1 rounded-md">
                  <FontAwesomeIcon icon={faStar} />  Viaggio World Pvt Ltd
                </span>
              </div>
            </td>
            <td className="px-4 py-2 border border-gray-300 whitespace-nowrap">
              <div className="flex flex-col">
                <strong>Thailand query</strong>
                <span>
                  <i className="fa-solid fa-calendar-days"></i> Travel Date: 15 Feb - 20 Feb 2025
                </span>
                <span>
                  <FontAwesomeIcon icon={faClock} />
                  Duration: 6 Days
                </span>
                <span>
                  <FontAwesomeIcon icon={faPerson} /> Adults: 3 |{" "}
                  <FontAwesomeIcon icon={faPerson} /> Childs: 0 |{" "}
                  <FontAwesomeIcon icon={faPerson} /> Infants: 0
                </span>
              </div>
            </td>
            <td className="px-4 py-2 border border-gray-300 whitespace-nowrap">
              <div className="flex flex-col">
                <span>
                  <FontAwesomeIcon icon={faLocationDot} /> Pattaya, Bangkok
                </span>
                <span>
                  <FontAwesomeIcon icon={faBox} />
                  Complete Package
                </span>
                <span>
                  <FontAwesomeIcon icon={faFilter} />
                  Lead Source: Call
                </span>
              </div>
            </td>
            <td className="px-4 py-2 border border-gray-300 whitespace-nowrap">
              <div className="flex flex-col">
                <strong>Manish Srivastava</strong>
                <span>
                  <span><FontAwesomeIcon icon={faUser} /></span> <span>Manish Srivantava</span>
                </span>
                <span>
                  <span><FontAwesomeIcon icon={faEnvelope} /></span> <span>Email:</span>
                </span>
                <span>
                  <span>Mobile No.: 7860601111</span>
                </span>
                <span>
                  <span><FontAwesomeIcon icon={faPhone} /></span> Landline No.: 7860601111
                </span>
              </div>
            </td>
            <td className="px-4 py-2 border border-gray-300 whitespace-nowrap">
              <div className="flex flex-col">

                <span><FontAwesomeIcon icon={faCalendarCheck} /> Date: 24 Jan 2025</span>
                <span><FontAwesomeIcon icon={faClock} />Time: 18:01 pm</span>
                <span> <FontAwesomeIcon icon={faUser} /> Added By: Sarthak Singh</span>
                <span> <FontAwesomeIcon icon={faClock} /> Last Updated: 25 Jan 2025 14:30 pm</span>
              </div>
            </td>
            <td className="px-4 py-2 border border-gray-300 whitespace-nowrap">
              <div className="flex flex-col">
                <span className="bg-yellow-400 text-center text-sm text-black px-2 py-1 rounded-md">
                  Pending
                </span>
                <button onClick={() => onClickPop()} className="bg-transparent border border-blue-500 text-blue-500 px-3 py-1 text-xs rounded-md mt-1 hover:bg-blue-500 hover:text-white">
                  View History
                </button>
              </div>
            </td>
            <td className="px-4 py-2 border border-gray-300 whitespace-nowrap">
              <div className="flex flex-col">
                <span className="bg-teal-500 text-white px-2 py-1 rounded-md">
                  Sarthak Singh
                </span>
              </div>
            </td>
            <td className="px-4 py-2 border border-gray-300 whitespace-nowrap">
              <div className="flex flex-col">
                <span className="bg-gray-800 text-white px-2 py-1 rounded-md">
                  Sarthak Singh
                </span>
              </div>
            </td>
            <td className="px-4 py-2 border border-gray-300">
              <button className="text-blue-500 hover:text-blue-700">
                <FontAwesomeIcon icon={faEdit} />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <ViewQueryHistory isOpen={isOpen} setIsOpen={setIsOpen}/>
    </div>
  );
};

export default QuaryTable;
