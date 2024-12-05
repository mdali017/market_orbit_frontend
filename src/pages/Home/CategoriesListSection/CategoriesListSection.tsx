import React from "react";
import { useNavigate } from "react-router-dom";

interface Category {
  id: string;
  name: string;
}

const categories: Category[] = [
  { id: "1", name: "Electronics" },
  { id: "2", name: "Clothing" },
  { id: "3", name: "Home Appliances" },
  { id: "4", name: "Books" },
  { id: "5", name: "Toys" },
];

const CategoriesListSection: React.FC = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/all-products?category=${categoryId}`);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Categories</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoriesListSection;
