import React from "react";
import { Input, Slider, Select, Button } from "antd";

const { Search } = Input;
const { Option } = Select;

const AllProductsSideBar: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md space-y-6">
      <h1 className="text-xl font-bold text-gray-800">All Products Sidebar</h1>

      {/* Search Bar */}
      <Search
        placeholder="Search products..."
        enterButton="Search"
        size="large"
        className="w-full"
        onSearch={(value) => console.log("Search:", value)}
      />

      {/* Category Filter */}
      <div>
        <label className="block text-gray-700 font-semibold mb-2">
          Category
        </label>
        <Select
          placeholder="Select a category"
          className="w-full"
          onChange={(value) => console.log("Category:", value)}
        >
          <Option value="electronics">Electronics</Option>
          <Option value="fashion">Fashion</Option>
          <Option value="home-appliances">Home Appliances</Option>
          <Option value="books">Books</Option>
        </Select>
      </div>

      {/* Price Range Filter */}
      <div>
        <label className="block text-gray-700 font-semibold mb-2">
          Price Range
        </label>
        <Slider
          range
          defaultValue={[20, 80]}
          min={0}
          max={100}
          onChange={(value) => console.log("Price Range:", value)}
        />
        <div className="flex justify-between text-gray-600">
          <span>$0</span>
          <span>$100</span>
        </div>
      </div>

      {/* Filter Button */}
      <Button
        type="primary"
        block
        size="large"
        className="mt-4"
        onClick={() => console.log("Filter applied")}
      >
        Apply Filters
      </Button>
    </div>
  );
};

export default AllProductsSideBar;
