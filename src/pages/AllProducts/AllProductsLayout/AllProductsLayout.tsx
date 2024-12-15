import React from "react";
import { Select, Button } from "antd";

const { Option } = Select;

const AllProductsLayout: React.FC = () => {
  const productData = [
    {
      id: 1,
      title: "Product 1",
      image: "https://via.placeholder.com/150",
      description: "Description of Product 1",
      price: 19.99,
      shop: "Shop 1",
      category: "Category 1",
    },
    {
      id: 2,
      title: "Product 2",
      image: "https://via.placeholder.com/150",
      description: "Description of Product 2",
      price: 29.99,
      shop: "Shop 2",
      category: "Category 2",
    },
    {
      id: 3,
      title: "Product 3",
      image: "https://via.placeholder.com/150",
      description: "Description of Product 3",
      price: 39.99,
      shop: "Shop 3",
      category: "Category 3",
    },
    {
      id: 4,
      title: "Product 4",
      image: "https://via.placeholder.com/150",
      description: "Description of Product 4",
      price: 49.99,
      shop: "Shop 4",
      category: "Category 4",
    },
    {
      id: 5,
      title: "Product 5",
      image: "https://via.placeholder.com/150",
      description: "Description of Product 4",
      price: 49.99,
      shop: "Shop 5",
      category: "Category 5",
    },
    {
      id: 6,
      title: "Product 6",
      image: "https://via.placeholder.com/150",
      description: "Description of Product 4",
      price: 49.99,
      shop: "Shop 5",
      category: "Category 6",
    },
    {
      id: 7,
      title: "Product 7",
      image: "https://via.placeholder.com/150",
      description: "Description of Product 4",
      price: 49.99,
      shop: "Shop 7",
      category: "Category 7",
    },
  ];

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      {/* Top Section */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-800">
          Showing 1-4 of results
        </h3>

        <div className="flex items-center space-x-2">
          <h4 className="text-md text-gray-600 font-medium">Sort By:</h4>
          <Select
            defaultValue="default"
            className="w-40"
            onChange={(value) => console.log("Sort by:", value)}
          >
            <Option value="default">Default</Option>
            <Option value="priceLowToHigh">Price: Low to High</Option>
            <Option value="priceHighToLow">Price: High to Low</Option>
            <Option value="popularity">Popularity</Option>
          </Select>
        </div>
      </div>

      {/* Products Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {productData.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-4"
          >
            {/* Product Image */}
            <div className="relative w-full h-40 mb-4">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover rounded-md"
              />
            </div>

            {/* Product Details */}
            <h4 className="text-lg font-bold text-gray-800 mb-2">
              {product.title}
            </h4>
            <p className="text-gray-600 text-sm mb-2">{product.description}</p>
            <p className="text-blue-600 font-semibold text-md mb-4">
              ${product.price.toFixed(2)}
            </p>

            {/* Buttons */}
            <div className="flex justify-between space-x-2">
              <Button
                type="primary"
                className="w-full"
                onClick={() => console.log("Add to Cart:", product.id)}
              >
                Add to Cart
              </Button>
              <Button
                type="default"
                className="w-full"
                onClick={() => console.log("Buy Now:", product.id)}
              >
                Buy Now
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProductsLayout;
