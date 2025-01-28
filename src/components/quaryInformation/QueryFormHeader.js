import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
function QueryFormHeader() {
    return (
        <>
            <div className="flex flex-wrap items-center bg-headerBg justify-between p-1">
                <h3 className="text-white text-xl px-5 font-semibold border-4 border-double  rounded-md">Query</h3>
                <div className="flex items-center gap-3">
                    <Link to="#" className="flex items-center px-4 text-white text-lg">
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </Link>
                    <Link
                        to="/travel/create-quary"
                        type="button"
                        className="btn uppercase bg-sky-500 text-white py-1 px-2  rounded hover:bg-info-700 transition "
                    >
                        Add Query
                    </Link>
                    <button
                        type="button"
                        className="btn uppercase bg-blue-600 text-white py-1 px-2 rounded hover:bg-blue-700 transition"
                    >
                        Search
                    </button>
                </div>
            </div>
        </>
    )
}

export default QueryFormHeader
