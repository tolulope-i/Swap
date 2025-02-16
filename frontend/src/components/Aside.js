import React from "react";
import { FaLaptop, FaTshirt, FaHome, FaBook, FaDollarSign, FaStar, FaShippingFast, FaTags } from "react-icons/fa";

const navItems = [
  { icon: <FaLaptop />, label: "Electronics" },
  { icon: <FaTshirt />, label: "Fashion" },
  { icon: <FaHome />, label: "Home Goods" },
];

const Aside = () => {
  return (
    <nav className="w-full bg-white shadow-md p-4">
      <ul className="flex justify-around space-x-4">
        {navItems.map((item, index) => (
          <li key={index} className="flex flex-col items-center text-gray-700 hover:text-gray-900 transition">
            <a href="#" className="text-lg mb-2">
              {item.icon}
            </a>
            <span className="text-sm">{item.label}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Aside;