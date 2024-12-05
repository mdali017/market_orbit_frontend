import React from "react";

const flashSaleProducts = [
  {
    id: "1",
    name: "Wireless Headphones",
    price: 99.99,
    image: "/images/headphones.jpg",
    discount: 20,
  },
  {
    id: "2",
    name: "Smart Watch",
    price: 149.99,
    image: "/images/smartwatch.jpg",
    discount: 25,
  },
  {
    id: "3",
    name: "Gaming Mouse",
    price: 49.99,
    image: "/images/mouse.jpg",
    discount: 15,
  },
  {
    id: "4",
    name: "Bluetooth Speaker",
    price: 79.99,
    image: "/images/speaker.jpg",
    discount: 30,
  },
];

const FlashSaleProductsSection: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">
        All Flash Sale Products
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {flashSaleProducts.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-32 object-cover rounded-md mb-2"
            />
            <h3 className="text-lg font-medium">{product.name}</h3>
            <p className="text-gray-500 line-through">
              ${(product.price / (1 - product.discount / 100)).toFixed(2)}
            </p>
            <p className="text-green-500 font-bold">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-sm text-red-500">{product.discount}% OFF</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlashSaleProductsSection;
