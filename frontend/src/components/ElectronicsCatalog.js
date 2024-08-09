import React from "react";

const dummyProducts = [
  { id: 1, name: "Smartphone X", price: 299 },
  { id: 2, name: "Wireless Headphones", price: 99 },
  { id: 3, name: "4K TV", price: 799 },
  { id: 4, name: "Smartwatch", price: 199 },
  { id: 5, name: "Bluetooth Speaker", price: 149 },
  { id: 6, name: "Laptop Pro", price: 1299 },
  { id: 7, name: "Digital Camera", price: 499 },
  { id: 8, name: "Smart Home Hub", price: 89 }
];

interface Product {
  id: number;
  name: string;
  price: number;
}

interface ElectronicsCatalogProps {
  products?: Product[];
}

const ElectronicsCatalog: React.FC<ElectronicsCatalogProps> = ({ products = dummyProducts }) => {
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-6 rounded-3xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
              <p className="text-gray-500 mt-2 text-lg">${product.price}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No products available</p>
        )}
      </div>
    </div>
  );
};

export default ElectronicsCatalog;
