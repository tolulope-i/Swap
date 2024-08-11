import React from "react";
import { FaSearch } from 'react-icons/fa';


const Nav = () => {
  return (
    <nav className="flex justify-between items-center border-b-2 border-gray-200 py-8 px-8">
      <div className="text-3xl font-bold text-gray-900">
        <a href="#">Swap</a>
      </div>
      <form action="#" method="get" className="relative w-full max-w-xl">
        <input
          type="search"
          placeholder="Search for products here"
          className="w-full pl-20 pr-4 py-5 rounded-full border border-gray-300 bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-black"
        />
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white p-4 rounded-full flex items-center justify-center">
          <FaSearch />
        </div>
      </form>
      <div className="flex space-x-4">
        <button className="bg-black text-white py-2 px-6 rounded-lg transition hover:bg-gray-800">
          Log in
        </button>
        <button className="text-black py-2 px-6 border border-black rounded-lg transition hover:bg-gray-100">
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Nav;
