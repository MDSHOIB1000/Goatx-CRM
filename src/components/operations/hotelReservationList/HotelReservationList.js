import React from "react";
import HotelReservationForm from "./HotelReservationForm";
import HotelReservationTable from "./HotelReservationTable";

const HotelReservationList = () => {
  return (
    <div className="border p-4 shadow-sm m-2 mt-2 rounded">
      <h2 className="bg-black p-2 text-white font-semibold text-lg">
      Hotel Reservation
      </h2>
      <HotelReservationForm />
      <HotelReservationTable />
    </div>
  );
};

export default HotelReservationList;
