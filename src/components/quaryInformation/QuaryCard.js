import React from "react";

const QuaryCard = () => {
  return (
    <div className="flex flex-wrap my-3">
      <div className="lg:w-1/6 md:w-1/3 w-1/2 p-2 ">
        <div className="card flex items-center justify-center p-2 bg-gradient-to-r from-pink-400 to-orange-400 rounded">
          <div className="flex flex-col justify-center items-center text-white">
            <h4 className="m-0">14</h4>
            <span>Total Query</span>
          </div>
        </div>
      </div>

      <div className="lg:w-1/6 md:w-1/3 w-1/2 p-2">
        <div className="card flex items-center justify-center p-2 bg-gradient-to-r from-sky-400 to-blue-800 rounded">
          <div className="flex flex-col justify-center items-center text-white">
            <h4 className="m-0">4</h4>
            <span>Pending</span>
          </div>
        </div>
      </div>

      <div className="lg:w-1/6 md:w-1/3 w-1/2 p-2">
        <div className="card flex items-center justify-center p-2 bg-gradient-to-r from-green-400 to-green-800 rounded">
          <div className="flex flex-col justify-center items-center text-white">
            <h4 className="m-0">4</h4>
            <span>Reverted</span>
          </div>
        </div>
      </div>

      <div className="lg:w-1/6 md:w-1/3 w-1/2 p-2">
        <div className="card flex items-center justify-center p-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded">
          <div className="flex flex-col justify-center items-center text-white">
            <h4 className="m-0">2</h4>
            <span>Reverted</span>
          </div>
        </div>
      </div>

      <div className="lg:w-1/6 md:w-1/3 w-1/2 p-2">
        <div className="card flex items-center justify-center p-2 bg-gradient-to-r from-red-400 to-orange-600 rounded">
          <div className="flex flex-col justify-center items-center text-white">
            <h4 className="m-0">3</h4>
            <span>Reverted</span>
          </div>
        </div>
      </div>

      <div className="lg:w-1/6 md:w-1/3 w-1/2 p-2">
        <div className="card flex items-center justify-center p-2 bg-gradient-to-r from-purple-800 to-indigo-800 rounded">
          <div className="flex flex-col justify-center items-center text-white">
            <h4 className="m-0">1</h4>
            <span>Lost</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuaryCard;
