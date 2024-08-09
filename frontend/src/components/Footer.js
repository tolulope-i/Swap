import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-gray-100 py-12 text-center text-sm text-gray-600">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center mb-8">
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <h5 className="uppercase text-gray-800 font-bold mb-2">About Us</h5>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-900">Our Story</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-900">Mission and Values</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-900">Meet the Team</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <h5 className="uppercase text-gray-800 font-bold mb-2">Support</h5>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-900">Help Center</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-900">Contact Us</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-900">FAQs</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <h5 className="uppercase text-gray-800 font-bold mb-2">Marketplace</h5>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-900">Product Categories</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-900">Seller Directory</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-900">Affiliate Program</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <h5 className="uppercase text-gray-800 font-bold mb-2">Follow Us</h5>
            <div className="flex justify-center space-x-4 mb-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <FaPinterest size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} My Online Marketplace. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
