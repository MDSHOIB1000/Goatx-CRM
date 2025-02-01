import React from "react";
import HotelReservationForm from "./HotelReservationForm";
import HotelReservationTable from "./HotelReservationTable";

const HotelReservationList = () => {
  return (
    <div className="border rounded-lg shadow p-4 m-4">
      <h2 className="bg-black p-2 text-white font-semibold text-lg">
      Hotel Reservation
      </h2>
      <HotelReservationForm />
      <HotelReservationTable />
    </div>
  );
};

export default HotelReservationList;
