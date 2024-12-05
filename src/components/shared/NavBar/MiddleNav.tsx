import { Button, Input, Badge } from "antd";
import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";

const MiddleNav = () => {
  return (
    <div className="bg-gradient-to-r bg-slate-400 text-white shadow-lg py-5">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 space-y-4 md:space-y-0">
        {/* Logo Section */}
        <div className="text-3xl font-bold tracking-wide hover:text-gray-300 transition-colors">
          <h1>MyShop</h1>
        </div>

        <div className="relative w-full md:w-1/2 flex items-center">
          {/* Input Field */}
          <Input
            placeholder="Search for products, categories..."
            className="rounded-full pl-12 pr-20 py-3 bg-white text-gray-700 shadow-md focus:ring-2 focus:ring-blue-300 transition-all"
            prefix={null}
          />

          {/* Search Icon (Prefix) */}
          <FaSearch className="absolute left-4 text-gray-400 text-xl" />

          {/* Search Button */}
          <Button
            type="primary"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-md transition-all"
          >
            Search
          </Button>
        </div>

        {/* Action Section */}
        <div className="flex items-center space-x-8">
          {/* Sign In */}
          <div className="flex items-center space-x-2 cursor-pointer hover:text-gray-300 transition-colors">
            <FaUser className="text-2xl" />
            <span className="font-medium text-lg">Sign In</span>
          </div>

          {/* Cart */}
          <div className="flex items-center space-x-2 cursor-pointer hover:text-gray-300 transition-colors">
            <Badge
              count={3}
              size="small"
              offset={[-5, 5]}
              style={{ backgroundColor: "#ff4d4f" }}
            >
              <FaShoppingCart className="text-2xl" />
            </Badge>
            <span className="font-medium text-lg">Cart</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleNav;
