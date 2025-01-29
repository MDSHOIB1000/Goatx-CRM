import { faStar, faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import EditSupplierPayment from "./EditSupplierPayment";

const HotelReservationTable = () => {
  const [isActive, setIsActive] = useState(false);
  
  const togglePopup = () => {
    setIsActive(!isActive);
  };
  

  return (
    <div className="mt-4">
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse text-sm border border-gray-300">
          <thead className="bg-headerBg text-white">
            <tr>
              <th className="px-4 py-2 border border-gray-300 -w-[200px]">
                QUERY
              </th>
              <th className="px-4 py-2 border border-gray-300 w-[200px] sm:w-[250px]">
                GUEST
              </th>
              <th className="px-4 py-2 border border-gray-300 w-[250px] sm:w-[300px]">
                PAX
              </th>
              <th className="px-4 py-2 border border-gray-300 min-w-[200px] text-nowrap">
                HOTEL
              </th>
              <th className="px-4 py-2 border border-gray-300 w-[200px] sm:w-[250px] text-nowrap">
                CITY
              </th>
              <th className="px-4 py-2 border border-gray-300 w-[200px] sm:w-[250px] text-nowrap">
                CHECK-IN
              </th>
              <th className="px-4 py-2 border border-gray-300 w-[150px] sm:w-[200px] text-nowrap">
                CHECK-OUT
              </th>
              <th className="px-4 py-2 border border-gray-300 w-[150px] sm:w-[200px]">
                MEAL
              </th>
              <th className="px-4 py-2 border border-gray-300 w-[150px] sm:w-[200px]">
                ROOMS
              </th>
              <th className="px-4 py-2 border border-gray-300 w-[150px] sm:w-[200px] text-nowrap">
                CUTT OF DATE
              </th>
              <th className="px-4 py-2 border border-gray-300 w-[150px] sm:w-[200px]">
                CONFIRMATION
              </th>
              <th className="px-4 py-2 border border-gray-300 w-[150px] sm:w-[200px]">
                REMARK
              </th>
              <th className="px-4 py-2 border border-gray-300 w-[150px] sm:w-[200px]">
                BOOKING STATUS
              </th>
              <th className="px-4 py-2 border border-gray-300 w-[150px] sm:w-[200px]">
                Booking PAYMENT STAUS
              </th>
              <th className="px-4 py-2 border border-gray-300 w-[150px] sm:w-[200px]">
                PAYMENT STATUS
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border border-gray-300">
                <div className="flex flex-col">
                  <span >#FIT000015</span>
                  <span className="bg-green-500 px-2 rounded-lg text-center text-white text-nowrap text-[12px]">
                    <FontAwesomeIcon icon={faStar} /> Viaggio World Pvt Ltd{" "}
                  </span>
                </div>
              </td>
              <td className="p-2 border border-gray-300">
                <div className="flex flex-col">
                  <span>Mr Nand</span>
                  <span className="">9810104343</span>
                </div>
              </td>
              <td className="p-2 border border-gray-300">A- 2</td>
              <td className="p-2 border border-gray-300">
                Taj Cidade de Goa Heritage, Goa
              </td>
              <td className="p-2 border border-gray-300">Goa</td>
              <td className="p-2 border border-gray-300">28 Jan 2025</td>
              <td className="p-2 border border-gray-300">30 Jan 2025</td>
              <td className="p-2 border border-gray-300">breakfast</td>
              <td className="p-2 border border-gray-300">DBL: 1</td>
              <td className="p-2 border border-gray-300">16 Jan 2025</td>
              <td className="p-2 border border-gray-300">8071SE191671</td>
              <td className="p-2 border border-gray-300"></td>
              <td className="p-2 border border-gray-300 text-center">

                <FontAwesomeIcon
                  icon={faUser}
                  className="cursor-pointer text-red-700"
                  onClick={()=> togglePopup()}
                />
              </td>
              <td className="p-2 border border-gray-300">
                <span className="bg-green-200 rounded-lg px-2 text-[12px]">
                  Confirm
                </span>
              </td>
              <td className="p-2 border border-gray-300">
                <span className="bg-green-500 rounded-lg px-2  text-white text-[12px]">
                  Fully Paid
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <EditSupplierPayment isActive={isActive} setIsActive={setIsActive}/>
    </div>
  );
};

export default HotelReservationTable;
