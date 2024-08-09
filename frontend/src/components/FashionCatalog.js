import React, { useState } from "react";

const dummyProducts = [
  { id: 1, name: "Leather Jacket", price: 149 },
  { id: 2, name: "Summer Dress", price: 89 },
  { id: 3, name: "Sneakers", price: 120 },
  { id: 4, name: "Wool Scarf", price: 39 },
  { id: 5, name: "Denim Jeans", price: 79 },
  { id: 6, name: "Sunglasses", price: 65 },
  { id: 7, name: "Formal Shirt", price: 55 },
  { id: 8, name: "Boots", price: 159 }
];

interface Product {
  id: number;
  name: string;
  price: number;
}

const FashionCatalog = () => {
  const [products, setProducts] = useState(dummyProducts);

  return (
    <div className="max-w-7xl mx-auto p-4">
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
    </div>
  );
};

export default FashionCatalog;