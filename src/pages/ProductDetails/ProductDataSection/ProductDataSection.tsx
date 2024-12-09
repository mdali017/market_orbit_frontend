import { Link, useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../../redux/api/api";

const ProductDetaSection: React.FC = () => {
  const { id } = useParams();
  const { data: product1 } = useGetSingleProductQuery(id);

  const product = product1?.data;

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto p-6">
      {/* Breadcrumb */}
      <nav className="text-sm mb-4">
        <a href="/" className="text-blue-500">
          Home
        </a>{" "}
        &gt;{" "}
        <a href={`/category/${product.categoryId}`} className="text-blue-500">
          {product.category.name}
        </a>{" "}
        &gt; <span>{product.name}</span>
      </nav>

      {/* Main Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 place-content-center gap-8">
        {/* Product Images */}
        <div>
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <p className="text-xl text-green-600 font-semibold">
            ${product.price}
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Inventory Count: {product.inventoryCount}
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Discount: {product.discounts}%
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Rating: {product.ratings} ⭐
          </p>
          <p className="text-gray-700 mb-6">
            Product Details: Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Ipsam sunt natus pariatur dolor ducimus saepe at. Quod placeat
            molestias molestiae neque dignissimos soluta, excepturi aut, dolorem
            magnam eaque fugiat porro.
          </p>
          <p className="text-gray-700 mb-4">
            Stock Status:{" "}
            <span className="font-semibold">
              {product.inventoryCount > 0 ? (
                <span className="text-green-500">In Stock</span>
              ) : (
                <span className="text-red-500">Out of Stock</span>
              )}
            </span>
          </p>
          <h2 className="text-lg font-bold mb-2">
            Category: {product.category.name}
          </h2>
          <div className="flex space-x-2 mb-6">
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
              Add to Cart
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
              Buy Now
            </button>
          </div>

          {/* Shop Info */}
          <div className="border-t pt-4">
            <h2 className="text-lg font-bold">Shop Information</h2>
            <div className="flex items-center mt-2">
              <img
                src={product.shop.logo}
                alt={product.shop.name}
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <Link to={`/shop/${product.shop.id}`}>
                  <p className="text-sm font-semibold hover:underline">
                    {product.shop.name}
                  </p>
                </Link>
                <p className="text-gray-500 text-sm">
                  {product.shop.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetaSection;
