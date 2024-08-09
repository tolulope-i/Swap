import React from "react";
import PropTypes from "prop-types";

const ElectronicsCatalog = ({ products = [] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-gray-800">{product.name}</h3>
            <p className="text-gray-500 mt-4">${product.price}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No products available</p>
      )}
    </div>
  );
};

ElectronicsCatalog.propTypes = {
  products: PropTypes.array
};

export default ElectronicsCatalog;
