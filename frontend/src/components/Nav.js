import React from "react";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center border-b-2 border-gray-200 py-4 px-8">
      <div className="text-3xl font-bold text-gray-900">
        <a href="#">Swap</a>
      </div>
      <form action="#" method="get" className="w-full max-w-lg">
        <input
          type="search"
          placeholder="Search for products here"
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
        />
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
