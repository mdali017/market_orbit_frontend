import { Breadcrumb } from "antd";
import React from "react";

const AllProductsTopSection: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">All Products</h1>
      <Breadcrumb className="inline-block">
        <Breadcrumb.Item className="text-gray-600 hover:text-blue-500">
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item className="text-gray-600 hover:text-blue-500">
          All Products
        </Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};

export default AllProductsTopSection;
