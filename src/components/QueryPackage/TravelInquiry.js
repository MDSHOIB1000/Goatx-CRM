import React from "react";
import logo from "../../assets/image/logo/gotax.png"
import p2 from "../../assets/image/products/q2.png"

const TravelInquiry = () => {
    return (
        <div className="max-w-3xl mx-auto bg-white shadow-lg border rounded-lg overflow-hidden p-6">
            <div className="text-center">
                <h1 className="text-3xl text-center flex justify-center font-bold text-gray-700">
                    <img src={logo} />
                </h1>
            </div>
            <div className="flex gap-2">
                <div className=" w-full h-full bg-cover bg-center rounded-lg mt-4">
                    <img src={p2} />
                </div>

                <div className="mt-4 p-4 bg-gray-100 rounded-lg flex justify-center items-center text-center">
                    <h2 className="text-3xl  font-semibold text-gray-400">WE LOOK FORWARD TO SEEING YOU</h2>
                </div>
            </div>

            <div className="mt-4">
                <p className="text-gray-700">Dear Sir / Madam,</p>
                <p className="text-gray-700">Greeting from gotax World Pvt Ltd.</p>
                <p className="text-gray-700 font-medium mt-2">
                    We are excited to hear from you & thank you so much for your enquiry. We assigned it to our operations team and you can expect a response shortly.
                </p>
                <p className="text-gray-700 mt-2">
                    It would be a pleasure if you follow the same "Query ID" & keep all conversation on the same email trail.
                </p>
                <p className="text-gray-700 mt-2">
                    Please contact us if you have any further queries & in case of a group please Email us -
                    <span className="font-bold text-indigo-600"> info@gotax.com</span>
                </p>
            </div>

            <div className="mt-6">
                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-300 px-4 py-2">Query Subject</th>
                            <th className="border border-gray-300 px-4 py-2">Adult</th>
                            <th className="border border-gray-300 px-4 py-2">Child</th>
                            <th className="border border-gray-300 px-4 py-2">Infant</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">Darjeeling 5 Nights</td>
                            <td className="border border-gray-300 px-4 py-2">10</td>
                            <td className="border border-gray-300 px-4 py-2">0</td>
                            <td className="border border-gray-300 px-4 py-2">0</td>
                        </tr>
                    </tbody>
                </table>

                <table className="w-full border-collapse border border-gray-300 mt-4">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-300 px-4 py-2">Destination</th>
                            <th className="border border-gray-300 px-4 py-2">From Date</th>
                            <th className="border border-gray-300 px-4 py-2">To Date</th>
                            <th className="border border-gray-300 px-4 py-2">Nights</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">Darjeeling</td>
                            <td className="border border-gray-300 px-4 py-2">13-03-2025</td>
                            <td className="border border-gray-300 px-4 py-2">18-03-2025</td>
                            <td className="border border-gray-300 px-4 py-2">5</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TravelInquiry;
