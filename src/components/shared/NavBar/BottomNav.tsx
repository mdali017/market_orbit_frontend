import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BottomNavigation = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();

  const menuItems = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "Shop", url: "/" },
    { id: 3, name: "All Products", url: "/all-products", isHighlighted: false },
    { id: 4, name: "Be A Seller", url: "/auth/signup" },
    { id: 5, name: "About", url: "/" },
    {
      id: 6,
      name: "Contact",
      url: "#",
      hasDropdown: false,
      subMenu: [
        { id: 1, name: "Sports", url: "/sports" },
        { id: 2, name: "Accessories", url: "/accessories" },
        { id: 3, name: "Collectible Figures", url: "/collectible-figures" },
        { id: 4, name: "Delivery & Event Schedules", url: "/delivery-events" },
      ],
    },
  ];

  const handleDropdownToggle = (itemId: any) => {
    setActiveDropdown(activeDropdown === itemId ? null : itemId);
  };

  const handleSubMenuClick = (url: any) => {
    navigate(url);
  };

  return (
    <div className="bg-black text-white py-4 relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        <div className="flex space-x-6">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="relative"
              onMouseEnter={() =>
                item.hasDropdown && handleDropdownToggle(item.id)
              }
              onMouseLeave={() =>
                item.hasDropdown && handleDropdownToggle(null)
              }
            >
              <a
                href={item.url}
                onClick={
                  item.hasDropdown ? (e) => e.preventDefault() : undefined
                }
                className={`hover:text-yellow-400 flex items-center space-x-1 ${
                  item.isHighlighted ? "font-bold text-yellow-400" : ""
                }`}
              >
                <span>{item.name}</span>
                {item.hasDropdown && (
                  <button
                    className="focus:outline-none"
                    aria-label={`Toggle ${item.name} submenu`}
                    onClick={() => handleDropdownToggle(item.id)}
                  >
                    <FaChevronDown
                      className={`text-sm transition-transform duration-300 ${
                        activeDropdown === item.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                )}
              </a>
              {item.hasDropdown && activeDropdown === item.id && (
                <div className="absolute bg-black p-4 rounded-md w-48 z-10 mt-2 shadow-lg border border-gray-700">
                  {item.subMenu.map((subItem) => (
                    <a
                      key={subItem.id}
                      href={subItem.url}
                      className="block hover:text-yellow-400 mb-2 last:mb-0"
                      onClick={(e) => {
                        e.preventDefault();
                        handleSubMenuClick(subItem.url);
                      }}
                    >
                      {subItem.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-full shadow-md transition-all">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default BottomNavigation;
