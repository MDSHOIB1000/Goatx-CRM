import { faCalendar, faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faPen, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import AddQoutation from "./AddQoutation";

const QuotationCard = () => {
    const [isqout , setQout] = useState(false)
        const openQoutation = () =>{
            setQout(!isqout)
        } 
    return (
        <div className="pt-2">
            <AddQoutation isqout={isqout} setQout={setQout}/>
            <div className="flex gap-2 justify-end">
                <button className="bg-blue-500 text-white px-3 py-1 text-xs rounded hover:bg-blue-600">INSERT QUOTATION</button>
                <button onClick={openQoutation} className="bg-green-500 text-white px-3 py-1 text-xs rounded hover:bg-green-600">ADD QUOTATION</button>
            </div>
            <div className="bg-amber-100 flex mt-2 text-sm items-center border border-white">
                <div className="p-2 "><FontAwesomeIcon icon={faPen} /></div>
                <div className="border-x border-white p-3">
                    <h2 className="font-bold text-lg">Uttarpradesh trip 3N/4Days</h2>
                    <p className="text-gray-700">Ayodhya 1N - Varanasi 2N</p>
                    <div className="text-sm text-gray-600 mt-2">
                        <p> <FontAwesomeIcon icon={faCircleUser} /> 2 Pax | <FontAwesomeIcon icon={faCalendar} /> <strong>Start Date:</strong> 02 Mar 2025 -  <FontAwesomeIcon icon={faCalendar} /> <strong>End Date:</strong> 05 Mar 2025</p>
                        <p><FontAwesomeIcon icon={faTimes} /> 3 Nights - Complete Package | <FontAwesomeIcon icon={faCalendar} /> <strong>Created:</strong> 23 Jan 2025 16:50:46</p>
                    </div>
                </div>
                <span className="bg-yellow-200 text-yellow-800 px-2 mx-2 py-1 text-xs rounded">Pending</span>
                <div className="p-1 border-x border-white justify-end flex flex-col flex-1">
                    <button className="bg-blue-600 mb-1 text-end w-max text-sm block text-white px-3 py-1 rounded hover:bg-blue-700">Edit Price</button>
                    <button className="bg-yellow-500 mb-1 text-sm w-max block text-white px-3 py-1 rounded hover:bg-yellow-600">Preview</button>
                    <button className="bg-green-600 mb-1 text-sm w-max text-white px-3 py-1 rounded hover:bg-green-700 flex items-center">
                        ✅ Final
                    </button>
                    <button className="bg-blue-800 mb-1 text-sm w-max block text-white px-3 py-1 rounded hover:bg-blue-900">Duplicate</button>
                </div>
            </div>
        </div>
    );
};

export default QuotationCard;
