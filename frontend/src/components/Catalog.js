// src/components/Catalog.js
import React, { useState } from "react";
import PropTypes from "prop-types";
import FashionCatalog from "./FashionCatalog";
import ElectronicsCatalog from "./ElectronicsCatalog";

const Catalog = ({ fashionProducts = [], electronicsProducts = [] }) => {
  const [activeCategory, setActiveCategory] = useState("fashion");

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <section className="container mx-auto text-center px-4">
      <h2 className="text-4xl font-bold mb-6 text-gray-900">Featured Products</h2>
      <div className="mb-6">
        <button
          onClick={() => handleCategoryChange("fashion")}
          className={`px-4 py-2 mr-4 rounded ${activeCategory === "fashion" ? "bg-gray-800 text-white" : "bg-gray-200"}`}
        >
          Fashion
        </button>
        <button
          onClick={() => handleCategoryChange("electronics")}
          className={`px-4 py-2 rounded ${activeCategory === "electronics" ? "bg-gray-800 text-white" : "bg-gray-200"}`}
        >
          Electronics
        </button>
      </div>
      {activeCategory === "fashion" ? (
        <FashionCatalog products={fashionProducts} />
      ) : (
        <ElectronicsCatalog products={electronicsProducts} />
      )}
    </section>
  );
};

Catalog.propTypes = {
  fashionProducts: PropTypes.array,
  electronicsProducts: PropTypes.array
};

export default Catalog;
