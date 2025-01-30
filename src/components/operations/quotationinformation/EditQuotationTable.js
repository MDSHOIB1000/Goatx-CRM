import React from 'react';

const EditQuotationTable = () => {
    return (
        <div className="mt-4">
            <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-headerBg scrollbar-track-gray-100">
                <table className="min-w-full table-auto border-collapse text-sm border border-gray-300">
                    <thead className="bg-headerBg text-white">
                        <tr>
                            <th className="px-4 py-2 border border-gray-300 min-w-[200px]">Destination</th>
                            <th className="px-4 py-2 border border-gray-300 min-w-[200px] text-nowrap">From Date</th>
                            <th className="px-4 py-2 border border-gray-300 min-w-[200px] text-nowrap">To Date</th>
                            <th className="px-4 py-2 border border-gray-300 min-w-[150px] text-nowrap">Nights</th>
                            <th className="px-4 py-2 border border-gray-300 min-w-[150px] text-nowrap">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300 text-center">Phuket</td>
                            <td className="px-4 py-2 border border-gray-300 text-center">15-02-2025</td>
                            <td className="px-4 py-2 border border-gray-300 text-center">18-02-2025</td>
                            <td className="px-4 py-2 border border-gray-300 text-center">3</td>
                            <td className="px-4 py-2 border border-gray-300 text-center">
                                <span className='bg-black text-white text-xs px-2 py-1 rounded'>Locked</span>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300 text-center">Pattaya</td>
                            <td className="px-4 py-2 border border-gray-300 text-center">15-02-2025</td>
                            <td className="px-4 py-2 border border-gray-300 text-center">18-02-2025</td>
                            <td className="px-4 py-2 border border-gray-300 text-center">4</td>
                            <td className="px-4 py-2 border border-gray-300 text-center">
                                <span className='bg-red-500 text-white text-xs px-2 py-1 rounded'>Locked</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default EditQuotationTable;