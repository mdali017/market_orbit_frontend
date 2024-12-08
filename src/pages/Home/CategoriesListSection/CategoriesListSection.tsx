import React from "react";
import { useNavigate } from "react-router-dom";
import { useGetAllProductCategoriesQuery } from "../../../redux/api/api";

const CategoriesListSection: React.FC = () => {
  const navigate = useNavigate();
  const {
    data: allCategories,
    isLoading,
    error,
  } = useGetAllProductCategoriesQuery(undefined);

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/all-products?category=${categoryId}`);
  };

  if (isLoading) {
    return (
      <div className="p-4 flex justify-center items-center">
        <div className="loader" />
        <style>{`
          .loader {
            border: 4px solid #f3f3f3;
            border-top: 4px solid #3498db;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  if (error || !allCategories?.data?.length) {
    return (
      <div className="p-4 text-center">
        <h2 className="text-lg font-semibold text-gray-600">
          No categories available.
        </h2>
      </div>
    );
  }

  return (
    <div className="p-4 bg-gradient-to-b from-blue-50 to-blue-100">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Explore Our Categories
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {allCategories.data.map((category: any, index: number) => (
          <div
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className="cursor-pointer relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition duration-300"
          >
            {/* Background Image */}
            <div
              className="h-40 bg-cover bg-center"
              style={{
                backgroundImage: `url(https://source.unsplash.com/400x300/?category,${index})`,
              }}
            ></div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

            {/* Content */}
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-gray-800">
                {category.name}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                {category.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesListSection;
