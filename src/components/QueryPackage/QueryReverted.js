import { faCalendarDays, faCircleUser, faClock, faEnvelope, faFile, faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faLocationDot, faThumbTack } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons/faPen";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export const QueryReverted = () => {
    return (
        <div className="max-w-md mx-auto bg-white border pb-1 border-gray-300 rounded-lg shadow-lg">
            {/* Header */}
            <div className="bg-sky-950 text-white font-semibold p-3 flex items-center justify-center rounded-t-lg">
                <span className="text-sm"> <FontAwesomeIcon icon={faClock} /> QUERY REVERTED</span>
            </div>

            {/* Guest Details */}
            <div className="text-gray-700 ">
                <p className="font-normal bg-stone-100 p-2 text-sm border m-0">
                    <span className="text-gray-600 text-sm"><FontAwesomeIcon icon={faCircleUser} /> Guest Name →</span> Arsh Kaur
                </p>
                <p className="flex bg-stone-100 m-0 p-2 text-sm border justify-between items-center ">
                    <span className="text-gray-600 text-sm"><FontAwesomeIcon icon={faBars} /> QueryId →</span> #FIT000019
                    <button className="flex font-normal text-xs items-center gap-1 text-black bg-white px-2 py-1 hover:bg-blue-500 hover:text-white">
                        View Details
                    </button>
                </p>
                <p className="font-normal bg-stone-100 p-2 text-sm border m-0">
                    <span className="text-gray-600 text-sm"> <FontAwesomeIcon icon={faThumbTack} /> Title →</span> Thailand Family
                    Package
                </p>
                <p className="font-normal bg-stone-100 p-2 text-sm border m-0">
                    <span className="text-gray-600 text-sm"><FontAwesomeIcon icon={faCalendarDays}/> Travel Dates →</span> 26 Mar 2025
                    to 31 Mar 2025
                </p>
            </div>

            {/* Destinations */}
            <div className="border-gray-300 bg-stone-100 p-1 space-y-1">
                <div className="bg-blue-200 py-1 px-2 rounded-md flex justify-between items-end">
                    <div className="flex items-center gap-2">
                        <div className="text-base text-blue-500"><FontAwesomeIcon icon={faLocationDot}/></div>
                        <div>
                        <strong className="text-sm block">PHUKET</strong>
                        <span className="text-sm">26 To 29 Mar 2025</span>
                        </div>
                    </div>
                    <div className="bg-white  text-black px-3 py-1 text-xs">
                        3 Nights
                    </div>
                </div>
                <div className="bg-blue-200 py-1 px-2 rounded-md flex justify-between items-end">
                    <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2">
                        <div className="text-base text-blue-500"><FontAwesomeIcon icon={faLocationDot}/></div>
                        <div>
                        <strong className="text-sm block">KRABI</strong>
                        <span className="text-sm">29 To 31 Mar 2025</span>
                        </div>
                    </div>
                    </div>
                    <div className="bg-white  text-black px-3 py-1 text-xs">
                        2 Nights
                    </div>
                </div>
            </div>

            {/* Traveler Details */}
            <div className="border bg-stone-100 p-2 flex justify-around text-center">
                <div>
                    <p className="text-sm bg-sky-950 text-white px-4">Adult</p>
                    <p className="font-bold text-lg">2</p>
                </div>
                <div>
                    <p className="text-sm bg-sky-950 text-white px-4">Child</p>
                    <p className="font-bold text-lg">1</p>
                </div>
                <div>
                    <p className="text-sm bg-sky-950 text-white px-4">Infant</p>
                    <p className="font-bold text-lg">0</p>
                </div>
            </div>

            {/* Footer */}
            <p className="font-normal bg-stone-100 p-2 text-sm border m-0">
                    <span className="text-gray-600 text-sm"><FontAwesomeIcon icon={faPen}/> Query Type →</span> FIT Query
                    to 31 Mar 2025
                </p>
                <p className="font-normal bg-stone-100 p-2 text-sm border m-0">
                    <span className="text-gray-600 text-sm"><FontAwesomeIcon icon={faFile}/> Service Type →</span> Complete Package
                </p>
                    {/* profile */}
                <div className="font-normal bg-sky-950 p-3 text-sm border m-0">
                    <div className="text-white flex justify-end"><Link ><FontAwesomeIcon icon={faPen}/></Link></div>
                    <div className="text-center">
                        <div className="text-white">
                            <div className="p-0 mb-3"> <span className="border-white border text-2xl p-1 px-2.5 rounded-full"><FontAwesomeIcon icon={faUser}/></span></div>
                            <p className="text-sm uppercase"><FontAwesomeIcon icon={faCircleUser}/> Arsh kaur</p>
                        </div>
                        <div className="flex text-white justify-between">
                            <span className="text-xs"><FontAwesomeIcon icon={faEnvelope}/> prai9644@gmail.com</span>
                            <span className="text-xs"><FontAwesomeIcon icon={faPhone}/> 9877078251</span>
                        </div>
                    </div> 
                </div>
        </div>
    );
};
