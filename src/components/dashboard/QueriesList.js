import React from 'react';
import { Link } from 'react-router-dom';

const QueriesList = () => {
  return (
    <div className="w-full ">
      <ul className="flex gap-3">
        <li className="card p-0 w-[250px] bg-gradient-to-r from-black to-gray-500 rounded-lg shadow-lg">
          <Link to="/" className="py-4 text-center block">
            <strong className="block text-white text-2xl mb-3 font-bold">0</strong>
            <span className="block text-white mb-2 text-lg font-normal">Today's Queries</span>
            <span className="block text-white">
              <span>
                <i className="fa-solid fa-caret-down"></i> 0%
              </span>{' '}
              Last week
            </span>
          </Link>
        </li>
        <li className="card p-0 w-[250px] bg-gradient-to-r from-red-500 to-pink-300 rounded-lg shadow-lg">
          <Link to="/" className="py-4 text-center block">
            <strong className="block text-white text-2xl mb-3 font-bold">1.00</strong>
            <span className="block text-white mb-2 text-lg font-normal">Yesterday's Queries</span>
            <span className="block text-white">
              <span>
                <i className="fa-solid fa-caret-down"></i> 0%
              </span>{' '}
              Last week
            </span>
          </Link>
        </li>
        <li className="card p-0 w-[250px] bg-gradient-to-r from-green-500 to-gray-700 rounded-lg shadow-lg">
          <Link to="/" className="py-4 text-center block">
            <strong className="block text-white text-2xl mb-3 font-bold">12.00</strong>
            <span className="block text-white mb-2 text-lg font-normal">Jan Month Queries</span>
            <span className="block text-white">
              <span>
                <i className="fa-solid fa-sort-up"></i> 100%
              </span>{' '}
              Last week
            </span>
          </Link>
        </li>
        <li className="card p-0 w-[250px] bg-gradient-to-r from-blue-500 to-sky-300 rounded-lg shadow-lg">
          <Link to="/" className="py-4 text-center block">
            <strong className="block text-white text-2xl mb-3 font-bold">2.00</strong>
            <span className="block text-white mb-2 text-lg font-normal">Jan Confirmed Queries</span>
            <span className="block text-white">
              <span>
                <i className="fa-solid fa-sort-up"></i> 100%
              </span>{' '}
              Last week
            </span>
          </Link>
        </li>
        <li className="card p-0 w-[250px] bg-gradient-to-r from-purple-800 to-purple-400 rounded-lg shadow-lg">
          <Link to="/" className="py-4 text-center block">
            <strong className="block text-white text-2xl mb-3 font-bold">2.00</strong>
            <span className="block text-white mb-2 text-lg font-normal">Jan Invoice</span>
            <span className="block text-white">
              <span>
                <i className="fa-solid fa-sort-up"></i> 100%
              </span>{' '}
              Last week
            </span>
          </Link>
        </li>
        <li className="card p-0 w-[250px] bg-gradient-to-r from-orange-500 to-yellow-300 rounded-lg shadow-lg">
          <Link to="/" className="py-4 text-center block">
            <strong className="block text-white text-2xl mb-3 font-bold">2.00</strong>
            <span className="block text-white mb-2 text-lg font-normal">Jan Voucher</span>
            <span className="block text-white">
              <span>
                <i className="fa-solid fa-sort-up"></i> 50%
              </span>{' '}
              Last week
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default QueriesList;
