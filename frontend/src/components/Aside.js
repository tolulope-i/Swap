import React from "react";

const Aside = () => {
  return (
    <aside className="w-64 p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Filters</h3>
      <ul className="space-y-5">
        <li>
          <a href="#" className="text-gray-700 hover:text-gray-900 transition">
            Category
          </a>
          <ul className="mt-2 ml-4 space-y-3 text-gray-600">
            <li><a href="#" className="hover:text-gray-900 transition">Electronics</a></li>
            <li><a href="#" className="hover:text-gray-900 transition">Fashion</a></li>
            <li><a href="#" className="hover:text-gray-900 transition">Home Goods</a></li>
            <li><a href="#" className="hover:text-gray-900 transition">Books</a></li>
          </ul>
        </li>
        <li>
          <a href="#" className="text-gray-700 hover:text-gray-900 transition">
            Price Range
          </a>
          <ul className="mt-2 ml-4 space-y-3 text-gray-600">
            <li><a href="#" className="hover:text-gray-900 transition">$0 - $50</a></li>
            <li><a href="#" className="hover:text-gray-900 transition">$50 - $100</a></li>
            <li><a href="#" className="hover:text-gray-900 transition">$100 - $200</a></li>
            <li><a href="#" className="hover:text-gray-900 transition">$200+</a></li>
          </ul>
        </li>
        <li>
          <a href="#" className="text-gray-700 hover:text-gray-900 transition">
            Ratings
          </a>
          <ul className="mt-2 ml-4 space-y-3 text-gray-600">
            <li><a href="#" className="hover:text-gray-900 transition">★★★★☆ & Up</a></li>
            <li><a href="#" className="hover:text-gray-900 transition">★★★☆☆ & Up</a></li>
            <li><a href="#" className="hover:text-gray-900 transition">★★☆☆☆ & Up</a></li>
          </ul>
        </li>
        <li>
          <a href="#" className="text-gray-700 hover:text-gray-900 transition">
            Shipping Options
          </a>
          <ul className="mt-2 ml-4 space-y-3 text-gray-600">
            <li><a href="#" className="hover:text-gray-900 transition">Free Shipping</a></li>
            <li><a href="#" className="hover:text-gray-900 transition">Expedited</a></li>
            <li><a href="#" className="hover:text-gray-900 transition">International</a></li>
          </ul>
        </li>
        <li>
          <a href="#" className="text-gray-700 hover:text-gray-900 transition">
            Condition
          </a>
          <ul className="mt-2 ml-4 space-y-3 text-gray-600">
            <li><a href="#" className="hover:text-gray-900 transition">New</a></li>
            <li><a href="#" className="hover:text-gray-900 transition">Used</a></li>
            <li><a href="#" className="hover:text-gray-900 transition">Refurbished</a></li>
          </ul>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
